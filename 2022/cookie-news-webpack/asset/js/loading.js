import spinnerSrc from '../img/spinner.gif';

export function createSpinner(parent) {
  const spinner = document.createElement('div');
  const spinnerImg = document.createElement('img');

  spinner.className = 'spinner';
  spinnerImg.className = 'spinner__img';
  spinnerImg.src = spinnerSrc;
  spinnerImg.alt = '로딩 스피너';

  spinner.append(spinnerImg);
  parent.append(spinner);
}

export function hideSpinner(parent) {
  const spinner = parent.querySelector('.spinner');
  spinner.style.display = 'none';
}
