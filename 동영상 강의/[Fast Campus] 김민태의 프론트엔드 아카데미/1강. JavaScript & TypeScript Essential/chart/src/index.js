import template from './index.template';
import Chart from './lib/chart';

function main() {
  const conatiner = document.querySelector('#root');
  conatiner.innerHTML = template();

  const chart = new Chart('#chart');

  chart.percent = 75;
  chart.duration = 1000;
  chart.label = '충전중'

  chart.render();
}

document.addEventListener('DOMContentLoaded', main);
