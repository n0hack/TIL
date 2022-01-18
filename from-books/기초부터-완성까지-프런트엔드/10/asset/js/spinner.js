export function createSpinner(parent) {
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  const imageEl = document.createElement('img');
  imageEl.alt = 'spinner';
  imageEl.src = './asset/image/spinner.gif';

  spinnerAreaEl.append(imageEl);
}

export function hideSpinner(parent) {
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  spinnerAreaEl.style.display = 'none';
}
