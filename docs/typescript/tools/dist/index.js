"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var message = 'Bundled by the Webpack 타입스크립트~!';
console.log(_chalk["default"].black.bgGreenBright(message));