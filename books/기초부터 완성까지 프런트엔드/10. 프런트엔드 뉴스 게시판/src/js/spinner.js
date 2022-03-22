import spinner from '../img/spinner.gif';

export function createSpinner(parent) {
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  const imageEl = document.createElement('img');
  imageEl.alt = 'spinner';
  imageEl.src = spinner;
  spinnerAreaEl.append(imageEl);
}

export function hideSpinner(section) {
  const spinnerAreaEl = section.querySelector('.spinner-area');
  spinnerAreaEl.style.display = 'none';
}
