const spinner = document.querySelector('.spinner');
const list = document.querySelector('ul');
const skeletons = [];
for (let i = 0; i < 4; i++) {
  const skeleton = document.createElement('li');
  skeleton.classList.add('skeleton');
  skeletons.push(skeleton);
}

let searching = false;

function search() {
  spinner.classList.add('spinner--show');

  for (const skeleton of skeletons) {
    list.appendChild(skeleton);
  }

  setTimeout(() => {
    searching = false;
    for (const skeleton of skeletons) {
      list.removeChild(skeleton);
    }
    for (let i = 1; i <= 20; i++) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = 'images/1.jpeg';
      const span = document.createElement('span');
      span.innerText = 'Image Test';
      li.appendChild(img);
      li.appendChild(span);
      list.appendChild(li);
    }
    spinner.classList.remove('spinner--show');
  }, 3000);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (searching) return;

    searching = true;
    search();

    console.log(entry.isIntersecting);
  });
});

io.observe(document.querySelector('.footer'));
console.log(io);
