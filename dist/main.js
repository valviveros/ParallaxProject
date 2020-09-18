/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Portfolio/Portfolio.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Portfolio/Portfolio.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _r_assets_fonts_IntegralCF_Bold_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../r-assets/fonts/IntegralCF-Bold.otf */ "./r-assets/fonts/IntegralCF-Bold.otf");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_r_assets_fonts_IntegralCF_Bold_otf__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: integralCF;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n#portfolio-page {\n  background: #2A2D43;\n}\n#portfolio-page .sections {\n  width: 100vw;\n  height: 100vh;\n}\n#portfolio-page .sections .chargingScreen {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#portfolio-page .sections .chargingScreen .helloText {\n  background-image: -webkit-linear-gradient(#ffa9e7 50%, #D0F4EA 50%);\n  background-repeat: repeat-y;\n  color: #D0F4EA;\n  background-position: 0 0;\n  font-size: 85px;\n  font-family: integralCF;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-animation: stripes 5s linear infinite;\n  animation: stripes 5s linear infinite;\n}\n#portfolio-page .sections .section-skills {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  background: #0d0c2d;\n}\n#portfolio-page .sections .section-skills .container {\n  display: grid;\n  grid-template-columns: repeat(1, 160px);\n  grid-gap: 80px;\n  margin: auto 0;\n}\n#portfolio-page .sections .section-skills .container .box {\n  width: 100%;\n}\n#portfolio-page .sections .section-skills .container .box .chart {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 40px;\n  line-height: 160px;\n  height: 160px;\n  color: #fff;\n}\n#portfolio-page .sections .section-skills .container .box h2 {\n  display: block;\n  text-align: center;\n  color: #fff;\n}\n#portfolio-page .sections .section-skills .container .box canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  width: 100%;\n}\n@media (min-width: 420px) and (max-width: 659px) {\n  #portfolio-page .sections .container {\n    grid-template-columns: repeat(2, 160px);\n  }\n}\n@media (min-width: 660px) and (max-width: 899px) {\n  #portfolio-page .sections .container {\n    grid-template-columns: repeat(3, 160px);\n  }\n}\n@media (min-width: 900px) {\n  #portfolio-page .sections .container {\n    grid-template-columns: repeat(4, 160px);\n  }\n}\n\n@keyframes stripes {\n  0% {\n    background-position: 0 -200px;\n  }\n}", "",{"version":3,"sources":["webpack://src/app/pages/Portfolio/Portfolio.scss"],"names":[],"mappings":"AAEA;EACI,uBAAA;EACA,4CAAA;AADJ;AAIA;EACI,mBAAA;AAFJ;AAGI;EACI,YAAA;EACA,aAAA;AADR;AAEQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAZ;AACY;EACI,mEAAA;EACA,2BAAA;EACA,cAAA;EACA,wBAAA;EACA,eAAA;EACA,uBAzBJ;EA0BI,oCAAA;EACA,6BAAA;EACA,qBAAA;EAEA,6CAAA;EACA,qCAAA;AAAhB;AAGQ;EACI,aAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;AADZ;AAEY;EACI,aAAA;EACA,uCAAA;EACA,cAAA;EACA,cAAA;AAAhB;AACgB;EACI,WAAA;AACpB;AAAoB;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;AAExB;AAAoB;EACI,cAAA;EACA,kBAAA;EACA,WAAA;AAExB;AAAoB;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;AAExB;AAIQ;EACI;IACI,uCAAA;EAFd;AACF;AAKQ;EACI;IACI,uCAAA;EAHd;AACF;AAMQ;EACI;IACI,uCAAA;EAJd;AACF;;AAWA;EACI;IACE,6BAAA;EARJ;AACF","sourcesContent":["$titleFont: integralCF;\r\n\r\n@font-face {\r\n    font-family: integralCF;\r\n    src: url(../../../../r-assets/fonts/IntegralCF-Bold.otf);\r\n}\r\n\r\n#portfolio-page {\r\n    background: #2A2D43;\r\n    .sections {\r\n        width: 100vw;\r\n        height: 100vh;\r\n        .chargingScreen {\r\n            width: 100%;\r\n            height: 100%;\r\n            position: relative;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            .helloText{\r\n                background-image: -webkit-linear-gradient(#ffa9e7 50%, #D0F4EA 50%);\r\n                background-repeat: repeat-y;\r\n                color: #D0F4EA;\r\n                background-position: 0 0;\r\n                font-size: 85px;\r\n                font-family: $titleFont;\r\n                -webkit-text-fill-color: transparent;\r\n                -webkit-background-clip: text;\r\n                background-clip: text;\r\n                // color: transparent; \r\n                -webkit-animation: stripes 5s linear infinite;\r\n                animation: stripes 5s linear infinite;\r\n            }\r\n        }\r\n        .section-skills{\r\n            display: flex;\r\n            justify-content: center;\r\n            height: 100vh;\r\n            background: #0d0c2d;\r\n            .container {\r\n                display: grid;\r\n                grid-template-columns: repeat(1, 160px);\r\n                grid-gap: 80px;\r\n                margin: auto 0;\r\n                .box {\r\n                    width: 100%;\r\n                    .chart {\r\n                        position: relative;\r\n                        width: 100%;\r\n                        height: 100%;\r\n                        text-align: center;\r\n                        font-size: 40px;\r\n                        line-height: 160px;\r\n                        height: 160px;\r\n                        color: #fff;\r\n                    }\r\n                    h2 {\r\n                        display: block;\r\n                        text-align: center;\r\n                        color: #fff;\r\n                    }\r\n                    canvas {\r\n                        position: absolute;\r\n                        top: 0;\r\n                        left: 0;\r\n                        width: 100%;\r\n                        width: 100%;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n       \r\n        @media (min-width: 420px) and (max-width: 659px) {\r\n            .container {\r\n                grid-template-columns: repeat(2, 160px);\r\n            }\r\n        }\r\n        \r\n        @media (min-width: 660px) and (max-width: 899px) {\r\n            .container {\r\n                grid-template-columns: repeat(3, 160px);\r\n            }\r\n        }\r\n        \r\n        @media (min-width: 900px) {\r\n            .container {\r\n                grid-template-columns: repeat(4, 160px);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n@keyframes stripes {\r\n    0% {\r\n      background-position: 0 -200px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  width: 100vw;\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AACJ;;AAEA;EACI,yCAAA;EACA,YAAA;EACA,aAAA;AACJ","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./r-assets/fonts/IntegralCF-Bold.otf":
/*!********************************************!*\
  !*** ./r-assets/fonts/IntegralCF-Bold.otf ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a714baf623cd7aa474dd81513b7e0f82.otf");

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Portfolio_PortfolioPageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Portfolio/PortfolioPageController */ "./src/app/pages/Portfolio/PortfolioPageController.ts");

var App = /** @class */ (function () {
    function App() {
        this.mainPages = [
            // HomePageController
            // ExamplePageController
            _pages_Portfolio_PortfolioPageController__WEBPACK_IMPORTED_MODULE_0__["PortfolioPageController"]
        ];
        this.loaded = [];
    }
    App.prototype.render = function () {
        var _this = this;
        var component = this.component();
        this.mainPages.forEach(function (pageController) {
            var controller = new pageController();
            _this.loaded.push(controller);
            var _a = controller.getView(), elId = _a[0], element = _a[1];
            component.appendChild(_this.createPage(elId, element));
        });
        document.body.append(component);
        document.body.onload = function () {
            _this.loaded.forEach(function (controller) {
                if ('start' in controller.component) {
                    controller.component.start();
                }
            });
        };
    };
    App.prototype.createPage = function (id, element) {
        var page = document.createElement("div");
        page.id = id;
        page.appendChild(element);
        return page;
    };
    App.prototype.component = function () {
        var element = document.createElement('div');
        element.id = "app";
        return element;
    };
    return App;
}());
var app = new App();
app.render();


/***/ }),

/***/ "./src/app/pages/Portfolio sync recursive ^\\.\\/.*$":
/*!***********************************************!*\
  !*** ./src/app/pages/Portfolio sync ^\.\/.*$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Portfolio.html": "./src/app/pages/Portfolio/Portfolio.html",
	"./Portfolio.scss": "./src/app/pages/Portfolio/Portfolio.scss",
	"./PortfolioPageController": "./src/app/pages/Portfolio/PortfolioPageController.ts",
	"./PortfolioPageController.ts": "./src/app/pages/Portfolio/PortfolioPageController.ts",
	"./skills": "./src/app/pages/Portfolio/skills.js",
	"./skills.js": "./src/app/pages/Portfolio/skills.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app/pages/Portfolio sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/app/pages/Portfolio/Portfolio.html":
/*!************************************************!*\
  !*** ./src/app/pages/Portfolio/Portfolio.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sections\">\r\n    <div class=\"chargingScreen\">\r\n        <p class=\"helloText\">\r\n            Hello\r\n        </p>\r\n    </div>\r\n    <div class=\"section-skills\">\r\n        <div class=\"container\">\r\n            <div class=\"box\">\r\n              <div class=\"chart\" data-percent=\"73\" data-scale-color=\"#ffb400\">73%</div>\r\n              <h2>Html</h2>\r\n            </div>\r\n            <div class=\"box\">\r\n              <div class=\"chart\" data-percent=\"90\" data-scale-color=\"#ffb400\">90%</div>\r\n              <h2>Css</h2>\r\n            </div>\r\n            <div class=\"box\">\r\n              <div class=\"chart\" data-percent=\"85\" data-scale-color=\"#ffb400\">85%</div>\r\n              <h2>Javascript</h2>\r\n            </div>\r\n            <div class=\"box\">\r\n              <div class=\"chart\" data-percent=\"95\" data-scale-color=\"#ffb400\">95%</div>\r\n              <h2>Photoshop</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/app/pages/Portfolio/Portfolio.scss":
/*!************************************************!*\
  !*** ./src/app/pages/Portfolio/Portfolio.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Portfolio.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Portfolio/Portfolio.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/app/pages/Portfolio/PortfolioPageController.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/Portfolio/PortfolioPageController.ts ***!
  \************************************************************/
/*! exports provided: PortfolioPageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageController", function() { return PortfolioPageController; });
var PortfolioPageController = /** @class */ (function () {
    function PortfolioPageController() {
        var _this = this;
        this.component = {
            id: 'portfolio-page',
            view: 'Portfolio.html',
            style: 'Portfolio.scss',
            start: function () { _this.start(); }
        };
        this.loadView();
    }
    PortfolioPageController.prototype.start = function () {
        var helloText = this.findInsideMe(".helloText");
        helloText.style.opacity = 1;
        // const box: any = this.findInsideMe(".box");
        // const TDBox: any = this.findInsideMe(".TDBox");
        // const clouds: any = this.findInsideMe(".cloud", true);
        // window.onscroll = (_:any) => {
        //     console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
        //     const p = (window.scrollY / window.innerHeight) * 100;
        //     box.style.left = `${p}%`;
        //     box.style.opacity = `${p / 100}`;
        //     clouds[0].style.left = `${p * 2}%`;
        //     clouds[1].style.left = `${p * 1.3}%`;
        //     if (window.scrollY >= 340) {
        //         TDBox.style.opacity = 1;
        //         if (window.scrollY >= 350) {
        //             TDBox.style.transform = `rotateY(${window.scrollY}deg)`;
        //         }
        //     } else {
        //         TDBox.style.opacity = 0;
        //     }
        // }
    };
    PortfolioPageController.prototype.findInsideMe = function (selector, all) {
        if (all === void 0) { all = false; }
        var query = "#app #" + this.component.id + " " + selector;
        if (!all) {
            return document.querySelector(query);
        }
        else {
            return document.querySelectorAll(query);
        }
    };
    PortfolioPageController.prototype.loadView = function () {
        __webpack_require__("./src/app/pages/Portfolio sync recursive ^\\.\\/.*$")("./" + this.component.style);
        this.view = __webpack_require__("./src/app/pages/Portfolio sync recursive ^\\.\\/.*$")("./" + this.component.view);
    };
    PortfolioPageController.prototype.getView = function () {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    };
    return PortfolioPageController;
}());



/***/ }),

/***/ "./src/app/pages/Portfolio/skills.js":
/*!*******************************************!*\
  !*** ./src/app/pages/Portfolio/skills.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function epa() {
    $('.chart').easyPieChart({
      size: 160,
      barColor: "#17d3e6",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#373737",
      lineCap: "circle",
      animate: 2000,
    });
});

console.log("entró")


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _r_assets_fonts_IntegralCF_Bold_otf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../r-assets/fonts/IntegralCF-Bold.otf */ "./r-assets/fonts/IntegralCF-Bold.otf");
__webpack_require__(/*! ./app/app */ "./src/app/app.ts");
__webpack_require__(/*! ./app/pages/Portfolio/skills */ "./src/app/pages/Portfolio/skills.js");




/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9Qb3J0Zm9saW8vUG9ydGZvbGlvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vci1hc3NldHMvZm9udHMvSW50ZWdyYWxDRi1Cb2xkLm90ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpbyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9Qb3J0Zm9saW8vUG9ydGZvbGlvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9Qb3J0Zm9saW8vUG9ydGZvbGlvLnNjc3M/MGQ5NyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9Qb3J0Zm9saW9QYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9za2lsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTyxDQUFDLG1DQUFXLENBQUM7QUFDcEIsbUJBQU8sQ0FBQyx5RUFBOEIsQ0FBQztBQUNoQjtBQUN3Qjs7Ozs7Ozs7Ozs7O0FDSC9DLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMscU1BQWdHOztBQUVsSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uLy4uLy4uL3ItYXNzZXRzL2ZvbnRzL0ludGVncmFsQ0YtQm9sZC5vdGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBpbnRlZ3JhbENGO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG4jcG9ydGZvbGlvLXBhZ2Uge1xcbiAgYmFja2dyb3VuZDogIzJBMkQ0MztcXG59XFxuI3BvcnRmb2xpby1wYWdlIC5zZWN0aW9ucyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4jcG9ydGZvbGlvLXBhZ2UgLnNlY3Rpb25zIC5jaGFyZ2luZ1NjcmVlbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwb3J0Zm9saW8tcGFnZSAuc2VjdGlvbnMgLmNoYXJnaW5nU2NyZWVuIC5oZWxsb1RleHQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmYTllNyA1MCUsICNEMEY0RUEgNTAlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIGNvbG9yOiAjRDBGNEVBO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgZm9udC1zaXplOiA4NXB4O1xcbiAgZm9udC1mYW1pbHk6IGludGVncmFsQ0Y7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzdHJpcGVzIDVzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogc3RyaXBlcyA1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbiNwb3J0Zm9saW8tcGFnZSAuc2VjdGlvbnMgLnNlY3Rpb24tc2tpbGxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjMGQwYzJkO1xcbn1cXG4jcG9ydGZvbGlvLXBhZ2UgLnNlY3Rpb25zIC5zZWN0aW9uLXNraWxscyAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxNjBweCk7XFxuICBncmlkLWdhcDogODBweDtcXG4gIG1hcmdpbjogYXV0byAwO1xcbn1cXG4jcG9ydGZvbGlvLXBhZ2UgLnNlY3Rpb25zIC5zZWN0aW9uLXNraWxscyAuY29udGFpbmVyIC5ib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNwb3J0Zm9saW8tcGFnZSAuc2VjdGlvbnMgLnNlY3Rpb24tc2tpbGxzIC5jb250YWluZXIgLmJveCAuY2hhcnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNwb3J0Zm9saW8tcGFnZSAuc2VjdGlvbnMgLnNlY3Rpb24tc2tpbGxzIC5jb250YWluZXIgLmJveCBoMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4jcG9ydGZvbGlvLXBhZ2UgLnNlY3Rpb25zIC5zZWN0aW9uLXNraWxscyAuY29udGFpbmVyIC5ib3ggY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIGFuZCAobWF4LXdpZHRoOiA2NTlweCkge1xcbiAgI3BvcnRmb2xpby1wYWdlIC5zZWN0aW9ucyAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTYwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgI3BvcnRmb2xpby1wYWdlIC5zZWN0aW9ucyAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTYwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gICNwb3J0Zm9saW8tcGFnZSAuc2VjdGlvbnMgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDE2MHB4KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzdHJpcGVzIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjAwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9Qb3J0Zm9saW8uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLHVCQUFBO0VBQ0EsNENBQUE7QUFESjtBQUlBO0VBQ0ksbUJBQUE7QUFGSjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFDWTtFQUNJLG1FQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBekJKO0VBMEJJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUVBLDZDQUFBO0VBQ0EscUNBQUE7QUFBaEI7QUFHUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURaO0FBRVk7RUFDSSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFoQjtBQUNnQjtFQUNJLFdBQUE7QUFDcEI7QUFBb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUV4QjtBQUFvQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFeEI7QUFBb0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFeEI7QUFJUTtFQUNJO0lBQ0ksdUNBQUE7RUFGZDtBQUNGO0FBS1E7RUFDSTtJQUNJLHVDQUFBO0VBSGQ7QUFDRjtBQU1RO0VBQ0k7SUFDSSx1Q0FBQTtFQUpkO0FBQ0Y7O0FBV0E7RUFDSTtJQUNFLDZCQUFBO0VBUko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGl0bGVGb250OiBpbnRlZ3JhbENGO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogaW50ZWdyYWxDRjtcXHJcXG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vLi4vci1hc3NldHMvZm9udHMvSW50ZWdyYWxDRi1Cb2xkLm90Zik7XFxyXFxufVxcclxcblxcclxcbiNwb3J0Zm9saW8tcGFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyQTJENDM7XFxyXFxuICAgIC5zZWN0aW9ucyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgLmNoYXJnaW5nU2NyZWVuIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAuaGVsbG9UZXh0e1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmZhOWU3IDUwJSwgI0QwRjRFQSA1MCUpO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDBGNEVBO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODVweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHRyYW5zcGFyZW50OyBcXHJcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN0cmlwZXMgNXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHN0cmlwZXMgNXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5zZWN0aW9uLXNraWxsc3tcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBkMGMyZDtcXHJcXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTYwcHgpO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogODBweDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICAgICAgICAgICAgICAgIC5ib3gge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAuY2hhcnQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICBjYW52YXMge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgXFxyXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIGFuZCAobWF4LXdpZHRoOiA2NTlweCkge1xcclxcbiAgICAgICAgICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxNjBweCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcclxcbiAgICAgICAgICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxNjBweCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMTYwcHgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHN0cmlwZXMge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjAwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNzE0YmFmNjIzY2Q3YWE0NzRkZDgxNTEzYjdlMGY4Mi5vdGZcIjsiLCJpbXBvcnQgeyBFeGFtcGxlUGFnZUNvbnRyb2xsZXIgfSBmcm9tICcuL3BhZ2VzL0V4YW1wbGUvRXhhbXBsZVBhZ2VDb250cm9sbGVyJztcclxuaW1wb3J0IHsgSG9tZVBhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9wYWdlcy9Ib21lL0hvbWVQYWdlQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFBvcnRmb2xpb1BhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9wYWdlcy9Qb3J0Zm9saW8vUG9ydGZvbGlvUGFnZUNvbnRyb2xsZXInO1xyXG5jbGFzcyBBcHAge1xyXG5cclxuICBtYWluUGFnZXMgPSBbXHJcbiAgICAvLyBIb21lUGFnZUNvbnRyb2xsZXJcclxuICAgIC8vIEV4YW1wbGVQYWdlQ29udHJvbGxlclxyXG4gICAgUG9ydGZvbGlvUGFnZUNvbnRyb2xsZXJcclxuICBdO1xyXG5cclxuICBsb2FkZWQ6IGFueSA9IFtdXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50KCk7XHJcblxyXG4gICAgdGhpcy5tYWluUGFnZXMuZm9yRWFjaChwYWdlQ29udHJvbGxlciA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgcGFnZUNvbnRyb2xsZXIoKTtcclxuICAgICAgdGhpcy5sb2FkZWQucHVzaChjb250cm9sbGVyKTtcclxuICAgICAgY29uc3QgW2VsSWQsIGVsZW1lbnRdID0gY29udHJvbGxlci5nZXRWaWV3KCk7XHJcbiAgICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVBhZ2UoZWxJZCwgZWxlbWVudCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVkLmZvckVhY2goKGNvbnRyb2xsZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICgnc3RhcnQnIGluIGNvbnRyb2xsZXIuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICBjb250cm9sbGVyLmNvbXBvbmVudC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoaWQ6IHN0cmluZywgZWxlbWVudDogRG9jdW1lbnRGcmFnbWVudCkge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHBhZ2UuaWQgPSBpZDtcclxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gcGFnZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaWQgPSBcImFwcFwiO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5yZW5kZXIoKTtcclxuXHJcblxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1BvcnRmb2xpby5odG1sXCI6IFwiLi9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9Qb3J0Zm9saW8uaHRtbFwiLFxuXHRcIi4vUG9ydGZvbGlvLnNjc3NcIjogXCIuL3NyYy9hcHAvcGFnZXMvUG9ydGZvbGlvL1BvcnRmb2xpby5zY3NzXCIsXG5cdFwiLi9Qb3J0Zm9saW9QYWdlQ29udHJvbGxlclwiOiBcIi4vc3JjL2FwcC9wYWdlcy9Qb3J0Zm9saW8vUG9ydGZvbGlvUGFnZUNvbnRyb2xsZXIudHNcIixcblx0XCIuL1BvcnRmb2xpb1BhZ2VDb250cm9sbGVyLnRzXCI6IFwiLi9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9Qb3J0Zm9saW9QYWdlQ29udHJvbGxlci50c1wiLFxuXHRcIi4vc2tpbGxzXCI6IFwiLi9zcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9za2lsbHMuanNcIixcblx0XCIuL3NraWxscy5qc1wiOiBcIi4vc3JjL2FwcC9wYWdlcy9Qb3J0Zm9saW8vc2tpbGxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2FwcC9wYWdlcy9Qb3J0Zm9saW8gc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNoYXJnaW5nU2NyZWVuXFxcIj5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJoZWxsb1RleHRcXFwiPlxcclxcbiAgICAgICAgICAgIEhlbGxvXFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLXNraWxsc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGFydFxcXCIgZGF0YS1wZXJjZW50PVxcXCI3M1xcXCIgZGF0YS1zY2FsZS1jb2xvcj1cXFwiI2ZmYjQwMFxcXCI+NzMlPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8aDI+SHRtbDwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXJ0XFxcIiBkYXRhLXBlcmNlbnQ9XFxcIjkwXFxcIiBkYXRhLXNjYWxlLWNvbG9yPVxcXCIjZmZiNDAwXFxcIj45MCU8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxoMj5Dc3M8L2gyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGFydFxcXCIgZGF0YS1wZXJjZW50PVxcXCI4NVxcXCIgZGF0YS1zY2FsZS1jb2xvcj1cXFwiI2ZmYjQwMFxcXCI+ODUlPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8aDI+SmF2YXNjcmlwdDwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXJ0XFxcIiBkYXRhLXBlcmNlbnQ9XFxcIjk1XFxcIiBkYXRhLXNjYWxlLWNvbG9yPVxcXCIjZmZiNDAwXFxcIj45NSU8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxoMj5QaG90b3Nob3A8L2gyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUG9ydGZvbGlvLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBjbGFzcyBQb3J0Zm9saW9QYWdlQ29udHJvbGxlciB7XHJcbiAgICB2aWV3OiBhbnk7XHJcbiAgICBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgaWQ6ICdwb3J0Zm9saW8tcGFnZScsXHJcbiAgICAgICAgdmlldzogJ1BvcnRmb2xpby5odG1sJyxcclxuICAgICAgICBzdHlsZTogJ1BvcnRmb2xpby5zY3NzJyxcclxuICAgICAgICBzdGFydDogKCkgPT4geyB0aGlzLnN0YXJ0KCk7IH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxvYWRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgaGVsbG9UZXh0OiBhbnkgPSB0aGlzLmZpbmRJbnNpZGVNZShcIi5oZWxsb1RleHRcIik7XHJcbiAgICAgICAgaGVsbG9UZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIC8vIGNvbnN0IGJveDogYW55ID0gdGhpcy5maW5kSW5zaWRlTWUoXCIuYm94XCIpO1xyXG4gICAgICAgIC8vIGNvbnN0IFREQm94OiBhbnkgPSB0aGlzLmZpbmRJbnNpZGVNZShcIi5UREJveFwiKTtcclxuICAgICAgICAvLyBjb25zdCBjbG91ZHM6IGFueSA9IHRoaXMuZmluZEluc2lkZU1lKFwiLmNsb3VkXCIsIHRydWUpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5vbnNjcm9sbCA9IChfOmFueSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgWDogJHt3aW5kb3cuc2Nyb2xsWH0gWTogJHt3aW5kb3cuc2Nyb2xsWX1gKVxyXG4gICAgICAgIC8vICAgICBjb25zdCBwID0gKHdpbmRvdy5zY3JvbGxZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMDtcclxuICAgICAgICAvLyAgICAgYm94LnN0eWxlLmxlZnQgPSBgJHtwfSVgO1xyXG4gICAgICAgIC8vICAgICBib3guc3R5bGUub3BhY2l0eSA9IGAke3AgLyAxMDB9YDtcclxuXHJcbiAgICAgICAgLy8gICAgIGNsb3Vkc1swXS5zdHlsZS5sZWZ0ID0gYCR7cCAqIDJ9JWA7XHJcbiAgICAgICAgLy8gICAgIGNsb3Vkc1sxXS5zdHlsZS5sZWZ0ID0gYCR7cCAqIDEuM30lYDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAzNDApIHtcclxuICAgICAgICAvLyAgICAgICAgIFREQm94LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDM1MCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIFREQm94LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7d2luZG93LnNjcm9sbFl9ZGVnKWA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBUREJveC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kSW5zaWRlTWUoc2VsZWN0b3I6IHN0cmluZywgYWxsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGAjYXBwICMke3RoaXMuY29tcG9uZW50LmlkfSAke3NlbGVjdG9yfWA7XHJcbiAgICAgICAgaWYgKCFhbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRWaWV3KCkge1xyXG4gICAgICAgIHJlcXVpcmUoYC4vJHt0aGlzLmNvbXBvbmVudC5zdHlsZX1gKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSByZXF1aXJlKGAuLyR7dGhpcy5jb21wb25lbnQudmlld31gKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3KCk6IFtzdHJpbmcsIERvY3VtZW50RnJhZ21lbnRdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMuY29tcG9uZW50LmlkLCBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh0aGlzLnZpZXcpXTtcclxuICAgIH1cclxufSIsIiQoZnVuY3Rpb24gZXBhKCkge1xyXG4gICAgJCgnLmNoYXJ0JykuZWFzeVBpZUNoYXJ0KHtcclxuICAgICAgc2l6ZTogMTYwLFxyXG4gICAgICBiYXJDb2xvcjogXCIjMTdkM2U2XCIsXHJcbiAgICAgIHNjYWxlTGVuZ3RoOiAwLFxyXG4gICAgICBsaW5lV2lkdGg6IDE1LFxyXG4gICAgICB0cmFja0NvbG9yOiBcIiMzNzM3MzdcIixcclxuICAgICAgbGluZUNhcDogXCJjaXJjbGVcIixcclxuICAgICAgYW5pbWF0ZTogMjAwMCxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKFwiZW50csOzXCIpXHJcbiIsInJlcXVpcmUoJy4vYXBwL2FwcCcpXHJcbnJlcXVpcmUoJy4vYXBwL3BhZ2VzL1BvcnRmb2xpby9za2lsbHMnKVxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3ItYXNzZXRzL2ZvbnRzL0ludGVncmFsQ0YtQm9sZC5vdGYnOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=