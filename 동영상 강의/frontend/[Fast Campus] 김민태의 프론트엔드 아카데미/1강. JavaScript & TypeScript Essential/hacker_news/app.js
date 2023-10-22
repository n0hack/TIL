const container = document.getElementById('root');

const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
// Mocking할 때, @id 같은 값을 사용하면, 이후 사용할 때 변경하기 편함
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

// #(해시)가 변경되었을 때, 발생하는 이벤트 (id가 있는 요소로 이동했을 때)
window.addEventListener('hashchange', (e) => {
  const id = location.hash.slice(1);

  fetch(`${CONTENT_URL.replace('@id', id)}`)
    .then((res) => res.json())
    .then((newsContent) => {
      const title = document.createElement('h1');

      title.textContent = newsContent.title;
      content.append(title);
    });
});

for (let i = 0; i < newsFeed.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  li.append(a);
  ul.append(li);
}

container.append(ul);
container.append(content);
