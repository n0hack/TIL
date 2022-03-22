"use strict";

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.link.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.array.map.js");

var _whatwgFetch = require("whatwg-fetch");

var _spinner = require("./spinner.js");

require("../css/main.css");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createTopNewsElement(article) {
  var title = article.title,
      summary = article.summary,
      link = article.link,
      thumbnailImage = article.thumbnailImage;
  var anchor = document.createElement('a');
  anchor.setAttribute('href', link);
  anchor.innerHTML = "\n    <article class=\"news\">\n      <div class=\"information\">\n        <h3 class=\"title\">".concat(title, "</h3>\n        <p class=\"description\">").concat(summary, "</p>\n      </div>\n      <div class=\"thumbnail-area\">\n        <img src=\"").concat(thumbnailImage, "\" alt=\"thumbnail\" class=\"thumbnail\" />\n      </div>\n    </article>\n  ");
  return anchor;
}

function renderTopNews() {
  var aritcleSection = document.getElementById('topNewsList');
  (0, _spinner.createSpinner)(aritcleSection);
  setTimeout(function () {
    (0, _whatwgFetch.fetch)('../data/top.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      var articles = data.articles;
      var articleList = articles.map(function (article) {
        return createTopNewsElement(article);
      });
      aritcleSection.append.apply(aritcleSection, _toConsumableArray(articleList));
    })["finally"](function () {
      return (0, _spinner.hideSpinner)(aritcleSection);
    });
  }, 1500);
}

function createLatestNewsElement(article) {
  var title = article.title,
      link = article.link;
  var listItem = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.setAttribute('href', link);
  anchor.textContent = title;
  listItem.className = 'latest-news-item';
  listItem.append(anchor);
  return listItem;
}

function renderLatestNews() {
  var aritcleSection = document.querySelector('.latest-news-list');
  (0, _spinner.createSpinner)(aritcleSection);
  setTimeout(function () {
    (0, _whatwgFetch.fetch)('../data/latest.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      var articles = data.articles;
      var articleList = articles.map(function (article) {
        return createLatestNewsElement(article);
      });
      aritcleSection.append.apply(aritcleSection, _toConsumableArray(articleList));
    })["finally"](function () {
      return (0, _spinner.hideSpinner)(aritcleSection);
    });
  }, 1500);
}

document.addEventListener('DOMContentLoaded', function () {
  renderTopNews();
  renderLatestNews();
});