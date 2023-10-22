const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
// Mocking할 때, @id 같은 값을 사용하면, 이후 사용할 때 변경하기 편함
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const container = document.getElementById('root');
const ul = document.createElement('ul');
const content = document.createElement('div');

getData(NEWS_URL).then((newsFeed) => {
  for (let i = 0; i < newsFeed.length; i++) {
    // DOM 구조가 잘 보이지 않는 것을, DOM API가 아닌, 문자열만 사용해 만듦으로써 보여줌
    const div = document.createElement('div');

    div.innerHTML = `
      <li>
        <a href="#${newsFeed[i].id}">
          ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `;

    // ul.append(div.children[0]);
    ul.append(div.firstElementChild);
  }
});

// #(해시)가 변경되었을 때, 발생하는 이벤트 (id가 있는 요소로 이동했을 때)
window.addEventListener('hashchange', () => {
  const id = location.hash.slice(1);

  fetch(`${CONTENT_URL.replace('@id', id)}`)
    .then((res) => res.json())
    .then((newsContent) => {
      const title = document.createElement('h1');

      title.textContent = newsContent.title;
      content.append(title);
    });
});

container.append(ul);
container.append(content);
