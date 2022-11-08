// 필요한 변수 선언 & 함수 정의
const makeSpinner = () => {
  const spinner = document.createElement('div');
  const spinnerImage = document.createElement('img');
  spinner.classList.add('loading');
  spinnerImage.setAttribute('src', 'images/spinner.gif');
  spinnerImage.classList.add('spinner');
  spinner.appendChild(spinnerImage);
  return spinner;
};

const makeSkeleton = () => {
  const skeleton = document.createElement('li');
  const skeletonImage = document.createElement('div');
  const skeletonText = document.createElement('p');
  skeleton.classList.add('skeleton');
  skeletonImage.classList.add('skeleton__image');
  skeletonText.classList.add('skeleton__text');
  skeletonText.textContent = ' ';
  skeleton.appendChild(skeletonImage);
  skeleton.appendChild(skeletonText);
  return skeleton;
};

const list = document.querySelector('.card-list');
const items = document.querySelectorAll('.card');
const skeletonItems = Array.from({ length: items.length }, () =>
  makeSkeleton()
);
const spinner = makeSpinner();

// 로딩 기능 구현 (스켈레톤 & 스피너)
const addSkeleton = () => {
  skeletonItems.forEach((item) => list.appendChild(item));
};

const removeSkeleton = () => {
  skeletonItems.forEach((item) => list.removeChild(item));
};

const loadingStart = () => {
  addSkeleton();
  list.appendChild(spinner);
};

const loadingFinish = () => {
  removeSkeleton();
  list.removeChild(spinner);
};

const addNewContent = () => {
  items.forEach((item) => list.appendChild(item.cloneNode(true)));
};

// Intersection Observer 연결
const ioCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      loadingStart();
      setTimeout(() => {
        addNewContent();
        loadingFinish();
        observeLastItem(io, document.querySelectorAll('.card'));
      }, 2000);
    }
  });
};

const observeLastItem = (io, items) => {
  const lastItem = items[items.length - 1];
  io.observe(lastItem);
};

const io = new IntersectionObserver(ioCallback, { threshold: 0.7 });
observeLastItem(io, items);
