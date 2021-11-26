// const slickArea = document.querySelector('.slick-area');
// const slickButtons = document.querySelector('.slick-buttons');
// let slickTimer = null;

// slickButtons.addEventListener('click', (e) => {
//   const index = Number(e.target.dataset.slide);
//   const buttons = [...slickButtons.children];

//   if (Number.isNaN(index)) return;

//   // 버튼 선택
//   buttons.forEach((button) => {
//     button.classList.remove('slick-button--selected');
//   });
//   buttons[index].classList.add('slick-button--selected');

//   // 스타일 설정
//   slickArea.style.transition = `transform .5s ease`;

//   // 슬라이드 이동
//   slickArea.style.transform = `translateX(-${slickArea.clientWidth * index}px)`;
// });

// function slickInterval() {
//   const buttons = [...slickButtons.children];
//   let index =
//     Number(
//       buttons.filter((button) =>
//         button.classList.contains('slick-button--selected')
//       )[0].dataset.slide
//     ) + 1;

//   if (index >= buttons.length) {
//     slickArea.style.transform = `translateX(-${
//       slickArea.clientWidth * index
//     }px)`;
//     index = 0;
//     clearInterval(slickTimer);
//     setTimeout(() => {
//       slickArea.style.transition = `transform 0s ease`;
//       slickArea.style.transform = `translateX(${0}px)`;
//       slickTimer = setInterval(slickInterval, 1000);
//     }, 1000);
//   } else {
//     slickArea.style.transition = `transform 1s ease`;
//     slickArea.style.transform = `translateX(-${
//       slickArea.clientWidth * index
//     }px)`;
//   }

//   buttons.forEach((button) => {
//     button.classList.remove('slick-button--selected');
//   });
//   buttons[index].classList.add('slick-button--selected');
// }

// slickTimer = setInterval(slickInterval, 1000);

// slickArea.appendChild(slickArea.children[0].cloneNode(true));

// window.addEventListener('resize', () => {
//   // 현재 선택된 번호에 맞게 슬라이드 포지션 재조정
//   const buttons = [...slickButtons.children];
//   const index = buttons.filter((button) =>
//     button.classList.contains('slick-button--selected')
//   )[0].dataset.slide;
//   slickArea.style.transition = `transform 0s ease`;
//   slickArea.style.transform = `translateX(-${slickArea.clientWidth * index}px)`;
// });

$('.slider').slick({
  infinity: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});
