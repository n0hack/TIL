// loading.js
export function createSpinner(parent) {
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.innerHTML = '<img class="spinner__img" src="asset/img/spinner.gif" alt="로딩 스피너" />';
  parent.append(spinner);
}

export function hideSpinner(parent) {
  const spinner = parent.querySelector('.spinner');
  spinner.style.display = 'none';
}
