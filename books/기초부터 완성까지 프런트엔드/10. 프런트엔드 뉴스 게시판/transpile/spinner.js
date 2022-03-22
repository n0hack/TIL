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
  var spinnerAreaEl = parent.querySelector('.spinner-area');
  var imageEl = document.createElement('img');
  imageEl.alt = 'spinner';
  imageEl.src = _spinner["default"];
  spinnerAreaEl.append(imageEl);
}

function hideSpinner(section) {
  var spinnerAreaEl = section.querySelector('.spinner-area');
  spinnerAreaEl.style.display = 'none';
}