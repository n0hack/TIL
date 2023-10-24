// 공유되는 자원이라는 의미로 store라는 변수명 사용
const store = {
  currentPage: 1,
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

async function newsFeed() {
  const NEWS_URL = `https://api.hnpwa.com/v0/news/${store.currentPage}.json`;
  const newsFeed = await getData(NEWS_URL);
  const newsList = [];

  newsList.push('<ul>');

  for (const feed of newsFeed) {
    // DOM 구조가 잘 보이지 않는 것을, DOM API가 아닌, 문자열만 사용해 만듦으로써 보여줌
    // 의외로 createElement 등으로 관계를 만들어가는 것보다 구조에 대한 가독성이 좋음
    newsList.push(`
      <li>
        <a href="#/show/${feed.id}">
          ${feed.title} (${feed.comments_count})
        </a>
      </li>
    `);
  }

  newsList.push('</ul>');
  // 방어 코드 작성 (1보다 작은 페이지로 이동하려 할 때)
  newsList.push(`
    <div>
      <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
      <a href="#/page/${store.currentPage >= 10 ? 10 : store.currentPage + 1}">다음 페이지</a>
    </div>
  `);

  container.innerHTML = newsList.join('');
}

async function newsDetail() {
  const id = location.hash.match(/\d+/g)[0];
  const newsContent = await getData(CONTENT_URL.replace('@id', id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
  `;
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
