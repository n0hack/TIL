// 공유되는 자원이라는 의미로 store라는 변수명 사용
const store = {
  currentPage: 1,
  feeds: [],
};

// Mocking할 때, @id 같은 값을 사용하면, 이후 사용할 때 변경하기 편함
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// Elements
const container = document.getElementById('root');
const content = document.createElement('div');

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function makeFeeds(feeds) {
  for (let i = 0; i < feeds.length; i++) {
    feeds[i].read = false;
  }
  return feeds;
}

async function newsFeed() {
  const NEWS_URL = `https://api.hnpwa.com/v0/news/${store.currentPage}.json`;
  let newsFeed = store.feeds;
  const newsList = [];

  if (newsFeed.length === 0) {
    newsFeed = store.feeds = makeFeeds(await getData(NEWS_URL));
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
  template = template.replace('{{__prev_page__}}', store.currentPage > 1 ? store.currentPage - 1 : 1);
  template = template.replace('{{__next_page__}}', store.currentPage >= 10 ? 10 : store.currentPage + 1);
  container.innerHTML = template;
}

async function newsDetail() {
  const id = location.hash.match(/\d+/g)[0];
  const newsContent = await getData(CONTENT_URL.replace('@id', id));
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
  function makeComment(comments, called = 0) {
    const commentString = [];

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

  container.innerHTML = template.replace('{{__comments__}}', makeComment(newsContent.comments));
}

function router() {
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
  } else if (routePath.indexOf('#/page/') >= 0) {
    store.currentPage = Number(routePath.match(/\d+/g)[0]);
    newsFeed();
  } else {
    newsDetail();
  }
}

// #(해시)가 변경되었을 때, 발생하는 이벤트 (id가 있는 요소로 이동했을 때)
window.addEventListener('hashchange', router);

router();
