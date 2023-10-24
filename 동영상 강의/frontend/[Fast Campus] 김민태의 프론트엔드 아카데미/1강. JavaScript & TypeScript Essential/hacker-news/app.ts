type Store = {
  currentPage: number;
  feeds: NewsFeed[];
};

type News = {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
};

type NewsFeed = News & {
  comments_count: number;
  points: number;
  read?: boolean;
};

type NewsDetail = News & {
  comments: NewsComment[];
};

type NewsComment = News & {
  comments: NewsComment[];
  level: number;
};

// 공유되는 자원이라는 의미로 store라는 변수명 사용
const store: Store = {
  currentPage: 1,
  feeds: [],
};

// Mocking할 때, @id 같은 값을 사용하면, 이후 사용할 때 변경하기 편함
const NEWS_URL = `https://api.hnpwa.com/v0/news/${store.currentPage}.json`;
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// Elements
const container = document.getElementById('root');
const content = document.createElement('div');

// 믹스인 (상속이 아닌 방법으로 기능을 추가하는 것)
// 믹스인 고려사항 1. 상속은 관계를 바꾸고 싶은 경우, 코드 베이스 자체를 바꿔야 함
// 믹스인 고려사항 2. ts의 class는 다중 상속을 지원하지 않기 때문
function applyApiMixins(targetClass: any, baseClasses: any[]) {
  baseClasses.forEach((baseClass) => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name);

      if (descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }
    });
  });
}

// 중복 코드를 제거했지만, 코드 베이스가 커지는 경우가 있음
// 하는 일 자체가 적은 코드가 구조를 갖게 되기 때문 -> 코드가 커져도, 구조가 유지되는 장점이 있음
class Api {
  async getRequest<T>(url: string): Promise<T> {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
}

class NewsFeedApi {
  async getData() {
    return this.getRequest<NewsFeed[]>(NEWS_URL);
  }
}

class NewsDetailApi {
  async getData(id: string) {
    return this.getRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
  }
}

// 믹스인은 타입 추적을 하지 못하기 때문에, interface를 사용해야 함
// extends만으로는 충분하지 않고, 유연성이 필요한 코드의 경우 믹스인 사용
interface NewsFeedApi extends Api {}
interface NewsDetailApi extends Api {}

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]);

function makeFeeds(feeds: NewsFeed[]) {
  for (let i = 0; i < feeds.length; i++) {
    feeds[i].read = false;
  }
  return feeds;
}

// 타입 가드
function updateView(html: string) {
  if (container) {
    container.innerHTML = html;
  } else {
    console.error('최상위 컨테이너가 없어 UI 렌더링을 진행하지 못합니다.');
  }
}

async function newsFeed() {
  const api = new NewsFeedApi();
  let newsFeed = store.feeds;
  const newsList = [];

  if (newsFeed.length === 0) {
    newsFeed = store.feeds = makeFeeds(await api.getData());
  }

  // 임의의 템플릿 생성 (템플릿 변수는 마음대로 작명)
  // 로직과 UI를 분리하면, 코드가 명확해지고, 유지보수가 쉬워짐
  let template = `
    <div class="bg-gray-600 min-h-screen">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                Previous
              </a>
              <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                Next
              </a>
            </div>
          </div> 
        </div>
      </div>
      <div class="p-4 text-2xl text-gray-700">
        {{__news_feed__}}        
      </div>
    </div>
  `;

  for (const feed of newsFeed) {
    // DOM 구조가 잘 보이지 않는 것을, DOM API가 아닌, 문자열만 사용해 만듦으로써 보여줌
    // 의외로 createElement 등으로 관계를 만들어가는 것보다 구조에 대한 가독성이 좋음
    newsList.push(`
      <div class="p-6 ${
        feed.read ? 'bg-red-500' : 'bg-white'
      } mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
        <div class="flex">
          <div class="flex-auto">
            <a href="#/show/${feed.id}">${feed.title}</a>  
          </div>
          <div class="text-center text-sm">
            <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${feed.comments_count}</div>
          </div>
        </div>
        <div class="flex mt-3">
          <div class="grid grid-cols-3 text-sm text-gray-500">
            <div><i class="fas fa-user mr-1"></i>${feed.user}</div>
            <div><i class="fas fa-heart mr-1"></i>${feed.points}</div>
            <div><i class="far fa-clock mr-1"></i>${feed.time_ago}</div>
          </div>  
        </div>
      </div> 
    `);
  }

  // 템플릿에 삽입을 위한 구간이 많으면, replace를 많이 사용하게 됨 (단점)
  template = template.replace('{{__news_feed__}}', newsList.join(''));
  // 방어 코드 작성 (1보다 작은 페이지로 이동하려 할 때)
  template = template.replace('{{__prev_page__}}', `${store.currentPage > 1 ? store.currentPage - 1 : 1}`);
  template = template.replace('{{__next_page__}}', `${store.currentPage >= 10 ? 10 : store.currentPage + 1}`);

  updateView(template);
}

async function newsDetail() {
  const id = location.hash.match(/\d+/g)?.[0] ?? '';
  const api = new NewsDetailApi();
  const newsContent = await api.getData(id);
  let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/${store.currentPage}" class="text-gray-500">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="h-full border rounded-xl bg-white m-6 p-4 ">
        <h2>${newsContent.title}</h2>
        <div class="text-gray-400 h-20">
          ${newsContent.content}
        </div>

        {{__comments__}}

      </div>
    </div>
  `;

  for (let i = 0; i < store.feeds.length; i++) {
    if (store.feeds[i].id === Number(id)) {
      store.feeds[i].read = true;
      break;
    }
  }

  // 댓글에 대한 재귀 호출
  function makeComment(comments: NewsComment[], called = 0) {
    const commentString: string[] = [];

    for (let i = 0; i < comments.length; i++) {
      commentString.push(`
        <div style="padding-left: ${called * 40}px;" class="mt-4">
          <div class="text-gray-400">
            <i class="fa fa-sort-up mr-2"></i>
            <strong>${comments[i].user}</strong> ${comments[i].time_ago}
          </div>
          <p class="text-gray-700">${comments[i].content}</p>
        </div>
      `);

      if (comments[i].comments.length > 0) {
        commentString.push(makeComment(comments[i].comments, called + 1));
      }
    }

    return commentString.join('');
  }

  template = template.replace('{{__comments__}}', makeComment(newsContent.comments));
  updateView(template);
}

function router() {
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
  } else if (routePath.indexOf('#/page/') >= 0) {
    store.currentPage = Number(routePath.match(/\d+/g)?.[0]);
    newsFeed();
  } else {
    newsDetail();
  }
}

// #(해시)가 변경되었을 때, 발생하는 이벤트 (id가 있는 요소로 이동했을 때)
window.addEventListener('hashchange', router);

router();
