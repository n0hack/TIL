"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpinner = createSpinner;
exports.hideSpinner = hideSpinner;

var _spinner = _interopRequireDefault(require("../img/spinner.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createSpinner(parent) {
  var spinner = document.createElement('div');
  var spinnerImg = document.createElement('img');
  spinner.className = 'spinner';
  spinnerImg.className = 'spinner__img';
  spinnerImg.src = _spinner["default"];
  spinnerImg.alt = '로딩 스피너';
  spinner.append(spinnerImg);
  parent.append(spinner);
}

function hideSpinner(parent) {
  var spinner = parent.querySelector('.spinner');
  spinner.style.display = 'none';
}