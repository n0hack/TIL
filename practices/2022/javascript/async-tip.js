function renderProduct(product) {
  const resultElem = document.querySelector('#result');
  resultElem.replaceChildren();
  resultElem.insertAdjacentHTML(
    'beforeend',
    `
    <p>${product.title}</p>
    <p>${product.price}</p>
    <p>${product.description}</p>
    <p><img src="${product.images[0]}" style="width: 300px" /></p>
  `
  );
}
document.querySelector('#selector')?.addEventListener('change', handleChange);

// main
// 중간 과정에서는 async/await이 없어도 괜찮다.
// 간단하게 then으로 처리할 수 있는 경우에도 없앨 수 있다.
// 비동기 처리의 불편함을 해소하기 위해 등장한 문법이므로 최소 한 번은 쓰는 것이 편함
// 물론 여러 번 써도 상관 없으나, async 함수의 리턴은 프로미스로 감싸지는 것을 기억하자.
const fetchJson = (url) => fetch(url).then((res) => res.json());
const fetchProduct = (id) =>
  fetchJson(`https://api.escuelajs.co/api/v1/products/${id}`);

function getProduct(id) {
  // handleChange에서 Promise를 await하므로 문제 X
  const json = fetchProduct(id);
  return json;
}

async function handleChange(e) {
  const id = e.target.value;
  const product = await getProduct(id);
  renderProduct(product);
}
