import { createSpinner, hideSpinner } from './spinner.js';

function createTopNewsElement(article) {
  const { title, summary, link, thumbnailImage } = article;

  const anchor = document.createElement('a');
  anchor.setAttribute('href', link);
  anchor.innerHTML = `
    <article class="news">
      <div class="information">
        <h3 class="title">${title}</h3>
        <p class="description">${summary}</p>
      </div>
      <div class="thumbnail-area">
        <img src="${thumbnailImage}" alt="thumbnail" class="thumbnail" />
      </div>
    </article>
  `;
  return anchor;
}

function renderTopNews() {
  const aritcleSection = document.getElementById('topNewsList');
  createSpinner(aritcleSection);

  setTimeout(() => {
    fetch('./data/top.json')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) =>
          createTopNewsElement(article)
        );
        aritcleSection.append(...articleList);
      })
      .finally(() => hideSpinner(aritcleSection));
  }, 1500);
}

function createLatestNewsElement(article) {
  const { title, link } = article;

  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.setAttribute('href', link);
  anchor.textContent = title;

  listItem.className = 'latest-news-item';
  listItem.append(anchor);

  return listItem;
}

function renderLatestNews() {
  const aritcleSection = document.querySelector('.latest-news-list');
  createSpinner(aritcleSection);

  setTimeout(() => {
    fetch('./data/latest.json')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) =>
          createLatestNewsElement(article)
        );
        aritcleSection.append(...articleList);
      })
      .finally(() => hideSpinner(aritcleSection));
  }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTopNews();
  renderLatestNews();
});
