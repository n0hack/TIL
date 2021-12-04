const list = document.querySelector('.slider__list');
const items = document.querySelectorAll('.slider__item');
const buttons = document.querySelector('.slider__buttons');
let dist = items[0].clientWidth;

let slideIndex = 0;
let clone;
let resizeTimer = null;

function slide() {
  if (slideIndex <= items.length) {
    if (slideIndex === 0) list.style.transition = '1s ease-in-out';

    // 버튼 조정
    [...buttons.children].forEach((button) => {
      button.classList.remove('slider__button--active');
    });
    buttons.children[slideIndex % items.length].classList.add('slider__button--active');

    slideIndex = slideIndex + 1;
    if (slideIndex === items.length) {
      if (!list.lastElementChild.classList.contains('clone-last')) {
        clone = items[0].cloneNode(true);
        clone.classList.add('clone-last');
        list.appendChild(clone);
      }
    }
    list.style.transform = `translateX(-${dist * (slideIndex - 1)}px)`;
  } else {
    clearInterval(slideInterval);
    slideIndex = 0;
    list.style.transition = '';
    list.style.transform = 'translateX(0px)';
    if (list.lastElementChild.classList.contains('clone-last')) list.removeChild(clone);
    setTimeout(() => {
      slideInterval = setInterval(slide, 1000);
    }, 1000);
  }
}
let slideInterval = setInterval(slide, 1000);

let oldWidth = window.innerWidth;
// Resize

// Click
buttons.addEventListener('click', (e) => {
  if (list.lastElementChild.classList.contains('clone-last')) list.removeChild(clone);

  let index = e.target.dataset.index;
  if (index) {
    clearInterval(slideInterval);
    [...buttons.children].forEach((button) => {
      button.classList.remove('slider__button--active');
    });
    slideIndex = index;
    buttons.children[index].classList.add('slider__button--active');
    list.style.transform = `translateX(-${dist * index}px)`;
    setTimeout(() => {
      slideInterval = setInterval(slide, 1000);
    }, 1000);
  }
});
