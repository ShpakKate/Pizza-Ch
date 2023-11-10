/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/form */ \"./src/js/form.js\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_open_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/open-img */ \"./src/js/open-img.js\");\n/* harmony import */ var _js_open_img__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_open_img__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/animate.css */ \"./src/css/animate.css\");\n/* harmony import */ var _js_wow_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/wow.min */ \"./src/js/wow.min.js\");\n/* harmony import */ var _js_wow_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_wow_min__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nlet wow = new _js_wow_min__WEBPACK_IMPORTED_MODULE_4__({\n  boxClass: 'wow',\n  // animated element css class (default is wow)\n  animateClass: 'animated',\n  // animation css class (default is animated)\n  offset: 0,\n  // distance to the element when triggering the animation (default is 0)\n  mobile: true,\n  // trigger animations on mobile devices (default is true)\n  live: true,\n  // act on asynchronously loaded content (default is true)\n  callback: function (box) {\n    // the callback is fired every time an animation is started\n    // the argument that is passed in is the DOM node being animated\n  },\n  scrollContainer: null,\n  // optional scroll container selector, otherwise use window,\n  resetAnimation: true // reset animation on end (default is true)\n});\n\nwow.init();\n\n//# sourceURL=webpack://w2/./src/index.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ (() => {

eval("let form = document.querySelector('.form');\nlet formFields = document.querySelectorAll('.field');\nlet name = document.querySelector('#name');\nlet adress = document.querySelector('#adress');\nlet phone = document.querySelector('#phone');\nlet btn = document.querySelector('#btn');\nfunction removeValidation() {\n  let errors = form.querySelectorAll('.error');\n  for (var i = 0; i < errors.length; i++) {\n    errors[i].remove();\n  }\n}\nfunction isEmptyField() {\n  for (let i = 0; i < formFields.length; i++) {\n    if (!formFields[i].value) {\n      let error = document.createElement('p');\n      error.className = 'error';\n      error.innerHTML = `Заполните все поля `;\n      form.appendChild(error);\n      return;\n    }\n  }\n}\nfunction isPhoneNumberValid() {\n  if (phone.value && +phone.value.length < 7) {\n    let error = document.createElement('p');\n    error.className = 'error';\n    error.innerHTML = ` Номер должен содержать не менее 7 символов`;\n    form.appendChild(error);\n  }\n}\nfunction sendForm(form) {\n  var xhr = new XMLHttpRequest();\n  if (!xhr) {\n    alert(' Невозможно создать XMLHttpRequest ');\n  }\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      let wrapper = document.createElement('div');\n      let alert = document.createElement('div');\n      alert.innerHTML(form);\n      alert.className = 'full-size';\n      wrapper.className = 'dark-backround';\n      body.appendChild(wrapper);\n      wrapper.appendChild(alert);\n    }\n  };\n  xhr.open(form.method, form.path, true);\n  xhr.onload = xhr.onerror = function () {\n    alert('Отправилось');\n  };\n  xhr.send();\n  // return false;\n}\n\nasync function createOrder() {\n  let myFormdata = new FormData(form);\n  myFormdata.append('name', name.value);\n  myFormdata.append('phone', phone.value);\n  myFormdata.append('adress', adress.value);\n  let formDataAsObject = Object.fromEntries(myFormdata);\n  console.log(formDataAsObject);\n  await fetch('http://localhost:9009/order', {\n    method: 'POST',\n    body: myFormdata\n  });\n}\nformFields.forEach(i => i.addEventListener('input', () => {\n  let inputValue = i.value.replace('.', '');\n  i.value = inputValue;\n}));\nform.addEventListener('submit', () => {\n  event.preventDefault();\n  removeValidation();\n  isEmptyField();\n  isPhoneNumberValid();\n  createOrder();\n});\n\n//# sourceURL=webpack://w2/./src/js/form.js?");

/***/ }),

/***/ "./src/js/open-img.js":
/*!****************************!*\
  !*** ./src/js/open-img.js ***!
  \****************************/
/***/ (() => {

eval("let images = document.querySelectorAll('.pizza-wrapper img');\nlet body = document.querySelector('body');\nlet wrapper = document.createElement('div');\nlet img = document.createElement('img');\nimages.forEach(image => {\n  image.addEventListener('click', () => {\n    img.src = image.src;\n    wrapper.className = 'dark-backround';\n    img.className = 'full-size';\n    body.appendChild(wrapper);\n    wrapper.appendChild(img);\n  });\n});\nwrapper.addEventListener('click', () => {\n  body.removeChild(wrapper);\n});\n\n//# sourceURL=webpack://w2/./src/js/open-img.js?");

/***/ }),

/***/ "./src/js/wow.min.js":
/*!***************************!*\
  !*** ./src/js/wow.min.js ***!
  \***************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! WOW wow.js - v1.3.0 - 2016-10-04\n* https://wowjs.uk\n* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function (a, b) {\n  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }\n}(this, function (a, b) {\n  \"use strict\";\n\n  function c(a, b) {\n    if (!(a instanceof b)) throw new TypeError(\"Cannot call a class as a function\");\n  }\n  function d(a, b) {\n    return b.indexOf(a) >= 0;\n  }\n  function e(a, b) {\n    for (var c in b) if (null == a[c]) {\n      var d = b[c];\n      a[c] = d;\n    }\n    return a;\n  }\n  function f(a) {\n    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);\n  }\n  function g(a) {\n    var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],\n      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],\n      d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],\n      e = void 0;\n    return null != document.createEvent ? (e = document.createEvent(\"CustomEvent\"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;\n  }\n  function h(a, b) {\n    null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : \"on\" + b in (null != a) && a[\"on\" + b]();\n  }\n  function i(a, b, c) {\n    null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent(\"on\" + b, c) : a[b] = c;\n  }\n  function j(a, b, c) {\n    null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent(\"on\" + b, c) : delete a[b];\n  }\n  function k() {\n    return \"innerHeight\" in window ? window.innerHeight : document.documentElement.clientHeight;\n  }\n  Object.defineProperty(b, \"__esModule\", {\n    value: !0\n  });\n  var l,\n    m,\n    n = function () {\n      function a(a, b) {\n        for (var c = 0; c < b.length; c++) {\n          var d = b[c];\n          d.enumerable = d.enumerable || !1, d.configurable = !0, \"value\" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);\n        }\n      }\n      return function (b, c, d) {\n        return c && a(b.prototype, c), d && a(b, d), b;\n      };\n    }(),\n    o = window.WeakMap || window.MozWeakMap || function () {\n      function a() {\n        c(this, a), this.keys = [], this.values = [];\n      }\n      return n(a, [{\n        key: \"get\",\n        value: function (a) {\n          for (var b = 0; b < this.keys.length; b++) {\n            var c = this.keys[b];\n            if (c === a) return this.values[b];\n          }\n        }\n      }, {\n        key: \"set\",\n        value: function (a, b) {\n          for (var c = 0; c < this.keys.length; c++) {\n            var d = this.keys[c];\n            if (d === a) return this.values[c] = b, this;\n          }\n          return this.keys.push(a), this.values.push(b), this;\n        }\n      }]), a;\n    }(),\n    p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function () {\n      function a() {\n        c(this, a), \"undefined\" != typeof console && null !== console && (console.warn(\"MutationObserver is not supported by your browser.\"), console.warn(\"WOW.js cannot detect dom mutations, please call .sync() after loading new content.\"));\n      }\n      return n(a, [{\n        key: \"observe\",\n        value: function () {}\n      }]), a;\n    }(), l.notSupported = !0, m),\n    q = window.getComputedStyle || function (a) {\n      var b = /(\\-([a-z]){1})/g;\n      return {\n        getPropertyValue: function (c) {\n          \"float\" === c && (c = \"styleFloat\"), b.test(c) && c.replace(b, function (a, b) {\n            return b.toUpperCase();\n          });\n          var d = a.currentStyle;\n          return (null != d ? d[c] : void 0) || null;\n        }\n      };\n    },\n    r = function () {\n      function a() {\n        var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];\n        c(this, a), this.defaults = {\n          boxClass: \"wow\",\n          animateClass: \"animated\",\n          offset: 0,\n          mobile: !0,\n          live: !0,\n          callback: null,\n          scrollContainer: null,\n          resetAnimation: !0\n        }, this.animate = function () {\n          return \"requestAnimationFrame\" in window ? function (a) {\n            return window.requestAnimationFrame(a);\n          } : function (a) {\n            return a();\n          };\n        }(), this.vendors = [\"moz\", \"webkit\"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o(), this.wowEvent = g(this.config.boxClass);\n      }\n      return n(a, [{\n        key: \"init\",\n        value: function () {\n          this.element = window.document.documentElement, d(document.readyState, [\"interactive\", \"complete\"]) ? this.start() : i(document, \"DOMContentLoaded\", this.start), this.finished = [];\n        }\n      }, {\n        key: \"start\",\n        value: function () {\n          var a = this;\n          if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll(\".\" + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle();else for (var b = 0; b < this.boxes.length; b++) {\n            var c = this.boxes[b];\n            this.applyStyle(c, !0);\n          }\n          if (this.disabled() || (i(this.config.scrollContainer || window, \"scroll\", this.scrollHandler), i(window, \"resize\", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {\n            var d = new p(function (b) {\n              for (var c = 0; c < b.length; c++) for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {\n                var f = d.addedNodes[e];\n                a.doSync(f);\n              }\n            });\n            d.observe(document.body, {\n              childList: !0,\n              subtree: !0\n            });\n          }\n        }\n      }, {\n        key: \"stop\",\n        value: function () {\n          this.stopped = !0, j(this.config.scrollContainer || window, \"scroll\", this.scrollHandler), j(window, \"resize\", this.scrollHandler), null != this.interval && clearInterval(this.interval);\n        }\n      }, {\n        key: \"sync\",\n        value: function () {\n          p.notSupported && this.doSync(this.element);\n        }\n      }, {\n        key: \"doSync\",\n        value: function (a) {\n          if (\"undefined\" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {\n            a = a.parentNode || a;\n            for (var b = a.querySelectorAll(\".\" + this.config.boxClass), c = 0; c < b.length; c++) {\n              var e = b[c];\n              d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0);\n            }\n          }\n        }\n      }, {\n        key: \"show\",\n        value: function (a) {\n          return this.applyStyle(a), a.className = a.className + \" \" + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, \"animationend\", this.resetAnimation), i(a, \"oanimationend\", this.resetAnimation), i(a, \"webkitAnimationEnd\", this.resetAnimation), i(a, \"MSAnimationEnd\", this.resetAnimation)), a;\n        }\n      }, {\n        key: \"applyStyle\",\n        value: function (a, b) {\n          var c = this,\n            d = a.getAttribute(\"data-wow-duration\"),\n            e = a.getAttribute(\"data-wow-delay\"),\n            f = a.getAttribute(\"data-wow-iteration\");\n          return this.animate(function () {\n            return c.customStyle(a, b, d, e, f);\n          });\n        }\n      }, {\n        key: \"resetStyle\",\n        value: function () {\n          for (var a = 0; a < this.boxes.length; a++) {\n            var b = this.boxes[a];\n            b.style.visibility = \"visible\";\n          }\n        }\n      }, {\n        key: \"resetAnimation\",\n        value: function (a) {\n          if (a.type.toLowerCase().indexOf(\"animationend\") >= 0) {\n            var b = a.target || a.srcElement;\n            b.className = b.className.replace(this.config.animateClass, \"\").trim();\n          }\n        }\n      }, {\n        key: \"customStyle\",\n        value: function (a, b, c, d, e) {\n          return b && this.cacheAnimationName(a), a.style.visibility = b ? \"hidden\" : \"visible\", c && this.vendorSet(a.style, {\n            animationDuration: c\n          }), d && this.vendorSet(a.style, {\n            animationDelay: d\n          }), e && this.vendorSet(a.style, {\n            animationIterationCount: e\n          }), this.vendorSet(a.style, {\n            animationName: b ? \"none\" : this.cachedAnimationName(a)\n          }), a;\n        }\n      }, {\n        key: \"vendorSet\",\n        value: function (a, b) {\n          for (var c in b) if (b.hasOwnProperty(c)) {\n            var d = b[c];\n            a[\"\" + c] = d;\n            for (var e = 0; e < this.vendors.length; e++) {\n              var f = this.vendors[e];\n              a[\"\" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;\n            }\n          }\n        }\n      }, {\n        key: \"vendorCSS\",\n        value: function (a, b) {\n          for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {\n            var f = this.vendors[e];\n            d = d || c.getPropertyCSSValue(\"-\" + f + \"-\" + b);\n          }\n          return d;\n        }\n      }, {\n        key: \"animationName\",\n        value: function (a) {\n          var b = void 0;\n          try {\n            b = this.vendorCSS(a, \"animation-name\").cssText;\n          } catch (c) {\n            b = q(a).getPropertyValue(\"animation-name\");\n          }\n          return \"none\" === b ? \"\" : b;\n        }\n      }, {\n        key: \"cacheAnimationName\",\n        value: function (a) {\n          return this.animationNameCache.set(a, this.animationName(a));\n        }\n      }, {\n        key: \"cachedAnimationName\",\n        value: function (a) {\n          return this.animationNameCache.get(a);\n        }\n      }, {\n        key: \"scrollHandler\",\n        value: function () {\n          this.scrolled = !0;\n        }\n      }, {\n        key: \"scrollCallback\",\n        value: function () {\n          if (this.scrolled) {\n            this.scrolled = !1;\n            for (var a = [], b = 0; b < this.boxes.length; b++) {\n              var c = this.boxes[b];\n              if (c) {\n                if (this.isVisible(c)) {\n                  this.show(c);\n                  continue;\n                }\n                a.push(c);\n              }\n            }\n            this.boxes = a, this.boxes.length || this.config.live || this.stop();\n          }\n        }\n      }, {\n        key: \"offsetTop\",\n        value: function (a) {\n          for (; void 0 === a.offsetTop;) a = a.parentNode;\n          for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;\n          return b;\n        }\n      }, {\n        key: \"isVisible\",\n        value: function (a) {\n          var b = a.getAttribute(\"data-wow-offset\") || this.config.offset,\n            c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,\n            d = c + Math.min(this.element.clientHeight, k()) - b,\n            e = this.offsetTop(a),\n            f = e + a.clientHeight;\n          return d >= e && f >= c;\n        }\n      }, {\n        key: \"disabled\",\n        value: function () {\n          return !this.config.mobile && f(navigator.userAgent);\n        }\n      }]), a;\n    }();\n  b[\"default\"] = r, a.exports = b[\"default\"];\n});\n\n//# sourceURL=webpack://w2/./src/js/wow.min.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/animate.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/animate.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license\n\nCopyright (c) 2013 Daniel Eden\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  40% {\n    -webkit-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  60% {\n    -webkit-transform: translateY(-15px);\n    -ms-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n}\n\n@-webkit-keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n    -ms-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate(15deg);\n    -ms-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate(-10deg);\n    -ms-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(5deg);\n    -ms-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate(-5deg);\n    -ms-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  -ms-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0);\n  }\n}\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    -ms-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    -ms-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    -ms-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    -ms-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n@keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    -ms-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    -ms-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    -ms-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    -ms-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    -ms-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    transform: scale(.3);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  70% {\n    -webkit-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    -ms-transform: scale(.3);\n    transform: scale(.3);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    -ms-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  70% {\n    -webkit-transform: scale(.9);\n    -ms-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    -ms-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(-10px);\n    -ms-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    transform: translateX(30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    -ms-transform: translateX(30px);\n    transform: translateX(30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(-10px);\n    -ms-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    transform: translateX(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    -ms-transform: translateX(-30px);\n    transform: translateX(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(10px);\n    -ms-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  25% {\n    -webkit-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    transform: scale(.3);\n  }\n}\n\n@keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  25% {\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    -ms-transform: scale(.3);\n    transform: scale(.3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n@keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n}\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n}\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n}\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  -ms-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    -ms-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    -ms-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    -ms-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    -ms-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    -ms-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    -ms-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    -ms-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    -ms-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    -ms-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    -ms-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    -ms-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    -ms-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    -ms-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    -ms-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    -ms-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    -ms-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    -ms-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    -ms-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(-200deg);\n    -ms-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(200deg);\n    -ms-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes slideInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    opacity: 1;\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px);\n    transform: translateY(700px);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    -ms-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    -ms-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    opacity: 1;\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px);\n    -ms-transform: translateY(700px);\n    transform: translateY(700px);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    -ms-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    -ms-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(100%) rotate(120deg);\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n@keyframes rollOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    -ms-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(100%) rotate(120deg);\n    -ms-transform: translateX(100%) rotate(120deg);\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://w2/./src/css/animate.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 567px) {\n  body {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 568px) {\n  .part-1-description, figure {\n    text-align: center;\n  }\n\n  section {\n    margin: 5rem;\n  }\n\n  .section-wrapper {\n    flex-direction: column;\n  }\n\n  .nav-wrapper{\n    display: none;\n  }\n\n  .part-2-description {\n    margin: 0 auto;\n  }\n\n  .part-2-description img {\n    margin-top: 2rem;\n    margin-left: 2rem;\n    max-width: 30rem;\n  }\n\n  .part-1-description button {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .nav-wrapper {\n    display: flex;\n    align-items: center;\n  }\n\n  .part-1-description button {\n    width: 12rem;\n  }\n\n  .part-2-description img {\n    max-width: 100%;\n  }\n\n  .part-1-description, figure {\n    text-align: left;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .part-1-description {\n    text-align: start;\n  }\n\n  section {\n    margin: 5rem 12rem 7rem 12rem;\n  }\n\n  .section-wrapper {\n    flex-direction: row;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .form-img-wrapper img {\n    margin-top: 4rem;\n    max-width: 15rem;\n  }\n}\n\n.header {\n  height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #b4905b;\n  box-shadow: 1px 7px 7px 3px rgba(232,220,220,0.85);\n}\n\n.nav-wrapper div {\n  margin: 0 1rem;\n}\n\nh1 {\n  line-height: 2rem;\n}\n\n.section-wrapper {\n  display: flex;\n}\n\npart-1-description {\n  flex: 6;\n}\n\npart-2-description {\n  flex: 6;\n}\n\n.section-wrapper span:first-child{\n  color: #b4905b;\n  display: block;\n}\n\n.section-wrapper span:last-child{\n  color: #f6af47;\n  display: block;\n}\n\n.description-wrapper {\n  margin: 1rem 0;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 50% 50%;\n}\n\nfigure {\n  margin: 0rem;\n  display: flex;\n}\n\n.description-wrapper h6 {\n  color: #f6af47;\n  text-transform: uppercase;\n  margin: 0 0 0.1rem 0;\n}\n\n.description-wrapper p {\n  color: #b4905b;\n  margin: 0;\n  font-size: 0.9rem;\n}\n\n.description-wrapper img {\n  width: 4rem;\n  height: 4rem;\n}\n\nbutton {\n  background: #f6af47;\n  padding: 1rem;\n  border: none;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  background: #f6af47;\n  padding: 1rem;\n  border-radius: 0.1rem;\n  position: relative;\n  box-sizing: border-box;\n  transition: all 500ms ease;\n}\n\nbutton:hover {\n  background: rgba(0,0,0,0);\n  color: #f6af47;\n  box-shadow: inset 0 0 0 3px #f6af47;\n}\n\n.part-2-description img {\n  width: 100%;\n  height: auto;\n}\n\nh2 {\n  color: #b4905b;\n  text-align: center;\n}\n\n.menu-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.pizza-wrapper {\n  box-sizing: border-box;\n  flex: 3;\n  padding: 0.5rem;\n  text-align: center;\n  box-shadow: 0px 2px 7px 6px rgba(232,220,220,0.85);\n}\n\n.pizza-wrapper p {\n  height: 4rem;\n  font-size: 0.8rem;\n}\n\n.pizza-wrapper img {\n  width: 10rem;\n  height: auto;\n}\n\n.pizza-wrapper button {\n  width: 10rem;\n}\n\n.section-with-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  gap: 3rem;\n}\n\n.suggestion-wrapper, .form, form-img-wrapper {\n  flex: 3;\n}\n\n.suggestion-wrapper {\n  min-width: 14rem;\n}\n\n.suggestion-wrapper span:first-child{\n  color: #f6af47;\n  display: block;\n  text-align: start;\n}\n\n.suggestion-wrapper span:last-child{\n  color: #b4905b;\n  display: block;\n  text-align: start;\n}\n\n.suggestion-wrapper p {\n  margin-top: 3rem;\n  color: #b4905b;\n  font-size: 0.9rem;\n  line-height: 1.2rem;\n}\n\n.form {\n  min-width: 14rem;\n  margin-top: 4rem;\n}\n\n.form div {\n  margin-bottom: 1rem;\n}\n\n.form input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.7rem;\n  padding-left: 1rem;\n  border: 1px solid #f6af47;\n}\n\ninput::placeholder {\n  color: #f6af47;\n}\n\n.form button {\n  width: 100%;\n}\n\n.form-img-wrapper img {\n  width: 100%;\n  height: auto;\n}\n\n.error {\n  color: #FF0000;\n  font-size: 0.8rem;\n  margin: 0.2rem 0;\n}\n\n.dark-backround {\n  position: fixed;\n  margin: 0px;\n  height: 100%;\n  background-color: rgb(14, 14, 14, 0.8);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.full-size {\n  position: absolute;\n  top: 50%;\n  transform: translate(50%, -50%);\n  width: 50%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://w2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://w2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://w2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/animate.css":
/*!*****************************!*\
  !*** ./src/css/animate.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animate.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/animate.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!./animate.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/animate.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animate.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/animate.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://w2/./src/css/animate.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://w2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://w2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://w2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://w2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://w2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://w2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://w2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f3659b56c8a786c5a2fd")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "w2:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatew2"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;