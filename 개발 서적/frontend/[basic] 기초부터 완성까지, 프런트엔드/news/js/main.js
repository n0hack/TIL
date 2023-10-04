/**
 * 로딩 스피너 생성 함수
 * @param {HTMLElement} parent
 */
function createSpinner(parent) {
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  const imageEl = document.createElement('img');
  imageEl.alt = 'spinner';
  imageEl.src = './img/spinner.gif';

  spinnerAreaEl.appendChild(imageEl);
}

/**
 * 로딩 스피너 제거 함수
 * @param {HTMLElement} parent
 */
function hideSpinner(parent) {
  /** @type {HTMLDivElement | null} */
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  spinnerAreaEl.style.display = 'none';
}

function createTopNewsElement(article) {
  const { title, summary, link, thumbnailImage } = article;

  const anchor = document.createElement('a');
  anchor.href = link;
  anchor.innerHTML = `
    <article class="news">
      <div class="information">
        <h3 class="title">${title}</h3>
        <p class="description">${summary}</p>
      </div>
      <div class="thumbnail-area">
        <img src="${thumbnailImage}" class="thumbnail" alt="thumbnail" />
      </div>
    </article>
  `;

  return anchor;
}

function createLatestNewsElement(article) {
  const { title, link } = article;

  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.href = link;
  anchor.textContent = title;

  listItem.className = 'latest-news-item';
  listItem.append(anchor);

  return listItem;
}

function renderTopNews() {
  const articleSection = document.getElementById('topNewsList');

  createSpinner(articleSection);

  setTimeout(() => {
    fetch('./data/top.json')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) => createTopNewsElement(article));
        articleSection.append(...articleList);
      })
      .finally(() => hideSpinner(articleSection));
  }, 1500);
}

function renderLatestNews() {
  const latestNewsList = document.querySelector('.latest-news-list');

  createSpinner(latestNewsList);

  setTimeout(() => {
    fetch('./data/latest.json')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) => createLatestNewsElement(article));
        latestNewsList.append(...articleList);
      })
      .finally(() => hideSpinner(latestNewsList));
  }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTopNews();
  renderLatestNews();
});
