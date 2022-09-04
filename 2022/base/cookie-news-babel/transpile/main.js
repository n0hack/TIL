"use strict";

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/es.array.map.js");

var _whatwgFetch = require("whatwg-fetch");

var _loading = require("./loading.js");

require("../css/style.css");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createArticle(_ref) {
  var title = _ref.title,
      summary = _ref.summary,
      thumb = _ref.thumb;
  var article = document.createElement('article');
  article.className = 'news';
  article.innerHTML = "\n    <a class=\"news__link\" href=\"#\">\n      <img class=\"news__thumb\" src=\"".concat(thumb, "\" alt=\"\uB274\uC2A4 \uC378\uB124\uC77C\" />\n      <div class=\"news__info\">\n        <h3 class=\"news__title\">").concat(title, "</h3>\n        <p class=\"news__summary\">").concat(summary, "</p>\n      </div>\n    </a>");
  return article;
}

function renderNews() {
  var newsList = document.querySelector('.news-list');
  (0, _loading.createSpinner)(newsList);
  setTimeout(function () {
    (0, _whatwgFetch.fetch)('../data/news.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      var articles = data.articles;
      var articleList = articles.map(function (article) {
        return createArticle(article);
      });
      (0, _loading.hideSpinner)(newsList);
      newsList.append.apply(newsList, _toConsumableArray(articleList));
    });
  }, 2000);
}

document.addEventListener('DOMContentLoaded', renderNews);