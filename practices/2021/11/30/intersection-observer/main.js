console.clear();

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', (event) => {
  boxes.forEach((box) => {
    const { top } = box.getBoundingClientRect();

    if (0 <= top && top <= window.innerHeight) {
      box.classList.add('almond');
    } else {
      box.classList.remove('almond');
    }
  });
});

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) entry.target.classList.add('almond');
//     else entry.target.classList.remove('almond');
//   });
// };

// const io = new IntersectionObserver(callback);

// const boxes = document.querySelectorAll('.box');
// boxes.forEach((box) => io.observe(box));

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       console.log(entry.boundingClientRect);

//       if (entry.boundingClientRect.y < 0) console.log('올라가는 중');
//       else if (entry.boundingClientRect.y > 0) console.log('내려가는 중');
//     }
//   });
// };

// const sections = document.querySelectorAll('section');
// const io = new IntersectionObserver(callback, { threshold: 0.5 });

// sections.forEach((section) => io.observe(section));
