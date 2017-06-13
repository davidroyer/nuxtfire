module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(34)('wks')
  , uid        = __webpack_require__(26)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(184)

module.exports = function (parentId, list, isProduction) {
  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    var context = __VUE_SSR_CONTEXT__
    var styles = context._styles

    if (!styles) {
      styles = context._styles = {}
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get : function() {
          return (
            context._renderedStyles ||
            (context._renderedStyles = renderStyles(styles))
          )
        }
      })
    }

    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        style.ids.push(part.id)
        style.css += '\n' + part.css
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(11)
  , createDesc = __webpack_require__(24);
module.exports = __webpack_require__(8) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(49)
  , toPrimitive    = __webpack_require__(37)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50)
  , defined = __webpack_require__(29);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(54)
  , enumBugKeys = __webpack_require__(31);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(21)
  , hide      = __webpack_require__(10)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_database__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_axios_js__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
var api = void 0,
    auth = void 0;




// export function createAPI ({ config, version }) {
//   Firebase.initializeApp(config)
//   return Firebase.database().ref(version)
// }
if (process.browser) {
  // firebase = require('firebase')

  var config = {
    apiKey: "AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",
    authDomain: "nuxtfire.firebaseapp.com",
    databaseURL: "https://nuxtfire.firebaseio.com",
    projectId: "nuxtfire",
    storageBucket: "nuxtfire.appspot.com",
    messagingSenderId: "355187584526"
  };
  // var firebaseApp = firebase.initializeApp(config)
  __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config);
  api = __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.database().ref();
  auth = __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.auth();
  console.log(auth);
}
var store = {
  state: {
    currentKey: '',
    mainMenuIsOpen: false,
    api: api,
    auth: auth,
    posts: {}
  },

  setCurrentKey: function setCurrentKey(key) {
    this.state.currentKey = key;
  },
  GetPosts: function GetPosts() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_3__plugins_axios_js__["a" /* default */].get('posts.json').then(function (res) {
      console.log(res.data);
      _this.state.posts = res.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f
  , has = __webpack_require__(9)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: 'https://nuxtfire.firebaseio.com/'
}));

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys')
  , uid    = __webpack_require__(26);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(3)
  , LIBRARY        = __webpack_require__(22)
  , wksExt         = __webpack_require__(39)
  , defineProperty = __webpack_require__(11).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase_app = __webpack_require__(142);

// Export a single instance of firebase app
var firebase = (0, _firebase_app.createFirebaseNamespace)(); /**
                                                             * Copyright 2017 Google Inc.
                                                             *
                                                             * Licensed under the Apache License, Version 2.0 (the "License");
                                                             * you may not use this file except in compliance with the License.
                                                             * You may obtain a copy of the License at
                                                             *
                                                             *   http://www.apache.org/licenses/LICENSE-2.0
                                                             *
                                                             * Unless required by applicable law or agreed to in writing, software
                                                             * distributed under the License is distributed on an "AS IS" BASIS,
                                                             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                             * See the License for the specific language governing permissions and
                                                             * limitations under the License.
                                                             */
// Import the createFirebaseNamespace function
exports.default = firebase;
module.exports = exports['default'];
//# sourceMappingURL=app.js.map


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var transitionsKeys = ['name', 'mode', 'css', 'type', 'enterClass', 'leaveClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'enterToClass', 'leaveToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;

    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key];
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(19);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(13)(function(){
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(22)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(55)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(9)
  , Iterators      = __webpack_require__(18)
  , $iterCreate    = __webpack_require__(104)
  , setToStringTag = __webpack_require__(25)
  , getPrototypeOf = __webpack_require__(114)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(7)
  , dPs         = __webpack_require__(111)
  , enumBugKeys = __webpack_require__(31)
  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(48).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(54)
  , hiddenKeys = __webpack_require__(31).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(9)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(97)(false)
  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(21)
  , invoke             = __webpack_require__(100)
  , html               = __webpack_require__(48)
  , cel                = __webpack_require__(30)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(15)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(119)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(51)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(10)
  , Iterators     = __webpack_require__(18)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var scope = void 0;
if (typeof global !== 'undefined') {
    scope = global;
} else if (typeof self !== 'undefined') {
    scope = self;
} else {
    try {
        scope = Function('return this')();
    } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
    }
}
var PromiseImpl = scope.Promise || __webpack_require__(146);
var local = exports.local = {
    Promise: PromiseImpl,
    GoogPromise: PromiseImpl
};
//# sourceMappingURL=shared_promise.js.map


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__App_vue__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__router_js__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });













// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__["a" /* default */]);
// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__["a" /* default */]);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

if (false) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Includes external plugins

__webpack_require__(71);

// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_4__router_js__["a" /* default */],

  _nuxt: {
    defaultTransition: defaultTransition,
    transitions: [defaultTransition],
    setTransitions: function setTransitions(transitions) {
      if (!Array.isArray(transitions)) {
        transitions = [transitions];
      }
      transitions = transitions.map(function (transition) {
        if (!transition) {
          transition = defaultTransition;
        } else if (typeof transition === 'string') {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
        } else {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
        }
        return transition;
      });
      this.$options._nuxt.transitions = transitions;
      return transitions;
    },

    err: null,
    dateErr: null,
    error: function error(err) {
      err = err || null;
      if (typeof err === 'string') {
        err = { statusCode: 500, message: err };
      }
      this.$options._nuxt.dateErr = Date.now();
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_8__App_vue___default.a);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ __webpack_exports__["c"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ __webpack_exports__["b"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["d"] = promiseSeries;
/* harmony export (immutable) */ __webpack_exports__["e"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ __webpack_exports__["a"] = urlJoin;
/* unused harmony export compile */






function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,

    route: context.to ? context.to : context.route,
    error: context.error,
    base: '/',
    env: {}
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    ctx._redirected = true;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promiseSeries(promises, context) {
  if (!promises.length || context._redirected) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve();
  }
  return promisify(promises[0], context).then(function () {
    return promiseSeries(promises.slice(1), context);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a)) {
    promise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _9f4148e8 =  false ? function () {
		return System.import('/Users/droyer/Playground-2017/nuxtfire/pages/index.vue');
} : __webpack_require__(158);

var _61604ed0 =  false ? function () {
		return System.import('/Users/droyer/Playground-2017/nuxtfire/pages/posts/index.vue');
} : __webpack_require__(160);

var _3c62a0ee =  false ? function () {
		return System.import('/Users/droyer/Playground-2017/nuxtfire/pages/admin.vue');
} : __webpack_require__(156);

var _deb0fe72 =  false ? function () {
		return System.import('/Users/droyer/Playground-2017/nuxtfire/pages/about.vue');
} : __webpack_require__(155);

var _07473f5a =  false ? function () {
		return System.import('/Users/droyer/Playground-2017/nuxtfire/pages/contact.vue');
} : __webpack_require__(157);

var _5fa9ad88 =  false ? function () {
		return System.import('/Users/droyer/Playground-2017/nuxtfire/pages/posts/_slug.vue');
} : __webpack_require__(159);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
		// savedPosition is only available for popstate navigations.
		if (savedPosition) {
				return savedPosition;
		} else {
				var position = {};
				// if no children detected
				if (to.matched.length < 2) {
						// scroll to the top of the page
						position = { x: 0, y: 0 };
				} else if (to.matched.some(function (r) {
						return r.components.default.options.scrollToTop;
				})) {
						// if one of the children has scrollToTop option set to true
						position = { x: 0, y: 0 };
				}
				// if link has anchor,  scroll to anchor by returning the selector
				if (to.hash) {
						position = { selector: to.hash };
				}
				return position;
		}
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
		mode: 'history',
		base: '/',
		linkActiveClass: 'nuxt-link-active',
		scrollBehavior: scrollBehavior,
		routes: [{
				path: "/",
				component: _9f4148e8,
				name: "index"
		}, {
				path: "/posts",
				component: _61604ed0,
				name: "posts"
		}, {
				path: "/admin",
				component: _3c62a0ee,
				name: "admin"
		}, {
				path: "/about",
				component: _deb0fe72,
				name: "about"
		}, {
				path: "/contact",
				component: _07473f5a,
				name: "contact"
		}, {
				path: "/posts/:slug",
				component: _5fa9ad88,
				name: "posts-slug"
		}]
}));

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(64);



var debug = __webpack_require__(65)('nuxt:render');
debug.color = 4; // force blue color







var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_5__index__["a" /* app */]);

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // Add store to the context

  // Nuxt object
  context.nuxt = { data: [], error: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    // if nuxt generate
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* urlJoin */])('/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_5__index__["b" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_5__index__["b" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getContext */])(context);
  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* getMatchedComponents */])(context.route);

  var promise = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();

  return promise.then(function () {
    // Sanitize Components
    Components = Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      return Component;
    });
    // Set layout
    return _app.setLayout(Components.length ? Components[0].options.layout : '');
  }).then(function (layout) {
    // Call middleware
    var midd = [];
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
    midd = midd.map(function (name) {
      if (typeof __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */][name] !== 'function') {
        context.nuxt.error = context.error({ statusCode: 500, message: 'Unknown middleware ' + name });
      }
      return __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */][name];
    });
    if (context.nuxt.error) return;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* promiseSeries */])(midd, ctx);
  }).then(function () {
    // Call .validate()
    var isValid = true;
    Components.forEach(function (Component) {
      if (!isValid) return;
      if (typeof Component.options.validate !== 'function') return;
      isValid = Component.options.validate({
        params: context.route.params || {},
        query: context.route.query || {}
      });
    });
    if (!isValid) {
      // Don't server-render the page in generate mode
      if (context._generate) {
        context.nuxt.serverRendered = false;
      }
      // Call the 404 error by making the Components array empty
      Components = [];
      return _app;
    }
    // Call data & fetch hooks on components matched by the route.
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component) {
      var promises = [];
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.' });

      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;

    return _app;
  }).catch(function (error) {
    if (error && (error instanceof Error || error.constructor.toString().indexOf('Error()') !== -1)) {
      var statusCode = error.statusCode || error.status || error.response && error.response.status || 500;
      error = { statusCode: statusCode, message: error.message };
    } else if (typeof error === 'string') {
      error = { statusCode: 500, message: error };
    }
    context.nuxt.error = context.error(error);

    return _app;
  });
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue__);

//
//
//
//
//
//
//



var layouts = {

  "_admin":  false ? function () {
    return System.import('/Users/droyer/Playground-2017/nuxtfire/layouts/admin.vue');
  } : __webpack_require__(153),

  "_default":  false ? function () {
    return System.import('/Users/droyer/Playground-2017/nuxtfire/layouts/default.vue');
  } : __webpack_require__(154)

};

/* harmony default export */ __webpack_exports__["default"] = ({
  head: { "title": "David Royer - Web Designer & Developer", "titleTemplate": "%s - David Royer - Web Designer & Developer", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "name": "description", "content": "Personal site of David Royer. Front-End Web Designer and Developer" }], "link": [{ "rel": "preload", "as": "style", "href": "https://fonts.googleapis.com/css?family=Roboto" }, { "rel": "preload", "as": "style", "href": "https://fonts.googleapis.com/icon?family=Material+Icons" }] },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },

  mounted: function mounted() {
    this.$loading = this.$refs.loading;
    this.$nuxt.$loading = this.$loading;
  },


  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout);
      }
      this.layout = layouts[_layout];
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this.layout);
    },
    loadLayout: function loadLayout(_layout) {
      var _this = this;

      return layouts[_layout]().then(function (Component) {
        layouts[_layout] = Component;
        _this.layout = layouts[_layout];
        return _this.layout;
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
        console.error(e);
      });
    }
  },
  components: {
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue___default.a
  }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nuxt-error',
  props: ['error'],
  head: function head() {
    return {
      title: this.error.message || 'An error occured'
    };
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: 'black',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue__);
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // Bind $nuxt.setLayout(layout) to $root.setLayout
    this.setLayout = this.$root.setLayout.bind(this.$root);
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    if (this.$root.$loading && this.$root.$loading.start) {
      this.$loading = this.$root.$loading;
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue___default.a
  }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

// import axios from '~plugins/axios'
// var dataStore = require('../services/dataStore.js')
// var Store = dataStore.store

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currentRouteKey: '',
      links: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/about',
        title: 'About'
      }, {
        href: '/contact',
        title: 'Contact'
      }],
      posts: {}
    };
  },
  created: function created() {},


  methods: {
    saveNewPos: function saveNewPos() {}
  }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_axios__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var dataStore = __webpack_require__(20);
var Store = dataStore.store;
var State = Store.state;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      drawerOpen: false,
      currentRouteKey: '',
      links: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/about',
        title: 'About'
      }, {
        href: '/contact',
        title: 'Contact'
      }],
      blogPosts: {},
      currentPost: {}
    };
  },

  computed: {
    computedPosts: function computedPosts() {
      return State.posts;
    }
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    // this.getPostsFromStore()
    this.getPosts();
    // this.testFire()
  },

  // beforeRouteLeave (to, from, next) {
  //   // console.log('FIRED');
  //   //   console.log(this.currentRouteKey);
  //     // next()
  //   // called when the route that renders this component is about to
  //   // be navigated away from.
  //   // has access to `this` component instance.
  // },
  methods: {
    getPostsFromStore: function getPostsFromStore() {
      Store.GetPosts();
      // console.log('');
    },
    getPosts: function getPosts() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__plugins_axios__["a" /* default */].get('posts.json').then(function (res) {
        _this.blogPosts = res.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    handleRoute: function handleRoute(key, slug) {
      Store.setCurrentKey(key);
      localStorage.setItem('currentKey', key);
      this.$router.push({ path: '/posts/' + slug });
    },
    handleNuxtLink: function handleNuxtLink(key) {
      this.currentRouteKey = key;
      Store.setCurrentKey(key);
    }
  }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_axios__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var dataStore = __webpack_require__(20);
var Store = dataStore.store;
var Auth = Store.state.auth;
console.log(Auth);
// const _ = require('lodash')
/* harmony default export */ __webpack_exports__["default"] = ({
  // layout: 'admin',
  data: function data() {
    return {
      newTitle: '',
      newContent: '',
      activeUser: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    Auth.onAuthStateChanged(function (user) {
      console.log('Auth Fired');
      if (user) {
        _this.activeUser = true;
      }
    });
  },


  methods: {
    saveNewPost: function saveNewPost() {
      __WEBPACK_IMPORTED_MODULE_0__plugins_axios__["a" /* default */].post('/testing.json', {
        title: this.newTitle,
        content: this.newContent
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },
    login: function login() {
      var email = 'droyer01@gmail.com';
      var password = 'Dance4life';
      Auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },
    logout: function logout() {
      var _this2 = this;

      Auth.signOut().then(function () {
        _this2.activeUser = false;
        console.log('User signed out');
      }).catch(function (err) {
        return console.log(error);
      });
    }
  }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  mounted: function mounted() {},

  methods: {}
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);



//
//
//
//
//
//
//
//
//
//
//


var dataStore = __webpack_require__(20);
var Store = dataStore.store;
if (process.browser) {
  var storageKey = localStorage.currentKey;
  console.log(storageKey);
  console.log('Current Key:  ', Store.state.currentKey);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  // async asyncData ({ params }) {
  //   // We can use async/await ES6 feature
  //   console.log('fired');
  //   let { data } = await axios.get(`https://nuxtfire.firebaseio.com/posts.json?orderBy="slug"&equalTo="${params.slug}"&print=pretty`)
  //   // var postData = post.data
  //   var keys = Object.keys(data)
  //   var key = keys[0]
  //   // this.currentPost = data[key]
  //
  //   return { post: data[key] }
  // },
  head: function head() {
    return {
      title: this.post.title
    };
  },
  data: function data(route) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var slug, _ref, data, keys, key, postData;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = route.params.slug;
              _context.next = 3;
              return (
                //  axios.get(`https://nuxtfire.firebaseio.com/posts/${Store.state.currentKey}.json`)
                __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('https://nuxtfire.firebaseio.com/posts.json?orderBy="slug"&equalTo="' + slug + '"&print=pretty')
              );

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              keys = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(data);
              key = keys[0];
              postData = data[key];
              return _context.abrupt('return', {
                post: postData

              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  // data() {
  //   return {
  //     currentKey: Store.state.currentKey
  //     // testStorageKey: localStorage.currentKey,
  //     // post: {}
  //   }
  // },
  watch: {
    // '$route': 'getPost'
  },
  computed: {
    updatedKey: function updatedKey() {
      if (process.browser) {
        return localStorage.currentKey;
      }
    }
  },
  methods: {
    getPost: function getPost() {
      // if (process.browser) {
      //   var slug = 'title-one'
      //   axios.get(`posts.json?orderBy="slug"&equalTo="${slug}"&print=pretty`)
      //   .then((post) => {
      //     console.log('TEST FIRE HERE');
      //     console.log(post);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      //
      //   var key = localStorage.currentKey
      //   axios.get(`https://nuxtfire.firebaseio.com/posts/${key}.json`)
      //     .then((res) => {
      //       this.post = res.data
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // }

    }
  },
  created: function created() {}
  // this.getPost()

  // data() {
  //   return {
  //     testKey: Store.state.currentKey
  //   }
  // },
  // props: ['name']
  // props: {
  //   name: {
  //     type: String,
  //     default: 'Vue!'
  //   }
  // }
  // asyncData ({ params, error }) {
  //   return axios.get(`posts/${+params.key}`)
  //   .then((res) => {
  //     // res.data
  //     console.log(res.data)
  //   })
  //   .catch(() => {
  //     error({ message: 'User not found', statusCode: 404 })
  //   })
  // }

});
// asyncData ({ params, error }) {
//   return axios.get(`posts/${+params.slug}`)
//   .then((res) => res.data)
//   .catch(() => {
//     error({ message: 'User not found', statusCode: 404 })
//   })
// }

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//


var dataStore = __webpack_require__(20);
var Store = dataStore.store;
if (process.browser) {
  var storageKey = localStorage.currentKey;
  console.log(storageKey);
  console.log('Current Key:  ', Store.state.currentKey);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  // async data( route ) {
  //   // const { key } = Store.state.currentKey
  //   const { data } = await axios.get(`https://nuxtfire.firebaseio.com/posts/${Store.state.currentKey}.json`)
  //
  //   return {
  //     post: data,
  //     currentKey: Store.state.currentKey
  //   }
  // },
  data: function data() {
    return {
      currentKey: Store.state.currentKey,
      // testStorageKey: localStorage.currentKey,
      post: {}
    };
  },

  watch: {
    '$route': 'getPost'
  },
  computed: {
    updatedKey: function updatedKey() {
      if (process.browser) {
        return localStorage.currentKey;
      }
    }
  },
  methods: {
    getPost: function getPost() {
      var _this = this;

      if (process.browser) {
        var key = localStorage.currentKey;
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://nuxtfire.firebaseio.com/posts/' + key + '.json').then(function (res) {
          _this.post = res.data;
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  },
  created: function created() {
    this.getPost();
  }
  // data() {
  //   return {
  //     testKey: Store.state.currentKey
  //   }
  // },
  // props: ['name']
  // props: {
  //   name: {
  //     type: String,
  //     default: 'Vue!'
  //   }
  // }
  // asyncData ({ params, error }) {
  //   return axios.get(`posts/${+params.key}`)
  //   .then((res) => {
  //     // res.data
  //     console.log(res.data)
  //   })
  //   .catch(() => {
  //     error({ message: 'User not found', statusCode: 404 })
  //   })
  // }

});
// asyncData ({ params, error }) {
//   return axios.get(`posts/${+params.slug}`)
//   .then((res) => res.data)
//   .catch(() => {
//     error({ message: 'User not found', statusCode: 404 })
//   })
// }

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(43);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(86);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(85);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(3)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(3).Object.assign;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(3).Object.keys;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(125);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(58);
__webpack_require__(127);
__webpack_require__(128);
module.exports = __webpack_require__(3).Symbol;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(60);
module.exports = __webpack_require__(39).f('iterator');

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(57)
  , toIndex   = __webpack_require__(120);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14)
  , gOPS    = __webpack_require__(32)
  , pIE     = __webpack_require__(23);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(21)
  , call        = __webpack_require__(103)
  , isArrayIter = __webpack_require__(101)
  , anObject    = __webpack_require__(7)
  , toLength    = __webpack_require__(57)
  , getIterFn   = __webpack_require__(121)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(18)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(15);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(52)
  , descriptor     = __webpack_require__(24)
  , setToStringTag = __webpack_require__(25)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(14)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(26)('meta')
  , isObject = __webpack_require__(17)
  , has      = __webpack_require__(9)
  , setDesc  = __webpack_require__(11).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(13)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(56).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(15)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(14)
  , gOPS     = __webpack_require__(32)
  , pIE      = __webpack_require__(23)
  , toObject = __webpack_require__(36)
  , IObject  = __webpack_require__(50)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(11)
  , anObject = __webpack_require__(7)
  , getKeys  = __webpack_require__(14);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(23)
  , createDesc     = __webpack_require__(24)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(37)
  , has            = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(49)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(53).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(9)
  , toObject    = __webpack_require__(36)
  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16)
  , core    = __webpack_require__(3)
  , fails   = __webpack_require__(13);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(10);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(3)
  , dP          = __webpack_require__(11)
  , DESCRIPTORS = __webpack_require__(8)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(7)
  , aFunction = __webpack_require__(28)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35)
  , defined   = __webpack_require__(29);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(47)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(18);
module.exports = __webpack_require__(3).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(95)
  , step             = __webpack_require__(106)
  , Iterators        = __webpack_require__(18)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(51)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(16);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(110)});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(36)
  , $keys    = __webpack_require__(14);

__webpack_require__(115)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(22)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(21)
  , classof            = __webpack_require__(47)
  , $export            = __webpack_require__(16)
  , isObject           = __webpack_require__(17)
  , aFunction          = __webpack_require__(28)
  , anInstance         = __webpack_require__(96)
  , forOf              = __webpack_require__(99)
  , speciesConstructor = __webpack_require__(118)
  , task               = __webpack_require__(56).set
  , microtask          = __webpack_require__(109)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(116)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(25)($Promise, PROMISE);
__webpack_require__(117)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(105)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(9)
  , DESCRIPTORS    = __webpack_require__(8)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(55)
  , META           = __webpack_require__(108).KEY
  , $fails         = __webpack_require__(13)
  , shared         = __webpack_require__(34)
  , setToStringTag = __webpack_require__(25)
  , uid            = __webpack_require__(26)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(39)
  , wksDefine      = __webpack_require__(38)
  , keyOf          = __webpack_require__(107)
  , enumKeys       = __webpack_require__(98)
  , isArray        = __webpack_require__(102)
  , anObject       = __webpack_require__(7)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(37)
  , createDesc     = __webpack_require__(24)
  , _create        = __webpack_require__(52)
  , gOPNExt        = __webpack_require__(113)
  , $GOPD          = __webpack_require__(112)
  , $DP            = __webpack_require__(11)
  , $keys          = __webpack_require__(14)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(53).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(23).f  = $propertyIsEnumerable;
  __webpack_require__(32).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(22)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.error-page[data-v-051f3c9e] {\n  color: #000;\n  background: #fff;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  font-family: \"SF UI Text\", \"Helvetica Neue\", \"Lucida Grande\";\n  text-align: center;\n  padding-top: 20%;\n}\n.error-code[data-v-051f3c9e] {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  vertical-align: top;\n  border-right: 1px solid rgba(0, 0, 0, 0.298039);\n  margin: 0px 20px 0px 0px;\n  padding: 10px 23px;\n}\n.error-wrapper-message[data-v-051f3c9e] {\n  display: inline-block;\n  text-align: left;\n  line-height: 49px;\n  height: 49px;\n  vertical-align: middle;\n}\n.error-message[data-v-051f3c9e] {\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 0px;\n}\n.error-link[data-v-051f3c9e] {\n  color: #00BCD4;\n  font-weight: normal;\n  text-decoration: none;\n  font-size: 14px;\n}\n", ""]);

// exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.35s;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\nbody {\n  /*padding-top: 1.5rem;*/\n}\nnav {\n  padding: 1.5rem 0;\n}\nh1 {\n  cursor: pointer;\n  display: inline-block;\n}\n.blogLinks {\n  list-style-type: none;\n}\n.blogLinks a {\n  display: block;\n  color: #0275d8 !important;\n  cursor: pointer;\n}\nnav li {\n  color: darkblue;\n  cursor: pointer;\n  list-style-type: none;\n  transition: all .35s ease-in-out;\n  padding: 0 1em;\n  display: inline-block;\n  border-bottom: 2px solid transparent;\n  margin: .5em;\n}\nnav li:hover {\n  border-bottom: 2px solid darkblue;\n}\nli.nuxt-link-active {\n    font-weight: 800;\n}\n", ""]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\nbody {\npadding-top: 0 !important;\n}\nnav {\n  /*padding: 1.5rem 0;*/\n}\nh1 {\n  cursor: pointer;\n  display: inline-block;\n}\n.blogLinks {\n  list-style-type: none;\n}\n.blogLinks a {\n  display: block;\n  color: #0275d8 !important;\n  cursor: pointer;\n}\n.toolbar ul {\n  margin-bottom: 0;\n}\nnav li {\n  /*color: darkblue;*/\n  cursor: pointer;\n  color: darkpurple;\n  list-style-type: none;\n  transition: all .35s ease-in-out;\n  padding: 0 1em;\n  display: inline-block;\n  border-bottom: 2px solid transparent;\n  margin: .5em;\n}\n.toolbar li {\n    color: white;\n}\nnav li:hover {\n  border-bottom: 2px solid darkblue;\n}\nli.nuxt-link-active {\n    font-weight: 800;\n}\n.nuxt-link-active.list__tile .list__tile__title {\n    font-weight: 500;\n    color: #94cdfa;\n    text-decoration: none;\n}\n.nuxt-link-active.list__tile {\n  text-decoration: none;\n}\n.navigation-drawer > .list .list__tile {\n    /*transition: none;*/\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.progress[data-v-4d9492b6] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n", ""]);

// exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.page-enter-active,\n.page-leave-active {\n  transition: opacity 0.3s;\n}\n.page-enter,\n.page-leave-active {\n  opacity: 0;\n}\nbody {\n  padding-top: 0 !important;\n}\n", ""]);

// exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Material Icons'), local('MaterialIcons-Regular'), url(\"https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2\") format('woff2');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n.light--text {\n  color: #fff;\n}\n.dark--text {\n  color: rgba(0,0,0,0.87);\n}\n.elevation-0 {\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12) !important;\n}\n.elevation-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12) !important;\n}\n.elevation-2 {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12) !important;\n}\n.elevation-3 {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12) !important;\n}\n.elevation-4 {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12) !important;\n}\n.elevation-5 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12) !important;\n}\n.elevation-6 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12) !important;\n}\n.elevation-7 {\n  box-shadow: 0 4px 5px -2px rgba(0,0,0,0.2), 0 7px 10px 1px rgba(0,0,0,0.14), 0 2px 16px 1px rgba(0,0,0,0.12) !important;\n}\n.elevation-8 {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12) !important;\n}\n.elevation-9 {\n  box-shadow: 0 5px 6px -3px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12) !important;\n}\n.elevation-10 {\n  box-shadow: 0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12) !important;\n}\n.elevation-11 {\n  box-shadow: 0 6px 7px -4px rgba(0,0,0,0.2), 0 11px 15px 1px rgba(0,0,0,0.14), 0 4px 20px 3px rgba(0,0,0,0.12) !important;\n}\n.elevation-12 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-13 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 13px 19px 2px rgba(0,0,0,0.14), 0 5px 24px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-14 {\n  box-shadow: 0 7px 9px -4px rgba(0,0,0,0.2), 0 14px 21px 2px rgba(0,0,0,0.14), 0 5px 26px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-15 {\n  box-shadow: 0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-16 {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-17 {\n  box-shadow: 0 8px 11px -5px rgba(0,0,0,0.2), 0 17px 26px 2px rgba(0,0,0,0.14), 0 6px 32px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-18 {\n  box-shadow: 0 9px 11px -5px rgba(0,0,0,0.2), 0 18px 28px 2px rgba(0,0,0,0.14), 0 7px 34px 6px rgba(0,0,0,0.12) !important;\n}\n.elevation-19 {\n  box-shadow: 0 9px 12px -6px rgba(0,0,0,0.2), 0 19px 29px 2px rgba(0,0,0,0.14), 0 7px 36px 6px rgba(0,0,0,0.12) !important;\n}\n.elevation-20 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 20px 31px 3px rgba(0,0,0,0.14), 0 8px 38px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-21 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 21px 33px 3px rgba(0,0,0,0.14), 0 8px 40px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-22 {\n  box-shadow: 0 10px 14px -6px rgba(0,0,0,0.2), 0 22px 35px 3px rgba(0,0,0,0.14), 0 8px 42px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-23 {\n  box-shadow: 0 11px 14px -7px rgba(0,0,0,0.2), 0 23px 36px 3px rgba(0,0,0,0.14), 0 9px 44px 8px rgba(0,0,0,0.12) !important;\n}\n.elevation-24 {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12) !important;\n}\n.application {\n  -webkit-backface-visibility: hidden;\n  position: relative;\n}\n.application--dark {\n  background: #303030;\n  color: #fff;\n}\n.application--light {\n  background: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application--toolbar > main > .container {\n  min-height: calc(100vh - 56px);\n}\n.application--toolbar.application--footer > main > .container {\n  min-height: calc(100vh - 56px - 36px);\n}\n.application--footer > main > .container {\n  min-height: calc(100vh - 36px);\n}\n.application--footer-fixed > aside.navigation-drawer {\n  max-height: calc(100vh - 36px);\n}\n.application--footer-fixed.application--toolbar > aside.navigation-drawer.navigation-drawer--clipped {\n  max-height: calc(100vh - 56px - 36px);\n}\n.primary {\n  background-color: #9c27b0 !important;\n  border-color: #9c27b0 !important;\n}\n.primary--text {\n  color: #9c27b0 !important;\n}\n.primary--after:after {\n  background: #9c27b0 !important;\n}\n.accent {\n  background-color: #ce93d8 !important;\n  border-color: #ce93d8 !important;\n}\n.accent--text {\n  color: #ce93d8 !important;\n}\n.accent--after:after {\n  background: #ce93d8 !important;\n}\n.secondary {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n.secondary--text {\n  color: #424242 !important;\n}\n.secondary--after:after {\n  background: #424242 !important;\n}\n.info {\n  background-color: #0d47a1 !important;\n  border-color: #0d47a1 !important;\n}\n.info--text {\n  color: #0d47a1 !important;\n}\n.info--after:after {\n  background: #0d47a1 !important;\n}\n.warning {\n  background-color: #ffb300 !important;\n  border-color: #ffb300 !important;\n}\n.warning--text {\n  color: #ffb300 !important;\n}\n.warning--after:after {\n  background: #ffb300 !important;\n}\n.error {\n  background-color: #b71c1c !important;\n  border-color: #b71c1c !important;\n}\n.error--text {\n  color: #b71c1c !important;\n}\n.error--after:after {\n  background: #b71c1c !important;\n}\n.success {\n  background-color: #2e7d32 !important;\n  border-color: #2e7d32 !important;\n}\n.success--text {\n  color: #2e7d32 !important;\n}\n.success--after:after {\n  background: #2e7d32 !important;\n}\n.black {\n  background-color: #000 !important;\n  border-color: #000 !important;\n}\n.black--text {\n  color: #000 !important;\n}\n.black--after:after {\n  background: #000 !important;\n}\n.white {\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.white--text {\n  color: #fff !important;\n}\n.white--after:after {\n  background: #fff !important;\n}\n.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.transparent--text {\n  color: transparent !important;\n}\n.transparent--after:after {\n  background: transparent !important;\n}\n.red {\n  background-color: #f44336 !important;\n  border-color: #f44336 !important;\n}\n.red--text {\n  color: #f44336 !important;\n}\n.red--after:after {\n  background: #f44336 !important;\n}\n.red.lighten-5 {\n  background-color: #ffebee !important;\n  border-color: #ffebee !important;\n}\n.red.lighten-5--after:after {\n  background-color: #ffebee !important;\n}\n.red--text.text--lighten-5 {\n  color: #ffebee !important;\n}\n.red.lighten-4 {\n  background-color: #ffcdd2 !important;\n  border-color: #ffcdd2 !important;\n}\n.red.lighten-4--after:after {\n  background-color: #ffcdd2 !important;\n}\n.red--text.text--lighten-4 {\n  color: #ffcdd2 !important;\n}\n.red.lighten-3 {\n  background-color: #ef9a9a !important;\n  border-color: #ef9a9a !important;\n}\n.red.lighten-3--after:after {\n  background-color: #ef9a9a !important;\n}\n.red--text.text--lighten-3 {\n  color: #ef9a9a !important;\n}\n.red.lighten-2 {\n  background-color: #e57373 !important;\n  border-color: #e57373 !important;\n}\n.red.lighten-2--after:after {\n  background-color: #e57373 !important;\n}\n.red--text.text--lighten-2 {\n  color: #e57373 !important;\n}\n.red.lighten-1 {\n  background-color: #ef5350 !important;\n  border-color: #ef5350 !important;\n}\n.red.lighten-1--after:after {\n  background-color: #ef5350 !important;\n}\n.red--text.text--lighten-1 {\n  color: #ef5350 !important;\n}\n.red.darken-1 {\n  background-color: #e53935 !important;\n  border-color: #e53935 !important;\n}\n.red.darken-1--after:after {\n  background-color: #e53935 !important;\n}\n.red--text.text--darken-1 {\n  color: #e53935 !important;\n}\n.red.darken-2 {\n  background-color: #d32f2f !important;\n  border-color: #d32f2f !important;\n}\n.red.darken-2--after:after {\n  background-color: #d32f2f !important;\n}\n.red--text.text--darken-2 {\n  color: #d32f2f !important;\n}\n.red.darken-3 {\n  background-color: #c62828 !important;\n  border-color: #c62828 !important;\n}\n.red.darken-3--after:after {\n  background-color: #c62828 !important;\n}\n.red--text.text--darken-3 {\n  color: #c62828 !important;\n}\n.red.darken-4 {\n  background-color: #b71c1c !important;\n  border-color: #b71c1c !important;\n}\n.red.darken-4--after:after {\n  background-color: #b71c1c !important;\n}\n.red--text.text--darken-4 {\n  color: #b71c1c !important;\n}\n.red.accent-1 {\n  background-color: #ff8a80 !important;\n  border-color: #ff8a80 !important;\n}\n.red.accent-1--after:after {\n  background-color: #ff8a80 !important;\n}\n.red--text.text--accent-1 {\n  color: #ff8a80 !important;\n}\n.red.accent-2 {\n  background-color: #ff5252 !important;\n  border-color: #ff5252 !important;\n}\n.red.accent-2--after:after {\n  background-color: #ff5252 !important;\n}\n.red--text.text--accent-2 {\n  color: #ff5252 !important;\n}\n.red.accent-3 {\n  background-color: #ff1744 !important;\n  border-color: #ff1744 !important;\n}\n.red.accent-3--after:after {\n  background-color: #ff1744 !important;\n}\n.red--text.text--accent-3 {\n  color: #ff1744 !important;\n}\n.red.accent-4 {\n  background-color: #d50000 !important;\n  border-color: #d50000 !important;\n}\n.red.accent-4--after:after {\n  background-color: #d50000 !important;\n}\n.red--text.text--accent-4 {\n  color: #d50000 !important;\n}\n.pink {\n  background-color: #e91e63 !important;\n  border-color: #e91e63 !important;\n}\n.pink--text {\n  color: #e91e63 !important;\n}\n.pink--after:after {\n  background: #e91e63 !important;\n}\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n  border-color: #fce4ec !important;\n}\n.pink.lighten-5--after:after {\n  background-color: #fce4ec !important;\n}\n.pink--text.text--lighten-5 {\n  color: #fce4ec !important;\n}\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n  border-color: #f8bbd0 !important;\n}\n.pink.lighten-4--after:after {\n  background-color: #f8bbd0 !important;\n}\n.pink--text.text--lighten-4 {\n  color: #f8bbd0 !important;\n}\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n  border-color: #f48fb1 !important;\n}\n.pink.lighten-3--after:after {\n  background-color: #f48fb1 !important;\n}\n.pink--text.text--lighten-3 {\n  color: #f48fb1 !important;\n}\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n  border-color: #f06292 !important;\n}\n.pink.lighten-2--after:after {\n  background-color: #f06292 !important;\n}\n.pink--text.text--lighten-2 {\n  color: #f06292 !important;\n}\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n  border-color: #ec407a !important;\n}\n.pink.lighten-1--after:after {\n  background-color: #ec407a !important;\n}\n.pink--text.text--lighten-1 {\n  color: #ec407a !important;\n}\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n  border-color: #d81b60 !important;\n}\n.pink.darken-1--after:after {\n  background-color: #d81b60 !important;\n}\n.pink--text.text--darken-1 {\n  color: #d81b60 !important;\n}\n.pink.darken-2 {\n  background-color: #c2185b !important;\n  border-color: #c2185b !important;\n}\n.pink.darken-2--after:after {\n  background-color: #c2185b !important;\n}\n.pink--text.text--darken-2 {\n  color: #c2185b !important;\n}\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n  border-color: #ad1457 !important;\n}\n.pink.darken-3--after:after {\n  background-color: #ad1457 !important;\n}\n.pink--text.text--darken-3 {\n  color: #ad1457 !important;\n}\n.pink.darken-4 {\n  background-color: #880e4f !important;\n  border-color: #880e4f !important;\n}\n.pink.darken-4--after:after {\n  background-color: #880e4f !important;\n}\n.pink--text.text--darken-4 {\n  color: #880e4f !important;\n}\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n  border-color: #ff80ab !important;\n}\n.pink.accent-1--after:after {\n  background-color: #ff80ab !important;\n}\n.pink--text.text--accent-1 {\n  color: #ff80ab !important;\n}\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n  border-color: #ff4081 !important;\n}\n.pink.accent-2--after:after {\n  background-color: #ff4081 !important;\n}\n.pink--text.text--accent-2 {\n  color: #ff4081 !important;\n}\n.pink.accent-3 {\n  background-color: #f50057 !important;\n  border-color: #f50057 !important;\n}\n.pink.accent-3--after:after {\n  background-color: #f50057 !important;\n}\n.pink--text.text--accent-3 {\n  color: #f50057 !important;\n}\n.pink.accent-4 {\n  background-color: #c51162 !important;\n  border-color: #c51162 !important;\n}\n.pink.accent-4--after:after {\n  background-color: #c51162 !important;\n}\n.pink--text.text--accent-4 {\n  color: #c51162 !important;\n}\n.purple {\n  background-color: #9c27b0 !important;\n  border-color: #9c27b0 !important;\n}\n.purple--text {\n  color: #9c27b0 !important;\n}\n.purple--after:after {\n  background: #9c27b0 !important;\n}\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n  border-color: #f3e5f5 !important;\n}\n.purple.lighten-5--after:after {\n  background-color: #f3e5f5 !important;\n}\n.purple--text.text--lighten-5 {\n  color: #f3e5f5 !important;\n}\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n  border-color: #e1bee7 !important;\n}\n.purple.lighten-4--after:after {\n  background-color: #e1bee7 !important;\n}\n.purple--text.text--lighten-4 {\n  color: #e1bee7 !important;\n}\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n  border-color: #ce93d8 !important;\n}\n.purple.lighten-3--after:after {\n  background-color: #ce93d8 !important;\n}\n.purple--text.text--lighten-3 {\n  color: #ce93d8 !important;\n}\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n  border-color: #ba68c8 !important;\n}\n.purple.lighten-2--after:after {\n  background-color: #ba68c8 !important;\n}\n.purple--text.text--lighten-2 {\n  color: #ba68c8 !important;\n}\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n  border-color: #ab47bc !important;\n}\n.purple.lighten-1--after:after {\n  background-color: #ab47bc !important;\n}\n.purple--text.text--lighten-1 {\n  color: #ab47bc !important;\n}\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n  border-color: #8e24aa !important;\n}\n.purple.darken-1--after:after {\n  background-color: #8e24aa !important;\n}\n.purple--text.text--darken-1 {\n  color: #8e24aa !important;\n}\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n  border-color: #7b1fa2 !important;\n}\n.purple.darken-2--after:after {\n  background-color: #7b1fa2 !important;\n}\n.purple--text.text--darken-2 {\n  color: #7b1fa2 !important;\n}\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n  border-color: #6a1b9a !important;\n}\n.purple.darken-3--after:after {\n  background-color: #6a1b9a !important;\n}\n.purple--text.text--darken-3 {\n  color: #6a1b9a !important;\n}\n.purple.darken-4 {\n  background-color: #4a148c !important;\n  border-color: #4a148c !important;\n}\n.purple.darken-4--after:after {\n  background-color: #4a148c !important;\n}\n.purple--text.text--darken-4 {\n  color: #4a148c !important;\n}\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n  border-color: #ea80fc !important;\n}\n.purple.accent-1--after:after {\n  background-color: #ea80fc !important;\n}\n.purple--text.text--accent-1 {\n  color: #ea80fc !important;\n}\n.purple.accent-2 {\n  background-color: #e040fb !important;\n  border-color: #e040fb !important;\n}\n.purple.accent-2--after:after {\n  background-color: #e040fb !important;\n}\n.purple--text.text--accent-2 {\n  color: #e040fb !important;\n}\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n  border-color: #d500f9 !important;\n}\n.purple.accent-3--after:after {\n  background-color: #d500f9 !important;\n}\n.purple--text.text--accent-3 {\n  color: #d500f9 !important;\n}\n.purple.accent-4 {\n  background-color: #a0f !important;\n  border-color: #a0f !important;\n}\n.purple.accent-4--after:after {\n  background-color: #a0f !important;\n}\n.purple--text.text--accent-4 {\n  color: #a0f !important;\n}\n.deep-purple {\n  background-color: #673ab7 !important;\n  border-color: #673ab7 !important;\n}\n.deep-purple--text {\n  color: #673ab7 !important;\n}\n.deep-purple--after:after {\n  background: #673ab7 !important;\n}\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n  border-color: #ede7f6 !important;\n}\n.deep-purple.lighten-5--after:after {\n  background-color: #ede7f6 !important;\n}\n.deep-purple--text.text--lighten-5 {\n  color: #ede7f6 !important;\n}\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n  border-color: #d1c4e9 !important;\n}\n.deep-purple.lighten-4--after:after {\n  background-color: #d1c4e9 !important;\n}\n.deep-purple--text.text--lighten-4 {\n  color: #d1c4e9 !important;\n}\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n  border-color: #b39ddb !important;\n}\n.deep-purple.lighten-3--after:after {\n  background-color: #b39ddb !important;\n}\n.deep-purple--text.text--lighten-3 {\n  color: #b39ddb !important;\n}\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n  border-color: #9575cd !important;\n}\n.deep-purple.lighten-2--after:after {\n  background-color: #9575cd !important;\n}\n.deep-purple--text.text--lighten-2 {\n  color: #9575cd !important;\n}\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n  border-color: #7e57c2 !important;\n}\n.deep-purple.lighten-1--after:after {\n  background-color: #7e57c2 !important;\n}\n.deep-purple--text.text--lighten-1 {\n  color: #7e57c2 !important;\n}\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n  border-color: #5e35b1 !important;\n}\n.deep-purple.darken-1--after:after {\n  background-color: #5e35b1 !important;\n}\n.deep-purple--text.text--darken-1 {\n  color: #5e35b1 !important;\n}\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n  border-color: #512da8 !important;\n}\n.deep-purple.darken-2--after:after {\n  background-color: #512da8 !important;\n}\n.deep-purple--text.text--darken-2 {\n  color: #512da8 !important;\n}\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n  border-color: #4527a0 !important;\n}\n.deep-purple.darken-3--after:after {\n  background-color: #4527a0 !important;\n}\n.deep-purple--text.text--darken-3 {\n  color: #4527a0 !important;\n}\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n  border-color: #311b92 !important;\n}\n.deep-purple.darken-4--after:after {\n  background-color: #311b92 !important;\n}\n.deep-purple--text.text--darken-4 {\n  color: #311b92 !important;\n}\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n  border-color: #b388ff !important;\n}\n.deep-purple.accent-1--after:after {\n  background-color: #b388ff !important;\n}\n.deep-purple--text.text--accent-1 {\n  color: #b388ff !important;\n}\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n  border-color: #7c4dff !important;\n}\n.deep-purple.accent-2--after:after {\n  background-color: #7c4dff !important;\n}\n.deep-purple--text.text--accent-2 {\n  color: #7c4dff !important;\n}\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n  border-color: #651fff !important;\n}\n.deep-purple.accent-3--after:after {\n  background-color: #651fff !important;\n}\n.deep-purple--text.text--accent-3 {\n  color: #651fff !important;\n}\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n  border-color: #6200ea !important;\n}\n.deep-purple.accent-4--after:after {\n  background-color: #6200ea !important;\n}\n.deep-purple--text.text--accent-4 {\n  color: #6200ea !important;\n}\n.indigo {\n  background-color: #3f51b5 !important;\n  border-color: #3f51b5 !important;\n}\n.indigo--text {\n  color: #3f51b5 !important;\n}\n.indigo--after:after {\n  background: #3f51b5 !important;\n}\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n  border-color: #e8eaf6 !important;\n}\n.indigo.lighten-5--after:after {\n  background-color: #e8eaf6 !important;\n}\n.indigo--text.text--lighten-5 {\n  color: #e8eaf6 !important;\n}\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n  border-color: #c5cae9 !important;\n}\n.indigo.lighten-4--after:after {\n  background-color: #c5cae9 !important;\n}\n.indigo--text.text--lighten-4 {\n  color: #c5cae9 !important;\n}\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n  border-color: #9fa8da !important;\n}\n.indigo.lighten-3--after:after {\n  background-color: #9fa8da !important;\n}\n.indigo--text.text--lighten-3 {\n  color: #9fa8da !important;\n}\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n  border-color: #7986cb !important;\n}\n.indigo.lighten-2--after:after {\n  background-color: #7986cb !important;\n}\n.indigo--text.text--lighten-2 {\n  color: #7986cb !important;\n}\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n  border-color: #5c6bc0 !important;\n}\n.indigo.lighten-1--after:after {\n  background-color: #5c6bc0 !important;\n}\n.indigo--text.text--lighten-1 {\n  color: #5c6bc0 !important;\n}\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n  border-color: #3949ab !important;\n}\n.indigo.darken-1--after:after {\n  background-color: #3949ab !important;\n}\n.indigo--text.text--darken-1 {\n  color: #3949ab !important;\n}\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n  border-color: #303f9f !important;\n}\n.indigo.darken-2--after:after {\n  background-color: #303f9f !important;\n}\n.indigo--text.text--darken-2 {\n  color: #303f9f !important;\n}\n.indigo.darken-3 {\n  background-color: #283593 !important;\n  border-color: #283593 !important;\n}\n.indigo.darken-3--after:after {\n  background-color: #283593 !important;\n}\n.indigo--text.text--darken-3 {\n  color: #283593 !important;\n}\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n  border-color: #1a237e !important;\n}\n.indigo.darken-4--after:after {\n  background-color: #1a237e !important;\n}\n.indigo--text.text--darken-4 {\n  color: #1a237e !important;\n}\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n  border-color: #8c9eff !important;\n}\n.indigo.accent-1--after:after {\n  background-color: #8c9eff !important;\n}\n.indigo--text.text--accent-1 {\n  color: #8c9eff !important;\n}\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n  border-color: #536dfe !important;\n}\n.indigo.accent-2--after:after {\n  background-color: #536dfe !important;\n}\n.indigo--text.text--accent-2 {\n  color: #536dfe !important;\n}\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n  border-color: #3d5afe !important;\n}\n.indigo.accent-3--after:after {\n  background-color: #3d5afe !important;\n}\n.indigo--text.text--accent-3 {\n  color: #3d5afe !important;\n}\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n  border-color: #304ffe !important;\n}\n.indigo.accent-4--after:after {\n  background-color: #304ffe !important;\n}\n.indigo--text.text--accent-4 {\n  color: #304ffe !important;\n}\n.blue {\n  background-color: #2196f3 !important;\n  border-color: #2196f3 !important;\n}\n.blue--text {\n  color: #2196f3 !important;\n}\n.blue--after:after {\n  background: #2196f3 !important;\n}\n.blue.lighten-5 {\n  background-color: #e3f2fd !important;\n  border-color: #e3f2fd !important;\n}\n.blue.lighten-5--after:after {\n  background-color: #e3f2fd !important;\n}\n.blue--text.text--lighten-5 {\n  color: #e3f2fd !important;\n}\n.blue.lighten-4 {\n  background-color: #bbdefb !important;\n  border-color: #bbdefb !important;\n}\n.blue.lighten-4--after:after {\n  background-color: #bbdefb !important;\n}\n.blue--text.text--lighten-4 {\n  color: #bbdefb !important;\n}\n.blue.lighten-3 {\n  background-color: #90caf9 !important;\n  border-color: #90caf9 !important;\n}\n.blue.lighten-3--after:after {\n  background-color: #90caf9 !important;\n}\n.blue--text.text--lighten-3 {\n  color: #90caf9 !important;\n}\n.blue.lighten-2 {\n  background-color: #64b5f6 !important;\n  border-color: #64b5f6 !important;\n}\n.blue.lighten-2--after:after {\n  background-color: #64b5f6 !important;\n}\n.blue--text.text--lighten-2 {\n  color: #64b5f6 !important;\n}\n.blue.lighten-1 {\n  background-color: #42a5f5 !important;\n  border-color: #42a5f5 !important;\n}\n.blue.lighten-1--after:after {\n  background-color: #42a5f5 !important;\n}\n.blue--text.text--lighten-1 {\n  color: #42a5f5 !important;\n}\n.blue.darken-1 {\n  background-color: #1e88e5 !important;\n  border-color: #1e88e5 !important;\n}\n.blue.darken-1--after:after {\n  background-color: #1e88e5 !important;\n}\n.blue--text.text--darken-1 {\n  color: #1e88e5 !important;\n}\n.blue.darken-2 {\n  background-color: #1976d2 !important;\n  border-color: #1976d2 !important;\n}\n.blue.darken-2--after:after {\n  background-color: #1976d2 !important;\n}\n.blue--text.text--darken-2 {\n  color: #1976d2 !important;\n}\n.blue.darken-3 {\n  background-color: #1565c0 !important;\n  border-color: #1565c0 !important;\n}\n.blue.darken-3--after:after {\n  background-color: #1565c0 !important;\n}\n.blue--text.text--darken-3 {\n  color: #1565c0 !important;\n}\n.blue.darken-4 {\n  background-color: #0d47a1 !important;\n  border-color: #0d47a1 !important;\n}\n.blue.darken-4--after:after {\n  background-color: #0d47a1 !important;\n}\n.blue--text.text--darken-4 {\n  color: #0d47a1 !important;\n}\n.blue.accent-1 {\n  background-color: #82b1ff !important;\n  border-color: #82b1ff !important;\n}\n.blue.accent-1--after:after {\n  background-color: #82b1ff !important;\n}\n.blue--text.text--accent-1 {\n  color: #82b1ff !important;\n}\n.blue.accent-2 {\n  background-color: #448aff !important;\n  border-color: #448aff !important;\n}\n.blue.accent-2--after:after {\n  background-color: #448aff !important;\n}\n.blue--text.text--accent-2 {\n  color: #448aff !important;\n}\n.blue.accent-3 {\n  background-color: #2979ff !important;\n  border-color: #2979ff !important;\n}\n.blue.accent-3--after:after {\n  background-color: #2979ff !important;\n}\n.blue--text.text--accent-3 {\n  color: #2979ff !important;\n}\n.blue.accent-4 {\n  background-color: #2962ff !important;\n  border-color: #2962ff !important;\n}\n.blue.accent-4--after:after {\n  background-color: #2962ff !important;\n}\n.blue--text.text--accent-4 {\n  color: #2962ff !important;\n}\n.light-blue {\n  background-color: #03a9f4 !important;\n  border-color: #03a9f4 !important;\n}\n.light-blue--text {\n  color: #03a9f4 !important;\n}\n.light-blue--after:after {\n  background: #03a9f4 !important;\n}\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n  border-color: #e1f5fe !important;\n}\n.light-blue.lighten-5--after:after {\n  background-color: #e1f5fe !important;\n}\n.light-blue--text.text--lighten-5 {\n  color: #e1f5fe !important;\n}\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n  border-color: #b3e5fc !important;\n}\n.light-blue.lighten-4--after:after {\n  background-color: #b3e5fc !important;\n}\n.light-blue--text.text--lighten-4 {\n  color: #b3e5fc !important;\n}\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n  border-color: #81d4fa !important;\n}\n.light-blue.lighten-3--after:after {\n  background-color: #81d4fa !important;\n}\n.light-blue--text.text--lighten-3 {\n  color: #81d4fa !important;\n}\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n  border-color: #4fc3f7 !important;\n}\n.light-blue.lighten-2--after:after {\n  background-color: #4fc3f7 !important;\n}\n.light-blue--text.text--lighten-2 {\n  color: #4fc3f7 !important;\n}\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n  border-color: #29b6f6 !important;\n}\n.light-blue.lighten-1--after:after {\n  background-color: #29b6f6 !important;\n}\n.light-blue--text.text--lighten-1 {\n  color: #29b6f6 !important;\n}\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n  border-color: #039be5 !important;\n}\n.light-blue.darken-1--after:after {\n  background-color: #039be5 !important;\n}\n.light-blue--text.text--darken-1 {\n  color: #039be5 !important;\n}\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n  border-color: #0288d1 !important;\n}\n.light-blue.darken-2--after:after {\n  background-color: #0288d1 !important;\n}\n.light-blue--text.text--darken-2 {\n  color: #0288d1 !important;\n}\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n  border-color: #0277bd !important;\n}\n.light-blue.darken-3--after:after {\n  background-color: #0277bd !important;\n}\n.light-blue--text.text--darken-3 {\n  color: #0277bd !important;\n}\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n  border-color: #01579b !important;\n}\n.light-blue.darken-4--after:after {\n  background-color: #01579b !important;\n}\n.light-blue--text.text--darken-4 {\n  color: #01579b !important;\n}\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n  border-color: #80d8ff !important;\n}\n.light-blue.accent-1--after:after {\n  background-color: #80d8ff !important;\n}\n.light-blue--text.text--accent-1 {\n  color: #80d8ff !important;\n}\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n  border-color: #40c4ff !important;\n}\n.light-blue.accent-2--after:after {\n  background-color: #40c4ff !important;\n}\n.light-blue--text.text--accent-2 {\n  color: #40c4ff !important;\n}\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n  border-color: #00b0ff !important;\n}\n.light-blue.accent-3--after:after {\n  background-color: #00b0ff !important;\n}\n.light-blue--text.text--accent-3 {\n  color: #00b0ff !important;\n}\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n  border-color: #0091ea !important;\n}\n.light-blue.accent-4--after:after {\n  background-color: #0091ea !important;\n}\n.light-blue--text.text--accent-4 {\n  color: #0091ea !important;\n}\n.cyan {\n  background-color: #00bcd4 !important;\n  border-color: #00bcd4 !important;\n}\n.cyan--text {\n  color: #00bcd4 !important;\n}\n.cyan--after:after {\n  background: #00bcd4 !important;\n}\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n  border-color: #e0f7fa !important;\n}\n.cyan.lighten-5--after:after {\n  background-color: #e0f7fa !important;\n}\n.cyan--text.text--lighten-5 {\n  color: #e0f7fa !important;\n}\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n  border-color: #b2ebf2 !important;\n}\n.cyan.lighten-4--after:after {\n  background-color: #b2ebf2 !important;\n}\n.cyan--text.text--lighten-4 {\n  color: #b2ebf2 !important;\n}\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n  border-color: #80deea !important;\n}\n.cyan.lighten-3--after:after {\n  background-color: #80deea !important;\n}\n.cyan--text.text--lighten-3 {\n  color: #80deea !important;\n}\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n  border-color: #4dd0e1 !important;\n}\n.cyan.lighten-2--after:after {\n  background-color: #4dd0e1 !important;\n}\n.cyan--text.text--lighten-2 {\n  color: #4dd0e1 !important;\n}\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n  border-color: #26c6da !important;\n}\n.cyan.lighten-1--after:after {\n  background-color: #26c6da !important;\n}\n.cyan--text.text--lighten-1 {\n  color: #26c6da !important;\n}\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n  border-color: #00acc1 !important;\n}\n.cyan.darken-1--after:after {\n  background-color: #00acc1 !important;\n}\n.cyan--text.text--darken-1 {\n  color: #00acc1 !important;\n}\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n  border-color: #0097a7 !important;\n}\n.cyan.darken-2--after:after {\n  background-color: #0097a7 !important;\n}\n.cyan--text.text--darken-2 {\n  color: #0097a7 !important;\n}\n.cyan.darken-3 {\n  background-color: #00838f !important;\n  border-color: #00838f !important;\n}\n.cyan.darken-3--after:after {\n  background-color: #00838f !important;\n}\n.cyan--text.text--darken-3 {\n  color: #00838f !important;\n}\n.cyan.darken-4 {\n  background-color: #006064 !important;\n  border-color: #006064 !important;\n}\n.cyan.darken-4--after:after {\n  background-color: #006064 !important;\n}\n.cyan--text.text--darken-4 {\n  color: #006064 !important;\n}\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n  border-color: #84ffff !important;\n}\n.cyan.accent-1--after:after {\n  background-color: #84ffff !important;\n}\n.cyan--text.text--accent-1 {\n  color: #84ffff !important;\n}\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n  border-color: #18ffff !important;\n}\n.cyan.accent-2--after:after {\n  background-color: #18ffff !important;\n}\n.cyan--text.text--accent-2 {\n  color: #18ffff !important;\n}\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n  border-color: #00e5ff !important;\n}\n.cyan.accent-3--after:after {\n  background-color: #00e5ff !important;\n}\n.cyan--text.text--accent-3 {\n  color: #00e5ff !important;\n}\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n  border-color: #00b8d4 !important;\n}\n.cyan.accent-4--after:after {\n  background-color: #00b8d4 !important;\n}\n.cyan--text.text--accent-4 {\n  color: #00b8d4 !important;\n}\n.teal {\n  background-color: #009688 !important;\n  border-color: #009688 !important;\n}\n.teal--text {\n  color: #009688 !important;\n}\n.teal--after:after {\n  background: #009688 !important;\n}\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n  border-color: #e0f2f1 !important;\n}\n.teal.lighten-5--after:after {\n  background-color: #e0f2f1 !important;\n}\n.teal--text.text--lighten-5 {\n  color: #e0f2f1 !important;\n}\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n  border-color: #b2dfdb !important;\n}\n.teal.lighten-4--after:after {\n  background-color: #b2dfdb !important;\n}\n.teal--text.text--lighten-4 {\n  color: #b2dfdb !important;\n}\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n  border-color: #80cbc4 !important;\n}\n.teal.lighten-3--after:after {\n  background-color: #80cbc4 !important;\n}\n.teal--text.text--lighten-3 {\n  color: #80cbc4 !important;\n}\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n  border-color: #4db6ac !important;\n}\n.teal.lighten-2--after:after {\n  background-color: #4db6ac !important;\n}\n.teal--text.text--lighten-2 {\n  color: #4db6ac !important;\n}\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n  border-color: #26a69a !important;\n}\n.teal.lighten-1--after:after {\n  background-color: #26a69a !important;\n}\n.teal--text.text--lighten-1 {\n  color: #26a69a !important;\n}\n.teal.darken-1 {\n  background-color: #00897b !important;\n  border-color: #00897b !important;\n}\n.teal.darken-1--after:after {\n  background-color: #00897b !important;\n}\n.teal--text.text--darken-1 {\n  color: #00897b !important;\n}\n.teal.darken-2 {\n  background-color: #00796b !important;\n  border-color: #00796b !important;\n}\n.teal.darken-2--after:after {\n  background-color: #00796b !important;\n}\n.teal--text.text--darken-2 {\n  color: #00796b !important;\n}\n.teal.darken-3 {\n  background-color: #00695c !important;\n  border-color: #00695c !important;\n}\n.teal.darken-3--after:after {\n  background-color: #00695c !important;\n}\n.teal--text.text--darken-3 {\n  color: #00695c !important;\n}\n.teal.darken-4 {\n  background-color: #004d40 !important;\n  border-color: #004d40 !important;\n}\n.teal.darken-4--after:after {\n  background-color: #004d40 !important;\n}\n.teal--text.text--darken-4 {\n  color: #004d40 !important;\n}\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n  border-color: #a7ffeb !important;\n}\n.teal.accent-1--after:after {\n  background-color: #a7ffeb !important;\n}\n.teal--text.text--accent-1 {\n  color: #a7ffeb !important;\n}\n.teal.accent-2 {\n  background-color: #64ffda !important;\n  border-color: #64ffda !important;\n}\n.teal.accent-2--after:after {\n  background-color: #64ffda !important;\n}\n.teal--text.text--accent-2 {\n  color: #64ffda !important;\n}\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n  border-color: #1de9b6 !important;\n}\n.teal.accent-3--after:after {\n  background-color: #1de9b6 !important;\n}\n.teal--text.text--accent-3 {\n  color: #1de9b6 !important;\n}\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n  border-color: #00bfa5 !important;\n}\n.teal.accent-4--after:after {\n  background-color: #00bfa5 !important;\n}\n.teal--text.text--accent-4 {\n  color: #00bfa5 !important;\n}\n.green {\n  background-color: #4caf50 !important;\n  border-color: #4caf50 !important;\n}\n.green--text {\n  color: #4caf50 !important;\n}\n.green--after:after {\n  background: #4caf50 !important;\n}\n.green.lighten-5 {\n  background-color: #e8f5e9 !important;\n  border-color: #e8f5e9 !important;\n}\n.green.lighten-5--after:after {\n  background-color: #e8f5e9 !important;\n}\n.green--text.text--lighten-5 {\n  color: #e8f5e9 !important;\n}\n.green.lighten-4 {\n  background-color: #c8e6c9 !important;\n  border-color: #c8e6c9 !important;\n}\n.green.lighten-4--after:after {\n  background-color: #c8e6c9 !important;\n}\n.green--text.text--lighten-4 {\n  color: #c8e6c9 !important;\n}\n.green.lighten-3 {\n  background-color: #a5d6a7 !important;\n  border-color: #a5d6a7 !important;\n}\n.green.lighten-3--after:after {\n  background-color: #a5d6a7 !important;\n}\n.green--text.text--lighten-3 {\n  color: #a5d6a7 !important;\n}\n.green.lighten-2 {\n  background-color: #81c784 !important;\n  border-color: #81c784 !important;\n}\n.green.lighten-2--after:after {\n  background-color: #81c784 !important;\n}\n.green--text.text--lighten-2 {\n  color: #81c784 !important;\n}\n.green.lighten-1 {\n  background-color: #66bb6a !important;\n  border-color: #66bb6a !important;\n}\n.green.lighten-1--after:after {\n  background-color: #66bb6a !important;\n}\n.green--text.text--lighten-1 {\n  color: #66bb6a !important;\n}\n.green.darken-1 {\n  background-color: #43a047 !important;\n  border-color: #43a047 !important;\n}\n.green.darken-1--after:after {\n  background-color: #43a047 !important;\n}\n.green--text.text--darken-1 {\n  color: #43a047 !important;\n}\n.green.darken-2 {\n  background-color: #388e3c !important;\n  border-color: #388e3c !important;\n}\n.green.darken-2--after:after {\n  background-color: #388e3c !important;\n}\n.green--text.text--darken-2 {\n  color: #388e3c !important;\n}\n.green.darken-3 {\n  background-color: #2e7d32 !important;\n  border-color: #2e7d32 !important;\n}\n.green.darken-3--after:after {\n  background-color: #2e7d32 !important;\n}\n.green--text.text--darken-3 {\n  color: #2e7d32 !important;\n}\n.green.darken-4 {\n  background-color: #1b5e20 !important;\n  border-color: #1b5e20 !important;\n}\n.green.darken-4--after:after {\n  background-color: #1b5e20 !important;\n}\n.green--text.text--darken-4 {\n  color: #1b5e20 !important;\n}\n.green.accent-1 {\n  background-color: #b9f6ca !important;\n  border-color: #b9f6ca !important;\n}\n.green.accent-1--after:after {\n  background-color: #b9f6ca !important;\n}\n.green--text.text--accent-1 {\n  color: #b9f6ca !important;\n}\n.green.accent-2 {\n  background-color: #69f0ae !important;\n  border-color: #69f0ae !important;\n}\n.green.accent-2--after:after {\n  background-color: #69f0ae !important;\n}\n.green--text.text--accent-2 {\n  color: #69f0ae !important;\n}\n.green.accent-3 {\n  background-color: #00e676 !important;\n  border-color: #00e676 !important;\n}\n.green.accent-3--after:after {\n  background-color: #00e676 !important;\n}\n.green--text.text--accent-3 {\n  color: #00e676 !important;\n}\n.green.accent-4 {\n  background-color: #00c853 !important;\n  border-color: #00c853 !important;\n}\n.green.accent-4--after:after {\n  background-color: #00c853 !important;\n}\n.green--text.text--accent-4 {\n  color: #00c853 !important;\n}\n.light-green {\n  background-color: #8bc34a !important;\n  border-color: #8bc34a !important;\n}\n.light-green--text {\n  color: #8bc34a !important;\n}\n.light-green--after:after {\n  background: #8bc34a !important;\n}\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n  border-color: #f1f8e9 !important;\n}\n.light-green.lighten-5--after:after {\n  background-color: #f1f8e9 !important;\n}\n.light-green--text.text--lighten-5 {\n  color: #f1f8e9 !important;\n}\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n  border-color: #dcedc8 !important;\n}\n.light-green.lighten-4--after:after {\n  background-color: #dcedc8 !important;\n}\n.light-green--text.text--lighten-4 {\n  color: #dcedc8 !important;\n}\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n  border-color: #c5e1a5 !important;\n}\n.light-green.lighten-3--after:after {\n  background-color: #c5e1a5 !important;\n}\n.light-green--text.text--lighten-3 {\n  color: #c5e1a5 !important;\n}\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n  border-color: #aed581 !important;\n}\n.light-green.lighten-2--after:after {\n  background-color: #aed581 !important;\n}\n.light-green--text.text--lighten-2 {\n  color: #aed581 !important;\n}\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n  border-color: #9ccc65 !important;\n}\n.light-green.lighten-1--after:after {\n  background-color: #9ccc65 !important;\n}\n.light-green--text.text--lighten-1 {\n  color: #9ccc65 !important;\n}\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n  border-color: #7cb342 !important;\n}\n.light-green.darken-1--after:after {\n  background-color: #7cb342 !important;\n}\n.light-green--text.text--darken-1 {\n  color: #7cb342 !important;\n}\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n  border-color: #689f38 !important;\n}\n.light-green.darken-2--after:after {\n  background-color: #689f38 !important;\n}\n.light-green--text.text--darken-2 {\n  color: #689f38 !important;\n}\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n  border-color: #558b2f !important;\n}\n.light-green.darken-3--after:after {\n  background-color: #558b2f !important;\n}\n.light-green--text.text--darken-3 {\n  color: #558b2f !important;\n}\n.light-green.darken-4 {\n  background-color: #33691e !important;\n  border-color: #33691e !important;\n}\n.light-green.darken-4--after:after {\n  background-color: #33691e !important;\n}\n.light-green--text.text--darken-4 {\n  color: #33691e !important;\n}\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n  border-color: #ccff90 !important;\n}\n.light-green.accent-1--after:after {\n  background-color: #ccff90 !important;\n}\n.light-green--text.text--accent-1 {\n  color: #ccff90 !important;\n}\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n  border-color: #b2ff59 !important;\n}\n.light-green.accent-2--after:after {\n  background-color: #b2ff59 !important;\n}\n.light-green--text.text--accent-2 {\n  color: #b2ff59 !important;\n}\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n  border-color: #76ff03 !important;\n}\n.light-green.accent-3--after:after {\n  background-color: #76ff03 !important;\n}\n.light-green--text.text--accent-3 {\n  color: #76ff03 !important;\n}\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n  border-color: #64dd17 !important;\n}\n.light-green.accent-4--after:after {\n  background-color: #64dd17 !important;\n}\n.light-green--text.text--accent-4 {\n  color: #64dd17 !important;\n}\n.lime {\n  background-color: #cddc39 !important;\n  border-color: #cddc39 !important;\n}\n.lime--text {\n  color: #cddc39 !important;\n}\n.lime--after:after {\n  background: #cddc39 !important;\n}\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n  border-color: #f9fbe7 !important;\n}\n.lime.lighten-5--after:after {\n  background-color: #f9fbe7 !important;\n}\n.lime--text.text--lighten-5 {\n  color: #f9fbe7 !important;\n}\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n  border-color: #f0f4c3 !important;\n}\n.lime.lighten-4--after:after {\n  background-color: #f0f4c3 !important;\n}\n.lime--text.text--lighten-4 {\n  color: #f0f4c3 !important;\n}\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n  border-color: #e6ee9c !important;\n}\n.lime.lighten-3--after:after {\n  background-color: #e6ee9c !important;\n}\n.lime--text.text--lighten-3 {\n  color: #e6ee9c !important;\n}\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n  border-color: #dce775 !important;\n}\n.lime.lighten-2--after:after {\n  background-color: #dce775 !important;\n}\n.lime--text.text--lighten-2 {\n  color: #dce775 !important;\n}\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n  border-color: #d4e157 !important;\n}\n.lime.lighten-1--after:after {\n  background-color: #d4e157 !important;\n}\n.lime--text.text--lighten-1 {\n  color: #d4e157 !important;\n}\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n  border-color: #c0ca33 !important;\n}\n.lime.darken-1--after:after {\n  background-color: #c0ca33 !important;\n}\n.lime--text.text--darken-1 {\n  color: #c0ca33 !important;\n}\n.lime.darken-2 {\n  background-color: #afb42b !important;\n  border-color: #afb42b !important;\n}\n.lime.darken-2--after:after {\n  background-color: #afb42b !important;\n}\n.lime--text.text--darken-2 {\n  color: #afb42b !important;\n}\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n  border-color: #9e9d24 !important;\n}\n.lime.darken-3--after:after {\n  background-color: #9e9d24 !important;\n}\n.lime--text.text--darken-3 {\n  color: #9e9d24 !important;\n}\n.lime.darken-4 {\n  background-color: #827717 !important;\n  border-color: #827717 !important;\n}\n.lime.darken-4--after:after {\n  background-color: #827717 !important;\n}\n.lime--text.text--darken-4 {\n  color: #827717 !important;\n}\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n  border-color: #f4ff81 !important;\n}\n.lime.accent-1--after:after {\n  background-color: #f4ff81 !important;\n}\n.lime--text.text--accent-1 {\n  color: #f4ff81 !important;\n}\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n  border-color: #eeff41 !important;\n}\n.lime.accent-2--after:after {\n  background-color: #eeff41 !important;\n}\n.lime--text.text--accent-2 {\n  color: #eeff41 !important;\n}\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n  border-color: #c6ff00 !important;\n}\n.lime.accent-3--after:after {\n  background-color: #c6ff00 !important;\n}\n.lime--text.text--accent-3 {\n  color: #c6ff00 !important;\n}\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n  border-color: #aeea00 !important;\n}\n.lime.accent-4--after:after {\n  background-color: #aeea00 !important;\n}\n.lime--text.text--accent-4 {\n  color: #aeea00 !important;\n}\n.yellow {\n  background-color: #ffeb3b !important;\n  border-color: #ffeb3b !important;\n}\n.yellow--text {\n  color: #ffeb3b !important;\n}\n.yellow--after:after {\n  background: #ffeb3b !important;\n}\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n  border-color: #fffde7 !important;\n}\n.yellow.lighten-5--after:after {\n  background-color: #fffde7 !important;\n}\n.yellow--text.text--lighten-5 {\n  color: #fffde7 !important;\n}\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n  border-color: #fff9c4 !important;\n}\n.yellow.lighten-4--after:after {\n  background-color: #fff9c4 !important;\n}\n.yellow--text.text--lighten-4 {\n  color: #fff9c4 !important;\n}\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n  border-color: #fff59d !important;\n}\n.yellow.lighten-3--after:after {\n  background-color: #fff59d !important;\n}\n.yellow--text.text--lighten-3 {\n  color: #fff59d !important;\n}\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n  border-color: #fff176 !important;\n}\n.yellow.lighten-2--after:after {\n  background-color: #fff176 !important;\n}\n.yellow--text.text--lighten-2 {\n  color: #fff176 !important;\n}\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n  border-color: #ffee58 !important;\n}\n.yellow.lighten-1--after:after {\n  background-color: #ffee58 !important;\n}\n.yellow--text.text--lighten-1 {\n  color: #ffee58 !important;\n}\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n  border-color: #fdd835 !important;\n}\n.yellow.darken-1--after:after {\n  background-color: #fdd835 !important;\n}\n.yellow--text.text--darken-1 {\n  color: #fdd835 !important;\n}\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n  border-color: #fbc02d !important;\n}\n.yellow.darken-2--after:after {\n  background-color: #fbc02d !important;\n}\n.yellow--text.text--darken-2 {\n  color: #fbc02d !important;\n}\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n  border-color: #f9a825 !important;\n}\n.yellow.darken-3--after:after {\n  background-color: #f9a825 !important;\n}\n.yellow--text.text--darken-3 {\n  color: #f9a825 !important;\n}\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n  border-color: #f57f17 !important;\n}\n.yellow.darken-4--after:after {\n  background-color: #f57f17 !important;\n}\n.yellow--text.text--darken-4 {\n  color: #f57f17 !important;\n}\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n  border-color: #ffff8d !important;\n}\n.yellow.accent-1--after:after {\n  background-color: #ffff8d !important;\n}\n.yellow--text.text--accent-1 {\n  color: #ffff8d !important;\n}\n.yellow.accent-2 {\n  background-color: #ff0 !important;\n  border-color: #ff0 !important;\n}\n.yellow.accent-2--after:after {\n  background-color: #ff0 !important;\n}\n.yellow--text.text--accent-2 {\n  color: #ff0 !important;\n}\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n  border-color: #ffea00 !important;\n}\n.yellow.accent-3--after:after {\n  background-color: #ffea00 !important;\n}\n.yellow--text.text--accent-3 {\n  color: #ffea00 !important;\n}\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n  border-color: #ffd600 !important;\n}\n.yellow.accent-4--after:after {\n  background-color: #ffd600 !important;\n}\n.yellow--text.text--accent-4 {\n  color: #ffd600 !important;\n}\n.amber {\n  background-color: #ffc107 !important;\n  border-color: #ffc107 !important;\n}\n.amber--text {\n  color: #ffc107 !important;\n}\n.amber--after:after {\n  background: #ffc107 !important;\n}\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n  border-color: #fff8e1 !important;\n}\n.amber.lighten-5--after:after {\n  background-color: #fff8e1 !important;\n}\n.amber--text.text--lighten-5 {\n  color: #fff8e1 !important;\n}\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n  border-color: #ffecb3 !important;\n}\n.amber.lighten-4--after:after {\n  background-color: #ffecb3 !important;\n}\n.amber--text.text--lighten-4 {\n  color: #ffecb3 !important;\n}\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n  border-color: #ffe082 !important;\n}\n.amber.lighten-3--after:after {\n  background-color: #ffe082 !important;\n}\n.amber--text.text--lighten-3 {\n  color: #ffe082 !important;\n}\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n  border-color: #ffd54f !important;\n}\n.amber.lighten-2--after:after {\n  background-color: #ffd54f !important;\n}\n.amber--text.text--lighten-2 {\n  color: #ffd54f !important;\n}\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n  border-color: #ffca28 !important;\n}\n.amber.lighten-1--after:after {\n  background-color: #ffca28 !important;\n}\n.amber--text.text--lighten-1 {\n  color: #ffca28 !important;\n}\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n  border-color: #ffb300 !important;\n}\n.amber.darken-1--after:after {\n  background-color: #ffb300 !important;\n}\n.amber--text.text--darken-1 {\n  color: #ffb300 !important;\n}\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n  border-color: #ffa000 !important;\n}\n.amber.darken-2--after:after {\n  background-color: #ffa000 !important;\n}\n.amber--text.text--darken-2 {\n  color: #ffa000 !important;\n}\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n  border-color: #ff8f00 !important;\n}\n.amber.darken-3--after:after {\n  background-color: #ff8f00 !important;\n}\n.amber--text.text--darken-3 {\n  color: #ff8f00 !important;\n}\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n  border-color: #ff6f00 !important;\n}\n.amber.darken-4--after:after {\n  background-color: #ff6f00 !important;\n}\n.amber--text.text--darken-4 {\n  color: #ff6f00 !important;\n}\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n  border-color: #ffe57f !important;\n}\n.amber.accent-1--after:after {\n  background-color: #ffe57f !important;\n}\n.amber--text.text--accent-1 {\n  color: #ffe57f !important;\n}\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n  border-color: #ffd740 !important;\n}\n.amber.accent-2--after:after {\n  background-color: #ffd740 !important;\n}\n.amber--text.text--accent-2 {\n  color: #ffd740 !important;\n}\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n  border-color: #ffc400 !important;\n}\n.amber.accent-3--after:after {\n  background-color: #ffc400 !important;\n}\n.amber--text.text--accent-3 {\n  color: #ffc400 !important;\n}\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n  border-color: #ffab00 !important;\n}\n.amber.accent-4--after:after {\n  background-color: #ffab00 !important;\n}\n.amber--text.text--accent-4 {\n  color: #ffab00 !important;\n}\n.orange {\n  background-color: #ff9800 !important;\n  border-color: #ff9800 !important;\n}\n.orange--text {\n  color: #ff9800 !important;\n}\n.orange--after:after {\n  background: #ff9800 !important;\n}\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n  border-color: #fff3e0 !important;\n}\n.orange.lighten-5--after:after {\n  background-color: #fff3e0 !important;\n}\n.orange--text.text--lighten-5 {\n  color: #fff3e0 !important;\n}\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n  border-color: #ffe0b2 !important;\n}\n.orange.lighten-4--after:after {\n  background-color: #ffe0b2 !important;\n}\n.orange--text.text--lighten-4 {\n  color: #ffe0b2 !important;\n}\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n  border-color: #ffcc80 !important;\n}\n.orange.lighten-3--after:after {\n  background-color: #ffcc80 !important;\n}\n.orange--text.text--lighten-3 {\n  color: #ffcc80 !important;\n}\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n  border-color: #ffb74d !important;\n}\n.orange.lighten-2--after:after {\n  background-color: #ffb74d !important;\n}\n.orange--text.text--lighten-2 {\n  color: #ffb74d !important;\n}\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n  border-color: #ffa726 !important;\n}\n.orange.lighten-1--after:after {\n  background-color: #ffa726 !important;\n}\n.orange--text.text--lighten-1 {\n  color: #ffa726 !important;\n}\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n  border-color: #fb8c00 !important;\n}\n.orange.darken-1--after:after {\n  background-color: #fb8c00 !important;\n}\n.orange--text.text--darken-1 {\n  color: #fb8c00 !important;\n}\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n  border-color: #f57c00 !important;\n}\n.orange.darken-2--after:after {\n  background-color: #f57c00 !important;\n}\n.orange--text.text--darken-2 {\n  color: #f57c00 !important;\n}\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n  border-color: #ef6c00 !important;\n}\n.orange.darken-3--after:after {\n  background-color: #ef6c00 !important;\n}\n.orange--text.text--darken-3 {\n  color: #ef6c00 !important;\n}\n.orange.darken-4 {\n  background-color: #e65100 !important;\n  border-color: #e65100 !important;\n}\n.orange.darken-4--after:after {\n  background-color: #e65100 !important;\n}\n.orange--text.text--darken-4 {\n  color: #e65100 !important;\n}\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n  border-color: #ffd180 !important;\n}\n.orange.accent-1--after:after {\n  background-color: #ffd180 !important;\n}\n.orange--text.text--accent-1 {\n  color: #ffd180 !important;\n}\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n  border-color: #ffab40 !important;\n}\n.orange.accent-2--after:after {\n  background-color: #ffab40 !important;\n}\n.orange--text.text--accent-2 {\n  color: #ffab40 !important;\n}\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n  border-color: #ff9100 !important;\n}\n.orange.accent-3--after:after {\n  background-color: #ff9100 !important;\n}\n.orange--text.text--accent-3 {\n  color: #ff9100 !important;\n}\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n  border-color: #ff6d00 !important;\n}\n.orange.accent-4--after:after {\n  background-color: #ff6d00 !important;\n}\n.orange--text.text--accent-4 {\n  color: #ff6d00 !important;\n}\n.deep-orange {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n.deep-orange--text {\n  color: #ff5722 !important;\n}\n.deep-orange--after:after {\n  background: #ff5722 !important;\n}\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n  border-color: #fbe9e7 !important;\n}\n.deep-orange.lighten-5--after:after {\n  background-color: #fbe9e7 !important;\n}\n.deep-orange--text.text--lighten-5 {\n  color: #fbe9e7 !important;\n}\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n  border-color: #ffccbc !important;\n}\n.deep-orange.lighten-4--after:after {\n  background-color: #ffccbc !important;\n}\n.deep-orange--text.text--lighten-4 {\n  color: #ffccbc !important;\n}\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n  border-color: #ffab91 !important;\n}\n.deep-orange.lighten-3--after:after {\n  background-color: #ffab91 !important;\n}\n.deep-orange--text.text--lighten-3 {\n  color: #ffab91 !important;\n}\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n  border-color: #ff8a65 !important;\n}\n.deep-orange.lighten-2--after:after {\n  background-color: #ff8a65 !important;\n}\n.deep-orange--text.text--lighten-2 {\n  color: #ff8a65 !important;\n}\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n  border-color: #ff7043 !important;\n}\n.deep-orange.lighten-1--after:after {\n  background-color: #ff7043 !important;\n}\n.deep-orange--text.text--lighten-1 {\n  color: #ff7043 !important;\n}\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n  border-color: #f4511e !important;\n}\n.deep-orange.darken-1--after:after {\n  background-color: #f4511e !important;\n}\n.deep-orange--text.text--darken-1 {\n  color: #f4511e !important;\n}\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n  border-color: #e64a19 !important;\n}\n.deep-orange.darken-2--after:after {\n  background-color: #e64a19 !important;\n}\n.deep-orange--text.text--darken-2 {\n  color: #e64a19 !important;\n}\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n  border-color: #d84315 !important;\n}\n.deep-orange.darken-3--after:after {\n  background-color: #d84315 !important;\n}\n.deep-orange--text.text--darken-3 {\n  color: #d84315 !important;\n}\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n  border-color: #bf360c !important;\n}\n.deep-orange.darken-4--after:after {\n  background-color: #bf360c !important;\n}\n.deep-orange--text.text--darken-4 {\n  color: #bf360c !important;\n}\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n  border-color: #ff9e80 !important;\n}\n.deep-orange.accent-1--after:after {\n  background-color: #ff9e80 !important;\n}\n.deep-orange--text.text--accent-1 {\n  color: #ff9e80 !important;\n}\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n  border-color: #ff6e40 !important;\n}\n.deep-orange.accent-2--after:after {\n  background-color: #ff6e40 !important;\n}\n.deep-orange--text.text--accent-2 {\n  color: #ff6e40 !important;\n}\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n  border-color: #ff3d00 !important;\n}\n.deep-orange.accent-3--after:after {\n  background-color: #ff3d00 !important;\n}\n.deep-orange--text.text--accent-3 {\n  color: #ff3d00 !important;\n}\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n  border-color: #dd2c00 !important;\n}\n.deep-orange.accent-4--after:after {\n  background-color: #dd2c00 !important;\n}\n.deep-orange--text.text--accent-4 {\n  color: #dd2c00 !important;\n}\n.brown {\n  background-color: #795548 !important;\n  border-color: #795548 !important;\n}\n.brown--text {\n  color: #795548 !important;\n}\n.brown--after:after {\n  background: #795548 !important;\n}\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n  border-color: #efebe9 !important;\n}\n.brown.lighten-5--after:after {\n  background-color: #efebe9 !important;\n}\n.brown--text.text--lighten-5 {\n  color: #efebe9 !important;\n}\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n  border-color: #d7ccc8 !important;\n}\n.brown.lighten-4--after:after {\n  background-color: #d7ccc8 !important;\n}\n.brown--text.text--lighten-4 {\n  color: #d7ccc8 !important;\n}\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n  border-color: #bcaaa4 !important;\n}\n.brown.lighten-3--after:after {\n  background-color: #bcaaa4 !important;\n}\n.brown--text.text--lighten-3 {\n  color: #bcaaa4 !important;\n}\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n  border-color: #a1887f !important;\n}\n.brown.lighten-2--after:after {\n  background-color: #a1887f !important;\n}\n.brown--text.text--lighten-2 {\n  color: #a1887f !important;\n}\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n  border-color: #8d6e63 !important;\n}\n.brown.lighten-1--after:after {\n  background-color: #8d6e63 !important;\n}\n.brown--text.text--lighten-1 {\n  color: #8d6e63 !important;\n}\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n  border-color: #6d4c41 !important;\n}\n.brown.darken-1--after:after {\n  background-color: #6d4c41 !important;\n}\n.brown--text.text--darken-1 {\n  color: #6d4c41 !important;\n}\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n  border-color: #5d4037 !important;\n}\n.brown.darken-2--after:after {\n  background-color: #5d4037 !important;\n}\n.brown--text.text--darken-2 {\n  color: #5d4037 !important;\n}\n.brown.darken-3 {\n  background-color: #4e342e !important;\n  border-color: #4e342e !important;\n}\n.brown.darken-3--after:after {\n  background-color: #4e342e !important;\n}\n.brown--text.text--darken-3 {\n  color: #4e342e !important;\n}\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n  border-color: #3e2723 !important;\n}\n.brown.darken-4--after:after {\n  background-color: #3e2723 !important;\n}\n.brown--text.text--darken-4 {\n  color: #3e2723 !important;\n}\n.blue-grey {\n  background-color: #607d8b !important;\n  border-color: #607d8b !important;\n}\n.blue-grey--text {\n  color: #607d8b !important;\n}\n.blue-grey--after:after {\n  background: #607d8b !important;\n}\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n  border-color: #eceff1 !important;\n}\n.blue-grey.lighten-5--after:after {\n  background-color: #eceff1 !important;\n}\n.blue-grey--text.text--lighten-5 {\n  color: #eceff1 !important;\n}\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n  border-color: #cfd8dc !important;\n}\n.blue-grey.lighten-4--after:after {\n  background-color: #cfd8dc !important;\n}\n.blue-grey--text.text--lighten-4 {\n  color: #cfd8dc !important;\n}\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n  border-color: #b0bec5 !important;\n}\n.blue-grey.lighten-3--after:after {\n  background-color: #b0bec5 !important;\n}\n.blue-grey--text.text--lighten-3 {\n  color: #b0bec5 !important;\n}\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n  border-color: #90a4ae !important;\n}\n.blue-grey.lighten-2--after:after {\n  background-color: #90a4ae !important;\n}\n.blue-grey--text.text--lighten-2 {\n  color: #90a4ae !important;\n}\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n  border-color: #78909c !important;\n}\n.blue-grey.lighten-1--after:after {\n  background-color: #78909c !important;\n}\n.blue-grey--text.text--lighten-1 {\n  color: #78909c !important;\n}\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n  border-color: #546e7a !important;\n}\n.blue-grey.darken-1--after:after {\n  background-color: #546e7a !important;\n}\n.blue-grey--text.text--darken-1 {\n  color: #546e7a !important;\n}\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n  border-color: #455a64 !important;\n}\n.blue-grey.darken-2--after:after {\n  background-color: #455a64 !important;\n}\n.blue-grey--text.text--darken-2 {\n  color: #455a64 !important;\n}\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n  border-color: #37474f !important;\n}\n.blue-grey.darken-3--after:after {\n  background-color: #37474f !important;\n}\n.blue-grey--text.text--darken-3 {\n  color: #37474f !important;\n}\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n  border-color: #263238 !important;\n}\n.blue-grey.darken-4--after:after {\n  background-color: #263238 !important;\n}\n.blue-grey--text.text--darken-4 {\n  color: #263238 !important;\n}\n.grey {\n  background-color: #9e9e9e !important;\n  border-color: #9e9e9e !important;\n}\n.grey--text {\n  color: #9e9e9e !important;\n}\n.grey--after:after {\n  background: #9e9e9e !important;\n}\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n  border-color: #fafafa !important;\n}\n.grey.lighten-5--after:after {\n  background-color: #fafafa !important;\n}\n.grey--text.text--lighten-5 {\n  color: #fafafa !important;\n}\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n  border-color: #f5f5f5 !important;\n}\n.grey.lighten-4--after:after {\n  background-color: #f5f5f5 !important;\n}\n.grey--text.text--lighten-4 {\n  color: #f5f5f5 !important;\n}\n.grey.lighten-3 {\n  background-color: #eee !important;\n  border-color: #eee !important;\n}\n.grey.lighten-3--after:after {\n  background-color: #eee !important;\n}\n.grey--text.text--lighten-3 {\n  color: #eee !important;\n}\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n  border-color: #e0e0e0 !important;\n}\n.grey.lighten-2--after:after {\n  background-color: #e0e0e0 !important;\n}\n.grey--text.text--lighten-2 {\n  color: #e0e0e0 !important;\n}\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n  border-color: #bdbdbd !important;\n}\n.grey.lighten-1--after:after {\n  background-color: #bdbdbd !important;\n}\n.grey--text.text--lighten-1 {\n  color: #bdbdbd !important;\n}\n.grey.darken-1 {\n  background-color: #757575 !important;\n  border-color: #757575 !important;\n}\n.grey.darken-1--after:after {\n  background-color: #757575 !important;\n}\n.grey--text.text--darken-1 {\n  color: #757575 !important;\n}\n.grey.darken-2 {\n  background-color: #616161 !important;\n  border-color: #616161 !important;\n}\n.grey.darken-2--after:after {\n  background-color: #616161 !important;\n}\n.grey--text.text--darken-2 {\n  color: #616161 !important;\n}\n.grey.darken-3 {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n.grey.darken-3--after:after {\n  background-color: #424242 !important;\n}\n.grey--text.text--darken-3 {\n  color: #424242 !important;\n}\n.grey.darken-4 {\n  background-color: #212121 !important;\n  border-color: #212121 !important;\n}\n.grey.darken-4--after:after {\n  background-color: #212121 !important;\n}\n.grey--text.text--darken-4 {\n  color: #212121 !important;\n}\n.shades.black {\n  background-color: #000 !important;\n  border-color: #000 !important;\n}\n.shades.black--after:after {\n  background-color: #000 !important;\n}\n.shades--text.text--black {\n  color: #000 !important;\n}\n.shades.white {\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.shades.white--after:after {\n  background-color: #fff !important;\n}\n.shades--text.text--white {\n  color: #fff !important;\n}\n.shades.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.shades.transparent--after:after {\n  background-color: transparent !important;\n}\n.shades--text.text--transparent {\n  color: transparent !important;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  padding: 24px;\n}\n@media only screen and (max-width: 599px) {\n.container {\n    padding: 16px;\n}\n}\n@media only screen and (min-width: 540px) {\n.container {\n    max-width: 540px;\n}\n}\n@media only screen and (min-width: 921.6px) {\n.container {\n    max-width: 921.6px;\n}\n}\n@media only screen and (min-width: 1281.6000000000001px) {\n.container {\n    max-width: 1281.6000000000001px;\n}\n}\n@media only screen and (min-width: 1713.6000000000001px) {\n.container {\n    max-width: 1713.6000000000001px;\n}\n}\n.container--fluid {\n  max-width: 100%;\n  width: 100%;\n}\n.layout {\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: -12px;\n  margin-left: -12px;\n}\n.layout.row,\n.layout.column {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n}\n.layout.row.grow,\n.layout.column.grow {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.layout.row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.layout.row.reverse {\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n.layout.column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.layout.column.reverse {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n.layout.wrap {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.layout.align-start {\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n.layout.align-end {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.layout.align-center {\n  -ms-flex-align: center;\n      align-items: center;\n}\n.layout.align-baseline {\n  -ms-flex-align: baseline;\n      align-items: baseline;\n}\n.layout.justify-start {\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n.layout.justify-end {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.layout.justify-center {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.layout.justify-space-around {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.layout.justify-space-between {\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.layout.flex,\n.layout.child-flex > * {\n  -ms-flex: 1;\n      flex: 1;\n}\n.layout .flex {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.layout .flex.xs {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n@media only screen and (min-width: 0) {\n.layout.row-xs {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.layout.column-xs {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.layout.flex,\n  .layout.child-flex-xs > * {\n    -ms-flex: 1;\n        flex: 1;\n}\n.layout .flex.xs1 {\n    -ms-flex-preferred-size: 8.333333333333332%;\n        flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-xs1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-xs1 {\n    -ms-flex-order: 1;\n        order: 1;\n}\n.layout .flex.xs2 {\n    -ms-flex-preferred-size: 16.666666666666664%;\n        flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-xs2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-xs2 {\n    -ms-flex-order: 2;\n        order: 2;\n}\n.layout .flex.xs3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-xs3 {\n    margin-left: 25%;\n}\n.layout .flex.order-xs3 {\n    -ms-flex-order: 3;\n        order: 3;\n}\n.layout .flex.xs4 {\n    -ms-flex-preferred-size: 33.33333333333333%;\n        flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-xs4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-xs4 {\n    -ms-flex-order: 4;\n        order: 4;\n}\n.layout .flex.xs5 {\n    -ms-flex-preferred-size: 41.66666666666667%;\n        flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-xs5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-xs5 {\n    -ms-flex-order: 5;\n        order: 5;\n}\n.layout .flex.xs6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-xs6 {\n    margin-left: 50%;\n}\n.layout .flex.order-xs6 {\n    -ms-flex-order: 6;\n        order: 6;\n}\n.layout .flex.xs7 {\n    -ms-flex-preferred-size: 58.333333333333336%;\n        flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-xs7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-xs7 {\n    -ms-flex-order: 7;\n        order: 7;\n}\n.layout .flex.xs8 {\n    -ms-flex-preferred-size: 66.66666666666666%;\n        flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-xs8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-xs8 {\n    -ms-flex-order: 8;\n        order: 8;\n}\n.layout .flex.xs9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-xs9 {\n    margin-left: 75%;\n}\n.layout .flex.order-xs9 {\n    -ms-flex-order: 9;\n        order: 9;\n}\n.layout .flex.xs10 {\n    -ms-flex-preferred-size: 83.33333333333334%;\n        flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-xs10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-xs10 {\n    -ms-flex-order: 10;\n        order: 10;\n}\n.layout .flex.xs11 {\n    -ms-flex-preferred-size: 91.66666666666666%;\n        flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-xs11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-xs11 {\n    -ms-flex-order: 11;\n        order: 11;\n}\n.layout .flex.xs12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-xs12 {\n    margin-left: 100%;\n}\n.layout .flex.order-xs12 {\n    -ms-flex-order: 12;\n        order: 12;\n}\n}\n.layout .flex.sm {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n@media only screen and (min-width: 600px) {\n.layout.row-sm {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.layout.column-sm {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.layout.flex,\n  .layout.child-flex-sm > * {\n    -ms-flex: 1;\n        flex: 1;\n}\n.layout .flex.sm1 {\n    -ms-flex-preferred-size: 8.333333333333332%;\n        flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-sm1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-sm1 {\n    -ms-flex-order: 1;\n        order: 1;\n}\n.layout .flex.sm2 {\n    -ms-flex-preferred-size: 16.666666666666664%;\n        flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-sm2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-sm2 {\n    -ms-flex-order: 2;\n        order: 2;\n}\n.layout .flex.sm3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-sm3 {\n    margin-left: 25%;\n}\n.layout .flex.order-sm3 {\n    -ms-flex-order: 3;\n        order: 3;\n}\n.layout .flex.sm4 {\n    -ms-flex-preferred-size: 33.33333333333333%;\n        flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-sm4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-sm4 {\n    -ms-flex-order: 4;\n        order: 4;\n}\n.layout .flex.sm5 {\n    -ms-flex-preferred-size: 41.66666666666667%;\n        flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-sm5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-sm5 {\n    -ms-flex-order: 5;\n        order: 5;\n}\n.layout .flex.sm6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-sm6 {\n    margin-left: 50%;\n}\n.layout .flex.order-sm6 {\n    -ms-flex-order: 6;\n        order: 6;\n}\n.layout .flex.sm7 {\n    -ms-flex-preferred-size: 58.333333333333336%;\n        flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-sm7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-sm7 {\n    -ms-flex-order: 7;\n        order: 7;\n}\n.layout .flex.sm8 {\n    -ms-flex-preferred-size: 66.66666666666666%;\n        flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-sm8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-sm8 {\n    -ms-flex-order: 8;\n        order: 8;\n}\n.layout .flex.sm9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-sm9 {\n    margin-left: 75%;\n}\n.layout .flex.order-sm9 {\n    -ms-flex-order: 9;\n        order: 9;\n}\n.layout .flex.sm10 {\n    -ms-flex-preferred-size: 83.33333333333334%;\n        flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-sm10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-sm10 {\n    -ms-flex-order: 10;\n        order: 10;\n}\n.layout .flex.sm11 {\n    -ms-flex-preferred-size: 91.66666666666666%;\n        flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-sm11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-sm11 {\n    -ms-flex-order: 11;\n        order: 11;\n}\n.layout .flex.sm12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-sm12 {\n    margin-left: 100%;\n}\n.layout .flex.order-sm12 {\n    -ms-flex-order: 12;\n        order: 12;\n}\n}\n.layout .flex.md {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n@media only screen and (min-width: 1024px) {\n.layout.row-md {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.layout.column-md {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.layout.flex,\n  .layout.child-flex-md > * {\n    -ms-flex: 1;\n        flex: 1;\n}\n.layout .flex.md1 {\n    -ms-flex-preferred-size: 8.333333333333332%;\n        flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-md1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-md1 {\n    -ms-flex-order: 1;\n        order: 1;\n}\n.layout .flex.md2 {\n    -ms-flex-preferred-size: 16.666666666666664%;\n        flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-md2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-md2 {\n    -ms-flex-order: 2;\n        order: 2;\n}\n.layout .flex.md3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-md3 {\n    margin-left: 25%;\n}\n.layout .flex.order-md3 {\n    -ms-flex-order: 3;\n        order: 3;\n}\n.layout .flex.md4 {\n    -ms-flex-preferred-size: 33.33333333333333%;\n        flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-md4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-md4 {\n    -ms-flex-order: 4;\n        order: 4;\n}\n.layout .flex.md5 {\n    -ms-flex-preferred-size: 41.66666666666667%;\n        flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-md5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-md5 {\n    -ms-flex-order: 5;\n        order: 5;\n}\n.layout .flex.md6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-md6 {\n    margin-left: 50%;\n}\n.layout .flex.order-md6 {\n    -ms-flex-order: 6;\n        order: 6;\n}\n.layout .flex.md7 {\n    -ms-flex-preferred-size: 58.333333333333336%;\n        flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-md7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-md7 {\n    -ms-flex-order: 7;\n        order: 7;\n}\n.layout .flex.md8 {\n    -ms-flex-preferred-size: 66.66666666666666%;\n        flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-md8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-md8 {\n    -ms-flex-order: 8;\n        order: 8;\n}\n.layout .flex.md9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-md9 {\n    margin-left: 75%;\n}\n.layout .flex.order-md9 {\n    -ms-flex-order: 9;\n        order: 9;\n}\n.layout .flex.md10 {\n    -ms-flex-preferred-size: 83.33333333333334%;\n        flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-md10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-md10 {\n    -ms-flex-order: 10;\n        order: 10;\n}\n.layout .flex.md11 {\n    -ms-flex-preferred-size: 91.66666666666666%;\n        flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-md11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-md11 {\n    -ms-flex-order: 11;\n        order: 11;\n}\n.layout .flex.md12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-md12 {\n    margin-left: 100%;\n}\n.layout .flex.order-md12 {\n    -ms-flex-order: 12;\n        order: 12;\n}\n}\n.layout .flex.lg {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n@media only screen and (min-width: 1424px) {\n.layout.row-lg {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.layout.column-lg {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.layout.flex,\n  .layout.child-flex-lg > * {\n    -ms-flex: 1;\n        flex: 1;\n}\n.layout .flex.lg1 {\n    -ms-flex-preferred-size: 8.333333333333332%;\n        flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-lg1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-lg1 {\n    -ms-flex-order: 1;\n        order: 1;\n}\n.layout .flex.lg2 {\n    -ms-flex-preferred-size: 16.666666666666664%;\n        flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-lg2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-lg2 {\n    -ms-flex-order: 2;\n        order: 2;\n}\n.layout .flex.lg3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-lg3 {\n    margin-left: 25%;\n}\n.layout .flex.order-lg3 {\n    -ms-flex-order: 3;\n        order: 3;\n}\n.layout .flex.lg4 {\n    -ms-flex-preferred-size: 33.33333333333333%;\n        flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-lg4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-lg4 {\n    -ms-flex-order: 4;\n        order: 4;\n}\n.layout .flex.lg5 {\n    -ms-flex-preferred-size: 41.66666666666667%;\n        flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-lg5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-lg5 {\n    -ms-flex-order: 5;\n        order: 5;\n}\n.layout .flex.lg6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-lg6 {\n    margin-left: 50%;\n}\n.layout .flex.order-lg6 {\n    -ms-flex-order: 6;\n        order: 6;\n}\n.layout .flex.lg7 {\n    -ms-flex-preferred-size: 58.333333333333336%;\n        flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-lg7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-lg7 {\n    -ms-flex-order: 7;\n        order: 7;\n}\n.layout .flex.lg8 {\n    -ms-flex-preferred-size: 66.66666666666666%;\n        flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-lg8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-lg8 {\n    -ms-flex-order: 8;\n        order: 8;\n}\n.layout .flex.lg9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-lg9 {\n    margin-left: 75%;\n}\n.layout .flex.order-lg9 {\n    -ms-flex-order: 9;\n        order: 9;\n}\n.layout .flex.lg10 {\n    -ms-flex-preferred-size: 83.33333333333334%;\n        flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-lg10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-lg10 {\n    -ms-flex-order: 10;\n        order: 10;\n}\n.layout .flex.lg11 {\n    -ms-flex-preferred-size: 91.66666666666666%;\n        flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-lg11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-lg11 {\n    -ms-flex-order: 11;\n        order: 11;\n}\n.layout .flex.lg12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-lg12 {\n    margin-left: 100%;\n}\n.layout .flex.order-lg12 {\n    -ms-flex-order: 12;\n        order: 12;\n}\n}\n.layout .flex.xl {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n@media only screen and (min-width: 1904px) {\n.layout.row-xl {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.layout.column-xl {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.layout.flex,\n  .layout.child-flex-xl > * {\n    -ms-flex: 1;\n        flex: 1;\n}\n.layout .flex.xl1 {\n    -ms-flex-preferred-size: 8.333333333333332%;\n        flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-xl1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-xl1 {\n    -ms-flex-order: 1;\n        order: 1;\n}\n.layout .flex.xl2 {\n    -ms-flex-preferred-size: 16.666666666666664%;\n        flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-xl2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-xl2 {\n    -ms-flex-order: 2;\n        order: 2;\n}\n.layout .flex.xl3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-xl3 {\n    margin-left: 25%;\n}\n.layout .flex.order-xl3 {\n    -ms-flex-order: 3;\n        order: 3;\n}\n.layout .flex.xl4 {\n    -ms-flex-preferred-size: 33.33333333333333%;\n        flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-xl4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-xl4 {\n    -ms-flex-order: 4;\n        order: 4;\n}\n.layout .flex.xl5 {\n    -ms-flex-preferred-size: 41.66666666666667%;\n        flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-xl5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-xl5 {\n    -ms-flex-order: 5;\n        order: 5;\n}\n.layout .flex.xl6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-xl6 {\n    margin-left: 50%;\n}\n.layout .flex.order-xl6 {\n    -ms-flex-order: 6;\n        order: 6;\n}\n.layout .flex.xl7 {\n    -ms-flex-preferred-size: 58.333333333333336%;\n        flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-xl7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-xl7 {\n    -ms-flex-order: 7;\n        order: 7;\n}\n.layout .flex.xl8 {\n    -ms-flex-preferred-size: 66.66666666666666%;\n        flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-xl8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-xl8 {\n    -ms-flex-order: 8;\n        order: 8;\n}\n.layout .flex.xl9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-xl9 {\n    margin-left: 75%;\n}\n.layout .flex.order-xl9 {\n    -ms-flex-order: 9;\n        order: 9;\n}\n.layout .flex.xl10 {\n    -ms-flex-preferred-size: 83.33333333333334%;\n        flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-xl10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-xl10 {\n    -ms-flex-order: 10;\n        order: 10;\n}\n.layout .flex.xl11 {\n    -ms-flex-preferred-size: 91.66666666666666%;\n        flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-xl11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-xl11 {\n    -ms-flex-order: 11;\n        order: 11;\n}\n.layout .flex.xl12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-xl12 {\n    margin-left: 100%;\n}\n.layout .flex.order-xl12 {\n    -ms-flex-order: 12;\n        order: 12;\n}\n}\n.spacer {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.scroll-y {\n  overflow-y: auto;\n}\n.fill-height {\n  height: 100%;\n}\n.show-overflow {\n  overflow: visible !important;\n}\n.flexbox {\n  display: -ms-flexbox;\n  display: flex;\n}\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll; /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%; /* iOS 8+ */\n}\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\n::before,\n::after {\n  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\n  vertical-align: inherit;\n}\n* {\n  background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements */\n  padding: 0; /* Reset `padding` and `margin` of all elements */\n  margin: 0;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nhr {\n  overflow: visible; /* Show the overflow in Edge and IE */\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\nsummary {\n  display: list-item; /* Add the correct display in all browsers */\n}\nsmall {\n  font-size: 80%; /* Set font-size to 80% in `small` elements */\n}\n[hidden],\ntemplate {\n  display: none; /* Add the correct display in IE */\n}\nabbr[title] {\n  border-bottom: 1px dotted; /* Add a bordered underline effect in all browsers */\n  text-decoration: none; /* Remove text decoration in Firefox 40+ */\n}\na {\n  background-color: transparent; /* Remove the gray background on active links in IE 10 */\n  -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */\n}\na:active,\na:hover {\n  outline-width: 0; /* Remove the outline when hovering in all browsers */\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* Specify the font family of code elements */\n}\nb,\nstrong {\n  font-weight: bolder; /* Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+ */\n}\ndfn {\n  font-style: italic; /* Address styling not present in Safari and Chrome */\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ninput {\n  border-radius: 0;\n}\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n[disabled] {\n  cursor: default;\n}\n[type=\"number\"] {\n  width: auto; /* Firefox 36+ */\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* Safari 8+ */\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; /* Safari 8 */\n}\ntextarea {\n  overflow: auto; /* Internet Explorer 11+ */\n  resize: vertical; /* Specify textarea resizability */\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* Specify font inheritance of form elements */\n}\noptgroup {\n  font-weight: bold; /* Restore the font weight unset by the previous rule. */\n}\nbutton {\n  overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */\n}\nbutton,\nselect {\n  text-transform: none; /* Firefox 40+, Internet Explorer 11- */\n}\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n}\nselect {\n  -moz-appearance: none; /* Firefox 36+ */\n  -webkit-appearance: none; /* Chrome 41+ */\n}\nselect::-ms-expand {\n  display: none; /* Internet Explorer 11+ */\n}\nselect::-ms-value {\n  color: currentColor; /* Internet Explorer 11+ */\n}\nlegend {\n  border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */\n  color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */\n  display: table; /* Correct the text wrapping in Edge and IE */\n  max-width: 100%; /* Correct the text wrapping in Edge and IE */\n  white-space: normal; /* Correct the text wrapping in Edge and IE */\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */\n  font: inherit; /* Change font properties to `inherit` in Chrome and Safari */\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */\n  outline-offset: -2px; /* Correct the outline style in Safari */\n}\nimg {\n  border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */\n}\nprogress {\n  vertical-align: baseline;\n}\nsvg:not(:root) {\n  overflow: hidden; /* Internet Explorer 11- */\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */\n}\n@media screen {\n[hidden~=\"screen\"] {\n    display: inherit;\n}\n[hidden~=\"screen\"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important;\n}\n}\n[aria-busy=\"true\"] {\n  cursor: progress;\n}\n[aria-controls] {\n  cursor: pointer;\n}\n[aria-disabled] {\n  cursor: default;\n}\n::-moz-selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n::selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n.carousel-transition-enter {\n  transform: translate3d(100%, 0, 0);\n}\n.carousel-transition-leave,\n.carousel-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate3d(-100%, 0, 0);\n}\n.carousel-reverse-transition-enter {\n  transform: translate3d(-100%, 0, 0);\n}\n.carousel-reverse-transition-leave,\n.carousel-reverse-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate3d(100%, 0, 0);\n}\n.dialog-transition-enter,\n.dialog-transition-leave-to {\n  -ms-transform: scale(0.5);\n      transform: scale(0.5);\n  opacity: 0;\n}\n.dialog-transition-enter-to,\n.dialog-transition-leave {\n  opacity: 1;\n}\n.dialog-bottom-transition-enter,\n.dialog-bottom-transition-leave-to {\n  -ms-transform: translateY(100%);\n      transform: translateY(100%);\n}\n.tab-transition-enter {\n  -ms-transform: translate(100%, 0);\n      transform: translate(100%, 0);\n}\n.tab-transition-enter-to {\n  -ms-transform: translate(0, 0);\n      transform: translate(0, 0);\n}\n.tab-transition-leave,\n.tab-transition-leave-active {\n  position: absolute;\n  top: 0;\n}\n.tab-transition-leave-to {\n  position: absolute;\n  -ms-transform: translate(-100%, 0);\n      transform: translate(-100%, 0);\n}\n.tab-reverse-transition-enter {\n  -ms-transform: translate(-100%, 0);\n      transform: translate(-100%, 0);\n}\n.tab-reverse-transition-leave,\n.tab-reverse-transition-leave-to {\n  top: 0;\n  position: absolute;\n  -ms-transform: translate(100%, 0);\n      transform: translate(100%, 0);\n}\n.scale-transition-enter-active,\n.scale-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.scale-transition-enter,\n.scale-transition-leave,\n.scale-transition-leave-to {\n  opacity: 0;\n  -ms-transform: scale(0);\n      transform: scale(0);\n}\n.slide-y-transition-enter-active,\n.slide-y-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-y-transition-enter,\n.slide-y-transition-leave-to {\n  opacity: 0;\n  -ms-transform: translateY(-15px);\n      transform: translateY(-15px);\n}\n.slide-y-reverse-transition-enter-active,\n.slide-y-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-y-reverse-transition-enter,\n.slide-y-reverse-transition-leave-to {\n  opacity: 0;\n  -ms-transform: translateY(15px);\n      transform: translateY(15px);\n}\n.slide-x-transition-enter-active,\n.slide-x-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-x-transition-enter,\n.slide-x-transition-leave-to {\n  opacity: 0;\n  -ms-transform: translateX(-15px);\n      transform: translateX(-15px);\n}\n.slide-x-reverse-transition-enter-active,\n.slide-x-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-x-reverse-transition-enter,\n.slide-x-reverse-transition-leave-to {\n  opacity: 0;\n  -ms-transform: translateX(15px);\n      transform: translateX(15px);\n}\n.fade-transition-enter-active,\n.fade-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.fade-transition-enter,\n.fade-transition-leave-to {\n  opacity: 0;\n}\nblockquote {\n  border-left: 5px solid #9c27b0;\n  padding: 16px 0 16px 24px;\n  font-size: 18px;\n  font-weight: 300;\n}\ncode,\nkbd {\n  background: #9e9e9e;\n  color: #bd4147;\n  display: inline-block;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  white-space: pre-wrap;\n  font-size: 85%;\n  font-weight: 100 !important;\n  font-weight: 900 !important;\n}\ncode:after,\nkbd:after,\ncode:before,\nkbd:before {\n  content: \"\\A0\";\n  letter-spacing: -1px;\n}\nkbd {\n  background: #424242;\n  color: #fff;\n}\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n}\nhtml {\n  font-size: 14px;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  overflow-x: hidden;\n}\nbody {\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.5;\n}\nheader {\n  transition: 0.3s padding cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: 1;\n}\nmain {\n  transition: 0.3s padding cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: padding-left;\n}\na {\n  color: #9c27b0;\n}\n::-ms-clear,\n::-ms-reveal {\n  display: none;\n}\nh1 {\n  color: #424242;\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh1 {\n    font-size: 67.2px;\n}\n}\nh2 {\n  color: #424242;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh2 {\n    font-size: 33.6px;\n}\n}\nh3 {\n  color: #424242;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh3 {\n    font-size: 27px;\n}\n}\nh4 {\n  color: #424242;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh4 {\n    font-size: 20.4px;\n}\n}\nh5 {\n  color: #424242;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh5 {\n    font-size: 14.399999999999999px;\n}\n}\nh6 {\n  color: #424242;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh6 {\n    font-size: 12px;\n}\n}\nsubheading {\n  color: #424242;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nsubheading {\n    font-size: 9.6px;\n}\n}\nbody-2 {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nbody-2 {\n    font-size: 8.4px;\n}\n}\nbody-1 {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nbody-1 {\n    font-size: 8.4px;\n}\n}\ncaption {\n  color: #424242;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\ncaption {\n    font-size: 7.199999999999999px;\n}\n}\nbutton {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nbutton {\n    font-size: 8.4px;\n}\n}\nul,\nol {\n  padding-left: 24px;\n}\n.display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.04em;\n}\n.display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n}\n.display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  letter-spacing: normal;\n}\n.display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  letter-spacing: normal;\n}\n.headline {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: normal;\n}\n.title {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n}\n.subheading {\n  font-size: 16px;\n  font-weight: 400;\n}\n.body-2 {\n  font-size: 14px;\n  font-weight: 500;\n}\n.body-1 {\n  font-size: 14px;\n  font-weight: 400;\n}\n.caption {\n  font-size: 12px;\n  font-weight: 400;\n}\np {\n  margin-bottom: 16px;\n}\n.alert {\n  border-radius: 0;\n  border-width: 4px 0 0 0;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.8);\n  color: inherit;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  text-align: left;\n  padding: 16px;\n  position: relative;\n  margin: 4px auto;\n}\n.alert__icon.icon,\n.alert__dismissible .icon {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  color: rgba(0,0,0,0.3);\n  font-size: 24px;\n}\n.alert__icon {\n  margin-right: 16px;\n}\n.alert__dismissible {\n  margin-right: 0;\n  margin-left: 16px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  text-decoration: none;\n}\n.alert__dismissible:hover {\n  color: rgba(26,26,26,0.3);\n}\n.alert > div {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n}\n.alert--primary {\n  color: #fff;\n  background-color: #9c27b0;\n  border-color: rgba(0,0,0,0.2);\n}\n.alert--secondary {\n  color: #fff;\n  background-color: #9c27b0;\n  border-color: rgba(0,0,0,0.2);\n}\n.alert--info {\n  color: #fff;\n  background-color: #0d47a1;\n  border-color: rgba(0,0,0,0.2);\n}\n.alert--error {\n  color: #fff;\n  background-color: #b71c1c;\n  border-color: rgba(0,0,0,0.2);\n}\n.alert--success {\n  color: #fff;\n  background-color: #2e7d32;\n  border-color: rgba(0,0,0,0.2);\n}\n.alert--warning {\n  color: #fff;\n  background-color: #ffb300;\n  border-color: rgba(0,0,0,0.2);\n}\n.alert--no-icon .alert__icon {\n  display: none;\n}\n@media screen and (max-width: 600px) {\n.alert__icon {\n    display: none;\n}\n}\n.app__bar {\n  -ms-flex-align: center;\n      align-items: center;\n  background: rgba(0,0,0,0.12);\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.app__bar .btn-dropdown--overflow .input-group {\n  border: none;\n  margin: 0;\n}\n.app__bar .input-group__details {\n  display: none;\n}\n.app__bar > div {\n  min-width: 130px;\n}\n.app__bar > div:not(:first-child) {\n  margin-left: 1px;\n}\n.app__bar > div:not(:first-child):before {\n  content: '';\n  position: absolute;\n  height: 60%;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  left: -1px;\n  background: rgba(0,0,0,0.12);\n  width: 1px;\n  z-index: 0;\n}\n.app__bar .input-group:not(.input-group--focused) .input-group__input:hover {\n  background: #f5f5f5;\n}\n.app__bar .btn-toggle {\n  box-shadow: none;\n  background: transparent;\n  position: relative;\n  padding: 0 8px;\n}\n.app__bar .btn-toggle .btn {\n  background: transparent;\n  border: none !important;\n  height: 42px;\n  margin: 0 8px;\n}\n.app__bar .btn-toggle .btn .icon {\n  font-size: 26px;\n  width: 26px;\n}\n.avatar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n}\n.avatar img,\n.avatar .icon {\n  height: 42px;\n  width: 42px;\n  border-radius: 50%;\n}\n.badge {\n  position: relative;\n}\n.badge:after {\n  color: #fff;\n  content: attr(data-badge);\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  font-family: 'Roboto', sans-serif;\n  top: -11px;\n  right: -22px;\n  background-color: #9c27b0;\n  border-radius: 50%;\n  height: 22px;\n  width: 22px;\n  font-size: 14px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.badge--overlap:after {\n  top: -8px;\n}\n.badge--overlap.badge--left:after {\n  left: -8px;\n  right: initial;\n}\n.badge--overlap:after {\n  right: -8px;\n}\n.badge--icon:after {\n  font-family: 'Material Icons';\n}\n.badge--left:after {\n  left: -22px;\n}\n.bottom-nav {\n  background: #9c27b0;\n  bottom: 0;\n  box-shadow: 0 3px 14px 2px rgba(0,0,0,0.12);\n  display: -ms-flexbox;\n  display: flex;\n  height: 56px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  position: fixed;\n  transform: translate3d(0, 60px, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n  z-index: 4;\n}\n.bottom-nav--absolute {\n  position: absolute;\n}\n.bottom-nav--active {\n  transform: translate3d(0, 0, 0);\n}\n.bottom-nav .btn {\n  border-radius: 0;\n  -ms-flex: 1 1 32px;\n      flex: 1 1 32px;\n  height: 100%;\n  margin: 0;\n  max-width: 168px;\n  min-width: 80px;\n  padding: 0px 12px;\n  opacity: 0.5;\n  text-transform: capitalize;\n  -ms-transform-origin: 50% 50%;\n      transform-origin: 50% 50%;\n}\n.bottom-nav .btn .icon {\n  color: inherit;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.bottom-nav .btn .btn__content {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  height: 56px;\n  font-size: 12px;\n  transform: scale3d(1, 1, 1) translate3d(0, 1px, 0);\n  white-space: nowrap;\n  will-change: font-size;\n}\n.bottom-nav .btn--active {\n  opacity: 1;\n}\n.bottom-nav .btn--active .btn__content {\n  font-size: 14px;\n  transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n}\n.bottom-nav .btn:not(.btn--active) {\n  filter: grayscale(100%);\n}\n.bottom-nav--shift .btn__content {\n  font-size: 14px;\n}\n.bottom-nav--shift .btn__content span {\n  height: 21px;\n}\n.bottom-nav--shift .btn {\n  transition: all 0.3s;\n  min-width: 56px;\n  max-width: 96px;\n}\n.bottom-nav--shift .btn--active {\n  min-width: 96px;\n  max-width: 168px;\n  -ms-flex: 1 1 72px;\n      flex: 1 1 72px;\n}\n.bottom-nav--shift .btn--active .btn__content {\n  transform: scale3d(1, 1, 1) translate3d(0, 2px, 0);\n}\n.bottom-nav--shift .btn:not(.btn--active) .btn__content {\n  transform: scale3d(1, 1, 1) translate3d(0, 10px, 0);\n}\n.bottom-nav--shift .btn:not(.btn--active) .btn__content span {\n  color: transparent;\n}\n.breadcrumbs {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  margin: 0;\n  list-style-type: none;\n}\n.breadcrumbs li:not(:last-child):after {\n  color: #bdbdbd;\n  content: attr(data-divider);\n  vertical-align: middle;\n}\n.breadcrumbs li:last-child a {\n  color: #bdbdbd;\n  pointer-events: none;\n  cursor: default;\n}\n.breadcrumbs--with-icons li:not(:last-child):after {\n  font-family: 'Material Icons';\n}\n.breadcrumbs__item {\n  -ms-flex-align: center;\n      align-items: center;\n  color: #9c27b0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 14px;\n  padding: 0 14px;\n  height: 40px;\n  text-decoration: none;\n  line-height: 40px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.breadcrumbs__item:hover {\n  color: #757575;\n}\n.breadcrumbs__item--disabled {\n  color: #e0e0e0;\n  pointer-events: none;\n}\n.btn-dropdown {\n  display: block;\n  position: relative;\n}\n.btn-dropdown input {\n  text-align: left;\n  border-right: 1px solid transparent;\n  transition: border-right 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.btn-dropdown .input-group--focused input + .icon {\n  -ms-transform: rotate(-180deg);\n      transform: rotate(-180deg);\n}\n.btn-dropdown .menu,\n.btn-dropdown .menu__activator {\n  width: 100%;\n}\n.btn-dropdown .menu__content {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-dropdown--overflow .input-group input,\n.btn-dropdown--editable .input-group input,\n.btn-dropdown--segmented .input-group input,\n.btn-dropdown--overflow .input-group label,\n.btn-dropdown--editable .input-group label,\n.btn-dropdown--segmented .input-group label {\n  height: 40px;\n  line-height: 40px;\n}\n.btn-dropdown--overflow input,\n.btn-dropdown--editable input,\n.btn-dropdown--segmented input,\n.btn-dropdown--overflow label,\n.btn-dropdown--editable label,\n.btn-dropdown--segmented label {\n  padding-left: 16px;\n}\n.btn-dropdown--overflow .input-group--focused .input-group__input,\n.btn-dropdown--editable .input-group--focused .input-group__input,\n.btn-dropdown--segmented .input-group--focused .input-group__input {\n  background-color: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.btn-dropdown--overflow .input-group__input,\n.btn-dropdown--editable .input-group__input,\n.btn-dropdown--segmented .input-group__input {\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.btn-dropdown--overflow .input-group__input:hover,\n.btn-dropdown--editable .input-group__input:hover,\n.btn-dropdown--segmented .input-group__input:hover {\n  background-color: #fff;\n}\n.btn-dropdown--overflow .input-group__details,\n.btn-dropdown--editable .input-group__details,\n.btn-dropdown--segmented .input-group__details {\n  height: 0;\n  min-height: 0;\n  padding: 0;\n}\n.btn-dropdown--overflow .input-group__details:after,\n.btn-dropdown--editable .input-group__details:after,\n.btn-dropdown--segmented .input-group__details:after {\n  display: none;\n}\n.btn-dropdown--overflow .input-group__hint,\n.btn-dropdown--editable .input-group__hint,\n.btn-dropdown--segmented .input-group__hint {\n  display: none;\n}\n.btn-dropdown--light.btn-dropdown--segmented input {\n  border-right-color: rgba(0,0,0,0.12);\n}\n.btn-dropdown--light.btn-dropdown--editable .input-group--focused input {\n  border-right-color: rgba(0,0,0,0.12);\n}\n.btn-dropdown--light.btn-dropdown--overflow .input-group,\n.btn-dropdown--light.btn-dropdown--editable .input-group,\n.btn-dropdown--light.btn-dropdown--segmented .input-group {\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.btn-dropdown--light .input-group__hint:after {\n  display: none;\n}\n.btn-dropdown--dark.btn-dropdown--segmented input {\n  border-right-color: rgba(255,255,255,0.12);\n}\n.btn-dropdown--dark.btn-dropdown--editable .input-group--focused input {\n  border-right-color: rgba(255,255,255,0.12);\n}\n.btn-dropdown--dark.btn-dropdown--overflow .input-group,\n.btn-dropdown--dark.btn-dropdown--editable .input-group,\n.btn-dropdown--dark.btn-dropdown--segmented .input-group {\n  border-top: 1px solid rgba(255,255,255,0.12);\n}\n.btn-dropdown--dark .input-group__hint:after {\n  display: none;\n}\n.btn-toggle {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  border-radius: 2px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: background, box-shadow;\n}\n.btn-toggle .btn {\n  color: rgba(0,0,0,0.87);\n  -ms-flex-pack: center;\n      justify-content: center;\n  min-width: auto;\n  padding: 0 8px;\n  margin: 0;\n  opacity: 0.4;\n  border-radius: 0;\n}\n.btn-toggle .btn:not(:last-child) {\n  border-right: 1px solid transparent;\n}\n.btn-toggle .btn:after {\n  display: none;\n}\n.btn-toggle .btn[data-selected] {\n  opacity: 1;\n  background: rgba(0,0,0,0.12);\n}\n.btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]) {\n  border-right-color: rgba(0,0,0,0.12);\n}\n.btn-toggle .btn .icon {\n  font-size: 30px;\n}\n.btn-toggle .btn span + .icon {\n  font-size: initial;\n  margin-left: 10px;\n}\n.btn-toggle--selected {\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.btn,\n.fab {\n  -ms-flex-align: center;\n      align-items: center;\n  background: #e0e0e0;\n  border-radius: 2px;\n  color: #000;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin: 6px;\n  min-width: 88px;\n  outline: 0;\n  padding: 0 16px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  vertical-align: middle;\n}\n.btn:after,\n.fab:after {\n  border-radius: inherit;\n  bottom: 0;\n  content: '';\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.btn.btn--disabled,\n.fab.btn--disabled {\n  box-shadow: none !important;\n  pointer-events: none;\n  opacity: 0.4;\n}\n.btn.btn--disabled:not(.btn--loader),\n.fab.btn--disabled:not(.btn--loader) {\n  color: rgba(0,0,0,0.3);\n}\n.btn__content,\n.fab__content {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  -ms-flex-pack: center;\n      justify-content: center;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn--flat,\n.fab--flat {\n  background-color: transparent !important;\n  box-shadow: none !important;\n}\n.btn--flat.btn--light:hover:after,\n.fab--flat.btn--light:hover:after {\n  background-color: rgba(255,255,255,0.12);\n}\n.btn--flat.btn--light.btn--disabled,\n.fab--flat.btn--light.btn--disabled {\n  color: rgba(255,255,255,0.26);\n}\n.btn--flat.btn--dark:hover:after,\n.fab--flat.btn--dark:hover:after {\n  background-color: rgba(0,0,0,0.12);\n}\n.btn--flat.btn--dark.btn--disabled,\n.fab--flat.btn--dark.btn--disabled {\n  color: rgba(0,0,0,0.3);\n}\n.btn--raised,\n.fab--raised,\n.fab {\n  will-change: box-shadow;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.btn--raised:active,\n.fab--raised:active,\n.fab:active {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.btn--icon,\n.fab--icon {\n  background: transparent;\n  box-shadow: none !important;\n  border-radius: 50%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 36px;\n  width: 36px;\n  min-width: 0;\n  padding: 0;\n}\n.btn--icon .icon,\n.fab--icon .icon {\n  color: inherit;\n}\n.btn--icon:after,\n.fab--icon:after {\n  border-radius: 50%;\n  opacity: 0.12;\n}\n.btn--icon:hover,\n.fab--icon:hover {\n  border-radius: 50%;\n}\n.btn--icon:hover:after,\n.fab--icon:hover:after {\n  background-color: currentColor;\n  opacity: 0.12;\n}\n.btn--icon.btn--disabled,\n.fab--icon.btn--disabled {\n  background-color: transparent !important;\n  color: rgba(255,255,255,0.26) !important;\n  pointer-events: none;\n}\n.btn--icon.btn--small,\n.fab--icon.btn--small {\n  width: 28px;\n}\n.btn--icon.btn--large,\n.fab--icon.btn--large {\n  width: 44px;\n}\n.btn--floating,\n.fab--floating,\n.fab {\n  border-radius: 50%;\n  min-width: 0;\n  height: 56px;\n  width: 56px;\n  padding: 0;\n}\n.btn--floating:after,\n.fab--floating:after,\n.fab:after {\n  border-radius: 50%;\n}\n.btn--floating .icon,\n.fab--floating .icon,\n.fab .icon {\n  height: 24px;\n  width: 24px;\n}\n.btn--floating.btn--small,\n.fab--floating.btn--small,\n.fab.btn--small {\n  height: 40px;\n  width: 40px;\n}\n.btn--floating.btn--small .icon,\n.fab--floating.btn--small .icon,\n.fab.btn--small .icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.btn--floating.btn--large,\n.fab--floating.btn--large,\n.fab.btn--large {\n  height: 72px;\n  width: 72px;\n}\n.btn--floating.btn--large .icon,\n.fab--floating.btn--large .icon,\n.fab.btn--large .icon {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n}\n.btn--light,\n.fab--light {\n  color: #fff;\n}\n.btn--light:hover:after,\n.fab--light:hover:after {\n  background-color: rgba(255,255,255,0.12);\n}\n.btn--light.btn--disabled:not(.btn--loader),\n.fab--light.btn--disabled:not(.btn--loader) {\n  color: rgba(255,255,255,0.26) !important;\n  opacity: 1;\n}\n.btn--light.btn--disabled:not(.btn--loader):not(.btn--flat):not(.btn--icon),\n.fab--light.btn--disabled:not(.btn--loader):not(.btn--flat):not(.btn--icon) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.btn--dark,\n.fab--dark {\n  color: rgba(0,0,0,0.87);\n}\n.btn--dark:hover:after,\n.fab--dark:hover:after {\n  background-color: rgba(0,0,0,0.12);\n}\n.btn--dark.btn--disabled:not(.btn--loader),\n.fab--dark.btn--disabled:not(.btn--loader) {\n  color: rgba(0,0,0,0.3) !important;\n  opacity: 1;\n}\n.btn--dark.btn--disabled:not(.btn--loader):not(.btn--flat):not(.btn--icon),\n.fab--dark.btn--disabled:not(.btn--loader):not(.btn--flat):not(.btn--icon) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.btn--small,\n.fab--small {\n  font-size: 13px;\n  height: 28px;\n}\n.btn--large,\n.fab--large {\n  font-size: 15px;\n  height: 44px;\n}\n.btn--loader,\n.fab--loader {\n  pointer-events: none;\n}\n.btn--loader .btn__content,\n.fab--loader .btn__content {\n  opacity: 0;\n}\n.btn__loading,\n.fab__loading {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.btn__loading .icon--left,\n.fab__loading .icon--left {\n  margin-right: 1rem;\n  line-height: inherit;\n}\n.btn__loading .icon--right,\n.fab__loading .icon--right {\n  margin-left: 1rem;\n  line-height: inherit;\n}\n.btn--outline,\n.fab--outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n  box-shadow: none;\n}\n.btn--outline:hover,\n.fab--outline:hover {\n  box-shadow: none;\n}\n.btn--block,\n.fab--block {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  margin: 6px 0;\n  width: 100%;\n}\n.btn--round,\n.fab--round {\n  border-radius: 28px;\n}\n.btn--round:after,\n.fab--round:after {\n  border-radius: 28px;\n}\n.btn .icon--right,\n.fab .icon--right {\n  margin-left: 16px;\n}\n.btn .icon--left,\n.fab .icon--left {\n  margin-right: 16px;\n}\n.application--dark .card {\n  background: #424242;\n}\n.application--light .card {\n  background: #fff;\n}\n.card {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  position: relative;\n  border-radius: 2px;\n  min-width: 0;\n}\n.card--raised {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12) !important;\n}\n.card--flat {\n  box-shadow: none !important;\n}\n.card--hover {\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: box-shadow;\n}\n.card--hover:hover {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12) !important;\n}\n.card--horizontal {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n}\n.card--horizontal > .card__row {\n  -ms-flex: 0 1 30%;\n      flex: 0 1 30%;\n}\n.card--horizontal > .card__row,\n.card--horizontal > .card__column {\n  overflow: hidden;\n}\n.card--horizontal > .card__row:first-child,\n.card--horizontal > .card__column:first-child {\n  border-radius: 2px 0 0 2px;\n}\n.card--horizontal > .card__row:last-child,\n.card--horizontal > .card__column:last-child {\n  border-radius: 0 2px 2px 0;\n}\n.card--horizontal > .card__row:last-child > *:first-child,\n.card--horizontal > .card__column:last-child > *:first-child {\n  border-top-right-radius: 2px;\n}\n.card--horizontal > .card__row:last-child > *:last-child,\n.card--horizontal > .card__column:last-child > *:last-child {\n  border-bottom-right-raidius: 2px;\n}\n.card__column,\n.card__row {\n  display: -ms-flexbox;\n  display: flex;\n}\n.card__column {\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n}\n.card__row {\n  -ms-flex-align: center;\n      align-items: center;\n  margin-top: auto;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  min-height: 36px;\n}\n.card__row .card__text {\n  height: 100%;\n}\n.card__row--actions {\n  padding: 8px;\n  height: 52px;\n  -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  width: 100%;\n}\n.card__row--actions .btn {\n  margin: 0;\n  padding: 0 8px;\n}\n.card__row--actions-stacked {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin: 0 !important;\n  padding: 0 0 8px !important;\n}\n.card__row--actions-stacked > .btn {\n  width: 100%;\n  height: 48px;\n  margin: 0 !important;\n  padding: 0 16px !important;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n.card__row--actions-stacked > .btn span {\n  display: table;\n}\n.card__title {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 16px;\n}\n.card__title .btn {\n  margin: 0;\n}\n.card__text {\n  padding: 16px;\n  width: 100%;\n}\n.carousel {\n  height: 500px;\n  width: 100%;\n  background: #000;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.carousel__item {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex: 1 0 100%;\n      flex: 1 0 100%;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  transition: 0.2s ease-out;\n}\n.carousel__left,\n.carousel__right {\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n  left: 5px;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n}\n.carousel__left .btn,\n.carousel__right .btn {\n  color: #fff;\n  margin: 0 !important;\n  height: auto;\n  width: auto;\n}\n.carousel__left .btn i,\n.carousel__right .btn i {\n  font-size: 48px;\n}\n.carousel__left .btn:hover,\n.carousel__right .btn:hover {\n  background: none;\n}\n.carousel__right {\n  left: auto;\n  right: 5px;\n}\n.carousel__controls {\n  background: rgba(0,0,0,0.5);\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  left: 0;\n  position: absolute;\n  height: 50px;\n  list-style-type: none;\n  width: 100%;\n  z-index: 1;\n}\n.carousel__controls__item {\n  color: #fff;\n  margin: 0 1rem !important;\n}\n.carousel__controls__item i {\n  opacity: 0.5;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.carousel__controls__item--active i {\n  opacity: 1;\n  vertical-align: middle;\n  font-size: 2rem !important;\n}\n.carousel__controls__item:hover {\n  background: none;\n}\n.carousel__controls__item:hover i {\n  opacity: 0.8;\n}\n.chip {\n  -ms-flex-align: center;\n      align-items: center;\n  background: #e0e0e0;\n  border: 1px solid #e0e0e0;\n  border-radius: 28px;\n  cursor: default;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  font-size: 14px;\n  padding: 0 12px;\n  margin: 8px;\n  height: 32px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n  white-space: nowrap;\n  color: rgba(0,0,0,0.87);\n}\n.chip .avatar {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  margin-left: -14px;\n  margin-right: 8px;\n  color: #fff;\n}\n.chip .avatar img {\n  width: 100%;\n  height: 100%;\n}\n.chip:focus {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  outline: none;\n}\n.chip--label {\n  border-radius: 2px;\n}\n.chip--outline {\n  background: transparent !important;\n  color: #9e9e9e;\n}\n.chip--small {\n  height: 26px;\n}\n.chip--small .avatar {\n  height: 26px;\n  width: 26px;\n  min-width: 26px;\n}\n.chip__close {\n  color: inherit;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  text-decoration: none;\n  font-size: 24px;\n  margin-left: 4px;\n  margin-right: -2px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.chip__close:hover {\n  opacity: 0.8;\n}\n.chip--removable {\n  padding: 0 4px 0 12px;\n}\n.chip--select-multi {\n  margin: 8px 8px 8px 0;\n}\n.chip .icon {\n  color: inherit;\n  opacity: 0.54;\n}\n.chip .icon--right {\n  margin-left: 4px;\n}\n.chip .icon--left {\n  margin-right: 4px;\n}\n.datatable thead th.column.sortable {\n  cursor: pointer;\n}\n.datatable thead th.column.sortable i {\n  color: rgba(0,0,0,0.38);\n  font-size: 16px;\n  vertical-align: sub;\n  display: inline-block;\n  opacity: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.datatable thead th.column.sortable:hover {\n  color: rgba(0,0,0,0.87);\n}\n.datatable thead th.column.sortable:hover i {\n  opacity: 0.6;\n}\n.datatable thead th.column.sortable.active {\n  -ms-transform: none;\n      transform: none;\n  color: rgba(0,0,0,0.87);\n}\n.datatable thead th.column.sortable.active i {\n  color: rgba(0,0,0,0.87);\n  opacity: 1;\n}\n.datatable thead th.column.sortable.active.desc i {\n  -ms-transform: rotate(-180deg);\n      transform: rotate(-180deg);\n}\n.datatable tfoot .input-group__details {\n  display: none;\n}\n.datatable__actions {\n  color: rgba(0,0,0,0.54);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 12px;\n}\n.datatable__actions .btn {\n  color: inherit;\n}\n.datatable__actions .btn:last-of-type {\n  margin-left: 18px;\n}\n.datatable__actions__pagination {\n  text-align: center;\n  margin: 0 26px 0 32px;\n}\n.datatable__actions__select {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.datatable__actions__select .input-group--select {\n  margin: 13px 0 13px 34px;\n  position: initial;\n}\n.datatable__actions__select .input-group--select .input-group__selections__comma {\n  color: rgba(0,0,0,0.54) !important;\n  font-size: 12px;\n  padding-top: 6px;\n}\n.datatable__actions__select .input-group--select .input-group__append-icon {\n  color: rgba(0,0,0,0.54) !important;\n}\n.datatable__progress tr {\n  height: auto !important;\n}\n.datatable__progress th {\n  padding: 0 !important;\n}\n.datatable__progress th .progress-linear {\n  top: -3px;\n  margin: 0 0 -3px;\n}\n.picker--date {\n  color: #fff;\n  width: 100%;\n}\n.picker--date__years {\n  background: #fff;\n  color: #000;\n  font-size: 18px;\n  font-weight: 400;\n  list-style-type: none;\n  max-height: 300px;\n  overflow: auto;\n  padding: 0;\n  text-align: center;\n}\n.picker--date__years li {\n  cursor: pointer;\n  margin: 16px 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--date__years li:hover {\n  color: #9c27b0;\n}\n.picker--date__years li.active {\n  color: #9c27b0;\n  font-size: 24px;\n  font-weight: 500;\n  margin: 20px 0;\n}\n.picker--date__title {\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.picker--date__title-year {\n  font-size: 14px;\n}\n.picker--date__title-date {\n  font-size: 34px;\n}\n.picker--date__title-date > div {\n  position: relative;\n}\n.picker--date__title-year,\n.picker--date__title-date {\n  font-weight: 500;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.picker--date__title-year:not(.active),\n.picker--date__title-date:not(.active) {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.picker--date__title-year:hover,\n.picker--date__title-date:hover {\n  opacity: 1;\n}\n.picker--date__header {\n  color: #000;\n  padding: 4px 16px;\n}\n.picker--date__header-selector {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  position: relative;\n}\n.picker--date__header-selector .btn {\n  color: #000;\n  margin: 0;\n}\n.picker--date__header-selector .icon {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.picker--date__header-selector-date {\n  -ms-flex: 1;\n      flex: 1;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.picker--date__header-selector-date strong {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  display: block;\n  width: 100%;\n}\n.picker--date__table {\n  position: relative;\n}\n.picker--date table {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  top: 0;\n}\n.picker--date table thead th {\n  padding: 8px 0;\n}\n.picker--date table th {\n  color: rgba(0,0,0,0.54);\n  font-weight: 600;\n  font-size: 12px;\n}\n.picker--date table th,\n.picker--date table td {\n  text-align: center;\n  width: 45px;\n}\n.picker--date table .btn {\n  margin: 0;\n}\n.picker--date table .btn__content {\n  overflow: visible;\n  transition: none;\n  z-index: 1;\n}\n.picker--date table .btn.btn--floating.btn--current:not(.btn--active) {\n  color: rgba(156,39,176,0.6);\n}\n.picker--date table .btn.btn--floating {\n  height: 32px;\n  width: 32px;\n}\n.picker--date table .btn.btn--floating:after {\n  background: #9c27b0 !important;\n  opacity: 0;\n  -ms-transform: scale(0);\n      transform: scale(0);\n}\n.picker--date table .btn.btn--floating:not(.btn--active):hover {\n  color: #fff;\n}\n.picker--date table .btn.btn--floating:not(.btn--active):hover:after {\n  opacity: 0.6;\n  -ms-transform: scale(1);\n      transform: scale(1);\n}\n.picker--date table .btn.btn--floating.btn--active {\n  color: #fff;\n}\n.picker--date table .btn.btn--floating.btn--active:after {\n  background: #9c27b0 !important;\n  opacity: 1;\n  -ms-transform: none;\n      transform: none;\n}\n.picker--date.picker--dark .picker--date__header,\n.picker--date.picker--dark .picker--date__years {\n  background: #424242;\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__header .btn,\n.picker--date.picker--dark .picker--date__years .btn {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table th,\n.picker--date.picker--dark .picker--date__table table td,\n.picker--date.picker--dark .picker--date__table table .btn {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table .btn.btn--floating:after {\n  background: #ce93d8 !important;\n}\n.picker--date.picker--dark .picker--date__table table .btn--active {\n  color: #000;\n}\n.picker--date.picker--dark .picker--date__table table .btn--floating.btn--current:not(.btn--active) {\n  color: #ce93d8;\n}\n.picker--landscape .picker--date__years {\n  margin-left: 170px;\n  width: 330px;\n}\n.dialog {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);\n  border-radius: 2px;\n  margin: 24px 40px;\n  pointer-events: auto;\n  transition: 0.3s ease-in-out;\n}\n.dialog__content {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  width: 100%;\n  z-index: 5;\n}\n.dialog:not(.dialog--fullscreen) {\n  max-width: 90%;\n  max-height: 90%;\n}\n.dialog:not(.dialog--fullscreen) {\n  max-width: 90%;\n  max-height: 90%;\n}\n.dialog__container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.dialog--fullscreen {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n  padding-top: 56px;\n}\n.dialog--fullscreen .toolbar {\n  height: 56px;\n  padding: 0 !important;\n  position: fixed;\n  top: 0;\n}\n.dialog--fullscreen .toolbar__title {\n  font-size: 20px;\n  padding: 20px 0;\n}\n.dialog--fullscreen .toolbar .btn:first-child {\n  max-width: 24px;\n  max-height: 24px;\n  margin: 0 32px 0 16px !important;\n}\n.dialog--fullscreen .toolbar .btn:last-child {\n  margin: 0 !important;\n  height: 100%;\n  font-size: 14px;\n}\n.dialog--fullscreen > .card {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.dialog--scrollable .card__row:not(.card__row--actions) {\n  overflow-y: auto;\n}\n.application--light .divider {\n  background: rgba(0,0,0,0.12);\n}\n.application--dark .divider {\n  background: rgba(255,255,255,0.12);\n}\n.divider {\n  border: none;\n  display: block;\n  height: 1px;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n}\n.divider--inset {\n  margin-left: 72px;\n  width: calc(100% - 72px);\n}\n.divider.divider--dark {\n  background: rgba(255,255,255,0.12);\n}\n.divider.divider--light {\n  background: rgba(0,0,0,0.12);\n}\n.application--dark .expansion-panel {\n  color: #fff;\n}\n.application--light .expansion-panel {\n  color: rgba(0,0,0,0.87);\n}\n.expansion-panel {\n  text-align: left;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.expansion-panel > li {\n  border: 1px solid rgba(0,0,0,0.12);\n}\n.expansion-panel > li:not(:first-child) {\n  border-top: none;\n}\n.expansion-panel__header {\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 48px;\n  position: relative;\n  padding-left: 1rem;\n}\n.expansion-panel__header i {\n  margin-right: 1rem;\n}\n.expansion-panel__header:after {\n  content: '\\E313';\n  font-family: 'Material Icons';\n  font-size: 1.5rem;\n  position: absolute;\n  right: 15px;\n  top: calc(50% - 16px);\n  color: inherit;\n  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.expansion-panel__header--active:after {\n  -ms-transform: rotate(-180deg);\n      transform: rotate(-180deg);\n}\n.expansion-panel__body {\n  background-color: rgba(0,0,0,0.03);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.expansion-panel__body .card {\n  border-radius: 0;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.fab {\n  position: fixed;\n  bottom: 125px;\n  right: 24px;\n}\n.fab--hidden {\n  -ms-transform: scale(0) rotate(-45deg);\n      transform: scale(0) rotate(-45deg);\n}\n.fab--lateral .fab__content {\n  -ms-transform: none !important;\n      transform: none !important;\n}\n.fab--is-changing {\n  animation-duration: 0.6s;\n  animation-name: is-changing;\n  animation-delay: 50ms;\n}\n.fab--is-changing .fab__content {\n  animation-name: lateral;\n  animation-duration: 0.6s;\n}\n.fab:focus .fab__content {\n  -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n}\n.fab.fab--small {\n  height: 40px;\n  width: 40px;\n}\n.fab.fab--small .icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.fab.fab--large {\n  height: 72px;\n  width: 72px;\n}\n.fab.fab--large .icon {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n}\n@keyframes is-changing {\n0% {\n    transform: scale(1);\n}\n50% {\n    transform: scale(0);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes lateral {\n0% {\n    opacity: 0;\n}\n60% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n.footer {\n  -ms-flex-align: center;\n      align-items: center;\n  background: #9c27b0;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  height: 36px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.footer--absolute,\n.footer--fixed {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.footer--absolute {\n  position: absolute;\n}\n.footer--fixed {\n  position: fixed;\n}\n.footer > *:first-child {\n  margin-left: 24px;\n}\n.footer > *:last-child {\n  margin-right: 24px;\n}\n@media only screen and (max-width: 599px) {\n.footer > *:first-child {\n    margin-left: 16px;\n}\n.footer > *:last-child {\n    margin-right: 16px;\n}\n}\n.icon {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 24px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  vertical-align: middle;\n}\n.icon--dark {\n  color: rgba(0,0,0,0.54);\n}\n.icon--dark.icon--disabled {\n  color: rgba(0,0,0,0.38);\n}\n.icon--light {\n  color: #fff;\n}\n.icon--light.icon--disabled {\n  color: rgba(255,255,255,0.5);\n}\n.icon--large {\n  font-size: 2.5rem;\n}\n.icon--medium {\n  font-size: 2rem;\n}\n.icon--x-large {\n  font-size: 3rem;\n}\n.input-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  min-width: 24px;\n  margin: 18px 0;\n  position: relative;\n  width: 100%;\n  outline: none;\n}\n.input-group label {\n  font-size: 16px;\n  line-height: 32px;\n  height: 30px;\n  max-width: 80%;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 0;\n}\n.input-group__input {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 100%;\n      flex: 1 0 100%;\n  min-width: 0;\n  min-height: 30px;\n}\n.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-position: bottom;\n  background-size: 3px 1px;\n  background-repeat: repeat-x;\n}\n.input-group--disabled.input-group--light .input-group__details:before {\n  background-image: linear-gradient(to right, rgba(255,255,255,0.38) 0, rgba(255,255,255,0.38) 33%, transparent 0);\n}\n.input-group--disabled.input-group--dark .input-group__details:before {\n  background-image: linear-gradient(to right, rgba(0,0,0,0.38) 0, rgba(0,0,0,0.38) 33%, transparent 0);\n}\n.input-group--focused:not(.input-group--disabled) .input-group__details:after,\n.input-group:focus:not(.input-group--disabled) .input-group__details:after {\n  width: 100%;\n}\n.input-group--error .input-group__details:after {\n  background-color: #b71c1c;\n}\n.input-group--light .input-group__hint {\n  color: rgba(255,255,255,0.54);\n}\n.input-group--light .input-group__details:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.input-group--light .icon {\n  color: rgba(255,255,255,0.6);\n}\n.input-group--dark .input-group__hint {\n  color: rgba(0,0,0,0.7);\n}\n.input-group--dark .input-group__details:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.input-group--dark .icon {\n  color: rgba(0,0,0,0.6);\n}\n.input-group__icon-cb {\n  cursor: pointer;\n}\n.input-group .slide-y-transition-leave,\n.input-group .slide-y-transition-leave-to {\n  position: absolute;\n}\n.input-group__details {\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 4px;\n  -ms-flex: 1 0 100%;\n      flex: 1 0 100%;\n  font-size: 12px;\n  min-height: 22px;\n  position: relative;\n  width: 100%;\n}\n.input-group__details:after,\n.input-group__details:before {\n  content: '';\n  position: absolute;\n  left: 0;\n}\n.input-group__details:after {\n  background-color: #9c27b0;\n  top: -1px;\n  height: 2px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 0%;\n  z-index: 1;\n}\n.input-group__details:before {\n  top: 0;\n  height: 1px;\n  width: 100%;\n  z-index: 0;\n}\n.input-group--hide-details .input-group__details {\n  min-height: 0;\n  padding: 0;\n}\n.input-group__hint {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group .input-group__error {\n  -ms-flex: 1 0;\n      flex: 1 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #b71c1c;\n}\n.list {\n  list-style-type: none;\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.list .input-group {\n  margin: 0;\n}\n.list > .list__item ~ .list__item {\n  margin-top: 0;\n}\n.list__item {\n  position: relative;\n}\n.list__tile {\n  color: rgba(0,0,0,0.87);\n  display: -ms-flexbox;\n  display: flex;\n  height: 48px;\n  text-decoration: none;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 16px;\n  margin: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n}\n.list__tile:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 1px;\n  opacity: 0;\n  width: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  background-color: rgba(0,0,0,0.12);\n}\na.list__tile:hover,\n.list__tile--highlighted {\n  background: rgba(0,0,0,0.12);\n}\n.list__tile__content,\n.list__tile__action,\n.list__tile__avatar {\n  height: 100%;\n}\n.list__tile__title,\n.list__tile__sub-title {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.list__tile__title {\n  font-size: 16px;\n  font-weight: 400;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  text-align: left;\n}\n.list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n  font-size: 14px;\n  font-weight: 400;\n}\n.list__tile .avatar {\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  min-width: 56px;\n}\n.list__tile__action {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  min-width: 56px;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.list__tile__action .input-group {\n  -ms-flex-align: center;\n      align-items: center;\n}\n.list__tile__action .input-group__details {\n  display: none;\n}\n.list__tile__action .icon {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.list__tile__action-text {\n  color: #9e9e9e;\n  font-size: 12px;\n}\n.list__tile__action--stack {\n  -ms-flex-align: end;\n      align-items: flex-end;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.list__tile__content {\n  text-align: left;\n  -ms-flex: 0 1 100%;\n      flex: 0 1 100%;\n  font-size: 15px;\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.list__tile__content + .avatar {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.list__tile__content + .list__tile__action:not(.list__tile__action--stack) {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.list__tile--active .list__tile__title {\n  color: #9c27b0;\n}\n.list__tile--disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.list__tile--avatar {\n  height: 56px;\n}\n.list__tile--select-multi {\n  padding: 0 10px;\n}\n.list--dense {\n  padding-top: 4px;\n}\n.list--dense .list__tile {\n  height: 40px;\n  font-size: 13px;\n}\n.list--dense .list__tile__title {\n  font-size: 13px;\n}\n.list--dense .list__tile__sub-title {\n  font-size: 13px;\n}\n.list--two-line .list__tile {\n  height: 72px;\n}\n.list--two-line.list--dense .list__tile {\n  height: 60px;\n}\n.list--three-line .list__tile {\n  height: 88px;\n}\n.list--three-line .list__tile__sub-title {\n  white-space: initial;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n}\n.list--three-line.list--dense .list__tile {\n  height: 76px;\n}\n.list--group {\n  position: relative;\n  padding: 0;\n}\n.list--group:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 1px;\n  opacity: 0;\n  width: 100%;\n  background-color: rgba(0,0,0,0.12);\n}\n.list--group .list__tile {\n  padding-left: 72px;\n}\n.list--group .list__tile .list__tile__title {\n  font-weight: 400;\n}\n.list--group .list__tile--active .list__tile__title {\n  color: #9c27b0;\n  font-weight: 400;\n}\n.list--group__header + .list--group:after {\n  opacity: 1;\n}\n.list--group__header--active .list__tile {\n  background: rgba(0,0,0,0.12);\n}\n.list--group__header--active .list__tile:after {\n  opacity: 1;\n}\n.list--group__header--active .list__tile .list__tile__title {\n  color: inherit;\n}\n.list--group__header--active .list__tile .list__tile__action:last-of-type .icon {\n  -ms-transform: rotate(-180deg);\n      transform: rotate(-180deg);\n}\n.list--group__header--no-action + .list--group .list__tile {\n  padding-left: 16px;\n}\n.list--subheader {\n  padding-top: 0;\n}\n.menu {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.menu--disabled {\n  cursor: not-allowed;\n}\n.menu--disabled .menu__activator {\n  cursor: not-allowed;\n}\n.menu__activator {\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n  position: relative;\n}\n.menu__content {\n  background: #fff;\n  position: absolute;\n  display: inline-block;\n  border-radius: 2px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 6;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.menu-transition-enter .list__tile {\n  min-width: 0;\n  transition-delay: 0.4s;\n  opacity: 0;\n  -ms-transform: translateY(-15px);\n      transform: translateY(-15px);\n  pointer-events: none;\n}\n.menu-transition-enter .list__tile--active {\n  opacity: 1;\n  -ms-transform: none !important;\n      transform: none !important;\n  pointer-events: auto;\n}\n.menu-transition-enter-to .list__tile {\n  pointer-events: auto;\n  opacity: 1;\n}\n.menu-transition-enter-to .list__tile--active {\n  -ms-transform: none !important;\n      transform: none !important;\n}\n.menu-transition-leave-to {\n  -ms-transform: translateY(-10px);\n      transform: translateY(-10px);\n}\n.menu-transition-leave-active,\n.menu-transition-leave-to {\n  pointer-events: none;\n}\n.menu-transition-enter,\n.menu-transition-leave-to {\n  opacity: 0;\n}\n.menu-transition-enter-to,\n.menu-transition-leave {\n  opacity: 1;\n}\n.menu-transition-enter-active,\n.menu-transition-leave-active {\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.navigation-drawer {\n  max-width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0 0 100px;\n  pointer-events: auto;\n  position: fixed;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 300px;\n  top: 0;\n  left: 0;\n  will-change: transform;\n  z-index: 3;\n}\n.navigation-drawer:not(.navigation-drawer--is-booted) {\n  transition: none !important;\n}\n.navigation-drawer:not(.navigation-drawer--is-booted) + .toolbar,\n.navigation-drawer:not(.navigation-drawer--is-booted) ~ main,\n.navigation-drawer:not(.navigation-drawer--is-booted) ~ .footer {\n  transition: none !important;\n}\n.navigation-drawer--close:not(.navigation--permanent).navigation-drawer:not(.navigation-drawer--right) {\n  transform: translate3d(-300px, 0, 0);\n}\n.navigation-drawer--close:not(.navigation--permanent).navigation-drawer--right {\n  transform: translate3d(300px, 0, 0);\n}\n.navigation-drawer--right {\n  left: initial;\n  right: 0;\n}\n.navigation-drawer--absolute {\n  position: absolute;\n}\n.navigation-drawer--dark {\n  background: #424242;\n}\n.navigation-drawer--dark > .list .list__tile {\n  color: #fff;\n}\n.navigation-drawer--dark > .list .list--group__header--active .list__tile:after {\n  background: rgba(255,255,255,0.12);\n}\n.navigation-drawer--dark > .list .list--group__header--active + .list--group:after {\n  background: rgba(255,255,255,0.12);\n}\n.navigation-drawer--dark .divider {\n  background: rgba(255,255,255,0.12);\n}\n.navigation-drawer--light {\n  background: #fff;\n}\n.navigation-drawer--light > .list .list__tile {\n  color: rgba(0,0,0,0.87);\n}\n.navigation-drawer--light > .list .list--group__header--active .list__tile:after {\n  background: rgba(0,0,0,0.12);\n}\n.navigation-drawer--light > .list .list--group__header--active + .list--group:after {\n  background: rgba(0,0,0,0.12);\n}\n.navigation-drawer--light .divider {\n  background: rgba(0,0,0,0.12);\n}\n.navigation-drawer--light:not(.navigation-drawer--right) {\n  border-right: 1px solid rgba(0,0,0,0.12);\n}\n.navigation-drawer--light.navigation-drawer--right {\n  border-left: 1px solid rgba(0,0,0,0.12);\n}\n.navigation-drawer--permanent.navigation-drawer--clipped,\n.navigation-drawer--persistent.navigation-drawer--clipped,\n.navigation-drawer--permanent.navigation-drawer--floating,\n.navigation-drawer--persistent.navigation-drawer--floating {\n  margin-top: 56px;\n  max-height: calc(100vh - 56px);\n}\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .toolbar,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .toolbar,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .footer.footer--fixed,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .footer.footer--fixed,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .footer.footer--fixed,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .footer.footer--fixed,\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .footer.footer--absolute,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .footer.footer--absolute,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .footer.footer--absolute,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .footer.footer--absolute {\n  padding-left: 0;\n  z-index: 3;\n}\n.navigation-drawer--permanent.navigation-drawer--floating,\n.navigation-drawer--persistent.navigation-drawer--floating {\n  border-color: transparent;\n}\n.navigation-drawer--permanent:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ main,\n.navigation-drawer--permanent:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ .toolbar,\n.navigation-drawer--permanent:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ .footer {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent.navigation-drawer--open:not(.navigation-drawer--is-mobile):not(.navigation-drawer--right):not(.navigation-drawer--clipped) ~ .toolbar {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent.navigation-drawer--open:not(.navigation-drawer--is-mobile):not(.navigation-drawer--right) ~ main,\n.navigation-drawer--persistent.navigation-drawer--open:not(.navigation-drawer--is-mobile):not(.navigation-drawer--right) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent.navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--is-mobile):not(.navigation-drawer--clipped) + .toolbar {\n  padding-right: 300px;\n}\n.navigation-drawer--persistent.navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--is-mobile) ~ main,\n.navigation-drawer--persistent.navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--is-mobile) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-right: 300px;\n}\n.navigation-drawer--mini-variant {\n  margin-top: 56px;\n  max-height: calc(100vh - 56px);\n  overflow: hidden;\n  width: 80px;\n}\n.navigation-drawer--mini-variant .list__tile__action,\n.navigation-drawer--mini-variant .list__tile__avatar {\n  -ms-flex-pack: center;\n      justify-content: center;\n  min-width: 48px;\n}\n.navigation-drawer--mini-variant .list__tile__content {\n  opacity: 0;\n}\n.navigation-drawer--mini-variant .subheader,\n.navigation-drawer--mini-variant .divider {\n  display: none;\n}\n.navigation-drawer--mini-variant ~ .toolbar {\n  padding-left: 0 !important;\n}\n.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ main {\n  padding-left: 80px !important;\n}\n.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-left: 80px !important;\n}\n.navigation-drawer--temporary,\n.navigation-drawer--is-mobile:not(.navigation-drawer--permanent) {\n  z-index: 5;\n}\n.navigation-drawer--temporary:not(.navigation-drawer--close),\n.navigation-drawer--is-mobile:not(.navigation-drawer--permanent):not(.navigation-drawer--close) {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12);\n}\n.navigation-drawer ~ toolbar + main {\n  min-height: calc(100vh - 56px);\n}\n.navigation-drawer > .list .list__tile {\n  transition: none;\n}\n.navigation-drawer > .list .list__tile--active .list__tile__title {\n  color: inherit;\n}\n.navigation-drawer > .list .list__tile--active > *:first-child .icon {\n  color: #9c27b0;\n}\n.navigation-drawer > .list .list--group__header--active:after {\n  background: transparent;\n}\n.navigation-drawer > .list .list--group__header--active .list__tile__action:first-of-type .icon {\n  color: #9c27b0;\n}\n.navigation-drawer > .list .list--group__container .list__tile--active .list__tile__title {\n  color: #9c27b0;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 4;\n}\n.overlay--absolute {\n  position: absolute;\n}\n.overlay:before {\n  background-color: #212121;\n  bottom: 0;\n  content: '';\n  filter: blur(10%);\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.overlay--active {\n  pointer-events: auto;\n}\n.overlay--active:before {\n  opacity: 0.46;\n}\n.pagination {\n  list-style-type: none;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0;\n  margin: 0;\n  height: 40px;\n  align-items: center;\n}\n.pagination > li {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n}\n.pagination a {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.pagination a:hover {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.pagination--circle .pagination__item,\n.pagination--circle .pagination__more,\n.pagination--circle .pagination__navigation {\n  border-radius: 50%;\n}\n.pagination--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.pagination__item {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 4px;\n  color: rgba(0,0,0,0.87);\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  background: transparent;\n  height: 34px;\n  width: 34px;\n  margin: 0.3rem;\n  text-decoration: none;\n}\n.pagination__item--active {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n  background: #9c27b0;\n  color: #fff;\n}\n.pagination__navigation {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  text-decoration: none;\n  color: rgba(0,0,0,0.87);\n  height: 2rem;\n  border-radius: 4px;\n  width: 2rem;\n  margin: 0.3rem 15px;\n}\n.pagination__navigation .icon {\n  font-size: 2rem;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n  color: rgba(0,0,0,0.54);\n}\n.pagination__navigation--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.pagination__more {\n  margin: 0.3rem;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: end;\n      align-items: flex-end;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 2rem;\n  width: 2rem;\n}\n.parallax {\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n.parallax__image-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.parallax__image {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  display: none;\n  transform: translate3d(-50%, 0, 0);\n  z-index: 1;\n}\n.parallax__content {\n  color: #fff;\n  height: 100%;\n  z-index: 2;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 1rem;\n}\n.picker {\n  border-radius: 2px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 290px;\n}\n.picker .card__row--actions {\n  border: none;\n  margin-top: -20px;\n}\n.picker__title {\n  height: 105px;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  padding: 16px;\n}\n.picker__body {\n  height: 290px;\n  overflow: hidden;\n  position: relative;\n}\n.picker--dark {\n  color: #fff;\n}\n.picker--dark .btn {\n  color: #fff;\n}\n.picker--dark .picker__body {\n  background: #424242;\n}\n.picker--dark .picker__title {\n  background: #616161;\n}\n.picker--light {\n  color: #fff;\n}\n.picker--light .btn {\n  color: rgba(0,0,0,0.87);\n}\n.picker--light .picker__body {\n  background: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.picker--light .picker__title {\n  background: #9c27b0;\n}\n.picker--landscape {\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 500px;\n}\n.picker--landscape .picker__title {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  -ms-flex: 0 1 170px;\n      flex: 0 1 170px;\n  width: 170px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 1;\n}\n.picker--landscape .picker__body {\n  -ms-flex: 1 0;\n      flex: 1 0;\n  width: 330px;\n  margin-left: 170px;\n}\n.picker--landscape .card__row--actions {\n  margin-left: 170px;\n  width: 330px;\n}\n.progress-circular {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.progress-circular--indeterminate svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  -ms-transform-origin: center center;\n      transform-origin: center center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.2s ease-in-out;\n  z-index: 0;\n}\n.progress-circular--indeterminate .progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0px;\n}\n.progress-circular__underlay {\n  stroke: rgba(0,0,0,0.1);\n  z-index: 1;\n}\n.progress-circular__overlay {\n  stroke: currentColor;\n  z-index: 2;\n  transition: all 0.6s ease-in-out;\n}\n.progress-circular__info {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n@keyframes progress-circular-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n}\n50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n}\n100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n}\n}\n@keyframes progress-circular-rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n.progress-linear {\n  background: transparent;\n  margin: 1rem 0;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.progress-linear .progress-linear__bar {\n  background: #d786e4;\n}\n.progress-linear .progress-linear__bar__determinate {\n  background: #9c27b0;\n}\n.progress-linear .progress-linear__bar__indeterminate:before,\n.progress-linear .progress-linear__bar__indeterminate:after {\n  background: #9c27b0;\n}\n.progress-linear__bar {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  transition: 0.3s ease-in;\n  z-index: 1;\n}\n.progress-linear__bar__determinate {\n  height: inherit;\n  transition: 0.3s ease-in;\n}\n.progress-linear__bar__indeterminate:before,\n.progress-linear__bar__indeterminate:after {\n  content: '';\n  height: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  will-change: left, right;\n  width: auto;\n}\n.progress-linear__bar__indeterminate:before {\n  animation: indeterminate;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear__bar__indeterminate:after {\n  animation: indeterminate-short;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--query .progress-linear__bar__indeterminate:before {\n  animation: query;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--query .progress-linear__bar__indeterminate:after {\n  animation: query-short;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--secondary .progress-linear__bar {\n  background: #a1a1a1;\n}\n.progress-linear--secondary .progress-linear__bar__determinate {\n  background: #424242;\n}\n.progress-linear--secondary .progress-linear__bar__indeterminate:before,\n.progress-linear--secondary .progress-linear__bar__indeterminate:after {\n  background: #424242;\n}\n.progress-linear--success .progress-linear__bar {\n  background: #83d187;\n}\n.progress-linear--success .progress-linear__bar__determinate {\n  background: #2e7d32;\n}\n.progress-linear--success .progress-linear__bar__indeterminate:before,\n.progress-linear--success .progress-linear__bar__indeterminate:after {\n  background: #2e7d32;\n}\n.progress-linear--info .progress-linear__bar {\n  background: #649cf2;\n}\n.progress-linear--info .progress-linear__bar__determinate {\n  background: #0d47a1;\n}\n.progress-linear--info .progress-linear__bar__indeterminate:before,\n.progress-linear--info .progress-linear__bar__indeterminate:after {\n  background: #0d47a1;\n}\n.progress-linear--warning .progress-linear__bar {\n  background: #ffd980;\n}\n.progress-linear--warning .progress-linear__bar__determinate {\n  background: #ffb300;\n}\n.progress-linear--warning .progress-linear__bar__indeterminate:before,\n.progress-linear--warning .progress-linear__bar__indeterminate:after {\n  background: #ffb300;\n}\n.progress-linear--error .progress-linear__bar {\n  background: #eb7d7d;\n}\n.progress-linear--error .progress-linear__bar__determinate {\n  background: #b71c1c;\n}\n.progress-linear--error .progress-linear__bar__indeterminate:before,\n.progress-linear--error .progress-linear__bar__indeterminate:after {\n  background: #b71c1c;\n}\n@keyframes indeterminate {\n0% {\n    left: -90%;\n    right: 100%;\n}\n60% {\n    left: -90%;\n    right: 100%;\n}\n100% {\n    left: 100%;\n    right: -35%;\n}\n}\n@keyframes indeterminate-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@keyframes query {\n0% {\n    right: -90%;\n    left: 100%;\n}\n60% {\n    right: -90%;\n    left: 100%;\n}\n100% {\n    right: 100%;\n    left: -35%;\n}\n}\n@keyframes query-short {\n0% {\n    right: -200%;\n    left: 100%;\n}\n60% {\n    right: 107%;\n    left: -8%;\n}\n100% {\n    right: 107%;\n    left: -8%;\n}\n}\n.ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n}\n.ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  pointer-events: none;\n  overflow: hidden;\n  will-change: opacity;\n}\n.ripple__animation--enter {\n  transition: none;\n}\n.ripple__animation--visible {\n  opacity: 0.15;\n}\n.input-group--select .input-group--select__autocomplete {\n  display: block;\n  opacity: 0;\n  height: 0;\n}\n.input-group--select .input-group__append-icon {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.input-group--select.input-group--focused .input-group--select__autocomplete {\n  -ms-flex: 1 0 100%;\n      flex: 1 0 100%;\n  opacity: 1;\n  height: 30px;\n}\n.input-group--select.input-group--focused .input-group__append-icon {\n  -ms-transform: rotate(-180deg);\n      transform: rotate(-180deg);\n}\n.input-group--select .input-group__input,\n.input-group--select input {\n  cursor: pointer;\n}\n.input-group--select.input-group--disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.input-group--select .input-group__selections {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  position: relative;\n}\n.input-group--select .input-group__selections > div {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex: 1;\n      flex: 1;\n}\n.input-group--select .input-group__selections__comma {\n  display: inline-block;\n  font-size: 16px;\n  height: 30px;\n  padding-top: 4px;\n  padding-right: 4px;\n}\n.input-group--select.input-group--light .input-group__selections__comma {\n  color: #fff;\n}\n.input-group--select.input-group--light .input-group__selections__comma--active {\n  color: #9c27b0;\n}\n.input-group--select.input-group--dark .input-group__selections__comma {\n  color: rgba(0,0,0,0.87);\n}\n.input-group--select .menu {\n  display: inline;\n}\n.input-group--select .fade-transition-leave-active {\n  position: absolute;\n  left: 0;\n}\n.input-group.input-group--selection-controls {\n  display: -ms-flexbox;\n  display: flex;\n}\n.input-group.input-group--selection-controls .icon {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.input-group.input-group--selection-controls .input-group__details:before,\n.input-group.input-group--selection-controls .input-group__details:after {\n  display: none;\n}\n.input-group.input-group--selection-controls .input-group__input {\n  width: 100%;\n  position: relative;\n}\n.input-group.input-group--selection-controls .input-group__input .icon {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  height: 24px;\n  margin: auto;\n}\n.input-group--selection-controls label {\n  cursor: pointer;\n  margin-left: 32px;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n.input-group--selection-controls__ripple {\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n  cursor: pointer;\n  position: absolute;\n  transform: translate3d(-12px, -50%, 0);\n  -ms-transform-origin: center center;\n      transform-origin: center center;\n  top: 50%;\n  left: 0;\n}\n.input-group--selection-controls__ripple:before {\n  content: '';\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: currentColor;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0) scale(0.3);\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  -ms-transform-origin: center center;\n      transform-origin: center center;\n}\n.input-group.input-group--selection-controls {\n  z-index: 0;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  position: relative;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container.primary--text .input-group--selection-controls__ripple--active:after,\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container.secondary--text .input-group--selection-controls__ripple--active:after,\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container.success--text .input-group--selection-controls__ripple--active:after,\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container.info--text .input-group--selection-controls__ripple--active:after,\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container.warning--text .input-group--selection-controls__ripple--active:after,\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container.error--text .input-group--selection-controls__ripple--active:after {\n  background: currentColor !important;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: inherit;\n  position: absolute;\n  height: 14px;\n  top: 50%;\n  left: 0;\n  width: 34px;\n  border-radius: 8px;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple {\n  transform: translate3d(-15px, -24px, 0);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 1;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  cursor: pointer;\n  width: 20px;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  height: 20px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n  transition: all 100ms linear;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active {\n  transform: translate3d(2px, -24px, 0);\n}\n.input-group.input-group--selection-controls.switch label {\n  margin-left: 44px;\n}\n.input-group--selection-controls.input-group--tab-focused .input-group--selection-controls__ripple:before {\n  transform: translate3d(-50%, -50%, 0) scale(1);\n  opacity: 0.15;\n}\n.input-group--selection-controls.switch.input-group--light {\n  color: #80cbc4;\n}\n.input-group--selection-controls.switch.input-group--light label {\n  color: #fff;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__toggle {\n  background: rgba(255,255,255,0.3);\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__toggle--active {\n  background: currentColor;\n  opacity: 0.5;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple {\n  color: currentColor;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple:after {\n  background: #bdbdbd;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple--active:after {\n  background: currentColor;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__container--disabled {\n  color: #424242;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__container--disabled .input-group--selection-controls__toggle {\n  background: rgba(255,255,255,0.1);\n  opacity: 1;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__container--disabled .input-group--selection-controls__ripple {\n  color: #424242;\n}\n.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__container--disabled .input-group--selection-controls__ripple:after {\n  background: #424242;\n}\n.input-group--selection-controls.switch.input-group--dark {\n  color: #009688;\n}\n.input-group--selection-controls.switch.input-group--dark label {\n  color: #424242;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__toggle {\n  background: rgba(0,0,0,0.38);\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__toggle--active {\n  background: currentColor;\n  opacity: 0.5;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple {\n  color: currentColor;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple:after {\n  background: #fafafa;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple--active:after {\n  background: currentColor;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__container--disabled {\n  color: #bdbdbd;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__container--disabled .input-group--selection-controls__toggle {\n  background: rgba(0,0,0,0.12);\n  opacity: 1;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__container--disabled .input-group--selection-controls__ripple {\n  color: #bdbdbd;\n}\n.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__container--disabled .input-group--selection-controls__ripple:after {\n  background: #bdbdbd;\n}\n.input-group--selection-controls.checkbox.input-group--light label,\n.input-group--selection-controls.radio.input-group--light label {\n  color: #fff;\n}\n.input-group--selection-controls.checkbox.input-group--light .icon,\n.input-group--selection-controls.radio.input-group--light .icon {\n  color: rgba(255,255,255,0.54);\n}\n.input-group--selection-controls.checkbox.input-group--light.input-group--active .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group--light.input-group--active .input-group--selection-controls__ripple {\n  color: #009688;\n}\n.input-group--selection-controls.checkbox.input-group--light.input-group--active .icon,\n.input-group--selection-controls.radio.input-group--light.input-group--active .icon {\n  color: #009688;\n}\n.input-group--selection-controls.checkbox.input-group--light.input-group--disabled .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group--light.input-group--disabled .input-group--selection-controls__ripple {\n  color: rgba(255,255,255,0.26);\n}\n.input-group--selection-controls.checkbox.input-group--light.input-group--disabled .icon,\n.input-group--selection-controls.radio.input-group--light.input-group--disabled .icon {\n  color: rgba(255,255,255,0.26);\n}\n.input-group--selection-controls.checkbox.input-group--dark label,\n.input-group--selection-controls.radio.input-group--dark label {\n  color: #000;\n}\n.input-group--selection-controls.checkbox.input-group--dark .icon,\n.input-group--selection-controls.radio.input-group--dark .icon {\n  color: rgba(0,0,0,0.7);\n}\n.input-group--selection-controls.checkbox.input-group--dark.input-group--active .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group--dark.input-group--active .input-group--selection-controls__ripple {\n  color: #009688;\n}\n.input-group--selection-controls.checkbox.input-group--dark.input-group--active .icon,\n.input-group--selection-controls.radio.input-group--dark.input-group--active .icon {\n  color: #009688;\n}\n.input-group--selection-controls.checkbox.input-group--dark.input-group--disabled .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group--dark.input-group--disabled .input-group--selection-controls__ripple {\n  color: rgba(0,0,0,0.3);\n}\n.input-group--selection-controls.checkbox.input-group--dark.input-group--disabled .icon,\n.input-group--selection-controls.radio.input-group--dark.input-group--disabled .icon {\n  color: rgba(0,0,0,0.3);\n}\n.input-group--selection-controls.checkbox.input-group.input-group--active.primary--text .icon,\n.input-group--selection-controls.radio.input-group.input-group--active.primary--text .icon,\n.input-group--selection-controls.checkbox.input-group.input-group--active.secondary--text .icon,\n.input-group--selection-controls.radio.input-group.input-group--active.secondary--text .icon,\n.input-group--selection-controls.checkbox.input-group.input-group--active.success--text .icon,\n.input-group--selection-controls.radio.input-group.input-group--active.success--text .icon,\n.input-group--selection-controls.checkbox.input-group.input-group--active.info--text .icon,\n.input-group--selection-controls.radio.input-group.input-group--active.info--text .icon,\n.input-group--selection-controls.checkbox.input-group.input-group--active.warning--text .icon,\n.input-group--selection-controls.radio.input-group.input-group--active.warning--text .icon,\n.input-group--selection-controls.checkbox.input-group.input-group--active.error--text .icon,\n.input-group--selection-controls.radio.input-group.input-group--active.error--text .icon,\n.input-group--selection-controls.checkbox.input-group.input-group--active.primary--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group.input-group--active.primary--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.checkbox.input-group.input-group--active.secondary--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group.input-group--active.secondary--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.checkbox.input-group.input-group--active.success--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group.input-group--active.success--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.checkbox.input-group.input-group--active.info--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group.input-group--active.info--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.checkbox.input-group.input-group--active.warning--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group.input-group--active.warning--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.checkbox.input-group.input-group--active.error--text .input-group--selection-controls__ripple,\n.input-group--selection-controls.radio.input-group.input-group--active.error--text .input-group--selection-controls__ripple {\n  color: currentColor !important;\n}\n.input-group--slider.input-group--light label {\n  -ms-transform: none;\n      transform: none;\n  -ms-flex-preferred-size: 56px;\n      flex-basis: 56px;\n  color: rgba(255,255,255,0.87);\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 18px;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.input-group--slider.input-group--light .slider__track {\n  background: rgba(255,255,255,0.26);\n}\n.input-group--slider.input-group--light .slider__track__container:after {\n  border: 0 solid rgba(255,255,255,0.6);\n  border-left-width: 2px;\n}\n.input-group--slider.input-group--light .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.26);\n}\n.input-group--slider.input-group--light .slider__thumb--label {\n  background: rgba(255,255,255,0.26);\n}\n.input-group--slider.input-group--light .slider__ticks {\n  background: repeating-linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6) 2px, transparent 0, transparent);\n}\n.input-group--slider.input-group--light.input-group--disabled .slider__thumb {\n  background: rgba(255,255,255,0.38);\n  border-color: transparent;\n}\n.input-group--slider.input-group--light.input-group--disabled.input-group--dirty .slider__track-fill {\n  background: rgba(255,255,255,0.26);\n}\n.input-group--slider.input-group--light:not(.input-group--dirty) .slider__thumb-container--label .slider__thumb {\n  background: #fff;\n}\n.input-group--slider.input-group--dark label {\n  -ms-transform: none;\n      transform: none;\n  -ms-flex-preferred-size: 56px;\n      flex-basis: 56px;\n  color: #000;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 18px;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.input-group--slider.input-group--dark .slider__track {\n  background: rgba(0,0,0,0.3);\n}\n.input-group--slider.input-group--dark .slider__track__container:after {\n  border: 0 solid rgba(0,0,0,0.6);\n  border-left-width: 2px;\n}\n.input-group--slider.input-group--dark .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.3);\n}\n.input-group--slider.input-group--dark .slider__thumb--label {\n  background: rgba(0,0,0,0.3);\n}\n.input-group--slider.input-group--dark .slider__ticks {\n  background: repeating-linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6) 2px, transparent 0, transparent);\n}\n.input-group--slider.input-group--dark.input-group--disabled .slider__thumb {\n  background: rgba(0,0,0,0.3);\n  border-color: transparent;\n}\n.input-group--slider.input-group--dark.input-group--disabled.input-group--dirty .slider__track-fill {\n  background: rgba(0,0,0,0.3);\n}\n.input-group--slider.input-group--dark:not(.input-group--dirty) .slider__thumb-container--label .slider__thumb {\n  background: #000;\n}\n.input-group--slider {\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.input-group--slider .input-group__details:before,\n.input-group--slider .input-group__details:after {\n  display: none;\n}\n.input-group--slider .input-group__input {\n  -ms-flex: 1 1 100%;\n      flex: 1 1 100%;\n}\n.input-group--slider label + .input-group__input {\n  margin-left: 16px;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n}\n.input-group--slider.input-group--active .slider__thumb {\n  -ms-transform: translateY(-50%) scale(1);\n      transform: translateY(-50%) scale(1);\n}\n.input-group--slider.input-group--active .slider__track {\n  transition: none;\n}\n.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb {\n  -ms-transform: translateY(-50%) scale(0);\n      transform: translateY(-50%) scale(0);\n}\n.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb:hover {\n  -ms-transform: translateY(-50%) scale(0);\n      transform: translateY(-50%) scale(0);\n}\n.input-group--slider.input-group--active .slider__thumb-container,\n.input-group--slider.input-group--active .slider__track-fill {\n  transition: none;\n}\n.input-group--slider.input-group--dirty .slider__thumb {\n  background: #9c27b0;\n  border-color: #9c27b0;\n}\n.input-group--slider.input-group--dirty .slider__thumb--label {\n  background: #9c27b0;\n}\n.input-group--slider.input-group--disabled {\n  pointer-events: none;\n}\n.input-group--slider.input-group--disabled .slider__thumb {\n  -ms-transform: translateY(-50%) scale(0.5);\n      transform: translateY(-50%) scale(0.5);\n  background: transparent;\n}\n.input-group--slider.input-group--disabled.input-group--dirty {\n  border-color: transparent;\n}\n.input-group--slider.input-group--prepend-icon .slider {\n  margin-left: 56px;\n}\n.slider {\n  cursor: default;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  height: 30px;\n  -ms-flex: 1;\n      flex: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.input-group--ticks:hover .slider__track__container:after,\n.input-group--ticks:hover .slider__ticks {\n  opacity: 1;\n}\n.slider__track__container {\n  position: absolute;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  height: 2px;\n  width: 100%;\n  overflow: hidden;\n}\n.slider__track__container:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 2px;\n  transition: 0.3s ease-in-out;\n  width: 2px;\n  opacity: 0;\n}\n.slider__track,\n.slider__thumb,\n.slider__ticks {\n  position: absolute;\n  top: 0;\n}\n.slider__track {\n  height: 2px;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  -ms-transform-origin: right;\n      transform-origin: right;\n  overflow: hidden;\n  width: 100%;\n}\n.slider__track-fill {\n  position: absolute;\n  left: 0;\n  height: 2px;\n  background: #9c27b0;\n  -ms-transform-origin: left;\n      transform-origin: left;\n  width: 100%;\n  transition: 0.3s ease-in-out;\n}\n.slider__ticks,\n.slider__ticks-container {\n  position: absolute;\n  left: 0;\n  height: 2px;\n  width: 100%;\n}\n.slider__ticks-container {\n  top: 50%;\n  overflow: hidden;\n}\n.slider__ticks {\n  transition: 0.3s ease-in-out;\n  opacity: 0;\n}\n.slider__thumb-container {\n  position: absolute;\n  top: 50%;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb {\n  width: 20px;\n  height: 20px;\n  left: -10px;\n  top: 50%;\n  border-radius: 50%;\n  background: transparent;\n  transition: 0.3s ease-in-out;\n  -ms-transform: translateY(-50%) scale(0.8);\n      transform: translateY(-50%) scale(0.8);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.slider__thumb:hover {\n  -ms-transform: translateY(-50%) scale(1);\n      transform: translateY(-50%) scale(1);\n}\n.slider__thumb--label__container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb--label {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 12px;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50% 50% 0;\n  position: absolute;\n  left: -14px;\n  top: -40px;\n  -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb--label span {\n  transform: rotate(-45deg) translateZ(0);\n}\n.small-dialog {\n  display: block;\n  height: 100%;\n}\n.small-dialog__content {\n  padding: 0 24px;\n}\n.small-dialog__actions {\n  text-align: right;\n}\n.small-dialog a {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  color: rgba(0,0,0,0.87);\n  height: 100%;\n  text-decoration: none;\n}\n.small-dialog a > * {\n  width: 100%;\n}\n.small-dialog .menu__activator {\n  height: 100%;\n}\n.snack {\n  background-color: #323232;\n  position: fixed;\n  display: -ms-flexbox;\n  display: flex;\n  height: 0;\n  pointer-events: none;\n  z-index: 1000;\n  visibility: visible;\n}\n.snack--absolute {\n  position: absolute;\n}\n.snack--top {\n  top: 0;\n  left: 50%;\n  transform: translate3d(-50%, 0, 0) translateZ(0);\n}\n.snack--bottom {\n  bottom: 48px;\n  left: 50%;\n  transform: translate3d(-50%, 0, 0) translateZ(0);\n}\n.snack--left {\n  left: 8px;\n  right: initial;\n  -ms-transform: none;\n      transform: none;\n}\n.snack--left.snack--top {\n  top: 8px;\n}\n.snack--left.snack--bottom {\n  bottom: 56px;\n}\n.snack--right {\n  left: initial;\n  right: 8px;\n  -ms-transform: none;\n      transform: none;\n}\n.snack--right.snack--top {\n  top: 8px;\n}\n.snack--right.snack--bottom {\n  top: initial;\n  bottom: 56px;\n}\n.snack__content {\n  background-color: inherit;\n  padding: 14px 24px;\n  border-radius: 2px;\n  pointer-events: auto;\n  max-width: 568px;\n  min-width: 288px;\n  height: 48px;\n  -ms-flex-align: center;\n      align-items: center;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative !important;\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.snack__content .btn {\n  margin: 0 0 0 48px;\n}\n@media only screen and (max-width: 599px) {\n.snack {\n    width: 100%;\n    left: 0;\n    right: initial;\n    -ms-transform: none;\n        transform: none;\n}\n.snack--right.snack--top,\n  .snack--left.snack--top {\n    top: 0;\n}\n.snack--right.snack--bottom,\n  .snack--left.snack--bottom {\n    bottom: 48px;\n}\n.snack__content {\n    border-radius: 0;\n    max-width: 100%;\n    width: 100%;\n}\n.snack__content .btn {\n    margin: 0 0 0 24px;\n}\n.snack--multi-line .snack__content {\n    height: 80px;\n    padding: 24px;\n}\n.snack--bottom.snack--multi-line,\n  .snack--right.snack--multi-line {\n    bottom: 80px;\n}\n.snack--vertical .snack__content {\n    height: 112px;\n    padding: 24px 24px 14px;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: initial;\n        align-items: initial;\n}\n.snack--vertical .snack__content .btn {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n}\n.snack--bottom.snack--vertical,\n  .snack--right.snack--vertical {\n    bottom: 112px;\n}\n}\n.stepper {\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.stepper__header {\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.stepper__header .divider {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0 -16px;\n}\n.stepper__step__step {\n  -ms-flex-align: center;\n      align-items: center;\n  background: rgba(0,0,0,0.38);\n  border-radius: 50%;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 12px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 24px;\n  margin-right: 8px;\n  width: 24px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.stepper__step__step .icon {\n  font-size: 18px;\n  color: #fff;\n}\n.stepper__step {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 24px;\n  position: relative;\n}\n.stepper__step--active .stepper__label {\n  text-shadow: 0px 0px 0px #000;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.stepper__step--active .stepper__step__step {\n  background: #9c27b0;\n}\n.stepper__step--editable {\n  cursor: pointer;\n}\n.stepper__step--editable:hover {\n  background: rgba(0,0,0,0.06);\n  text-shadow: 0px 0px 0px #000;\n}\n.stepper__step--inactive .stepper__label {\n  color: rgba(0,0,0,0.38);\n}\n.stepper__step--inactive .stepper__label small {\n  color: rgba(0,0,0,0.38);\n}\n.stepper__step__step:not(.stepper__step--inactive.stepper__step--error) {\n  color: #fff;\n  background: rgba(0,0,0,0.38);\n}\n.stepper__step__step:not(.stepper__step--inactive.stepper__step--error):hover {\n  background: rgba(0,0,0,0.5);\n}\n.stepper__step--inactive.stepper__step--editable:hover .stepper__step__step {\n  background: rgba(0,0,0,0.5);\n}\n.stepper__step--error .stepper__step__step {\n  background: transparent;\n  color: #b71c1c;\n}\n.stepper__step--error .stepper__step__step .icon {\n  font-size: 24px;\n  color: #b71c1c;\n}\n.stepper__step--error .stepper__label {\n  color: #b71c1c;\n  text-shadow: none;\n  font-weight: 500;\n}\n.stepper__step--error .stepper__label small {\n  color: #b71c1c;\n}\n.stepper__step--complete .stepper__label {\n  color: rgba(0,0,0,0.87);\n}\n.stepper__step--complete .stepper__step__step {\n  background: #9c27b0;\n}\n.stepper__label {\n  -ms-flex-align: start;\n      align-items: flex-start;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-align: left;\n  color: rgba(0,0,0,0.38);\n}\n.stepper__label small {\n  font-size: 12px;\n  font-weight: 300;\n  color: rgba(0,0,0,0.54);\n  text-shadow: none;\n}\n.stepper__wrapper {\n  overflow: hidden;\n  transition: 0.4s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.stepper__content {\n  top: initial;\n  bottom: 0;\n  padding: 16px;\n  transition: 0.4s cubic-bezier(0.4, 0, 0.6, 1);\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n}\n.stepper__content .btn {\n  margin-left: 0;\n}\n.stepper--non-linear .stepper__step:not(.stepper__step--complete) .stepper__label {\n  color: rgba(0,0,0,0.54);\n}\n.stepper--vertical {\n  padding-bottom: 36px;\n}\n.stepper--vertical .stepper__content {\n  margin: -8px 0 -16px 36px;\n  padding: 16px 60px 16px 23px;\n  width: auto;\n}\n.stepper--vertical .stepper__content:not(:last-child) {\n  border-left: 1px solid rgba(0,0,0,0.12);\n}\n.stepper--vertical .stepper__step {\n  padding: 24px 24px 16px;\n}\n.stepper--vertical .stepper__step__step {\n  margin-right: 12px;\n}\n.stepper--alt-labels .stepper__header .divider {\n  margin: 35px -67px 0;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n.stepper--alt-labels .stepper__step {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-preferred-size: 175px;\n      flex-basis: 175px;\n}\n.stepper--alt-labels .stepper__step small {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n.stepper--alt-labels .stepper__step__step {\n  margin-right: 0;\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 1023px) {\n.stepper:not(.stepper--vertical) .stepper__label {\n    display: none;\n}\n.stepper:not(.stepper--vertical) .stepper__step__step {\n    margin-right: 0;\n}\n}\n.subheader {\n  height: 48px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 16px 0 16px;\n}\n.subheader--inset {\n  margin-left: 56px;\n}\n.subheader--dark {\n  color: rgba(0,0,0,0.54);\n}\n.subheader--light {\n  color: rgba(255,255,255,0.54);\n}\n.application--dark .subheader:not(.subheader--dark):not(.subheader--light) {\n  color: rgba(255,255,255,0.7);\n}\n.application--light .subheader:not(.subheader--dark):not(.subheader--light) {\n  color: rgba(0,0,0,0.54);\n}\n.table__overflow {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\ntable.table {\n  border-radius: 2px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  max-width: 100%;\n}\ntable.table tr:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\ntable.table thead td:not(:nth-child(1)),\ntable.table tbody td:not(:nth-child(1)),\ntable.table thead th:not(:nth-child(1)),\ntable.table tbody th:not(:nth-child(1)),\ntable.table thead td:first-child,\ntable.table tbody td:first-child,\ntable.table thead th:first-child,\ntable.table tbody th:first-child {\n  padding: 0 24px;\n}\ntable.table thead tr {\n  height: 56px;\n}\ntable.table thead th {\n  color: rgba(0,0,0,0.54);\n  font-weight: 600;\n  font-size: 12px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\ntable.table thead th.sortable {\n  pointer-events: auto;\n}\ntable.table thead th > div {\n  width: 100%;\n}\ntable.table tbody tr {\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: background;\n}\ntable.table tbody tr[active] {\n  background: #f5f5f5;\n}\ntable.table tbody tr:hover {\n  background: rgba(0,0,0,0.12);\n}\ntable.table tbody td,\ntable.table tbody th {\n  height: 48px;\n}\ntable.table tbody td {\n  font-weight: 500;\n  font-size: 13px;\n}\ntable.table .input-group--selection-controls {\n  margin: 0;\n}\ntable.table .input-group--selection-controls .input-group__details {\n  display: none;\n}\ntable.table .input-group--selection-controls.checkbox .icon {\n  left: 50%;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\ntable.table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple {\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\ntable.table tfoot tr {\n  height: 56px;\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.tabs {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.tabs > .card {\n  border-radius: 0;\n}\n.tabs--grow .tabs__container > li {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.tabs--centered .tabs__container > li:first-of-type {\n  margin-left: auto;\n}\n.tabs--centered .tabs__container > li:last-of-type {\n  margin-right: auto;\n}\n.tabs--icons .tabs__bar {\n  height: 90px;\n}\n.tabs--scroll-bars .tabs__bar--mobile {\n  padding: 0 35px;\n}\n.tabs--scroll-bars .tabs__bar--mobile .icon--left,\n.tabs--scroll-bars .tabs__bar--mobile .icon--right {\n  display: -ms-flexbox;\n  display: flex;\n}\n.tabs--scroll-bars .tabs__bar--mobile .tabs__container {\n  width: calc(100% - 70px);\n}\n.tabs__bar {\n  background-color: #9c27b0;\n  width: 100%;\n  position: relative;\n  height: 60px;\n}\n.tabs__bar .icon--left,\n.tabs__bar .icon--right {\n  position: absolute;\n  top: 0;\n  width: 35px;\n  display: none;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.tabs--dark .tabs__bar .icon--left,\n.tabs--dark .tabs__bar .icon--right {\n  color: rgba(0,0,0,0.87);\n}\n.tabs--light .tabs__bar .icon--left,\n.tabs--light .tabs__bar .icon--right {\n  color: #fff;\n}\n.tabs__bar .icon--left {\n  left: 0;\n}\n.tabs__bar .icon--right {\n  right: 0;\n}\n.tabs__container {\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 0;\n  top: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  list-style: none;\n}\n.tabs__container > li:not(.tabs__slider) {\n  height: 100%;\n}\n.tabs__container-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 35px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.tabs__item {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  min-width: 0;\n  height: 100%;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n}\n.tabs--dark .tabs__item {\n  color: rgba(0,0,0,0.38);\n}\n.tabs--dark .tabs__item--active {\n  color: rgba(0,0,0,0.54);\n}\n.tabs--light .tabs__item {\n  color: rgba(255,255,255,0.5);\n}\n.tabs--light .tabs__item--active {\n  color: #fff;\n}\n.tabs__item .icon {\n  color: inherit;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  font-size: 32px;\n  margin: 0.5rem 0;\n}\n.tabs__item--disabled {\n  pointer-events: none;\n}\n.tabs__items {\n  position: relative;\n  border-width: 0 1px 1px 1px;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.1);\n}\n.tabs__content {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.tabs__slider {\n  position: absolute;\n  bottom: 0;\n  height: 4px;\n  background: #ce93d8;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field label {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n  transform: translate3d(0, 0, 0);\n  -ms-transform-origin: top left;\n      transform-origin: top left;\n  width: 100%;\n}\n.input-group--text-field.input-group--multi-line:not(.input-group--focused):not(.input-group--dirty) label {\n  transform: translate3d(0, 0, 0);\n}\n.input-group--text-field input {\n  font-size: 16px;\n  -ms-flex: 1;\n      flex: 1;\n  margin: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  min-width: 0;\n  height: 30px;\n}\n.input-group--text-field input + .icon {\n  padding: 0 6px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.input-group--text-field input:focus {\n  outline: none;\n}\n.input-group--text-field input:disabled {\n  pointer-events: none;\n}\n.input-group--text-field textarea {\n  font-size: 16px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n.input-group--text-field textarea:focus {\n  outline: none;\n}\n.input-group--text-field .input-group__counter {\n  margin-left: auto;\n}\n.input-group--text-field .input-group__counter--error {\n  color: #b71c1c !important;\n}\n.input-group--text-field.input-group--light input,\n.input-group--text-field.input-group--light textarea {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light input:disabled,\n.input-group--text-field.input-group--light textarea:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light label {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light.input-group--single-line.input-group--text-field.input-group--light.input-group--focused label {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light.input-group--dirty input,\n.input-group--text-field.input-group--light.input-group--dirty textarea {\n  color: rgba(255,255,255,0.87);\n}\n.input-group--text-field.input-group--light .input-group__counter {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light .input-group__details {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light.input-group--disabled input,\n.input-group--text-field.input-group--light.input-group--disabled textarea {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--light.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n}\n.input-group--text-field.input-group--light .input-group--text-field__prefix,\n.input-group--text-field.input-group--light .input-group--text-field__suffix {\n  color: rgba(255,255,255,0.5);\n}\n.input-group--text-field.input-group--dark input,\n.input-group--text-field.input-group--dark textarea {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark input:disabled,\n.input-group--text-field.input-group--dark textarea:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark label {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark.input-group--single-line.input-group--text-field.input-group--dark.input-group--focused label {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark.input-group--dirty input,\n.input-group--text-field.input-group--dark.input-group--dirty textarea {\n  color: #000;\n}\n.input-group--text-field.input-group--dark .input-group__counter {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark .input-group__details {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark.input-group--disabled input,\n.input-group--text-field.input-group--dark.input-group--disabled textarea {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--dark.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n}\n.input-group--text-field.input-group--dark .input-group--text-field__prefix,\n.input-group--text-field.input-group--dark .input-group--text-field__suffix {\n  color: rgba(0,0,0,0.38);\n}\n.input-group--text-field.input-group--focused label {\n  opacity: 1;\n  color: #9c27b0;\n  transform: translate3d(0, -18px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--dirty label {\n  transform: translate3d(0, -18px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--placeholder:not(.input-group--focused):not(.input-group--dirty) label {\n  opacity: 0;\n}\n.input-group--text-field.input-group--error .input-group__details:after {\n  background-color: #b71c1c;\n}\n.input-group--text-field.input-group--prepend-icon .input-group__prepend-icon {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  min-width: 40px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field.input-group--prepend-icon .input-group__details {\n  margin-left: 40px;\n}\n.input-group--text-field.input-group--prepend-icon .input-group__details:before,\n.input-group--text-field.input-group--prepend-icon .input-group__details:after {\n  max-width: calc(100% - 56px);\n}\n.input-group--text-field.input-group--prepend-icon label {\n  margin-left: 40px;\n}\n.input-group--text-field.input-group--prepend-icon input {\n  -ms-flex: auto;\n      flex: auto;\n}\n.input-group--text-field.input-group--prepend-icon.input-group--focused .icon {\n  color: #9c27b0;\n}\n.input-group--text-field.input-group--single-line label {\n  transform: translate3d(0, 0, 0);\n}\n.input-group--text-field.input-group--single-line.input-group--dirty label {\n  display: none;\n}\n.input-group--text-field.input-group--required label:after {\n  content: '*';\n}\n.input-group--text-field.input-group--required.input-group--focused label:after {\n  color: #b71c1c;\n}\n.input-group--text-field.input-group--error label {\n  color: #b71c1c;\n}\n.input-group--text-field.input-group--error .input-group__details:before,\n.input-group--text-field.input-group--error .input-group__details:after {\n  background-color: #b71c1c;\n}\n.input-group--text-field.input-group--full-width {\n  padding: 0 16px;\n}\n.input-group--text-field.input-group--full-width .input-group__details:before,\n.input-group--text-field.input-group--full-width .input-group__details:after {\n  display: none;\n}\n.input-group--text-field__prefix,\n.input-group--text-field__suffix {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 16px;\n  margin-top: 1px;\n}\n.input-group--text-field__prefix {\n  margin-right: 3px;\n}\n.input-group--text-field__suffix {\n  margin-left: 3px;\n}\n.picker--time .card__row--actions {\n  margin-top: -10px;\n}\n.picker--time.picker--dark .picker--time__clock {\n  background: #616161;\n}\n.picker--time.picker--dark .picker--time__clock-hand:before {\n  border-color: #ce93d8;\n}\n.picker--time.picker--dark .picker--time__clock-hand,\n.picker--time.picker--dark .picker--time__clock:after {\n  background: #ce93d8;\n}\n.picker--time.picker--dark .picker--time__clock > span {\n  color: #fff;\n}\n.picker--time.picker--dark .picker--time__clock > span.active {\n  color: #000;\n}\n.picker--time.picker--dark .picker--time__clock > span.active:before {\n  background: #ce93d8;\n}\n.picker--time.picker--landscape {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.picker--time.picker--landscape .picker__title {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.picker--time.picker--landscape .picker__title div:first-child {\n  text-align: right;\n}\n.picker--time.picker--landscape .picker__title div:first-child span {\n  height: 55px;\n  font-size: 55px;\n}\n.picker--time.picker--landscape .picker__title div:last-child {\n  margin: 16px 0 0;\n  -ms-flex-item-align: initial;\n      -ms-grid-row-align: initial;\n      align-self: initial;\n  text-align: center;\n}\n.picker--time.picker--landscape .picker--time__clock {\n  height: 250px;\n  width: 250px;\n}\n.picker--time.picker--landscape .picker--time__clock-hand {\n  height: 97px;\n}\n.picker--time .picker__title {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.picker--time .picker__title div:first-child {\n  white-space: nowrap;\n}\n.picker--time .picker__title div:first-child span {\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 70px;\n  font-size: 70px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  opacity: 0.6;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--time .picker__title div:first-child span.active {\n  opacity: 1;\n}\n.picker--time .picker__title div:last-child {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  font-size: 16px;\n  margin: 8px 0 6px 8px;\n}\n.picker--time .picker__title div:last-child span {\n  cursor: pointer;\n  opacity: 0.6;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--time .picker__title div:last-child span.active {\n  opacity: 1;\n}\n.picker--time .picker__title div:only-child {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.picker--time__clock {\n  height: 270px;\n  width: 270px;\n  border-radius: 100%;\n  background: #e0e0e0;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  top: 50%;\n  left: 50%;\n  transition: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n}\n.picker--time__clock-hand {\n  height: 40%;\n  width: 2px;\n  background: #9c27b0;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  -ms-transform-origin: center bottom;\n      transform-origin: center bottom;\n  position: absolute;\n}\n.picker--time__clock-hand:before {\n  background: transparent;\n  border: 2px solid #9c27b0;\n  border-radius: 100%;\n  width: 10px;\n  height: 10px;\n  content: '';\n  position: absolute;\n  top: -3%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.picker--time__clock:after {\n  content: '';\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  top: 50%;\n  left: 50%;\n  background: #2196f3;\n  border-radius: 100%;\n  transform: translate3d(calc(-50%), -50%, 0);\n}\n.picker--time__clock > span {\n  -ms-flex-align: center;\n      align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 16px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  left: calc(50% - 16px);\n  height: 32px;\n  position: absolute;\n  text-align: center;\n  top: calc(50% - 16px);\n  width: 32px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.picker--time__clock > span > span {\n  z-index: 1;\n}\n.picker--time__clock > span:before,\n.picker--time__clock > span:after {\n  content: '';\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  transform: translate3d(-50%, -50%, 0);\n}\n.picker--time__clock > span:after,\n.picker--time__clock > span:before {\n  height: 40px;\n  width: 40px;\n}\n.picker--time__clock > span.active {\n  color: #fff;\n  cursor: default;\n}\n.picker--time__clock > span.active:before {\n  background: #9c27b0;\n}\n.picker--time .card__row--actions {\n  border: none;\n}\n.toast {\n  position: fixed;\n  z-index: 99999999999999;\n}\n.toast--right {\n  top: 5%;\n  right: 2%;\n}\n.toast--left {\n  top: 5%;\n  left: 2%;\n}\n.toast--top {\n  top: 5%;\n  left: 50%;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n.toast--bottom {\n  bottom: 5%;\n  left: 50%;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n.toast--snack {\n  bottom: 0;\n  left: 50%;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n.toast--snack .toast__content {\n  margin-bottom: 0;\n  opacity: 1;\n}\n.toast--snack .toast__content--remove {\n  margin-top: 0;\n}\n.toast__content {\n  background: #424242;\n  border-radius: 2px;\n  color: #fff;\n  padding: 1rem 2rem;\n  margin: 1rem 0;\n  opacity: 0;\n  transform: translate3d(0, 3rem, 0);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.toast__content--active {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n.toast__content--remove {\n  margin-top: -3rem;\n  opacity: 0;\n}\n.application--dark .toolbar {\n  background: #212121;\n}\n.toolbar {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: #9c27b0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 56px;\n  position: relative;\n  padding: 0 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  will-change: padding-left;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n  z-index: 2;\n}\n.toolbar > *:first-child {\n  margin-left: 24px;\n}\n.toolbar > *:last-child {\n  margin-right: 24px;\n}\n@media only screen and (max-width: 599px) {\n.toolbar > *:first-child {\n    margin-left: 16px;\n}\n.toolbar > *:last-child {\n    margin-right: 16px;\n}\n}\n.toolbar ul {\n  list-style: none;\n}\n.toolbar li {\n  height: 100%;\n}\n.toolbar i {\n  font-size: 24px;\n}\n.toolbar .menu__activator {\n  height: 100%;\n}\n.toolbar--fixed + main,\n.toolbar--absolute + main {\n  padding-top: 56px;\n}\n.toolbar--fixed {\n  position: fixed;\n}\n.toolbar--absolute {\n  position: absolute;\n}\n.toolbar__sub {\n  -ms-flex: 1 0 100%;\n      flex: 1 0 100%;\n  padding: 24px 0 24px 72px;\n}\n.toolbar__side-icon {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  margin-left: 10px;\n}\n.toolbar__logo {\n  font-size: 3rem;\n  -ms-flex: 1;\n      flex: 1;\n  text-decoration: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.toolbar--dark .toolbar__logo {\n  color: rgba(0,0,0,0.87);\n}\n.toolbar--light .toolbar__logo {\n  color: #fff;\n}\n.toolbar__title {\n  font-size: 20px;\n  -ms-flex: 1;\n      flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.toolbar--dark .toolbar__title {\n  color: rgba(0,0,0,0.87);\n}\n.toolbar--light .toolbar__title {\n  color: #fff;\n}\n.toolbar__title:not(:first-child) {\n  padding: 0 16px;\n}\n.toolbar__items {\n  list-style-type: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 100%;\n  max-width: 100%;\n}\n.toolbar__items > li {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.toolbar__item {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 16px;\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n  position: relative;\n  height: 100%;\n  white-space: nowrap;\n}\n.toolbar--dark .toolbar__item {\n  color: rgba(0,0,0,0.87);\n}\n.toolbar--light .toolbar__item {\n  color: #fff;\n}\n.toolbar__item i {\n  font-size: 2rem;\n}\n.toolbar__item:hover,\n.toolbar__item--active {\n  background: rgba(0,0,0,0.1);\n}\n.toolbar--dark .toolbar__item:hover,\n.toolbar--dark .toolbar__item--active {\n  background: rgba(255,255,255,0.1);\n}\n.toolbar--light .toolbar__item:hover,\n.toolbar--light .toolbar__item--active {\n  background: rgba(0,0,0,0.1);\n}\n.toolbar__item--disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.toolbar .input-group {\n  margin: 0 0 0 16px;\n  -ms-flex: 1;\n      flex: 1;\n}\n.toolbar .input-group--dark .icon {\n  color: rgba(0,0,0,0.54);\n}\n.toolbar .input-group--light .icon {\n  color: #fff;\n}\n.toolbar .input-group--dark.input-group--focused.input-group--prepend-icon .icon,\n.toolbar .input-group--dark.input-group--focused.input-group--append-icon .icon {\n  color: rgba(0,0,0,0.54);\n}\n.toolbar .input-group--light.input-group--focused.input-group--prepend-icon .icon,\n.toolbar .input-group--light.input-group--focused.input-group--append-icon .icon {\n  color: #fff;\n}\n[data-tooltip] {\n  position: relative;\n}\n[data-tooltip]:before {\n  background: #616161;\n  border-radius: 2px;\n  color: #fff;\n  content: attr(data-tooltip);\n  font-size: 12px;\n  display: inline-block;\n  opacity: 0;\n  padding: 5px 8px;\n  position: absolute;\n  pointer-events: none;\n  text-transform: initial;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  visibility: hidden;\n  width: auto;\n  white-space: pre;\n  z-index: 99;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n[data-tooltip]:hover:before {\n  opacity: 1;\n  visibility: visible;\n}\n[data-tooltip][data-tooltip-location='bottom']:before {\n  top: 100%;\n  left: 50%;\n  -ms-transform: translate(-50%, -14px) scale(0.1);\n      transform: translate(-50%, -14px) scale(0.1);\n  -ms-transform-origin: center top;\n      transform-origin: center top;\n}\n[data-tooltip][data-tooltip-location='bottom']:hover:before {\n  -ms-transform: translate(-50%, 14px) scale(1.01);\n      transform: translate(-50%, 14px) scale(1.01);\n}\n[data-tooltip][data-tooltip-location='top']:before {\n  bottom: 100%;\n  left: 50%;\n  -ms-transform: translate(-50%, 14px) scale(0.1);\n      transform: translate(-50%, 14px) scale(0.1);\n  -ms-transform-origin: center bottom;\n      transform-origin: center bottom;\n}\n[data-tooltip][data-tooltip-location='top']:hover:before {\n  -ms-transform: translate(-50%, -14px) scale(1.01);\n      transform: translate(-50%, -14px) scale(1.01);\n}\n[data-tooltip][data-tooltip-location='left']:before {\n  right: 100%;\n  -ms-transform: translate(14px, 0%) scale(0.1);\n      transform: translate(14px, 0%) scale(0.1);\n  -ms-transform-origin: center right;\n      transform-origin: center right;\n}\n[data-tooltip][data-tooltip-location='left']:hover:before {\n  -ms-transform: translate(-14px, 0) scale(1.01);\n      transform: translate(-14px, 0) scale(1.01);\n}\n[data-tooltip][data-tooltip-location='right']:before {\n  left: 100%;\n  -ms-transform: translate(-14px, 0%) scale(0.1);\n      transform: translate(-14px, 0%) scale(0.1);\n  -ms-transform-origin: center left;\n      transform-origin: center left;\n}\n[data-tooltip][data-tooltip-location='right']:hover:before {\n  -ms-transform: translate(14px, 0) scale(1.01);\n      transform: translate(14px, 0) scale(1.01);\n}\n@media only screen and (max-width: 1023px) {\n[data-tooltip]:before {\n    padding: 10px 16px;\n}\n[data-tooltip][data-tooltip-location='bottom']:hover:before {\n    -ms-transform: translate(-50%, 24px) scale(1.01);\n        transform: translate(-50%, 24px) scale(1.01);\n}\n[data-tooltip][data-tooltip-location='top']:hover:before {\n    -ms-transform: translate(-50%, -24px) scale(1.01);\n        transform: translate(-50%, -24px) scale(1.01);\n}\n[data-tooltip][data-tooltip-location='left']:hover:before {\n    -ms-transform: translate(-24px, 0%) scale(1.01);\n        transform: translate(-24px, 0%) scale(1.01);\n}\n[data-tooltip][data-tooltip-location='right']:hover:before {\n    -ms-transform: translate(24px, 0%) scale(1.01);\n        transform: translate(24px, 0%) scale(1.01);\n}\n}\n@media only screen and (max-width: 599px) {\n.hidden-xs-only {\n    display: none !important;\n}\n}\n@media only screen and (max-width: 1023px) {\n.hidden-sm-and-down {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 600px) {\n.hidden-sm-and-up {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1024px) and (max-width) {\n.hidden-md-only {\n    display: none !important;\n}\n}\n@media only screen and (max-width: 1423px) {\n.hidden-md-and-down {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1024px) {\n.hidden-md-and-up {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1424px) and (max-width) {\n.hidden-lg-only {\n    display: none !important;\n}\n}\n@media only screen and (max-width: 1903px) {\n.hidden-lg-and-down {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1424px) {\n.hidden-lg-and-up {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1904px) {\n.hidden-xl-only {\n    display: none !important;\n}\n}\n.right {\n  float: right !important;\n}\n.left {\n  float: left !important;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n.mr-0 {\n  margin-right: 0 !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0 {\n  margin-left: 0 !important;\n}\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.ma-0 {\n  margin: 0 0 !important;\n}\n.pt-0 {\n  padding-top: 0 !important;\n}\n.pr-0 {\n  padding-right: 0 !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0 {\n  padding-left: 0 !important;\n}\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.pa-0 {\n  padding: 0 0 !important;\n}\n.mt-1 {\n  margin-top: 4px !important;\n}\n.mr-1 {\n  margin-right: 4px !important;\n}\n.mb-1 {\n  margin-bottom: 4px !important;\n}\n.ml-1 {\n  margin-left: 4px !important;\n}\n.mx-1 {\n  margin-left: 4px !important;\n  margin-right: 4px !important;\n}\n.my-1 {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n.ma-1 {\n  margin: 4px 4px !important;\n}\n.pt-1 {\n  padding-top: 4px !important;\n}\n.pr-1 {\n  padding-right: 4px !important;\n}\n.pb-1 {\n  padding-bottom: 4px !important;\n}\n.pl-1 {\n  padding-left: 4px !important;\n}\n.px-1 {\n  padding-left: 4px !important;\n  padding-right: 4px !important;\n}\n.py-1 {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n.pa-1 {\n  padding: 4px 4px !important;\n}\n.mt-2 {\n  margin-top: 8px !important;\n}\n.mr-2 {\n  margin-right: 8px !important;\n}\n.mb-2 {\n  margin-bottom: 8px !important;\n}\n.ml-2 {\n  margin-left: 8px !important;\n}\n.mx-2 {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n.my-2 {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n}\n.ma-2 {\n  margin: 8px 8px !important;\n}\n.pt-2 {\n  padding-top: 8px !important;\n}\n.pr-2 {\n  padding-right: 8px !important;\n}\n.pb-2 {\n  padding-bottom: 8px !important;\n}\n.pl-2 {\n  padding-left: 8px !important;\n}\n.px-2 {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n.py-2 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n.pa-2 {\n  padding: 8px 8px !important;\n}\n.mt-3 {\n  margin-top: 16px !important;\n}\n.mr-3 {\n  margin-right: 16px !important;\n}\n.mb-3 {\n  margin-bottom: 16px !important;\n}\n.ml-3 {\n  margin-left: 16px !important;\n}\n.mx-3 {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n.my-3 {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n.ma-3 {\n  margin: 16px 16px !important;\n}\n.pt-3 {\n  padding-top: 16px !important;\n}\n.pr-3 {\n  padding-right: 16px !important;\n}\n.pb-3 {\n  padding-bottom: 16px !important;\n}\n.pl-3 {\n  padding-left: 16px !important;\n}\n.px-3 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n}\n.py-3 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n.pa-3 {\n  padding: 16px 16px !important;\n}\n.mt-4 {\n  margin-top: 24px !important;\n}\n.mr-4 {\n  margin-right: 24px !important;\n}\n.mb-4 {\n  margin-bottom: 24px !important;\n}\n.ml-4 {\n  margin-left: 24px !important;\n}\n.mx-4 {\n  margin-left: 24px !important;\n  margin-right: 24px !important;\n}\n.my-4 {\n  margin-top: 24px !important;\n  margin-bottom: 24px !important;\n}\n.ma-4 {\n  margin: 24px 24px !important;\n}\n.pt-4 {\n  padding-top: 24px !important;\n}\n.pr-4 {\n  padding-right: 24px !important;\n}\n.pb-4 {\n  padding-bottom: 24px !important;\n}\n.pl-4 {\n  padding-left: 24px !important;\n}\n.px-4 {\n  padding-left: 24px !important;\n  padding-right: 24px !important;\n}\n.py-4 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important;\n}\n.pa-4 {\n  padding: 24px 24px !important;\n}\n.mt-5 {\n  margin-top: 48px !important;\n}\n.mr-5 {\n  margin-right: 48px !important;\n}\n.mb-5 {\n  margin-bottom: 48px !important;\n}\n.ml-5 {\n  margin-left: 48px !important;\n}\n.mx-5 {\n  margin-left: 48px !important;\n  margin-right: 48px !important;\n}\n.my-5 {\n  margin-top: 48px !important;\n  margin-bottom: 48px !important;\n}\n.ma-5 {\n  margin: 48px 48px !important;\n}\n.pt-5 {\n  padding-top: 48px !important;\n}\n.pr-5 {\n  padding-right: 48px !important;\n}\n.pb-5 {\n  padding-bottom: 48px !important;\n}\n.pl-5 {\n  padding-left: 48px !important;\n}\n.px-5 {\n  padding-left: 48px !important;\n  padding-right: 48px !important;\n}\n.py-5 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important;\n}\n.pa-5 {\n  padding: 48px 48px !important;\n}\n@media only screen and (min-width: 0) {\n.text-xs-left {\n    text-align: left !important;\n}\n.text-xs-center {\n    text-align: center !important;\n}\n.text-xs-right {\n    text-align: right !important;\n}\n.text-xs-justify {\n    text-align: justify !important;\n}\n}\n@media only screen and (min-width: 600px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-justify {\n    text-align: justify !important;\n}\n}\n@media only screen and (min-width: 1024px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-justify {\n    text-align: justify !important;\n}\n}\n@media only screen and (min-width: 1424px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-justify {\n    text-align: justify !important;\n}\n}\n@media only screen and (min-width: 1904px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-justify {\n    text-align: justify !important;\n}\n}\n", ""]);

// exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.user[data-v-b7a4cafa] {\n  text-align: center;\n  margin-top: 100px;\n  font-family: sans-serif;\n}\n", ""]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-bb120d8a],\n.fade-leave-active[data-v-bb120d8a] {\n  transition: opacity 0.35s;\n}\n.fade-enter[data-v-bb120d8a],\n.fade-leave-active[data-v-bb120d8a] {\n  opacity: 0;\n}\n.user[data-v-bb120d8a] {\n  text-align: center;\n  margin-top: 100px;\n  font-family: sans-serif;\n}\n", ""]);

// exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.patchProperty = patchProperty;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            return new Date(source.getTime());
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!

        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
// TODO: Really needed (for JSCompiler type checking)?
function patchProperty(obj, prop, value) {
    obj[prop] = value;
}
//# sourceMappingURL=deep_copy.js.map


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.patchCapture = patchCapture;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ERROR_NAME = 'FirebaseError';
var captureStackTrace = Error.captureStackTrace;
// Export for faking in tests
function patchCapture(captureFake) {
    var result = captureStackTrace;
    captureStackTrace = captureFake;
    return result;
}

var FirebaseError = exports.FirebaseError = function FirebaseError(code, message) {
    _classCallCheck(this, FirebaseError);

    this.code = code;
    this.message = message;

    // We want the stack value, if implemented by Error
    if (captureStackTrace) {
        // Patches this.stack, omitted calls above ErrorFactory#create
        captureStackTrace(this, ErrorFactory.prototype.create);
    } else {
        var err = Error.apply(this, arguments);
        this.name = ERROR_NAME;
        // Make non-enumerable getter for the property.
        Object.defineProperty(this, 'stack', {
            get: function get() {
                return err.stack;
            }
        });
    }
};
// Back-door inheritance


FirebaseError.prototype = Object.create(Error.prototype);
FirebaseError.prototype.constructor = FirebaseError;
FirebaseError.prototype.name = ERROR_NAME;

var ErrorFactory = exports.ErrorFactory = function () {
    function ErrorFactory(service, serviceName, errors) {
        _classCallCheck(this, ErrorFactory);

        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
        // Matches {$name}, by default.
        this.pattern = /\{\$([^}]+)}/g;
        // empty
    }

    _createClass(ErrorFactory, [{
        key: 'create',
        value: function create(code, data) {
            if (data === undefined) {
                data = {};
            }
            var template = this.errors[code];
            var fullCode = this.service + '/' + code;
            var message = void 0;
            if (template === undefined) {
                message = "Error";
            } else {
                message = template.replace(this.pattern, function (match, key) {
                    var value = data[key];
                    return value !== undefined ? value.toString() : '<' + key + '?>';
                });
            }
            // Service: Error message (service/code).
            message = this.serviceName + ': ' + message + ' (' + fullCode + ').';
            var err = new FirebaseError(fullCode, message);
            // Populate the Error object with message parts for programmatic
            // accesses (e.g., e.file).
            for (var prop in data) {
                if (!data.hasOwnProperty(prop) || prop.slice(-1) === '_') {
                    continue;
                }
                err[prop] = data[prop];
            }
            return err;
        }
    }]);

    return ErrorFactory;
}();
//# sourceMappingURL=errors.js.map


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


exports.createFirebaseNamespace = createFirebaseNamespace;

var _subscribe = __webpack_require__(143);

var _errors = __webpack_require__(141);

var _shared_promise = __webpack_require__(61);

var _deep_copy = __webpack_require__(140);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalPromise = _shared_promise.local.Promise;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
// An array to capture listeners before the true auth functions
// exist
var tokenListeners = [];
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */

var FirebaseAppImpl = function () {
    function FirebaseAppImpl(options, name, firebase_) {
        _classCallCheck(this, FirebaseAppImpl);

        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        this.name_ = name;
        this.options_ = (0, _deep_copy.deepCopy)(options);
        this.INTERNAL = {
            'getUid': function getUid() {
                return null;
            },
            'getToken': function getToken() {
                return LocalPromise.resolve(null);
            },
            'addAuthTokenListener': function addAuthTokenListener(callback) {
                tokenListeners.push(callback);
                // Make sure callback is called, asynchronously, in the absence of the auth module
                setTimeout(function () {
                    return callback(null);
                }, 0);
            },
            'removeAuthTokenListener': function removeAuthTokenListener(callback) {
                tokenListeners = tokenListeners.filter(function (listener) {
                    return listener !== callback;
                });
            }
        };
    }

    _createClass(FirebaseAppImpl, [{
        key: 'delete',
        value: function _delete() {
            var _this = this;

            return new LocalPromise(function (resolve) {
                _this.checkDestroyed_();
                resolve();
            }).then(function () {
                _this.firebase_.INTERNAL.removeApp(_this.name_);
                var services = [];
                Object.keys(_this.services_).forEach(function (serviceKey) {
                    Object.keys(_this.services_[serviceKey]).forEach(function (instanceKey) {
                        services.push(_this.services_[serviceKey][instanceKey]);
                    });
                });
                return LocalPromise.all(services.map(function (service) {
                    return service.INTERNAL.delete();
                }));
            }).then(function () {
                _this.isDeleted_ = true;
                _this.services_ = {};
            });
        }
        /**
         * Return a service instance associated with this app (creating it
         * on demand), identified by the passed instanceIdentifier.
         *
         * NOTE: Currently storage is the only one that is leveraging this
         * functionality. They invoke it by calling:
         *
         * ```javascript
         * firebase.app().storage('STORAGE BUCKET ID')
         * ```
         *
         * The service name is passed to this already
         * @internal
         */

    }, {
        key: '_getService',
        value: function _getService(name) {
            var instanceIdentifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ENTRY_NAME;

            this.checkDestroyed_();
            if (!this.services_[name]) {
                this.services_[name] = {};
            }
            if (!this.services_[name][instanceIdentifier]) {
                /**
                 * If a custom instance has been defined (i.e. not '[DEFAULT]')
                 * then we will pass that instance on, otherwise we pass `null`
                 */
                var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME ? instanceIdentifier : undefined;
                var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
                this.services_[name][instanceIdentifier] = service;
            }
            return this.services_[name][instanceIdentifier];
        }
        /**
         * Callback function used to extend an App instance at the time
         * of service instance creation.
         */

    }, {
        key: 'extendApp',
        value: function extendApp(props) {
            var _this2 = this;

            // Copy the object onto the FirebaseAppImpl prototype
            (0, _deep_copy.deepExtend)(this, props);
            /**
             * If the app has overwritten the addAuthTokenListener stub, forward
             * the active token listeners on to the true fxn.
             *
             * TODO: This function is required due to our current module
             * structure. Once we are able to rely strictly upon a single module
             * implementation, this code should be refactored and Auth should
             * provide these stubs and the upgrade logic
             */
            if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
                tokenListeners.forEach(function (listener) {
                    _this2.INTERNAL.addAuthTokenListener(listener);
                });
                tokenListeners = [];
            }
        }
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */

    }, {
        key: 'checkDestroyed_',
        value: function checkDestroyed_() {
            if (this.isDeleted_) {
                error('app-deleted', { 'name': this.name_ });
            }
        }
    }, {
        key: 'name',
        get: function get() {
            this.checkDestroyed_();
            return this.name_;
        }
    }, {
        key: 'options',
        get: function get() {
            this.checkDestroyed_();
            return this.options_;
        }
    }]);

    return FirebaseAppImpl;
}();

// Prevent dead-code elimination of these methods w/o invalid property
// copying.
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var apps_ = {};
    var factories = {};
    var appHooks = {};
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        '__esModule': true,
        'initializeApp':
        /**
         * Create a new App instance (name must be unique).
         */
        function (options, name) {
            if (name === undefined) {
                name = DEFAULT_ENTRY_NAME;
            } else {
                if (typeof name !== 'string' || name === '') {
                    error('bad-app-name', { 'name': name + '' });
                }
            }
            if (apps_[name] !== undefined) {
                error('duplicate-app', { 'name': name });
            }
            var app = new FirebaseAppImpl(options, name, namespace);
            apps_[name] = app;
            callAppHooks(app, 'create');
            return app;
        }
        /*
         * Return an array of all the non-deleted FirebaseApps.
         */
        ,
        'app': app,
        'apps': null,
        'Promise': LocalPromise,
        'SDK_VERSION': '4.1.2',
        'INTERNAL': {
            'registerService':
            /*
             * Register a Firebase Service.
             *
             * firebase.INTERNAL.registerService()
             *
             * TODO: Implement serviceProperties.
             */
            function (name, createService, serviceProperties, appHook, allowMultipleInstances) {
                // Cannot re-register a service that already exists
                if (factories[name]) {
                    error('duplicate-service', { 'name': name });
                }
                // Capture the service factory for later service instantiation
                factories[name] = createService;
                // Capture the appHook, if passed
                if (appHook) {
                    appHooks[name] = appHook;
                    // Run the **new** app hook on all existing apps
                    getApps().forEach(function (app) {
                        appHook('create', app);
                    });
                }
                // The Service namespace is an accessor function ...
                var serviceNamespace = function () {
                    var appArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : app();

                    if (typeof appArg[name] !== 'function') {
                        // Invalid argument.
                        // This happens in the following case: firebase.storage('gs:/')
                        error('invalid-app-argument', { 'name': name });
                    }
                    // Forward service instance lookup to the FirebaseApp.
                    return appArg[name]();
                };
                // ... and a container for service-level properties.
                if (serviceProperties !== undefined) {
                    (0, _deep_copy.deepExtend)(serviceNamespace, serviceProperties);
                }
                // Monkey-patch the serviceNamespace onto the firebase namespace
                namespace[name] = serviceNamespace;
                // Patch the FirebaseAppImpl prototype
                FirebaseAppImpl.prototype[name] = function () {
                    var serviceFxn = this._getService.bind(this, name);

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return serviceFxn.apply(this, allowMultipleInstances ? args : []);
                };
                return serviceNamespace;
            }
            /**
             * Patch the top-level firebase namespace with additional properties.
             *
             * firebase.INTERNAL.extendNamespace()
             */
            ,
            'createFirebaseNamespace': createFirebaseNamespace,
            'extendNamespace': function (props) {
                (0, _deep_copy.deepExtend)(namespace, props);
            },
            'createSubscribe': _subscribe.createSubscribe,
            'ErrorFactory': _errors.ErrorFactory,
            'removeApp':
            /**
             * Called by App.delete() - but before any services associated with the App
             * are deleted.
             */
            function (name) {
                var app = apps_[name];
                callAppHooks(app, 'delete');
                delete apps_[name];
            }
            /**
             * Get the App object for a given name (or DEFAULT).
             */
            ,
            'factories': factories,
            'useAsService': useAsService,
            'Promise': _shared_promise.local.GoogPromise,
            'deepExtend': _deep_copy.deepExtend
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    (0, _deep_copy.patchProperty)(namespace, 'default', namespace);
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        var result = apps_[name];
        if (result === undefined) {
            error('no-app', { 'name': name });
        }
        return result;
    }
    (0, _deep_copy.patchProperty)(app, 'App', FirebaseAppImpl);function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps_).map(function (name) {
            return apps_[name];
        });
    }
    function callAppHooks(app, eventName) {
        Object.keys(factories).forEach(function (serviceName) {
            // Ignore virtual services
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        });
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        app.options;

        return name;
    }
    return namespace;
}
function error(code, args) {
    throw appErrors.create(code, args);
}
// TypeScript does not support non-string indexes!
// let errors: {[code: AppError: string} = {
var errors = {
    'no-app': 'No Firebase App \'{$name}\' has been created - ' + 'call Firebase App.initializeApp()',
    'bad-app-name': 'Illegal App name: \'{$name}',
    'duplicate-app': 'Firebase App named \'{$name}\' already exists',
    'app-deleted': 'Firebase App named \'{$name}\' already deleted',
    'duplicate-service': 'Firebase service named \'{$name}\' already registered',
    'sa-not-supported': 'Initializing the Firebase SDK with a service ' + 'account is only allowed in a Node.js environment. On client ' + 'devices, you should instead initialize the SDK with an api key and ' + 'auth domain',
    'invalid-app-argument': 'firebase.{$name}() takes either no argument or a ' + 'Firebase App instance.'
};
var appErrors = new _errors.ErrorFactory('app', 'Firebase', errors);
//# sourceMappingURL=firebase_app.js.map


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createSubscribe = createSubscribe;
exports.async = async;

var _shared_promise = __webpack_require__(61);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalPromise = _shared_promise.local.Promise;
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */

var ObserverProxy = function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;

        _classCallCheck(this, ObserverProxy);

        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = LocalPromise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(function () {
            executor(_this);
        }).catch(function (e) {
            _this.error(e);
        });
    }

    _createClass(ObserverProxy, [{
        key: 'next',
        value: function next(value) {
            this.forEachObserver(function (observer) {
                observer.next(value);
            });
        }
    }, {
        key: 'error',
        value: function error(_error) {
            this.forEachObserver(function (observer) {
                observer.error(_error);
            });
            this.close(_error);
        }
    }, {
        key: 'complete',
        value: function complete() {
            this.forEachObserver(function (observer) {
                observer.complete();
            });
            this.close();
        }
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */

    }, {
        key: 'subscribe',
        value: function subscribe(nextOrObserver, error, complete) {
            var _this2 = this;

            var observer = void 0;
            if (nextOrObserver === undefined && error === undefined && complete === undefined) {
                throw new Error("Missing Observer.");
            }
            // Assemble an Observer object when passed as callback functions.
            if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
                observer = nextOrObserver;
            } else {
                observer = {
                    next: nextOrObserver,
                    error: error,
                    complete: complete
                };
            }
            if (observer.next === undefined) {
                observer.next = noop;
            }
            if (observer.error === undefined) {
                observer.error = noop;
            }
            if (observer.complete === undefined) {
                observer.complete = noop;
            }
            var unsub = this.unsubscribeOne.bind(this, this.observers.length);
            // Attempt to subscribe to a terminated Observable - we
            // just respond to the Observer with the final error or complete
            // event.
            if (this.finalized) {
                this.task.then(function () {
                    try {
                        if (_this2.finalError) {
                            observer.error(_this2.finalError);
                        } else {
                            observer.complete();
                        }
                    } catch (e) {
                        // nothing
                    }
                });
            }
            this.observers.push(observer);
            return unsub;
        }
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.

    }, {
        key: 'unsubscribeOne',
        value: function unsubscribeOne(i) {
            if (this.observers === undefined || this.observers[i] === undefined) {
                return;
            }
            delete this.observers[i];
            this.observerCount -= 1;
            if (this.observerCount === 0 && this.onNoObservers !== undefined) {
                this.onNoObservers(this);
            }
        }
    }, {
        key: 'forEachObserver',
        value: function forEachObserver(fn) {
            if (this.finalized) {
                // Already closed by previous event....just eat the additional values.
                return;
            }
            // Since sendOne calls asynchronously - there is no chance that
            // this.observers will become undefined.
            for (var i = 0; i < this.observers.length; i++) {
                this.sendOne(i, fn);
            }
        }
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.

    }, {
        key: 'sendOne',
        value: function sendOne(i, fn) {
            var _this3 = this;

            // Execute the callback asynchronously
            this.task.then(function () {
                if (_this3.observers !== undefined && _this3.observers[i] !== undefined) {
                    try {
                        fn(_this3.observers[i]);
                    } catch (e) {
                        // Ignore exceptions raised in Observers or missing methods of an
                        // Observer.
                        // Log error to console. b/31404806
                        if (typeof console !== "undefined" && console.error) {
                            console.error(e);
                        }
                    }
                }
            });
        }
    }, {
        key: 'close',
        value: function close(err) {
            var _this4 = this;

            if (this.finalized) {
                return;
            }
            this.finalized = true;
            if (err !== undefined) {
                this.finalError = err;
            }
            // Proxy is no longer needed - garbage collect references
            this.task.then(function () {
                _this4.observers = undefined;
                _this4.onNoObservers = undefined;
            });
        }
    }]);

    return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */


function async(fn, onError) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        LocalPromise.resolve(true).then(function () {
            fn.apply(undefined, args);
        }).catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
        return false;
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var method = _step.value;

            if (method in obj && typeof obj[method] === 'function') {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}
function noop() {
    // do nothing
}
//# sourceMappingURL=subscribe.js.map


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(40);
(function(){(function(){var h,aa=aa||{},k=this,m=function(a){return"string"==typeof a},ba=function(a){return"boolean"==typeof a},ca=function(a){return"number"==typeof a},da=function(){},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},fa=function(a){return null===a},ga=function(a){return"array"==ea(a)},ha=function(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"function"==ea(a)},ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==
b},ja=function(a,b,c){return a.call.apply(a.bind,arguments)},ka=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)},la=function(a,b){var c=
Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ma=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Id=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ag=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var na=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},oa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},wa=function(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(ua,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(va,"&#0;"));return a},qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=/\x00/g,pa=/[\x00&<>"']/,u=function(a,b){return-1!=a.indexOf(b)},xa=function(a,b){return a<b?-1:a>b?1:0};var ya=function(a,b){b.unshift(a);t.call(this,na.apply(null,b));b.shift()};r(ya,t);ya.prototype.name="AssertionError";
var za=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new ya(""+e,f||[]);},v=function(a,b,c){a||za("",null,b,Array.prototype.slice.call(arguments,2))},Aa=function(a,b){throw new ya("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Ba=function(a,b,c){ca(a)||za("Expected number but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ca=function(a,b,c){m(a)||za("Expected string but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,
2))},Da=function(a,b,c){p(a)||za("Expected function but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,2))};var Ea=Array.prototype.indexOf?function(a,b,c){v(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){v(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Fa=function(a,b){for(var c=m(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ga=Array.prototype.map?function(a,b,c){v(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ha=Array.prototype.some?function(a,b,c){v(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ja=function(a){a:{var b=Ia;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Ka=function(a,b){return 0<=Ea(a,b)},Ma=function(a,b){b=Ea(a,b);var c;(c=0<=b)&&La(a,b);return c},La=function(a,b){v(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Na=function(a,b){var c=0;Fa(a,function(d,e){b.call(void 0,d,e,a)&&La(a,e)&&c++})},Oa=function(a){return Array.prototype.concat.apply([],arguments)},
Pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Qa=function(a){return Ga(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var Ra;a:{var Sa=k.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){Ra=Ta;break a}}Ra=""}var x=function(a){return u(Ra,a)};var Ua=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Va=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Wa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Xa=function(a){for(var b in a)return!1;return!0},Ya=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Za=function(a){var b={},c;for(c in a)b[c]=a[c];return b},$a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
ab=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var bb=function(a){bb[" "](a);return a};bb[" "]=da;var db=function(a,b){var c=cb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var eb=x("Opera"),y=x("Trident")||x("MSIE"),fb=x("Edge"),gb=fb||y,hb=x("Gecko")&&!(u(Ra.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),ib=u(Ra.toLowerCase(),"webkit")&&!x("Edge"),jb=function(){var a=k.document;return a?a.documentMode:void 0},kb;
a:{var mb="",nb=function(){var a=Ra;if(hb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fb)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();nb&&(mb=nb?nb[1]:"");if(y){var ob=jb();if(null!=ob&&ob>parseFloat(mb)){kb=String(ob);break a}}kb=mb}
var pb=kb,cb={},z=function(a){return db(a,function(){for(var b=0,c=oa(String(pb)).split("."),d=oa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=xa(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||xa(0==g[2].length,0==l[2].length)||xa(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})},qb;var rb=k.document;
qb=rb&&y?jb()||("CSS1Compat"==rb.compatMode?parseInt(pb,10):5):void 0;var sb=null,tb=null,vb=function(a){var b="";ub(a,function(a){b+=String.fromCharCode(a)});return b},ub=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=tb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}wb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l))}},wb=function(){if(!sb){sb={};tb={};for(var a=0;65>a;a++)sb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
tb[sb[a]]=a,62<=a&&(tb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var xb=function(){this.Ea=-1};var Ab=function(a,b){this.Ea=64;this.kc=k.Uint8Array?new Uint8Array(this.Ea):Array(this.Ea);this.Qc=this.jb=0;this.i=[];this.uf=a;this.ge=b;this.Uf=k.Int32Array?new Int32Array(64):Array(64);void 0!==yb||(yb=k.Int32Array?new Int32Array(zb):zb);this.reset()},yb;r(Ab,xb);for(var Bb=[],Cb=0;63>Cb;Cb++)Bb[Cb]=0;var Db=Oa(128,Bb);Ab.prototype.reset=function(){this.Qc=this.jb=0;this.i=k.Int32Array?new Int32Array(this.ge):Pa(this.ge)};
var Eb=function(a){var b=a.kc;v(b.length==a.Ea);for(var c=a.Uf,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){d=c[b-15]|0;e=c[b-2]|0;e=(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10;var f=(c[b-16]|0)+((d>>>7|d<<25)^(d>>>18|d<<14)^d>>>3)|0;var g=(c[b-7]|0)+e|0;c[b]=f+g|0}var d=a.i[0]|0,e=a.i[1]|0,l=a.i[2]|0,n=a.i[3]|0,C=a.i[4]|0,lb=a.i[5]|0,Tb=a.i[6]|0;f=a.i[7]|0;for(b=0;64>b;b++){var Mh=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=C&lb^~C&Tb;f=f+
((C>>>6|C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))|0;g=g+(yb[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=Tb;Tb=lb;lb=C;C=n+g|0;n=l;l=e;e=d;d=g+Mh|0}a.i[0]=a.i[0]+d|0;a.i[1]=a.i[1]+e|0;a.i[2]=a.i[2]+l|0;a.i[3]=a.i[3]+n|0;a.i[4]=a.i[4]+C|0;a.i[5]=a.i[5]+lb|0;a.i[6]=a.i[6]+Tb|0;a.i[7]=a.i[7]+f|0};
Ab.prototype.update=function(a,b){void 0===b&&(b=a.length);var c=0,d=this.jb;if(m(a))for(;c<b;)this.kc[d++]=a.charCodeAt(c++),d==this.Ea&&(Eb(this),d=0);else if(ha(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.kc[d++]=e;d==this.Ea&&(Eb(this),d=0)}else throw Error("message must be string or array");this.jb=d;this.Qc+=b};
Ab.prototype.digest=function(){var a=[],b=8*this.Qc;56>this.jb?this.update(Db,56-this.jb):this.update(Db,this.Ea-(this.jb-56));for(var c=63;56<=c;c--)this.kc[c]=b&255,b/=256;Eb(this);for(c=b=0;c<this.uf;c++)for(var d=24;0<=d;d-=8)a[b++]=this.i[c]>>d&255;return a};
var zb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Gb=function(){Ab.call(this,8,Fb)};r(Gb,Ab);var Fb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Hb=function(){this.Ha=this.Ha;this.Cc=this.Cc};Hb.prototype.Ha=!1;Hb.prototype.isDisposed=function(){return this.Ha};Hb.prototype.gb=function(){if(this.Cc)for(;this.Cc.length;)this.Cc.shift()()};var Ib=!y||9<=Number(qb),Jb=y&&!z("9");!ib||z("528");hb&&z("1.9b")||y&&z("8")||eb&&z("9.5")||ib&&z("528");hb&&!z("8")||y&&z("9");var Kb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.pb=!1;this.qe=!0};Kb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.qe=!1};var Lb=function(a,b){Kb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.Ia=this.state=null;a&&this.init(a,b)};r(Lb,Kb);
Lb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(hb){a:{try{bb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=ib||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=ib||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.Ia=a;a.defaultPrevented&&
this.preventDefault()};Lb.prototype.preventDefault=function(){Lb.Id.preventDefault.call(this);var a=this.Ia;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Lb.prototype.Ze=function(){return this.Ia};var Mb="closure_listenable_"+(1E6*Math.random()|0),Nb=0;var Ob=function(a,b,c,d,e){this.listener=a;this.Gc=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++Nb;this.tb=this.jc=!1},Pb=function(a){a.tb=!0;a.listener=null;a.Gc=null;a.src=null;a.qc=null};var Qb=function(a){this.src=a;this.J={};this.ec=0};Qb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.J[f];a||(a=this.J[f]=[],this.ec++);var g=Rb(a,b,d,e);-1<g?(b=a[g],c||(b.jc=!1)):(b=new Ob(b,this.src,f,!!d,e),b.jc=c,a.push(b));return b};Qb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.J))return!1;var e=this.J[a];b=Rb(e,b,c,d);return-1<b?(Pb(e[b]),La(e,b),0==e.length&&(delete this.J[a],this.ec--),!0):!1};
var Sb=function(a,b){var c=b.type;c in a.J&&Ma(a.J[c],b)&&(Pb(b),0==a.J[c].length&&(delete a.J[c],a.ec--))};Qb.prototype.fd=function(a,b,c,d){a=this.J[a.toString()];var e=-1;a&&(e=Rb(a,b,c,d));return-1<e?a[e]:null};var Rb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.tb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1};var Ub="closure_lm_"+(1E6*Math.random()|0),Vb={},Wb=0,Xb=function(a,b,c,d,e){if(ga(b))for(var f=0;f<b.length;f++)Xb(a,b[f],c,d,e);else c=Yb(c),a&&a[Mb]?a.listen(b,c,d,e):Zb(a,b,c,!1,d,e)},Zb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,l=$b(a);l||(a[Ub]=l=new Qb(a));c=l.add(b,c,d,e,f);if(!c.Gc){d=ac();c.Gc=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(bc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Wb++}},ac=function(){var a=cc,b=Ib?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},dc=function(a,b,c,d,e){if(ga(b))for(var f=0;f<b.length;f++)dc(a,b[f],c,d,e);else c=Yb(c),a&&a[Mb]?ec(a,b,c,d,e):Zb(a,b,c,!0,d,e)},fc=function(a,b,c,d,e){if(ga(b))for(var f=0;f<b.length;f++)fc(a,b[f],c,d,e);else c=Yb(c),a&&a[Mb]?a.ja.remove(String(b),c,d,e):a&&(a=$b(a))&&(b=a.fd(b,c,!!d,e))&&gc(b)},gc=function(a){if(!ca(a)&&a&&!a.tb){var b=a.src;if(b&&
b[Mb])Sb(b.ja,a);else{var c=a.type,d=a.Gc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(bc(c),d);Wb--;(c=$b(b))?(Sb(c,a),0==c.ec&&(c.src=null,b[Ub]=null)):Pb(a)}}},bc=function(a){return a in Vb?Vb[a]:Vb[a]="on"+a},ic=function(a,b,c,d){var e=!0;if(a=$b(a))if(b=a.J[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.tb&&(f=hc(f,d),e=e&&!1!==f)}return e},hc=function(a,b){var c=a.listener,d=a.qc||a.src;a.jc&&gc(a);return c.call(d,
b)},cc=function(a,b){if(a.tb)return!0;if(!Ib){if(!b)a:{b=["window","event"];for(var c=k,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Lb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);for(var e=a.type,f=d.length-1;!b.pb&&0<=f;f--)b.currentTarget=d[f],a=ic(d[f],e,!0,b),c=c&&a;for(f=0;!b.pb&&f<d.length;f++)b.currentTarget=
d[f],a=ic(d[f],e,!1,b),c=c&&a}return c}return hc(a,new Lb(b,this))},$b=function(a){a=a[Ub];return a instanceof Qb?a:null},jc="__closure_events_fn_"+(1E9*Math.random()>>>0),Yb=function(a){v(a,"Listener can not be null.");if(p(a))return a;v(a.handleEvent,"An object listener must have handleEvent method.");a[jc]||(a[jc]=function(b){return a.handleEvent(b)});return a[jc]};var kc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var mc=function(){this.Mc="";this.Ge=lc};mc.prototype.Ib=!0;mc.prototype.Fb=function(){return this.Mc};mc.prototype.toString=function(){return"Const{"+this.Mc+"}"};var nc=function(a){if(a instanceof mc&&a.constructor===mc&&a.Ge===lc)return a.Mc;Aa("expected object of type Const, got '"+a+"'");return"type_error:Const"},lc={},oc=function(a){var b=new mc;b.Mc=a;return b};oc("");var qc=function(){this.Fc="";this.He=pc};qc.prototype.Ib=!0;qc.prototype.Fb=function(){return this.Fc};qc.prototype.toString=function(){return"TrustedResourceUrl{"+this.Fc+"}"};var rc=function(a){if(a instanceof qc&&a.constructor===qc&&a.He===pc)return a.Fc;Aa("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ea(a));return"type_error:TrustedResourceUrl"},pc={};var tc=function(){this.qa="";this.Fe=sc};tc.prototype.Ib=!0;tc.prototype.Fb=function(){return this.qa};tc.prototype.toString=function(){return"SafeUrl{"+this.qa+"}"};
var uc=function(a){if(a instanceof tc&&a.constructor===tc&&a.Fe===sc)return a.qa;Aa("expected object of type SafeUrl, got '"+a+"' of type "+ea(a));return"type_error:SafeUrl"},vc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,xc=function(a){if(a instanceof tc)return a;a=a.Ib?a.Fb():String(a);vc.test(a)||(a="about:invalid#zClosurez");return wc(a)},sc={},wc=function(a){var b=new tc;b.qa=a;return b};wc("about:blank");var Ac=function(a){var b=[];yc(new zc,a,b);return b.join("")},zc=function(){this.Hc=void 0},yc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ga(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],yc(a,a.Hc?a.Hc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
Bc(d,c),c.push(":"),yc(a,a.Hc?a.Hc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Bc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Cc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Dc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
Bc=function(a,b){b.push('"',a.replace(Dc,function(a){var b=Cc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Cc[a]=b);return b}),'"')};var Ec=function(){};Ec.prototype.Nd=null;var Fc=function(a){return a.Nd||(a.Nd=a.md())};var Gc,Hc=function(){};r(Hc,Ec);Hc.prototype.lc=function(){var a=Ic(this);return a?new ActiveXObject(a):new XMLHttpRequest};Hc.prototype.md=function(){var a={};Ic(this)&&(a[0]=!0,a[1]=!0);return a};
var Ic=function(a){if(!a.fe&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.fe=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.fe};Gc=new Hc;var Jc=function(){};r(Jc,Ec);Jc.prototype.lc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Kc;throw Error("Unsupported browser");};Jc.prototype.md=function(){return{}};
var Kc=function(){this.va=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.va.onload=q(this.af,this);this.va.onerror=q(this.be,this);this.va.onprogress=q(this.bf,this);this.va.ontimeout=q(this.cf,this)};h=Kc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.va.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.va.send(a);else throw Error("Only string data is supported");else this.va.send()};h.abort=function(){this.va.abort()};h.setRequestHeader=function(){};h.af=function(){this.status=200;this.responseText=this.va.responseText;Lc(this,4)};h.be=function(){this.status=500;this.responseText="";Lc(this,4)};h.cf=function(){this.be()};h.bf=function(){this.status=200;Lc(this,1)};var Lc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var Mc=function(a,b,c){this.pf=c;this.Oe=a;this.Ef=b;this.Bc=0;this.rc=null};Mc.prototype.get=function(){if(0<this.Bc){this.Bc--;var a=this.rc;this.rc=a.next;a.next=null}else a=this.Oe();return a};Mc.prototype.put=function(a){this.Ef(a);this.Bc<this.pf&&(this.Bc++,a.next=this.rc,this.rc=a)};var Nc=function(a){k.setTimeout(function(){throw a;},0)},Oc,Pc=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Qd;c.Qd=null;a()}};return function(a){d.next={Qd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Qc=function(){this.Vc=this.bb=null},Sc=new Mc(function(){return new Rc},function(a){a.reset()},100);Qc.prototype.add=function(a,b){var c=Sc.get();c.set(a,b);this.Vc?this.Vc.next=c:(v(!this.bb),this.bb=c);this.Vc=c};Qc.prototype.remove=function(){var a=null;this.bb&&(a=this.bb,this.bb=this.bb.next,this.bb||(this.Vc=null),a.next=null);return a};var Rc=function(){this.next=this.scope=this.ed=null};Rc.prototype.set=function(a,b){this.ed=a;this.scope=b;this.next=null};
Rc.prototype.reset=function(){this.next=this.scope=this.ed=null};var Xc=function(a,b){Tc||Uc();Vc||(Tc(),Vc=!0);Wc.add(a,b)},Tc,Uc=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Tc=function(){a.then(Yc)}}else Tc=function(){var a=Yc;!p(k.setImmediate)||k.Window&&k.Window.prototype&&!x("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Oc||(Oc=Pc()),Oc(a)):k.setImmediate(a)}},Vc=!1,Wc=new Qc,Yc=function(){for(var a;a=Wc.remove();){try{a.ed.call(a.scope)}catch(b){Nc(b)}Sc.put(a)}Vc=!1};var Zc=function(a){return ia(a)?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):void 0===a?"undefined":null===a?"null":typeof a};var $c=!y||9<=Number(qb);!hb&&!y||y&&9<=Number(qb)||hb&&z("1.9.1");y&&z("9");var bd=function(){this.qa="";this.Ee=ad};bd.prototype.Ib=!0;bd.prototype.Fb=function(){return this.qa};bd.prototype.toString=function(){return"SafeHtml{"+this.qa+"}"};var cd=function(a){if(a instanceof bd&&a.constructor===bd&&a.Ee===ad)return a.qa;Aa("expected object of type SafeHtml, got '"+a+"' of type "+ea(a));return"type_error:SafeHtml"},ad={};bd.prototype.jf=function(a){this.qa=a;return this};var dd=function(a,b){"undefined"!=typeof HTMLScriptElement&&"undefined"!=typeof Element&&v(a&&(a instanceof HTMLScriptElement||!(a instanceof Element)),"Argument is not a HTMLScriptElement (or a non-Element mock); got: %s",Zc(a));a.src=rc(b)};var ed=function(a){var b=document;return m(a)?b.getElementById(a):a},gd=function(a,b){Ua(b,function(b,d){b&&b.Ib&&(b=b.Fb());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:fd.hasOwnProperty(d)?a.setAttribute(fd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},fd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},id=function(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!$c&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',wa(g.name),'"');if(g.type){f.push(' type="',wa(g.type),'"');var l={};ab(l,g);delete l.type;g=l}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:ga(g)?f.className=g.join(" "):gd(f,g));2<d.length&&hd(e,f,d);return f},hd=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):
c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||ia(f)&&0<f.nodeType?d(f):w(jd(f)?Pa(f):f,d)}},jd=function(a){if(a&&"number"==typeof a.length){if(ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1};var kd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},ld=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var A=function(a,b){this.W=0;this.sa=void 0;this.fb=this.oa=this.u=null;this.pc=this.dd=!1;if(a!=da)try{var c=this;a.call(b,function(a){md(c,2,a)},function(a){if(!(a instanceof nd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}md(c,3,a)})}catch(d){md(this,3,d)}},od=function(){this.next=this.context=this.lb=this.Qa=this.child=null;this.yb=!1};od.prototype.reset=function(){this.context=this.lb=this.Qa=this.child=null;this.yb=!1};
var pd=new Mc(function(){return new od},function(a){a.reset()},100),qd=function(a,b,c){var d=pd.get();d.Qa=a;d.lb=b;d.context=c;return d},B=function(a){if(a instanceof A)return a;var b=new A(da);md(b,2,a);return b},D=function(a){return new A(function(b,c){c(a)})},sd=function(a,b,c){rd(a,b,c,null)||Xc(la(b,a))},td=function(a){return new A(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Xe:!0,value:f}:{Xe:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],sd(g,la(e,f,!0),
la(e,f,!1));else b(d)})};A.prototype.then=function(a,b,c){null!=a&&Da(a,"opt_onFulfilled should be a function.");null!=b&&Da(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return ud(this,p(a)?a:null,p(b)?b:null,c)};kd(A);var wd=function(a,b){b=qd(b,b,void 0);b.yb=!0;vd(a,b);return a};A.prototype.f=function(a,b){return ud(this,null,a,b)};A.prototype.cancel=function(a){0==this.W&&Xc(function(){var b=new nd(a);xd(this,b)},this)};
var xd=function(a,b){if(0==a.W)if(a.u){var c=a.u;if(c.oa){for(var d=0,e=null,f=null,g=c.oa;g&&(g.yb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.W&&1==d?xd(c,b):(f?(d=f,v(c.oa),v(null!=d),d.next==c.fb&&(c.fb=d),d.next=d.next.next):yd(c),zd(c,e,3,b)))}a.u=null}else md(a,3,b)},vd=function(a,b){a.oa||2!=a.W&&3!=a.W||Ad(a);v(null!=b.Qa);a.fb?a.fb.next=b:a.oa=b;a.fb=b},ud=function(a,b,c,d){var e=qd(null,null,null);e.child=new A(function(a,g){e.Qa=b?function(c){try{var e=b.call(d,c);a(e)}catch(C){g(C)}}:
a;e.lb=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nd?g(b):a(e)}catch(C){g(C)}}:g});e.child.u=a;vd(a,e);return e.child};A.prototype.Rf=function(a){v(1==this.W);this.W=0;md(this,2,a)};A.prototype.Sf=function(a){v(1==this.W);this.W=0;md(this,3,a)};
var md=function(a,b,c){0==a.W&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.W=1,rd(c,a.Rf,a.Sf,a)||(a.sa=c,a.W=b,a.u=null,Ad(a),3!=b||c instanceof nd||Bd(a,c)))},rd=function(a,b,c,d){if(a instanceof A)return null!=b&&Da(b,"opt_onFulfilled should be a function."),null!=c&&Da(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),vd(a,qd(b||da,c||null,d)),!0;if(ld(a))return a.then(b,c,d),!0;if(ia(a))try{var e=a.then;if(p(e))return Cd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Cd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,l)}catch(n){l(n)}},Ad=function(a){a.dd||(a.dd=!0,Xc(a.Te,a))},yd=function(a){var b=null;a.oa&&(b=a.oa,a.oa=b.next,b.next=null);a.oa||(a.fb=null);null!=b&&v(null!=b.Qa);return b};A.prototype.Te=function(){for(var a;a=yd(this);)zd(this,a,this.W,this.sa);this.dd=!1};
var zd=function(a,b,c,d){if(3==c&&b.lb&&!b.yb)for(;a&&a.pc;a=a.u)a.pc=!1;if(b.child)b.child.u=null,Dd(b,c,d);else try{b.yb?b.Qa.call(b.context):Dd(b,c,d)}catch(e){Ed.call(null,e)}pd.put(b)},Dd=function(a,b,c){2==b?a.Qa.call(a.context,c):a.lb&&a.lb.call(a.context,c)},Bd=function(a,b){a.pc=!0;Xc(function(){a.pc&&Ed.call(null,b)})},Ed=Nc,nd=function(a){t.call(this,a)};r(nd,t);nd.prototype.name="cancel";
var Fd=function(a,b){this.Jc=[];this.le=a;this.Ud=b||null;this.Gb=this.hb=!1;this.sa=void 0;this.Fd=this.Ld=this.Zc=!1;this.Rc=0;this.u=null;this.$c=0};Fd.prototype.cancel=function(a){if(this.hb)this.sa instanceof Fd&&this.sa.cancel();else{if(this.u){var b=this.u;delete this.u;a?b.cancel(a):(b.$c--,0>=b.$c&&b.cancel())}this.le?this.le.call(this.Ud,this):this.Fd=!0;this.hb||Gd(this,new Hd)}};Fd.prototype.Sd=function(a,b){this.Zc=!1;Id(this,a,b)};
var Id=function(a,b,c){a.hb=!0;a.sa=c;a.Gb=!b;Jd(a)},Ld=function(a){if(a.hb){if(!a.Fd)throw new Kd;a.Fd=!1}};Fd.prototype.callback=function(a){Ld(this);Md(a);Id(this,!0,a)};
var Gd=function(a,b){Ld(a);Md(b);Id(a,!1,b)},Md=function(a){v(!(a instanceof Fd),"An execution sequence may not be initiated with a blocking Deferred.")},Qd=function(a){var b=Nd("https://apis.google.com/js/client.js?onload="+Od);Pd(b,null,a,void 0)},Pd=function(a,b,c,d){v(!a.Ld,"Blocking Deferreds can not be re-used");a.Jc.push([b,c,d]);a.hb&&Jd(a)};Fd.prototype.then=function(a,b,c){var d,e,f=new A(function(a,b){d=a;e=b});Pd(this,d,function(a){a instanceof Hd?f.cancel():e(a)});return f.then(a,b,c)};
kd(Fd);
var Rd=function(a){return Ha(a.Jc,function(a){return p(a[1])})},Jd=function(a){if(a.Rc&&a.hb&&Rd(a)){var b=a.Rc,c=Sd[b];c&&(k.clearTimeout(c.Hb),delete Sd[b]);a.Rc=0}a.u&&(a.u.$c--,delete a.u);for(var b=a.sa,d=c=!1;a.Jc.length&&!a.Zc;){var e=a.Jc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.Gb?g:f)try{var l=f.call(e||a.Ud,b);void 0!==l&&(a.Gb=a.Gb&&(l==b||l instanceof Error),a.sa=b=l);if(ld(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.Zc=!0}catch(n){b=n,a.Gb=!0,Rd(a)||(c=!0)}}a.sa=b;d&&
(l=q(a.Sd,a,!0),d=q(a.Sd,a,!1),b instanceof Fd?(Pd(b,l,d),b.Ld=!0):b.then(l,d));c&&(b=new Td(b),Sd[b.Hb]=b,a.Rc=b.Hb)},Kd=function(){t.call(this)};r(Kd,t);Kd.prototype.message="Deferred has already fired";Kd.prototype.name="AlreadyCalledError";var Hd=function(){t.call(this)};r(Hd,t);Hd.prototype.message="Deferred was canceled";Hd.prototype.name="CanceledError";var Td=function(a){this.Hb=k.setTimeout(q(this.Qf,this),0);this.X=a};
Td.prototype.Qf=function(){v(Sd[this.Hb],"Cannot throw an error that is not scheduled.");delete Sd[this.Hb];throw this.X;};var Sd={};var Nd=function(a){var b=new qc;b.Fc=a;return Ud(b)},Ud=function(a){var b={},c=b.document||document,d=rc(a),e=document.createElement("SCRIPT"),f={re:e,dc:void 0},g=new Fd(Vd,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){Wd(e,!0);Gd(g,new Xd(1,"Timeout reached for loading script "+d))},n),f.dc=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Wd(e,b.bg||!1,l),g.callback(null))};e.onerror=function(){Wd(e,!0,
l);Gd(g,new Xd(0,"Error while loading script "+d))};f=b.attributes||{};ab(f,{type:"text/javascript",charset:"UTF-8"});gd(e,f);dd(e,a);Yd(c).appendChild(e);return g},Yd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Vd=function(){if(this&&this.re){var a=this.re;a&&"SCRIPT"==a.tagName&&Wd(a,!0,this.dc)}},Wd=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=da;a.onerror=da;a.onreadystatechange=da;b&&window.setTimeout(function(){a&&a.parentNode&&
a.parentNode.removeChild(a)},0)},Xd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};r(Xd,t);var Zd=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Zd.prototype.Wd=null;var $d=0;Zd.prototype.reset=function(a,b,c,d,e){"number"==typeof e||$d++;d||ma();this.Nb=a;this.sf=b;delete this.Wd};Zd.prototype.te=function(a){this.Nb=a};var ae=function(a){this.tf=a;this.ce=this.ad=this.Nb=this.u=null},be=function(a,b){this.name=a;this.value=b};be.prototype.toString=function(){return this.name};var ce=new be("SEVERE",1E3),de=new be("CONFIG",700),ee=new be("FINE",500);ae.prototype.getParent=function(){return this.u};ae.prototype.te=function(a){this.Nb=a};var fe=function(a){if(a.Nb)return a.Nb;if(a.u)return fe(a.u);Aa("Root logger has no level set.");return null};
ae.prototype.log=function(a,b,c){if(a.value>=fe(this).value)for(p(b)&&(b=b()),a=new Zd(a,String(b),this.tf),c&&(a.Wd=c),c="log:"+a.sf,k.console&&(k.console.timeStamp?k.console.timeStamp(c):k.console.markTimeline&&k.console.markTimeline(c)),k.msWriteProfilerMark&&k.msWriteProfilerMark(c),c=this;c;){var d=c,e=a;if(d.ce)for(var f=0;b=d.ce[f];f++)b(e);c=c.getParent()}};
var ge={},he=null,ie=function(a){he||(he=new ae(""),ge[""]=he,he.te(de));var b;if(!(b=ge[a])){b=new ae(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ie(a.substr(0,c));c.ad||(c.ad={});c.ad[d]=b;b.u=c;ge[a]=b}return b};var je=function(){Hb.call(this);this.ja=new Qb(this);this.Je=this;this.rd=null};r(je,Hb);je.prototype[Mb]=!0;h=je.prototype;h.addEventListener=function(a,b,c,d){Xb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){fc(this,a,b,c,d)};
h.dispatchEvent=function(a){ke(this);var b=this.rd;if(b){var c=[];for(var d=1;b;b=b.rd)c.push(b),v(1E3>++d,"infinite loop")}b=this.Je;d=a.type||a;if(m(a))a=new Kb(a,b);else if(a instanceof Kb)a.target=a.target||b;else{var e=a;a=new Kb(d,b);ab(a,e)}var e=!0;if(c)for(var f=c.length-1;!a.pb&&0<=f;f--){var g=a.currentTarget=c[f];e=le(g,d,!0,a)&&e}a.pb||(g=a.currentTarget=b,e=le(g,d,!0,a)&&e,a.pb||(e=le(g,d,!1,a)&&e));if(c)for(f=0;!a.pb&&f<c.length;f++)g=a.currentTarget=c[f],e=le(g,d,!1,a)&&e;return e};
h.gb=function(){je.Id.gb.call(this);if(this.ja){var a=this.ja,b=0,c;for(c in a.J){for(var d=a.J[c],e=0;e<d.length;e++)++b,Pb(d[e]);delete a.J[c];a.ec--}}this.rd=null};h.listen=function(a,b,c,d){ke(this);return this.ja.add(String(a),b,!1,c,d)};
var ec=function(a,b,c,d,e){a.ja.add(String(b),c,!0,d,e)},le=function(a,b,c,d){b=a.ja.J[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.tb&&g.capture==c){var l=g.listener,n=g.qc||g.src;g.jc&&Sb(a.ja,g);e=!1!==l.call(n,d)&&e}}return e&&0!=d.qe};je.prototype.fd=function(a,b,c,d){return this.ja.fd(String(a),b,c,d)};var ke=function(a){v(a.ja,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var me="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},ne=function(){};ne.prototype.next=function(){throw me;};ne.prototype.Ie=function(){return this};var E=function(a,b){a&&a.log(ee,b,void 0)};var oe=function(a,b){this.ea={};this.A=[];this.ab=this.o=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=oe.prototype;h.da=function(){pe(this);for(var a=[],b=0;b<this.A.length;b++)a.push(this.ea[this.A[b]]);return a};h.pa=function(){pe(this);return this.A.concat()};h.Ab=function(a){return qe(this.ea,a)};h.clear=function(){this.ea={};this.ab=this.o=this.A.length=0};
h.remove=function(a){return qe(this.ea,a)?(delete this.ea[a],this.o--,this.ab++,this.A.length>2*this.o&&pe(this),!0):!1};var pe=function(a){var b,c;if(a.o!=a.A.length){for(b=c=0;c<a.A.length;){var d=a.A[c];qe(a.ea,d)&&(a.A[b++]=d);c++}a.A.length=b}if(a.o!=a.A.length){var e={};for(b=c=0;c<a.A.length;)d=a.A[c],qe(e,d)||(a.A[b++]=d,e[d]=1),c++;a.A.length=b}};h=oe.prototype;h.get=function(a,b){return qe(this.ea,a)?this.ea[a]:b};
h.set=function(a,b){qe(this.ea,a)||(this.o++,this.A.push(a),this.ab++);this.ea[a]=b};h.addAll=function(a){if(a instanceof oe){var b=a.pa();a=a.da()}else b=Wa(a),a=Va(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.pa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new oe(this)};
h.Ie=function(a){pe(this);var b=0,c=this.ab,d=this,e=new ne;e.next=function(){if(c!=d.ab)throw Error("The map has changed since the iterator was created");if(b>=d.A.length)throw me;var e=d.A[b++];return a?e:d.ea[e]};return e};var qe=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var re=function(a){if(a.da&&"function"==typeof a.da)return a.da();if(m(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Va(a)},se=function(a){if(a.pa&&"function"==typeof a.pa)return a.pa();if(!a.da||"function"!=typeof a.da){if(ha(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Wa(a)}},te=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ha(a)||m(a))w(a,b,void 0);else for(var c=se(a),d=re(a),
e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var ue=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)},ve=function(a){var b=null;return(new A(function(c,d){b=ue(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).f(function(a){k.clearTimeout(b);throw a;})};var we=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,xe=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var F=function(a){je.call(this);this.headers=new oe;this.Xc=a||null;this.wa=!1;this.Wc=this.c=null;this.Mb=this.je=this.yc="";this.Ma=this.kd=this.uc=this.cd=!1;this.ub=0;this.Oc=null;this.Ic="";this.Sc=this.Af=this.De=!1};r(F,je);var ye=F.prototype,ze=ie("goog.net.XhrIo");ye.K=ze;var Ae=/^https?$/i,Be=["POST","PUT"];
F.prototype.send=function(a,b,c,d){if(this.c)throw Error("[goog.net.XhrIo] Object is active with another request="+this.yc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.yc=a;this.Mb="";this.je=b;this.cd=!1;this.wa=!0;this.c=this.Xc?this.Xc.lc():Gc.lc();this.Wc=this.Xc?Fc(this.Xc):Fc(Gc);this.c.onreadystatechange=q(this.ne,this);this.Af&&"onprogress"in this.c&&(this.c.onprogress=q(function(a){this.me(a,!0)},this),this.c.upload&&(this.c.upload.onprogress=q(this.me,this)));try{E(this.K,Ce(this,"Opening Xhr")),
this.kd=!0,this.c.open(b,String(a),!0),this.kd=!1}catch(f){E(this.K,Ce(this,"Error opening Xhr: "+f.message));this.X(5,f);return}a=c||"";var e=this.headers.clone();d&&te(d,function(a,b){e.set(b,a)});d=Ja(e.pa());c=k.FormData&&a instanceof k.FormData;!Ka(Be,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.c.setRequestHeader(b,a)},this);this.Ic&&(this.c.responseType=this.Ic);"withCredentials"in this.c&&this.c.withCredentials!==this.De&&(this.c.withCredentials=
this.De);try{De(this),0<this.ub&&(this.Sc=Ee(this.c),E(this.K,Ce(this,"Will abort after "+this.ub+"ms if incomplete, xhr2 "+this.Sc)),this.Sc?(this.c.timeout=this.ub,this.c.ontimeout=q(this.dc,this)):this.Oc=ue(this.dc,this.ub,this)),E(this.K,Ce(this,"Sending request")),this.uc=!0,this.c.send(a),this.uc=!1}catch(f){E(this.K,Ce(this,"Send error: "+f.message)),this.X(5,f)}};var Ee=function(a){return y&&z(9)&&ca(a.timeout)&&void 0!==a.ontimeout},Ia=function(a){return"content-type"==a.toLowerCase()};
F.prototype.dc=function(){"undefined"!=typeof aa&&this.c&&(this.Mb="Timed out after "+this.ub+"ms, aborting",E(this.K,Ce(this,this.Mb)),this.dispatchEvent("timeout"),this.abort(8))};F.prototype.X=function(a,b){this.wa=!1;this.c&&(this.Ma=!0,this.c.abort(),this.Ma=!1);this.Mb=b;Fe(this);Ge(this)};var Fe=function(a){a.cd||(a.cd=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
F.prototype.abort=function(){this.c&&this.wa&&(E(this.K,Ce(this,"Aborting")),this.wa=!1,this.Ma=!0,this.c.abort(),this.Ma=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ge(this))};F.prototype.gb=function(){this.c&&(this.wa&&(this.wa=!1,this.Ma=!0,this.c.abort(),this.Ma=!1),Ge(this,!0));F.Id.gb.call(this)};F.prototype.ne=function(){this.isDisposed()||(this.kd||this.uc||this.Ma?He(this):this.wf())};F.prototype.wf=function(){He(this)};
var He=function(a){if(a.wa&&"undefined"!=typeof aa)if(a.Wc[1]&&4==Ie(a)&&2==Je(a))E(a.K,Ce(a,"Local request error detected and ignored"));else if(a.uc&&4==Ie(a))ue(a.ne,0,a);else if(a.dispatchEvent("readystatechange"),4==Ie(a)){E(a.K,Ce(a,"Request complete"));a.wa=!1;try{var b=Je(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.yc).match(we)[1]||null;if(!f&&k.self&&k.self.location)var g=k.self.location.protocol,
f=g.substr(0,g.length-1);e=!Ae.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var l=2<Ie(a)?a.c.statusText:""}catch(n){E(a.K,"Can not get status: "+n.message),l=""}a.Mb=l+" ["+Je(a)+"]";Fe(a)}}finally{Ge(a)}}};F.prototype.me=function(a,b){v("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ke(a,"progress"));this.dispatchEvent(Ke(a,b?"downloadprogress":"uploadprogress"))};
var Ke=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ge=function(a,b){if(a.c){De(a);var c=a.c,d=a.Wc[0]?da:null;a.c=null;a.Wc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.K)&&a.log(ce,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},De=function(a){a.c&&a.Sc&&(a.c.ontimeout=null);ca(a.Oc)&&(k.clearTimeout(a.Oc),a.Oc=null)},Ie=function(a){return a.c?a.c.readyState:0},Je=function(a){try{return 2<Ie(a)?
a.c.status:-1}catch(b){return-1}},Le=function(a){try{return a.c?a.c.responseText:""}catch(b){return E(a.K,"Can not get responseText: "+b.message),""}};
F.prototype.getResponse=function(){try{if(!this.c)return null;if("response"in this.c)return this.c.response;switch(this.Ic){case "":case "text":return this.c.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.c)return this.c.mozResponseArrayBuffer}var a=this.K;a&&a.log(ce,"Response type "+this.Ic+" is not supported on this browser",void 0);return null}catch(b){return E(this.K,"Can not get response: "+b.message),null}};var Ce=function(a,b){return b+" ["+a.je+" "+a.yc+" "+Je(a)+"]"};var G=function(a,b){this.ia=this.Za=this.ka="";this.nb=null;this.La=this.za="";this.Z=this.nf=!1;if(a instanceof G){this.Z=void 0!==b?b:a.Z;Me(this,a.ka);var c=a.Za;H(this);this.Za=c;Ne(this,a.ia);Oe(this,a.nb);Pe(this,a.za);Qe(this,a.ba.clone());a=a.La;H(this);this.La=a}else a&&(c=String(a).match(we))?(this.Z=!!b,Me(this,c[1]||"",!0),a=c[2]||"",H(this),this.Za=Re(a),Ne(this,c[3]||"",!0),Oe(this,c[4]),Pe(this,c[5]||"",!0),Qe(this,c[6]||"",!0),a=c[7]||"",H(this),this.La=Re(a)):(this.Z=!!b,this.ba=
new I(null,0,this.Z))};G.prototype.toString=function(){var a=[],b=this.ka;b&&a.push(Se(b,Te,!0),":");var c=this.ia;if(c||"file"==b)a.push("//"),(b=this.Za)&&a.push(Se(b,Te,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.nb,null!=c&&a.push(":",String(c));if(c=this.za)this.ia&&"/"!=c.charAt(0)&&a.push("/"),a.push(Se(c,"/"==c.charAt(0)?Ue:Ve,!0));(c=this.ba.toString())&&a.push("?",c);(c=this.La)&&a.push("#",Se(c,We));return a.join("")};
G.prototype.resolve=function(a){var b=this.clone(),c=!!a.ka;c?Me(b,a.ka):c=!!a.Za;if(c){var d=a.Za;H(b);b.Za=d}else c=!!a.ia;c?Ne(b,a.ia):c=null!=a.nb;d=a.za;if(c)Oe(b,a.nb);else if(c=!!a.za){if("/"!=d.charAt(0))if(this.ia&&!this.za)d="/"+d;else{var e=b.za.lastIndexOf("/");-1!=e&&(d=b.za.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(u(e,"./")||u(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?Pe(b,d):c=""!==a.ba.toString();c?Qe(b,a.ba.clone()):c=!!a.La;c&&(a=a.La,H(b),b.La=a);return b};G.prototype.clone=function(){return new G(this)};
var Me=function(a,b,c){H(a);a.ka=c?Re(b,!0):b;a.ka&&(a.ka=a.ka.replace(/:$/,""))},Ne=function(a,b,c){H(a);a.ia=c?Re(b,!0):b},Oe=function(a,b){H(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.nb=b}else a.nb=null},Pe=function(a,b,c){H(a);a.za=c?Re(b,!0):b},Qe=function(a,b,c){H(a);b instanceof I?(a.ba=b,a.ba.Dd(a.Z)):(c||(b=Se(b,Xe)),a.ba=new I(b,0,a.Z))},J=function(a,b,c){H(a);a.ba.set(b,c)},Ye=function(a,b){return a.ba.get(b)};
G.prototype.removeParameter=function(a){H(this);this.ba.remove(a);return this};var H=function(a){if(a.nf)throw Error("Tried to modify a read-only Uri");};G.prototype.Dd=function(a){this.Z=a;this.ba&&this.ba.Dd(a);return this};
var Ze=function(a){return a instanceof G?a.clone():new G(a,void 0)},$e=function(a,b){var c=new G(null,void 0);Me(c,"https");a&&Ne(c,a);b&&Pe(c,b);return c},Re=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Se=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,af),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},af=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Te=/[#\/\?@]/g,Ve=/[\#\?:]/g,Ue=/[\#\?]/g,Xe=/[\#\?@]/g,
We=/#/g,I=function(a,b,c){this.o=this.j=null;this.P=a||null;this.Z=!!c},bf=function(a){a.j||(a.j=new oe,a.o=0,a.P&&xe(a.P,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},df=function(a){var b=se(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new I(null,0,void 0);a=re(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ga(f)?cf(c,e,f):c.add(e,f)}return c};h=I.prototype;
h.add=function(a,b){bf(this);this.P=null;a=this.Y(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.o=Ba(this.o)+1;return this};h.remove=function(a){bf(this);a=this.Y(a);return this.j.Ab(a)?(this.P=null,this.o=Ba(this.o)-this.j.get(a).length,this.j.remove(a)):!1};h.clear=function(){this.j=this.P=null;this.o=0};h.Ab=function(a){bf(this);a=this.Y(a);return this.j.Ab(a)};h.forEach=function(a,b){bf(this);this.j.forEach(function(c,d){w(c,function(c){a.call(b,c,d,this)},this)},this)};
h.pa=function(){bf(this);for(var a=this.j.da(),b=this.j.pa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.da=function(a){bf(this);var b=[];if(m(a))this.Ab(a)&&(b=Oa(b,this.j.get(this.Y(a))));else{a=this.j.da();for(var c=0;c<a.length;c++)b=Oa(b,a[c])}return b};h.set=function(a,b){bf(this);this.P=null;a=this.Y(a);this.Ab(a)&&(this.o=Ba(this.o)-this.j.get(a).length);this.j.set(a,[b]);this.o=Ba(this.o)+1;return this};
h.get=function(a,b){a=a?this.da(a):[];return 0<a.length?String(a[0]):b};var cf=function(a,b,c){a.remove(b);0<c.length&&(a.P=null,a.j.set(a.Y(b),Pa(c)),a.o=Ba(a.o)+c.length)};I.prototype.toString=function(){if(this.P)return this.P;if(!this.j)return"";for(var a=[],b=this.j.pa(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.da(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.P=a.join("&")};
I.prototype.clone=function(){var a=new I;a.P=this.P;this.j&&(a.j=this.j.clone(),a.o=this.o);return a};I.prototype.Y=function(a){a=String(a);this.Z&&(a=a.toLowerCase());return a};I.prototype.Dd=function(a){a&&!this.Z&&(bf(this),this.P=null,this.j.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),cf(this,b,a))},this));this.Z=a};var ef=function(){var a=K();return y&&!!qb&&11==qb||/Edge\/\d+/.test(a)},ff=function(){return k.window&&k.window.location.href||""},gf=function(a,b){b=b||k.window;var c="about:blank";a&&(c=uc(xc(a)));b.location.href=c},hf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ga(a[d])?Ya(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<hf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},kf=function(){var a=
K();a="Chrome"!=jf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!y||!qb||9<qb},lf=function(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},mf=function(a){a=a||k.window;try{a.close()}catch(b){}},nf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,u(c,"crios/")&&(b.target="_blank"));"Firefox"==jf(K())&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof tc?c:xc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;
default:e.push(g+"="+(d[g]?1:0))}var g=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&v(g&&(g instanceof HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",Zc(g)),b=b instanceof tc?b:xc(b),g.href=uc(b),g.setAttribute("target",
c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=uc(b),g&&(gb&&u(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=oc("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+wa(d)+'">',Ca(nc(a),"must provide justification"),v(!/^[\s\xa0]*$/.test(nc(a)),"must provide non-empty justification"),g.document.write(cd((new bd).jf(d))),
g.document.close())):g=a.open(uc(b),c,g);if(g)try{g.focus()}catch(l){}return g},of=function(a){return new A(function(b){var c=function(){ve(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},pf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qf=function(){var a=null;return(new A(function(b){"complete"==k.document.readyState?b():(a=function(){b()},dc(window,"load",a))})).f(function(b){fc(window,"load",a);throw b;})},sf=function(){return rf(void 0)?qf().then(function(){return new A(function(a,
b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):D(Error("Cordova must run in an Android or iOS file scheme."))},rf=function(a){a=a||K();return!("file:"!==tf()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},uf=function(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}},vf=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?
"Node":"Browser"},wf=function(){var a=vf();return"ReactNative"===a||"Node"===a},jf=function(a){var b=a.toLowerCase();if(u(b,"opera/")||u(b,"opr/")||u(b,"opios/"))return"Opera";if(u(b,"iemobile"))return"IEMobile";if(u(b,"msie")||u(b,"trident/"))return"IE";if(u(b,"edge/"))return"Edge";if(u(b,"firefox/"))return"Firefox";if(u(b,"silk/"))return"Silk";if(u(b,"blackberry"))return"Blackberry";if(u(b,"webos"))return"Webos";if(!u(b,"safari/")||u(b,"chrome/")||u(b,"crios/")||u(b,"android"))if(!u(b,"chrome/")&&
!u(b,"crios/")||u(b,"edge/")){if(u(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},xf=function(a){var b=vf();return("Browser"===b?jf(K()):b)+"/JsCore/"+a},K=function(){return k.navigator&&k.navigator.userAgent||""},L=function(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Af=function(){var a;if(a=(yf()||"chrome-extension:"===
tf()||rf())&&!wf())a:{try{var b=k.localStorage,c=zf();if(b){b.setItem(c,"1");b.removeItem(c);a=ef()?!!k.indexedDB:!0;break a}}catch(d){}a=!1}return a},yf=function(){return"http:"===tf()||"https:"===tf()},tf=function(){return k.location&&k.location.protocol||null},Bf=function(a){a=a||K();return lf(a)||"Firefox"==jf(a)?!1:!0},Cf=function(a){return"undefined"===typeof a?null:Ac(a)},Df=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Ef=function(a){if(null!==
a)return JSON.parse(a)},zf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Ff=function(a){a=a||K();return"Safari"==jf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},Gf=function(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},Hf=function(){return k.navigator&&"boolean"===typeof k.navigator.onLine?k.navigator.onLine:!0},If=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");
this.Nf=a;this.rf=b;a=c||K();d=d||vf();this.mf=lf(a)||"ReactNative"===d};If.prototype.get=function(){return this.mf?this.rf:this.Nf};
var Jf=function(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Kf=function(){var a=k.document,b=null;return Jf()||!a?B():(new A(function(c){b=function(){Jf()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Lf={};var Mf;try{var Nf={};Object.defineProperty(Nf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Nf,"abcd",{configurable:!0,enumerable:!0,value:2});Mf=2==Nf.abcd}catch(a){Mf=!1}
var M=function(a,b,c){Mf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Of=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c])},Pf=function(a){var b={};Of(b,a);return b},Qf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Rf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},Sf=function(a){var b=a;if("object"==typeof a&&null!=a){var b=
"length"in a?[]:{},c;for(c in a)M(b,c,Sf(a[c]))}return b};var Tf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Uf=["client_id","response_type","scope","redirect_uri","state"],Vf={Xf:{Rb:500,Qb:600,providerId:"facebook.com",zd:Uf},Yf:{Rb:500,Qb:620,providerId:"github.com",zd:Uf},Zf:{Rb:515,Qb:680,providerId:"google.com",zd:Uf},$f:{Rb:485,Qb:705,providerId:"twitter.com",zd:Tf}},Wf=function(a){for(var b in Vf)if(Vf[b].providerId==a)return Vf[b];return null};var N=function(a,b){this.code="auth/"+a;this.message=b||Xf[a]||""};r(N,Error);N.prototype.F=function(){return{code:this.code,message:this.message}};N.prototype.toJSON=function(){return this.F()};
var Yf=function(a){var b=a&&a.code;return b?new N(b.substring(5),a.message):null},Xf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.",
"invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The SMS quota for this project has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var O=function(a,b,c,d,e){this.ha=a;this.R=b||null;this.vb=c||null;this.Cd=d||null;this.X=e||null;if(this.vb||this.X){if(this.vb&&this.X)throw new N("invalid-auth-event");if(this.vb&&!this.Cd)throw new N("invalid-auth-event");}else throw new N("invalid-auth-event");};O.prototype.oc=function(){return this.Cd};O.prototype.getError=function(){return this.X};O.prototype.F=function(){return{type:this.ha,eventId:this.R,urlResponse:this.vb,sessionId:this.Cd,error:this.X&&this.X.F()}};
var Zf=function(a){a=a||{};return a.type?new O(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Yf(a.error)):null};var $f=function(a){var b="unauthorized-domain",c=void 0,d=Ze(a);a=d.ia;d=d.ka;"chrome-extension"==d?c=na("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=na("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";N.call(this,b,c)};r($f,N);var ag=function(a){this.qf=a.sub;ma();this.mc=a.email||null};var bg=function(a,b){return a.then(function(a){if(a.idToken){a:{var c=a.idToken.split(".");if(3==c.length){for(var c=c[1],e=(4-c.length%4)%4,f=0;f<e;f++)c+=".";try{var g=JSON.parse(vb(c));if(g.sub&&g.iss&&g.aud&&g.exp){var l=new ag(g);break a}}catch(n){}}l=null}if(!l||b!=l.qf)throw new N("user-mismatch");return a}throw new N("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new N("user-mismatch"):a;})},cg=function(a,b){if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",
b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new N("internal-error","failed to construct a credential");M(this,"providerId",a)};cg.prototype.Eb=function(a){return dg(a,eg(this))};cg.prototype.zc=function(a,b){var c=eg(this);c.idToken=b;return fg(a,c)};cg.prototype.od=function(a,b){var c=eg(this);return bg(gg(a,c),b)};
var eg=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:df(b).toString(),requestUri:"http://localhost"}};cg.prototype.F=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var hg=function(a,b){this.Df=b||[];Of(this,{providerId:a,isOAuthProvider:!0});this.Td={}};hg.prototype.setCustomParameters=function(a){this.Td=Za(a);return this};var P=function(a){hg.call(this,a,Uf);this.Ad=[]};r(P,hg);P.prototype.addScope=function(a){Ka(this.Ad,a)||this.Ad.push(a);return this};P.prototype.ae=function(){return Pa(this.Ad)};
P.prototype.credential=function(a,b){if(!a&&!b)throw new N("argument-error","credential failed: must provide the ID token and/or the access token.");return new cg(this.providerId,{idToken:a||null,accessToken:b||null})};var ig=function(){P.call(this,"facebook.com")};r(ig,P);M(ig,"PROVIDER_ID","facebook.com");
var jg=function(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;ia(a)&&(b=a.accessToken);return(new ig).credential(null,b)},kg=function(){P.call(this,"github.com")};r(kg,P);M(kg,"PROVIDER_ID","github.com");
var lg=function(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;ia(a)&&(b=a.accessToken);return(new kg).credential(null,b)},mg=function(){P.call(this,"google.com");this.addScope("profile")};r(mg,P);M(mg,"PROVIDER_ID","google.com");var ng=function(a,b){var c=a;ia(a)&&(c=a.idToken,b=a.accessToken);return(new mg).credential(c,b)},og=function(){hg.call(this,"twitter.com",Tf)};r(og,hg);M(og,"PROVIDER_ID","twitter.com");
var pg=function(a,b){var c=a;ia(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new N("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new cg("twitter.com",c)},qg=function(a,b){this.mc=a;this.sd=b;M(this,"providerId","password")};qg.prototype.Eb=function(a){return Q(a,rg,{email:this.mc,password:this.sd})};qg.prototype.zc=function(a,b){return Q(a,sg,{idToken:b,email:this.mc,password:this.sd})};
qg.prototype.od=function(a,b){return bg(this.Eb(a),b)};qg.prototype.F=function(){return{email:this.mc,password:this.sd}};var tg=function(){Of(this,{providerId:"password",isOAuthProvider:!1})};Of(tg,{PROVIDER_ID:"password"});var ug=function(a){if(!(a.verificationId&&a.Tc||a.cc&&a.phoneNumber))throw new N("internal-error");this.M=a;M(this,"providerId","phone")};ug.prototype.Eb=function(a){return a.verifyPhoneNumber(vg(this))};ug.prototype.zc=function(a,b){var c=vg(this);c.idToken=b;return Q(a,wg,c)};
ug.prototype.od=function(a,b){var c=vg(this);c.operation="REAUTH";a=Q(a,xg,c);return bg(a,b)};ug.prototype.F=function(){var a={providerId:"phone"};this.M.verificationId&&(a.verificationId=this.M.verificationId);this.M.Tc&&(a.verificationCode=this.M.Tc);this.M.cc&&(a.temporaryProof=this.M.cc);this.M.phoneNumber&&(a.phoneNumber=this.M.phoneNumber);return a};
var vg=function(a){return a.M.cc&&a.M.phoneNumber?{temporaryProof:a.M.cc,phoneNumber:a.M.phoneNumber}:{sessionInfo:a.M.verificationId,code:a.M.Tc}},yg=function(a){try{this.Me=a||firebase.auth()}catch(b){throw new N("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}Of(this,{providerId:"phone",isOAuthProvider:!1})};
yg.prototype.verifyPhoneNumber=function(a,b){var c=this.Me.g;return B(b.verify()).then(function(d){if(!m(d))throw new N("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Q(c,zg,{phoneNumber:a,recaptchaToken:d});default:throw new N("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
var Ag=function(a,b){if(!a)throw new N("missing-verification-id");if(!b)throw new N("missing-verification-code");return new ug({verificationId:a,Tc:b})};Of(yg,{PROVIDER_ID:"phone"});
var Bg=function(a){if(a.temporaryProof&&a.phoneNumber)return new ug({cc:a.temporaryProof,phoneNumber:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return ng(a,c);case "facebook.com":return jg(c);case "github.com":return lg(c);case "twitter.com":return pg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},Cg=function(a){if(!a.isOAuthProvider)throw new N("invalid-oauth-provider");
};var Dg=function(a,b,c){N.call(this,a,c);a=b||{};a.email&&M(this,"email",a.email);a.phoneNumber&&M(this,"phoneNumber",a.phoneNumber);a.credential&&M(this,"credential",a.credential)};r(Dg,N);Dg.prototype.F=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.F();b&&ab(a,b);return a};Dg.prototype.toJSON=function(){return this.F()};
var Eg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:Bg(a)};if(a.email)c.email=a.email;else if(a.phoneNumber)c.phoneNumber=a.phoneNumber;else return new N(b,a.message||void 0);return new Dg(b,c,a.message)}return null};var Fg=function(a){this.Wf=a};r(Fg,Ec);Fg.prototype.lc=function(){return new this.Wf};Fg.prototype.md=function(){return{}};
var R=function(a,b,c){var d="Node"==vf();d=k.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new N("internal-error","The XMLHttpRequest compatibility library was not found.");this.m=a;a=b||{};this.Jf=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Kf=a.secureTokenTimeout||Gg;this.se=Za(a.secureTokenHeaders||Hg);this.Ve=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.We=a.firebaseTimeout||
Ig;this.Zd=Za(a.firebaseHeaders||Jg);c&&(this.Zd["X-Client-Version"]=c,this.se["X-Client-Version"]=c);this.Ne=new Jc;this.Vf=new Fg(d)},Kg,Gg=new If(3E4,6E4),Hg={"Content-Type":"application/x-www-form-urlencoded"},Ig=new If(3E4,6E4),Jg={"Content-Type":"application/json"},Mg=function(a,b,c,d,e,f,g){Hf()?(kf()?a=q(a.Mf,a):(Kg||(Kg=new A(function(a,b){Lg(a,b)})),a=q(a.Lf,a)),a(b,c,d,e,f,g)):c&&c(null)};
R.prototype.Mf=function(a,b,c,d,e,f){var g="Node"==vf(),l=wf()?g?new F(this.Vf):new F:new F(this.Ne);if(f){l.ub=Math.max(0,f);var n=setTimeout(function(){l.dispatchEvent("timeout")},f)}l.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Le(this))||null}catch(lb){a=null}b&&b(a)});ec(l,"ready",function(){n&&clearTimeout(n);this.Ha||(this.Ha=!0,this.gb())});ec(l,"timeout",function(){n&&clearTimeout(n);this.Ha||(this.Ha=!0,this.gb());b&&b(null)});l.send(a,c,d,e)};
var Od="__fcb"+Math.floor(1E6*Math.random()).toString(),Lg=function(a,b){((window.gapi||{}).client||{}).request?a():(k[Od]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Qd(function(){b(Error("CORS_UNSUPPORTED"))}))};
R.prototype.Lf=function(a,b,c,d,e){var f=this;Kg.then(function(){window.gapi.client.setApiKey(f.m);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var Og=function(a,b){return new A(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Mg(a,a.Jf+"?key="+encodeURIComponent(a.m),function(a){a?a.error?d(Ng(a)):a.access_token&&a.refresh_token?c(a):d(new N("internal-error")):d(new N("network-request-failed"))},"POST",df(b).toString(),a.se,a.Kf.get()):d(new N("internal-error"))})},Pg=function(a,b,c,d,e,f){var g=Ze(a.Ve+b);J(g,"key",a.m);f&&J(g,"cb",ma().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&
J(g,n,d[n]);return new A(function(b,f){Mg(a,g.toString(),function(a){a?a.error?f(Ng(a,e||{})):b(a):f(new N("network-request-failed"))},c,l?void 0:Ac(Df(d)),a.Zd,a.We.get())})},Qg=function(a){if(!kc.test(a.email))throw new N("invalid-email");},Rg=function(a){"email"in a&&Qg(a)},Tg=function(a,b){return Q(a,Sg,{identifier:b,continueUri:yf()?ff():"http://localhost"}).then(function(a){return a.allProviders||[]})},Vg=function(a){return Q(a,Ug,{}).then(function(a){return a.authorizedDomains||[]})},Wg=function(a){if(!a.idToken)throw new N("internal-error");
},Xg=function(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new N("internal-error");}else{if(!a.sessionInfo)throw new N("missing-verification-id");if(!a.code)throw new N("missing-verification-code");}};R.prototype.signInAnonymously=function(){return Q(this,Yg,{})};R.prototype.updateEmail=function(a,b){return Q(this,Zg,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,sg,{idToken:a,password:b})};var $g={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Ua($g,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,Zg,c)};R.prototype.sendPasswordResetEmail=function(a){return Q(this,ah,{requestType:"PASSWORD_RESET",email:a})};R.prototype.sendEmailVerification=function(a){return Q(this,bh,{requestType:"VERIFY_EMAIL",idToken:a})};R.prototype.verifyPhoneNumber=function(a){return Q(this,ch,a)};
var eh=function(a,b,c){return Q(a,dh,{idToken:b,deleteProvider:c})},fh=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new N("internal-error");},gh=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Eg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Eg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Eg(a));if(b)throw b;if(!a.idToken)throw new N("internal-error");},dg=function(a,
b){b.returnIdpCredential=!0;return Q(a,hh,b)},fg=function(a,b){b.returnIdpCredential=!0;return Q(a,ih,b)},gg=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,jh,b)},kh=function(a){if(!a.oobCode)throw new N("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,lh,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,mh,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,nh,{oobCode:a})};
var nh={endpoint:"setAccountInfo",C:kh,Ya:"email"},mh={endpoint:"resetPassword",C:kh,V:function(a){if(!a.email||!a.requestType)throw new N("internal-error");}},oh={endpoint:"signupNewUser",C:function(a){Qg(a);if(!a.password)throw new N("weak-password");},V:Wg,ta:!0},Sg={endpoint:"createAuthUri"},ph={endpoint:"deleteAccount",Wa:["idToken"]},dh={endpoint:"setAccountInfo",Wa:["idToken","deleteProvider"],C:function(a){if(!ga(a.deleteProvider))throw new N("internal-error");}},qh={endpoint:"getAccountInfo"},
bh={endpoint:"getOobConfirmationCode",Wa:["idToken","requestType"],C:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new N("internal-error");},Ya:"email"},ah={endpoint:"getOobConfirmationCode",Wa:["requestType"],C:function(a){if("PASSWORD_RESET"!=a.requestType)throw new N("internal-error");Qg(a)},Ya:"email"},Ug={Md:!0,endpoint:"getProjectConfig",ee:"GET"},rh={Md:!0,endpoint:"getRecaptchaParam",ee:"GET",V:function(a){if(!a.recaptchaSiteKey)throw new N("internal-error");}},lh={endpoint:"resetPassword",
C:kh,Ya:"email"},zg={endpoint:"sendVerificationCode",Wa:["phoneNumber","recaptchaToken"],Ya:"sessionInfo"},Zg={endpoint:"setAccountInfo",Wa:["idToken"],C:Rg,ta:!0},sg={endpoint:"setAccountInfo",Wa:["idToken"],C:function(a){Rg(a);if(!a.password)throw new N("weak-password");},V:Wg,ta:!0},Yg={endpoint:"signupNewUser",V:Wg,ta:!0},hh={endpoint:"verifyAssertion",C:fh,V:gh,ta:!0},jh={endpoint:"verifyAssertion",C:fh,V:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new N("user-not-found");
if(!a.idToken)throw new N("internal-error");},ta:!0},ih={endpoint:"verifyAssertion",C:function(a){fh(a);if(!a.idToken)throw new N("internal-error");},V:gh,ta:!0},sh={endpoint:"verifyCustomToken",C:function(a){if(!a.token)throw new N("invalid-custom-token");},V:Wg,ta:!0},rg={endpoint:"verifyPassword",C:function(a){Qg(a);if(!a.password)throw new N("wrong-password");},V:Wg,ta:!0},ch={endpoint:"verifyPhoneNumber",C:Xg,V:Wg},wg={endpoint:"verifyPhoneNumber",C:function(a){if(!a.idToken)throw new N("internal-error");
Xg(a)},V:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Eg(a);Wg(a)}},xg={Qe:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",C:Xg,V:Wg},Q=function(a,b,c){if(!Rf(c,b.Wa))return D(new N("internal-error"));var d=b.ee||"POST",e;return B(c).then(b.C).then(function(){b.ta&&(c.returnSecureToken=!0);return Pg(a,b.endpoint,d,c,b.Qe,b.Md||!1)}).then(function(a){return e=a}).then(b.V).then(function(){if(!b.Ya)return e;if(!(b.Ya in e))throw new N("internal-error");return e[b.Ya]})},
Ng=function(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new N(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired"};ab(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new N(d[e],
b);!b&&a&&(b=Cf(a));return new N("internal-error",b)};var th=function(a){this.aa=a};th.prototype.value=function(){return this.aa};th.prototype.ue=function(a){this.aa.style=a;return this};var uh=function(a){this.aa=a||{}};uh.prototype.value=function(){return this.aa};uh.prototype.ue=function(a){this.aa.style=a;return this};var wh=function(a){this.Tf=a;this.tc=null;this.qd=vh(this)},xh=function(a){var b=new uh;b.aa.where=document.body;b.aa.url=a.Tf;b.aa.messageHandlersFilter=L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.aa.attributes=b.aa.attributes||{};(new th(b.aa.attributes)).ue({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.aa.dontclear=!0;return b},vh=function(a){return yh().then(function(){return new A(function(b,c){L("gapi.iframes.getContext")().open(xh(a).value(),function(d){a.tc=d;a.tc.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},zh.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};wh.prototype.sendMessage=function(a){var b=this;return this.qd.then(function(){return new A(function(c){b.tc.send(a.type,a,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Ah=function(a,b){a.qd.then(function(){a.tc.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Bh=new If(3E4,6E4),zh=new If(5E3,15E3),Ch=null,yh=function(){return Ch?Ch:Ch=(new A(function(a,b){if(Hf()){var c=function(){Gf();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Gf();b(Error("Network Error"))},timeout:Bh.get()})};if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){L("gapi.load")?
c():b(Error("Network Error"))};B(Nd("https://apis.google.com/js/api.js?onload="+d)).f(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).f(function(a){Ch=null;throw a;})};var Dh=function(a,b,c){this.B=a;this.m=b;this.w=c;this.$a=null;this.fc=$e(this.B,"/__/auth/iframe");J(this.fc,"apiKey",this.m);J(this.fc,"appName",this.w)};Dh.prototype.Ed=function(a){this.$a=a;return this};Dh.prototype.toString=function(){this.$a?J(this.fc,"v",this.$a):this.fc.removeParameter("v");return this.fc.toString()};var Eh=function(a,b,c,d,e){this.B=a;this.m=b;this.w=c;this.Le=d;this.$a=this.R=this.yd=null;this.Ub=e};Eh.prototype.Ed=function(a){this.$a=a;return this};
Eh.prototype.toString=function(){var a=$e(this.B,"/__/auth/handler");J(a,"apiKey",this.m);J(a,"appName",this.w);J(a,"authType",this.Le);if(this.Ub.isOAuthProvider){J(a,"providerId",this.Ub.providerId);var b=this.Ub,c=Df(b.Td),d;for(d in c)c[d]=c[d].toString();b=b.Df;c=Za(c);for(d=0;d<b.length;d++){var e=b[d];e in c&&delete c[e]}Xa(c)||J(a,"customParameters",Cf(c))}"function"===typeof this.Ub.ae&&(b=this.Ub.ae(),b.length&&J(a,"scopes",b.join(",")));this.yd?J(a,"redirectUrl",this.yd):a.removeParameter("redirectUrl");
this.R?J(a,"eventId",this.R):a.removeParameter("eventId");this.$a?J(a,"v",this.$a):a.removeParameter("v");if(this.hc)for(var f in this.hc)this.hc.hasOwnProperty(f)&&!Ye(a,f)&&J(a,f,this.hc[f]);return a.toString()};
var Fh=function(a,b,c,d){this.B=a;this.m=b;this.w=c;this.Ye=(this.Fa=d||null)?xf(this.Fa):null;d=this.Fa;this.ff=(new Dh(a,b,c)).Ed(d).toString();this.na=[];this.g=new R(b,null,this.Ye);this.vc=this.xa=null},Gh=function(a){var b=ff();return Vg(a).then(function(a){a:{for(var c=Ze(b),e=c.ka,c=c.ia,f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=Ze(g).ia==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:pf.test(g)?l=l==g:(g=g.split(".").join("\\."),l=(new RegExp("^(.+\\."+
g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1}if(!a)throw new $f(ff());})};h=Fh.prototype;h.Kb=function(){if(this.vc)return this.vc;var a=this;return this.vc=qf().then(function(){a.sc=new wh(a.ff);Hh(a)})};h.$b=function(a,b,c){var d=new N("popup-closed-by-user"),e=new N("web-storage-unsupported"),f=this,g=!1;return this.Na().then(function(){Ih(f).then(function(c){c||(a&&mf(a),b(e),g=!0)})}).f(function(){}).then(function(){if(!g)return of(a)}).then(function(){if(!g)return ve(c).then(function(){b(d)})})};
h.ve=function(){var a=K();return!Bf(a)&&!Ff(a)};h.de=function(){return!1};h.Sb=function(a,b,c,d,e,f,g){if(!a)return D(new N("popup-blocked"));if(g&&!Bf())return this.Na().f(function(b){mf(a);e(b)}),d(),B();this.xa||(this.xa=Gh(this.g));var l=this;return this.xa.then(function(){var b=l.Na().f(function(b){mf(a);e(b);throw b;});d();return b}).then(function(){Cg(c);if(!g){var d=Jh(l.B,l.m,l.w,b,c,null,f,l.Fa);gf(d,a)}}).f(function(a){"auth/network-request-failed"==a.code&&(l.xa=null);throw a;})};
h.Tb=function(a,b,c){this.xa||(this.xa=Gh(this.g));var d=this;return this.xa.then(function(){Cg(b);var e=Jh(d.B,d.m,d.w,a,b,ff(),c,d.Fa);gf(e)})};h.Na=function(){var a=this;return this.Kb().then(function(){return a.sc.qd}).f(function(){a.xa=null;throw new N("network-request-failed");})};h.ye=function(){return!0};
var Jh=function(a,b,c,d,e,f,g,l,n){a=new Eh(a,b,c,d,e);a.yd=f;a.R=g;f=a.Ed(l);f.hc=Za(n||null);return f.toString()},Hh=function(a){if(!a.sc)throw Error("IfcHandler must be initialized!");Ah(a.sc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Zf(b.authEvent);for(c=0;c<a.na.length;c++)d=a.na[c](b)||d;c={};c.status=d?"ACK":"ERROR";return B(c)}c.status="ERROR";return B(c)})},Ih=function(a){var b={type:"webStorageSupport"};return a.Kb().then(function(){return a.sc.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};Fh.prototype.cb=function(a){this.na.push(a)};Fh.prototype.Yb=function(a){Na(this.na,function(b){return b==a})};var Kh=function(a,b,c){M(this,"type","recaptcha");this.Uc=this.zb=null;this.Bb=!1;this.Rd=a;this.ya=b||{theme:"light",type:"image"};this.G=[];if(this.ya.sitekey)throw new N("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.wc="invisible"===this.ya.size;if(!ed(a)||!this.wc&&ed(a).hasChildNodes())throw new N("argument-error","reCAPTCHA container is either not found or already contains inner elements!");try{this.h=c||firebase.app()}catch(g){throw new N("argument-error",
"No firebase.app.App instance is currently initialized.");}if(this.h.options&&this.h.options.apiKey)a=firebase.SDK_VERSION?xf(firebase.SDK_VERSION):null,this.g=new R(this.h.options&&this.h.options.apiKey,null,a);else throw new N("invalid-api-key");var d=this;this.Pc=[];var e=this.ya.callback;this.ya.callback=function(a){d.Cb(a);if("function"===typeof e)e(a);else if("string"===typeof e){var b=L(e,k);"function"===typeof b&&b(a)}};var f=this.ya["expired-callback"];this.ya["expired-callback"]=function(){d.Cb(null);
if("function"===typeof f)f();else if("string"===typeof f){var a=L(f,k);"function"===typeof a&&a()}}};Kh.prototype.Cb=function(a){for(var b=0;b<this.Pc.length;b++)try{this.Pc[b](a)}catch(c){}};var Lh=function(a,b){Na(a.Pc,function(a){return a==b})};Kh.prototype.b=function(a){var b=this;this.G.push(a);wd(a,function(){Ma(b.G,a)});return a};
Kh.prototype.Lb=function(){var a=this;return this.zb?this.zb:this.zb=this.b(B().then(function(){if(yf())return qf();throw new N("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return Nh()}).then(function(){return Q(a.g,rh,{})}).then(function(b){a.ya.sitekey=b.recaptchaSiteKey}).f(function(b){a.zb=null;throw b;}))};
Kh.prototype.render=function(){Oh(this);var a=this;return this.b(this.Lb().then(function(){if(null===a.Uc){var b=a.Rd;if(!a.wc){var c=ed(b),b=id("DIV");c.appendChild(b)}a.Uc=grecaptcha.render(b,a.ya)}return a.Uc}))};Kh.prototype.verify=function(){Oh(this);var a=this;return this.b(this.render().then(function(b){return new A(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Lh(a,e),c(b))};a.Pc.push(e);a.wc&&grecaptcha.execute(a.Uc)}})}))};
var Oh=function(a){if(a.Bb)throw new N("internal-error","RecaptchaVerifier instance has been destroyed.");};Kh.prototype.clear=function(){Oh(this);this.Bb=!0;for(var a=0;a<this.G.length;a++)this.G[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.wc)for(var a=ed(this.Rd),b;b=a.firstChild;)a.removeChild(b)};
var Nh=function(){return new A(function(a,b){if(Hf())if(k.grecaptcha)a();else{var c="__rcb"+Math.floor(1E6*Math.random()).toString();k[c]=function(){k.grecaptcha?a():b(new N("internal-error"));delete k[c]};B(Nd("https://www.google.com/recaptcha/api.js?onload="+c+"&render=explicit")).f(function(){b(new N("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else b(new N("network-request-failed"))})};var Ph=function(a){this.D=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.D)throw new N("internal-error","The React Native compatibility library was not found.");};h=Ph.prototype;h.get=function(a){return B(this.D.getItem(a)).then(function(a){return a&&Ef(a)})};h.set=function(a,b){return B(this.D.setItem(a,Cf(b)))};h.remove=function(a){return B(this.D.removeItem(a))};h.eb=function(){};h.Va=function(){};var Qh=function(){this.D={}};h=Qh.prototype;h.get=function(a){return B(this.D[a])};h.set=function(a,b){this.D[a]=b;return B()};h.remove=function(a){delete this.D[a];return B()};h.eb=function(){};h.Va=function(){};var Sh=function(){if(!Rh()){if("Node"==vf())throw new N("internal-error","The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.D=k.localStorage||firebase.INTERNAL.node.localStorage},Rh=function(){var a="Node"==vf(),a=k.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Sh.prototype;
h.get=function(a){var b=this;return B().then(function(){var c=b.D.getItem(a);return Ef(c)})};h.set=function(a,b){var c=this;return B().then(function(){var d=Cf(b);null===d?c.remove(a):c.D.setItem(a,d)})};h.remove=function(a){var b=this;return B().then(function(){b.D.removeItem(a)})};h.eb=function(a){k.window&&Xb(k.window,"storage",a)};h.Va=function(a){k.window&&fc(k.window,"storage",a)};var Th=function(){this.D={}};h=Th.prototype;h.get=function(){return B(null)};h.set=function(){return B()};h.remove=function(){return B()};h.eb=function(){};h.Va=function(){};var Vh=function(){if(!Uh()){if("Node"==vf())throw new N("internal-error","The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.D=k.sessionStorage||firebase.INTERNAL.node.sessionStorage},Uh=function(){var a="Node"==vf(),a=k.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Vh.prototype;
h.get=function(a){var b=this;return B().then(function(){var c=b.D.getItem(a);return Ef(c)})};h.set=function(a,b){var c=this;return B().then(function(){var d=Cf(b);null===d?c.remove(a):c.D.setItem(a,d)})};h.remove=function(a){var b=this;return B().then(function(){b.D.removeItem(a)})};h.eb=function(){};h.Va=function(){};var Wh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new N("web-storage-unsupported");this.Re=a;this.pd=b;this.bd=c;this.Ce=d;this.ab=e;this.$={};this.ac=[];this.Ob=0;this.gf=f||k.indexedDB},Xh,Yh=function(a){return new A(function(b,c){var d=a.gf.open(a.Re,a.ab);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.pd,{keyPath:a.bd})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},Zh=function(a){a.he||(a.he=
Yh(a));return a.he},$h=function(a,b){return b.objectStore(a.pd)},ai=function(a,b,c){return b.transaction([a.pd],c?"readwrite":"readonly")},bi=function(a){return new A(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=Wh.prototype;
h.set=function(a,b){var c=!1,d,e=this;return wd(Zh(this).then(function(b){d=b;b=$h(e,ai(e,d,!0));return bi(b.get(a))}).then(function(f){var g=$h(e,ai(e,d,!0));if(f)return f.value=b,bi(g.put(f));e.Ob++;c=!0;f={};f[e.bd]=a;f[e.Ce]=b;return bi(g.add(f))}).then(function(){e.$[a]=b}),function(){c&&e.Ob--})};h.get=function(a){var b=this;return Zh(this).then(function(c){return bi($h(b,ai(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return wd(Zh(this).then(function(d){b=!0;c.Ob++;return bi($h(c,ai(c,d,!0))["delete"](a))}).then(function(){delete c.$[a]}),function(){b&&c.Ob--})};
h.Pf=function(){var a=this;return Zh(this).then(function(b){var c=$h(a,ai(a,b,!1));return c.getAll?bi(c.getAll()):new A(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Ob){for(d=0;d<b.length;d++)c[b[d][a.bd]]=b[d][a.Ce];d=hf(a.$,c);a.$=c}return d})};h.eb=function(a){0==this.ac.length&&this.Gd();this.ac.push(a)};
h.Va=function(a){Na(this.ac,function(b){return b==a});0==this.ac.length&&this.Lc()};h.Gd=function(){var a=this;this.Lc();var b=function(){a.td=ve(800).then(q(a.Pf,a)).then(function(b){0<b.length&&w(a.ac,function(a){a(b)})}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b()});return a.td};b()};h.Lc=function(){this.td&&this.td.cancel("STOP_EVENT")};var fi=function(){this.Vd={Browser:ci,Node:di,ReactNative:ei}[vf()]},gi,ci={U:Sh,Jd:Vh},di={U:Sh,Jd:Vh},ei={U:Ph,Jd:Th};var hi=function(a,b){this.Pe=b;M(this,"verificationId",a)};hi.prototype.confirm=function(a){a=Ag(this.verificationId,a);return this.Pe(a)};var ii=function(a,b,c,d){return(new yg(a)).verifyPhoneNumber(b,c).then(function(a){return new hi(a,d)})};var ji=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;M(this,"operation",a);M(this,"data",Sf(b))};var ki=function(a,b,c,d,e,f){this.yf=a;this.Ff=b;this.$e=c;this.Ac=d;this.Kd=e;this.Gf=!!f;this.mb=null;this.Oa=this.Ac;if(this.Kd<this.Ac)throw Error("Proactive refresh lower bound greater than upper bound!");};ki.prototype.start=function(){this.Oa=this.Ac;li(this,!0)};
var mi=function(a,b){if(b)return a.Oa=a.Ac,a.$e();b=a.Oa;a.Oa*=2;a.Oa>a.Kd&&(a.Oa=a.Kd);return b},li=function(a,b){a.stop();a.mb=ve(mi(a,b)).then(function(){return a.Gf?B():Kf()}).then(function(){return a.yf()}).then(function(){li(a,!0)}).f(function(b){a.Ff(b)&&li(a,!1)})};ki.prototype.stop=function(){this.mb&&(this.mb.cancel(),this.mb=null)};var si=function(a){var b={};b["facebook.com"]=ni;b["google.com"]=oi;b["github.com"]=pi;b["twitter.com"]=qi;var c=a&&a.providerId;return c?b[c]?new b[c](a):new ri(a):null},ri=function(a){var b=Ef(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");M(this,"profile",Sf(b||{}));M(this,"providerId",a)},ni=function(a){ri.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};r(ni,ri);
var pi=function(a){ri.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");M(this,"username",this.profile&&this.profile.login||null)};r(pi,ri);var oi=function(a){ri.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};r(oi,ri);var qi=function(a){ri.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");M(this,"username",a.screenName||null)};r(qi,ri);var ti=function(a,b,c,d){this.ke=a;this.Bd=b;this.Hf=c;this.Zb=d;this.S={};gi||(gi=new fi);a=gi;try{if(ef()){Xh||(Xh=new Wh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1));var e=Xh}else e=new a.Vd.U;this.Sa=e}catch(f){this.Sa=new Qh,this.Zb=!0}try{this.Nc=new a.Vd.Jd}catch(f){this.Nc=new Qh}this.Hd=q(this.we,this);this.$={}},ui,vi=function(){ui||(ui=new ti("firebase",":",!Ff(K())&&uf()?!0:!1,Bf()));return ui};h=ti.prototype;
h.Y=function(a,b){return this.ke+this.Bd+a.name+(b?this.Bd+b:"")};h.get=function(a,b){return(a.U?this.Sa:this.Nc).get(this.Y(a,b))};h.remove=function(a,b){b=this.Y(a,b);a.U&&!this.Zb&&(this.$[b]=null);return(a.U?this.Sa:this.Nc).remove(b)};h.set=function(a,b,c){var d=this.Y(a,c),e=this,f=a.U?this.Sa:this.Nc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.U&&!this.Zb&&(e.$[d]=b)})};
h.addListener=function(a,b,c){a=this.Y(a,b);this.Zb||(this.$[a]=k.localStorage.getItem(a));Xa(this.S)&&this.Gd();this.S[a]||(this.S[a]=[]);this.S[a].push(c)};h.removeListener=function(a,b,c){a=this.Y(a,b);this.S[a]&&(Na(this.S[a],function(a){return a==c}),0==this.S[a].length&&delete this.S[a]);Xa(this.S)&&this.Lc()};h.Gd=function(){this.Sa.eb(this.Hd);this.Zb||ef()||wi(this)};
var wi=function(a){xi(a);a.nd=setInterval(function(){for(var b in a.S){var c=k.localStorage.getItem(b),d=a.$[b];c!=d&&(a.$[b]=c,c=new Lb({type:"storage",key:b,target:window,oldValue:d,newValue:c,oe:!0}),a.we(c))}},1E3)},xi=function(a){a.nd&&(clearInterval(a.nd),a.nd=null)};ti.prototype.Lc=function(){this.Sa.Va(this.Hd);xi(this)};
ti.prototype.we=function(a){if(a&&a.Ze){var b=a.Ia.key;if(0==b.indexOf(this.ke+this.Bd)&&this.S[b]){"undefined"!==typeof a.Ia.oe?this.Sa.Va(this.Hd):xi(this);if(this.Hf){var c=k.localStorage.getItem(b),d=a.Ia.newValue;if(d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.$[b]===d&&"undefined"===typeof a.Ia.oe)return}this.$[b]=k.localStorage.getItem(b);this.Od(b)}}else w(a,q(this.Od,this))};ti.prototype.Od=function(a){this.S[a]&&w(this.S[a],function(a){a()})};var yi=function(a,b){this.v=a;this.l=b||vi()},zi={name:"authEvent",U:!0},Ai=function(a){return a.l.get(zi,a.v).then(function(a){return Zf(a)})};yi.prototype.cb=function(a){this.l.addListener(zi,this.v,a)};yi.prototype.Yb=function(a){this.l.removeListener(zi,this.v,a)};var Bi=function(a){this.l=a||vi()},Ci={name:"sessionId",U:!1};Bi.prototype.oc=function(a){return this.l.get(Ci,a)};var Di=function(a,b,c,d,e,f){this.B=a;this.m=b;this.w=c;this.Fa=d||null;this.xe=b+":"+c;this.If=new Bi;this.$d=new yi(this.xe);this.ld=null;this.na=[];this.lf=e||500;this.Bf=f||2E3;this.Jb=this.Dc=null},Ei=function(a){return new N("invalid-cordova-configuration",a)};
Di.prototype.Na=function(){return this.Lb?this.Lb:this.Lb=sf().then(function(){if("function"!==typeof L("universalLinks.subscribe",k))throw Ei("cordova-universal-links-plugin is not installed");if("undefined"===typeof L("BuildInfo.packageName",k))throw Ei("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",k))throw Ei("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",k))throw Ei("cordova-plugin-inappbrowser is not installed");
},function(){throw new N("cordova-not-ready");})};var Fi=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},Gi=function(a){var b=new Gb;b.update(a);return Qa(b.digest())};h=Di.prototype;h.$b=function(a,b){b(new N("operation-not-supported-in-this-environment"));return B()};h.Sb=function(){return D(new N("operation-not-supported-in-this-environment"))};h.ye=function(){return!1};h.ve=function(){return!0};
h.de=function(){return!0};
h.Tb=function(a,b,c){if(this.Dc)return D(new N("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.Dc=wd(B().then(function(){Cg(b);return Hi(d)}).then(function(){return Ii(d,a,b,c)}).then(function(){return(new A(function(a,b){g=function(){var b=L("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.Jb&&"function"===typeof d.Jb.close&&(d.Jb.close(),d.Jb=null);return!1};d.cb(g);l=function(){f||(f=ve(d.Bf).then(function(){b(new N("redirect-cancelled-by-user"))}))};n=
function(){Jf()&&l()};e.addEventListener("resume",l,!1);K().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).f(function(a){return Ji(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Yb(g);d.Dc=null})};
var Ii=function(a,b,c,d){var e=Fi(),f=new O(b,d,null,e,new N("no-auth-event")),g=L("BuildInfo.packageName",k);if("string"!==typeof g)throw new N("invalid-cordova-configuration");var l=L("BuildInfo.displayName",k),n={};if(K().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(K().toLowerCase().match(/android/))n.apn=g;else return D(new N("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=Gi(e);n.sessionId=e;var C=Jh(a.B,a.m,a.w,b,c,null,d,a.Fa,n);return a.Na().then(function(){var b=
a.xe;return a.If.l.set(zi,f.F(),b)}).then(function(){var b=L("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new N("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=L("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");c(C)}else{c=L("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");b=c;var d=K();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Jb=b(C,d?"_blank":"_system","location=yes")}})})};Di.prototype.Cb=function(a){for(var b=0;b<this.na.length;b++)try{this.na[b](a)}catch(c){}};
var Hi=function(a){a.ld||(a.ld=a.Na().then(function(){return new A(function(b){var c=function(d){b(d);a.Yb(c);return!1};a.cb(c);Ki(a)})}));return a.ld},Ji=function(a){var b=null;return Ai(a.$d).then(function(c){b=c;c=a.$d;return c.l.remove(zi,c.v)}).then(function(){return b})},Ki=function(a){var b=L("universalLinks.subscribe",k);if("function"!==typeof b)throw new N("invalid-cordova-configuration");var c=new O("unknown",null,null,null,new N("no-auth-event")),d=!1,e=ve(a.lf).then(function(){return Ji(a).then(function(){d||
a.Cb(c)})}),f=function(b){d=!0;e&&e.cancel();Ji(a).then(function(d){var e=c;if(d&&b&&b.url){var e=null;var f=b.url;var g=Ze(f),l=Ye(g,"link"),n=Ye(Ze(l),"link"),g=Ye(g,"deep_link_id");f=Ye(Ze(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=Ze(f),e=Ef(Ye(e,"firebaseError")||null),e=(e="object"===typeof e?Yf(e):null)?new O(d.ha,d.R,null,null,e):new O(d.ha,d.R,f,d.oc()));e=e||c}a.Cb(e)})},g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.indexOf(L("BuildInfo.packageName",k)+"://")&&f({url:a});
if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};Di.prototype.cb=function(a){this.na.push(a);Hi(this).f(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new O("unknown",null,null,null,new N("no-auth-event")),a(b))})};Di.prototype.Yb=function(a){Na(this.na,function(b){return b==a})};var Li=function(a){this.v=a;this.l=vi()},Mi={name:"pendingRedirect",U:!1},Ni=function(a){return a.l.set(Mi,"pending",a.v)},Oi=function(a){return a.l.remove(Mi,a.v)},Pi=function(a){return a.l.get(Mi,a.v).then(function(a){return"pending"==a})};var Ti=function(a,b,c){this.B=a;this.m=b;this.w=c;this.bc=[];this.kb=!1;this.Yc=q(this.hd,this);this.Ta=new Qi(this);this.ud=new Ri(this);this.Pb=new Li(this.m+":"+this.w);this.Ba={};this.Ba.unknown=this.Ta;this.Ba.signInViaRedirect=this.Ta;this.Ba.linkViaRedirect=this.Ta;this.Ba.reauthViaRedirect=this.Ta;this.Ba.signInViaPopup=this.ud;this.Ba.linkViaPopup=this.ud;this.Ba.reauthViaPopup=this.ud;this.T=Si(this.B,this.m,this.w)},Si=function(a,b,c){var d=firebase.SDK_VERSION||null;return rf()?new Di(a,
b,c,d):new Fh(a,b,c,d)};Ti.prototype.reset=function(){this.kb=!1;this.T.Yb(this.Yc);this.T=Si(this.B,this.m,this.w)};Ti.prototype.Kb=function(){var a=this;this.kb||(this.kb=!0,this.T.cb(this.Yc));var b=this.T;return this.T.Na().f(function(c){a.T==b&&a.reset();throw c;})};var Wi=function(a){a.T.ve()&&a.Kb().f(function(b){var c=new O("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Ui(b)&&a.hd(c)});a.T.de()||Vi(a.Ta)};
Ti.prototype.subscribe=function(a){Ka(this.bc,a)||this.bc.push(a);if(!this.kb){var b=this;Pi(this.Pb).then(function(a){a?Oi(b.Pb).then(function(){b.Kb().f(function(a){var c=new O("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Ui(a)&&b.hd(c)})}):Wi(b)}).f(function(){Wi(b)})}};Ti.prototype.unsubscribe=function(a){Na(this.bc,function(b){return b==a})};
Ti.prototype.hd=function(a){if(!a)throw new N("invalid-auth-event");for(var b=!1,c=0;c<this.bc.length;c++){var d=this.bc[c];if(d.Pd(a.ha,a.R)){(b=this.Ba[a.ha])&&b.pe(a,d);b=!0;break}}Vi(this.Ta);return b};var Xi=new If(2E3,1E4),Yi=new If(3E4,6E4);Ti.prototype.getRedirectResult=function(){return this.Ta.getRedirectResult()};Ti.prototype.Sb=function(a,b,c,d,e){var f=this;return this.T.Sb(a,b,c,function(){f.kb||(f.kb=!0,f.T.cb(f.Yc))},function(){f.reset()},d,e)};
var Ui=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};Ti.prototype.Tb=function(a,b,c){var d=this,e;return Ni(this.Pb).then(function(){return d.T.Tb(a,b,c).f(function(a){if(Ui(a))throw new N("operation-not-supported-in-this-environment");e=a;return Oi(d.Pb).then(function(){throw e;})}).then(function(){return d.T.ye()?new A(function(){}):Oi(d.Pb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
Ti.prototype.$b=function(a,b,c,d){return this.T.$b(c,function(c){a.Xa(b,null,c,d)},Xi.get())};var Zi={},$i=function(a,b,c){var d=b+":"+c;Zi[d]||(Zi[d]=new Ti(a,b,c));return Zi[d]},Qi=function(a){this.l=a;this.sb=null;this.Wb=[];this.Vb=[];this.qb=null;this.xd=!1};Qi.prototype.reset=function(){this.sb=null;this.qb&&(this.qb.cancel(),this.qb=null)};
Qi.prototype.pe=function(a,b){if(!a)return D(new N("invalid-auth-event"));this.reset();this.xd=!0;var c=a.ha,d=a.R,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.X?this.vd(a,b):b.Db(c,d)?this.wd(a,b):D(new N("invalid-auth-event")):(aj(this,!1,null,null),a=B());return a};var Vi=function(a){a.xd||(a.xd=!0,aj(a,!1,null,null))};
Qi.prototype.vd=function(a){aj(this,!0,null,a.getError());return B()};Qi.prototype.wd=function(a,b){var c=this;b=b.Db(a.ha,a.R);var d=a.vb,e=a.oc(),f=!!a.ha.match(/Redirect$/);return b(d,e).then(function(a){aj(c,f,a,null)}).f(function(a){aj(c,f,null,a)})};
var bj=function(a,b){a.sb=function(){return D(b)};if(a.Vb.length)for(var c=0;c<a.Vb.length;c++)a.Vb[c](b)},cj=function(a,b){a.sb=function(){return B(b)};if(a.Wb.length)for(var c=0;c<a.Wb.length;c++)a.Wb[c](b)},aj=function(a,b,c,d){b?d?bj(a,d):cj(a,c):cj(a,{user:null});a.Wb=[];a.Vb=[]};Qi.prototype.getRedirectResult=function(){var a=this;return new A(function(b,c){a.sb?a.sb().then(b,c):(a.Wb.push(b),a.Vb.push(c),dj(a))})};
var dj=function(a){var b=new N("timeout");a.qb&&a.qb.cancel();a.qb=ve(Yi.get()).then(function(){a.sb||aj(a,!0,null,b)})},Ri=function(a){this.l=a};Ri.prototype.pe=function(a,b){if(!a)return D(new N("invalid-auth-event"));var c=a.ha,d=a.R;return a.X?this.vd(a,b):b.Db(c,d)?this.wd(a,b):D(new N("invalid-auth-event"))};Ri.prototype.vd=function(a,b){b.Xa(a.ha,null,a.getError(),a.R);return B()};
Ri.prototype.wd=function(a,b){var c=a.R,d=a.ha,e=b.Db(d,c),f=a.vb;a=a.oc();return e(f,a).then(function(a){b.Xa(d,a,null,c)}).f(function(a){b.Xa(d,null,a,c)})};var ej=function(a){this.g=a;this.Ca=this.ca=null;this.Ja=0};ej.prototype.F=function(){return{apiKey:this.g.m,refreshToken:this.ca,accessToken:this.Ca,expirationTime:this.Ja}};
var gj=function(a,b){var c=b.idToken,d=b.refreshToken;b=fj(b.expiresIn);a.Ca=c;a.Ja=b;a.ca=d},fj=function(a){return ma()+1E3*parseInt(a,10)},hj=function(a,b){return Og(a.g,b).then(function(b){a.Ca=b.access_token;a.Ja=fj(b.expires_in);a.ca=b.refresh_token;return{accessToken:a.Ca,expirationTime:a.Ja,refreshToken:a.ca}}).f(function(b){"auth/user-token-expired"==b.code&&(a.ca=null);throw b;})};
ej.prototype.getToken=function(a){a=!!a;return this.Ca&&!this.ca?D(new N("user-token-expired")):a||!this.Ca||ma()>this.Ja-3E4?this.ca?hj(this,{grant_type:"refresh_token",refresh_token:this.ca}):B(null):B({accessToken:this.Ca,expirationTime:this.Ja,refreshToken:this.ca})};var ij=function(a,b,c,d,e){Of(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},jj=function(a,b){Kb.call(this,a);for(var c in b)this[c]=b[c]};r(jj,Kb);
var S=function(a,b,c){this.G=[];this.m=a.apiKey;this.w=a.appName;this.B=a.authDomain||null;a=firebase.SDK_VERSION?xf(firebase.SDK_VERSION):null;this.g=new R(this.m,null,a);this.la=new ej(this.g);kj(this,b.idToken);gj(this.la,b);M(this,"refreshToken",this.la.ca);lj(this,c||{});je.call(this);this.Ec=!1;this.B&&Af()&&(this.s=$i(this.B,this.m,this.w));this.Kc=[];this.ma=null;this.ob=mj(this);this.xb=q(this.jd,this)};r(S,je);S.prototype.jd=function(){this.ob.mb&&(this.ob.stop(),this.ob.start())};
var nj=function(a){try{return firebase.app(a.w).auth()}catch(b){throw new N("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.w+"'!");}},mj=function(a){return new ki(function(){return a.getIdToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.la.Ja-ma()-3E5;return 0<b?b:0},3E4,96E4,!1)},oj=function(a){a.Bb||a.ob.mb||(a.ob.start(),fc(a,"tokenChanged",a.xb),Xb(a,"tokenChanged",a.xb))},pj=function(a){fc(a,"tokenChanged",
a.xb);a.ob.stop()},kj=function(a,b){a.ie=b;M(a,"_lat",b)},qj=function(a,b){Na(a.Kc,function(a){return a==b})},rj=function(a){for(var b=[],c=0;c<a.Kc.length;c++)b.push(a.Kc[c](a));return td(b).then(function(){return a})},sj=function(a){a.s&&!a.Ec&&(a.Ec=!0,a.s.subscribe(a))},lj=function(a,b){Of(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]})};
M(S.prototype,"providerId","firebase");var tj=function(){},uj=function(a){return B().then(function(){if(a.Bb)throw new N("app-deleted");})},vj=function(a){return Ga(a.providerData,function(a){return a.providerId})},xj=function(a,b){b&&(wj(a,b.providerId),a.providerData.push(b))},wj=function(a,b){Na(a.providerData,function(a){return a.providerId==b})},yj=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c)};
S.prototype.copy=function(a){var b=this;b!=a&&(Of(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,phoneNumber:a.phoneNumber,isAnonymous:a.isAnonymous,providerData:[]}),w(a.providerData,function(a){xj(b,a)}),this.la=a.la,M(this,"refreshToken",this.la.ca))};S.prototype.reload=function(){var a=this;return this.b(uj(this).then(function(){return zj(a).then(function(){return rj(a)}).then(tj)}))};
var zj=function(a){return a.getIdToken().then(function(b){var c=a.isAnonymous;return Aj(a,b).then(function(){c||yj(a,"isAnonymous",!1);return b})})};S.prototype.getIdToken=function(a){var b=this;return this.b(uj(this).then(function(){return b.la.getToken(a)}).then(function(a){if(!a)throw new N("internal-error");a.accessToken!=b.ie&&(kj(b,a.accessToken),b.Pa());yj(b,"refreshToken",a.refreshToken);return a.accessToken}))};
S.prototype.getToken=function(a){Lf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Lf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a)};
var Bj=function(a,b){b.idToken&&a.ie!=b.idToken&&(gj(a.la,b),a.Pa(),kj(a,b.idToken),yj(a,"refreshToken",a.la.ca))};S.prototype.Pa=function(){this.dispatchEvent(new jj("tokenChanged"))};var Aj=function(a,b){return Q(a.g,qh,{idToken:b}).then(q(a.zf,a))};
S.prototype.zf=function(a){a=a.users;if(!a||!a.length)throw new N("internal-error");a=a[0];lj(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber});for(var b=Cj(a),c=0;c<b.length;c++)xj(this,b[c]);yj(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var Cj=function(a){return(a=a.providerUserInfo)&&a.length?Ga(a,function(a){return new ij(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};S.prototype.reauthenticateAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.b(a.od(this.g,this.uid).then(function(a){Bj(b,a);c=Dj(b,a,"reauthenticate");b.ma=null;return b.reload()}).then(function(){return c}),!0)};S.prototype.reauthenticateWithCredential=function(a){return this.reauthenticateAndRetrieveDataWithCredential(a).then(function(){})};
var Ej=function(a,b){return zj(a).then(function(){if(Ka(vj(a),b))return rj(a).then(function(){throw new N("provider-already-linked");})})};S.prototype.linkAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.b(Ej(this,a.providerId).then(function(){return b.getIdToken()}).then(function(c){return a.zc(b.g,c)}).then(function(a){c=Dj(b,a,"link");return Fj(b,a)}).then(function(){return c}))};S.prototype.linkWithCredential=function(a){return this.linkAndRetrieveDataWithCredential(a).then(function(a){return a.user})};
S.prototype.linkWithPhoneNumber=function(a,b){var c=this;return this.b(Ej(this,"phone").then(function(){return ii(nj(c),a,b,q(c.linkAndRetrieveDataWithCredential,c))}))};S.prototype.reauthenticateWithPhoneNumber=function(a,b){var c=this;return this.b(B().then(function(){return ii(nj(c),a,b,q(c.reauthenticateAndRetrieveDataWithCredential,c))}),!0)};var Dj=function(a,b,c){var d=Bg(b);b=si(b);return Pf({user:a,credential:d,additionalUserInfo:b,operationType:c})},Fj=function(a,b){Bj(a,b);return a.reload().then(function(){return a})};
h=S.prototype;h.updateEmail=function(a){var b=this;return this.b(this.getIdToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){Bj(b,a);return b.reload()}))};h.updatePhoneNumber=function(a){var b=this;return this.b(this.getIdToken().then(function(c){return a.zc(b.g,c)}).then(function(a){Bj(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.b(this.getIdToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){Bj(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return uj(this);var b=this;return this.b(this.getIdToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Bj(b,a);yj(b,"displayName",a.displayName||null);yj(b,"photoURL",a.photoUrl||null);w(b.providerData,function(a){"password"===a.providerId&&(M(a,"displayName",b.displayName),M(a,"photoURL",b.photoURL))});return rj(b)}).then(tj))};
h.unlink=function(a){var b=this;return this.b(zj(this).then(function(c){return Ka(vj(b),a)?eh(b.g,c,[a]).then(function(a){var c={};w(a.providerUserInfo||[],function(a){c[a.providerId]=!0});w(vj(b),function(a){c[a]||wj(b,a)});c[yg.PROVIDER_ID]||M(b,"phoneNumber",null);return rj(b)}):rj(b).then(function(){throw new N("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.b(this.getIdToken().then(function(b){return Q(a.g,ph,{idToken:b})}).then(function(){a.dispatchEvent(new jj("userDeleted"))})).then(function(){for(var b=0;b<a.G.length;b++)a.G[b].cancel("app-deleted");a.G=[];a.Bb=!0;pj(a);M(a,"refreshToken",null);a.s&&a.s.unsubscribe(a)})};
h.Pd=function(a,b){return"linkViaPopup"==a&&(this.ga||null)==b&&this.fa||"reauthViaPopup"==a&&(this.ga||null)==b&&this.fa||"linkViaRedirect"==a&&(this.Aa||null)==b||"reauthViaRedirect"==a&&(this.Aa||null)==b?!0:!1};h.Xa=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.ga||null)||(c&&this.Ra?this.Ra(c):b&&!c&&this.fa&&this.fa(b),this.I&&(this.I.cancel(),this.I=null),delete this.fa,delete this.Ra)};
h.Db=function(a,b){return"linkViaPopup"==a&&b==(this.ga||null)?q(this.Xd,this):"reauthViaPopup"==a&&b==(this.ga||null)?q(this.Yd,this):"linkViaRedirect"==a&&(this.Aa||null)==b?q(this.Xd,this):"reauthViaRedirect"==a&&(this.Aa||null)==b?q(this.Yd,this):null};h.nc=function(){return zf(this.uid+":::")};h.linkWithPopup=function(a){var b=this;return Gj(this,"linkViaPopup",a,function(){return Ej(b,a.providerId).then(function(){return rj(b)})},!1)};
h.reauthenticateWithPopup=function(a){return Gj(this,"reauthViaPopup",a,function(){return B()},!0)};
var Gj=function(a,b,c,d,e){if(!Af())return D(new N("operation-not-supported-in-this-environment"));if(a.ma&&!e)return D(a.ma);var f=Wf(c.providerId),g=a.nc(),l=null;(!Bf()||uf())&&a.B&&c.isOAuthProvider&&(l=Jh(a.B,a.m,a.w,b,c,null,g,firebase.SDK_VERSION||null));var n=nf(l,f&&f.Rb,f&&f.Qb);d=d().then(function(){Hj(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){return a.s.Sb(n,b,c,g,!!l)}).then(function(){return new A(function(c,d){a.Xa(b,null,new N("cancelled-popup-request"),a.ga||
null);a.fa=c;a.Ra=d;a.ga=g;a.I=a.s.$b(a,b,n,g)})}).then(function(a){n&&mf(n);return a?Pf(a):null}).f(function(a){n&&mf(n);throw a;});return a.b(d,e)};S.prototype.linkWithRedirect=function(a){var b=this;return Ij(this,"linkViaRedirect",a,function(){return Ej(b,a.providerId)},!1)};S.prototype.reauthenticateWithRedirect=function(a){return Ij(this,"reauthViaRedirect",a,function(){return B()},!0)};
var Ij=function(a,b,c,d,e){if(!Af())return D(new N("operation-not-supported-in-this-environment"));if(a.ma&&!e)return D(a.ma);var f=null,g=a.nc();d=d().then(function(){Hj(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){a.Aa=g;return rj(a)}).then(function(b){a.Ua&&(b=a.Ua,b=b.l.set(Jj,a.F(),b.v));return b}).then(function(){return a.s.Tb(b,c,g)}).f(function(b){f=b;if(a.Ua)return Kj(a.Ua);throw f;}).then(function(){if(f)throw f;});return a.b(d,e)},Hj=function(a){if(!a.s||!a.Ec){if(a.s&&
!a.Ec)throw new N("internal-error");throw new N("auth-domain-config-required");}};S.prototype.Xd=function(a,b){var c=this;this.I&&(this.I.cancel(),this.I=null);var d=null,e=this.getIdToken().then(function(d){return fg(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Dj(c,a,"link");return Fj(c,a)}).then(function(){return d});return this.b(e)};
S.prototype.Yd=function(a,b){var c=this;this.I&&(this.I.cancel(),this.I=null);var d=null,e=B().then(function(){return bg(gg(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=Dj(c,a,"reauthenticate");Bj(c,a);c.ma=null;return c.reload()}).then(function(){return d});return this.b(e,!0)};S.prototype.sendEmailVerification=function(){var a=this;return this.b(this.getIdToken().then(function(b){return a.g.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};
S.prototype.b=function(a,b){var c=this,d=Lj(this,a,b);this.G.push(d);wd(d,function(){Ma(c.G,d)});return d};var Lj=function(a,b,c){return a.ma&&!c?(b.cancel(),D(a.ma)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.ma||a.dispatchEvent(new jj("userInvalidated")),a.ma=b);throw b;})};S.prototype.toJSON=function(){return this.F()};
S.prototype.F=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.m,appName:this.w,authDomain:this.B,stsTokenManager:this.la.F(),redirectEventId:this.Aa||null};w(this.providerData,function(b){a.providerData.push(Qf(b))});return a};
var Mj=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ma())/1E3;else return null;var d=new S(b,c,a);a.providerData&&w(a.providerData,function(a){a&&xj(d,Pf(a))});a.redirectEventId&&(d.Aa=a.redirectEventId);return d},
Nj=function(a,b,c){var d=new S(a,b);c&&(d.Ua=c);return d.reload().then(function(){return d})};var Oj=function(a){this.v=a;this.l=vi()},Jj={name:"redirectUser",U:!1},Kj=function(a){return a.l.remove(Jj,a.v)},Pj=function(a,b){return a.l.get(Jj,a.v).then(function(a){a&&b&&(a.authDomain=b);return Mj(a||{})})};var Qj=function(a){this.v=a;this.l=vi()},Rj={name:"authUser",U:!0},Sj=function(a,b){return a.l.set(Rj,b.F(),a.v)},Tj=function(a){return a.l.remove(Rj,a.v)},Uj=function(a,b){return a.l.get(Rj,a.v).then(function(a){a&&b&&(a.authDomain=b);return Mj(a||{})})};var T=function(a){this.Ga=!1;M(this,"app",a);if(this.h().options&&this.h().options.apiKey)a=firebase.SDK_VERSION?xf(firebase.SDK_VERSION):null,this.g=new R(this.h().options&&this.h().options.apiKey,null,a);else throw new N("invalid-api-key");this.G=[];this.Da=[];this.wb=[];this.vf=firebase.INTERNAL.createSubscribe(q(this.hf,this));this.gc=void 0;this.xf=firebase.INTERNAL.createSubscribe(q(this.kf,this));Vj(this,null);a=this.h().options.apiKey;var b=this.h().name;this.ua=new Qj(a+":"+b);a=this.h().options.apiKey;
b=this.h().name;this.rb=new Oj(a+":"+b);this.ic=this.b(Wj(this));this.ra=this.b(Xj(this));this.xc=!1;this.gd=q(this.Of,this);this.Be=q(this.ib,this);this.xb=q(this.jd,this);this.ze=q(this.df,this);this.Ae=q(this.ef,this);Yj(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this);this.Ka=0};T.prototype.toJSON=function(){return{apiKey:this.h().options.apiKey,authDomain:this.h().options.authDomain,appName:this.h().name,currentUser:U(this)&&U(this).F()}};
var Zj=function(a){return a.Se||D(new N("auth-domain-config-required"))},Yj=function(a){var b=a.h().options.authDomain,c=a.h().options.apiKey;b&&Af()&&(a.Se=a.ic.then(function(){if(!a.Ga)return a.s=$i(b,c,a.h().name),a.s.subscribe(a),U(a)&&sj(U(a)),a.Xb&&(sj(a.Xb),a.Xb=null),a.s}))};h=T.prototype;h.Pd=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ga==b&&!!this.fa;default:return!1}};
h.Xa=function(a,b,c,d){"signInViaPopup"==a&&this.ga==d&&(c&&this.Ra?this.Ra(c):b&&!c&&this.fa&&this.fa(b),this.I&&(this.I.cancel(),this.I=null),delete this.fa,delete this.Ra)};h.Db=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ga==b&&this.fa?q(this.Ue,this):null};
h.Ue=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.I&&(this.I.cancel(),this.I=null);var d=null,e=null,f=dg(c.g,a).then(function(a){d=Bg(a);e=si(a);return a});a=c.ic.then(function(){return f}).then(function(a){return ak(c,a)}).then(function(){return Pf({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.b(a)};h.nc=function(){return zf()};
h.signInWithPopup=function(a){if(!Af())return D(new N("operation-not-supported-in-this-environment"));var b=this,c=Wf(a.providerId),d=this.nc(),e=null;(!Bf()||uf())&&this.h().options.authDomain&&a.isOAuthProvider&&(e=Jh(this.h().options.authDomain,this.h().options.apiKey,this.h().name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.Rb,c&&c.Qb),c=Zj(this).then(function(b){return b.Sb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new A(function(a,c){b.Xa("signInViaPopup",
null,new N("cancelled-popup-request"),b.ga);b.fa=a;b.Ra=c;b.ga=d;b.I=b.s.$b(b,"signInViaPopup",f,d)})}).then(function(a){f&&mf(f);return a?Pf(a):null}).f(function(a){f&&mf(f);throw a;});return this.b(c)};h.signInWithRedirect=function(a){if(!Af())return D(new N("operation-not-supported-in-this-environment"));var b=this,c=Zj(this).then(function(){return b.s.Tb("signInViaRedirect",a)});return this.b(c)};
h.getRedirectResult=function(){if(!Af())return D(new N("operation-not-supported-in-this-environment"));var a=this,b=Zj(this).then(function(){return a.s.getRedirectResult()}).then(function(a){return a?Pf(a):null});return this.b(b)};
var ak=function(a,b){var c={};c.apiKey=a.h().options.apiKey;c.authDomain=a.h().options.authDomain;c.appName=a.h().name;return a.ic.then(function(){return Nj(c,b,a.rb)}).then(function(b){if(U(a)&&b.uid==U(a).uid)return U(a).copy(b),a.ib(b);Vj(a,b);sj(b);return a.ib(b)}).then(function(){a.Pa()})},Vj=function(a,b){U(a)&&(qj(U(a),a.Be),fc(U(a),"tokenChanged",a.xb),fc(U(a),"userDeleted",a.ze),fc(U(a),"userInvalidated",a.Ae),pj(U(a)));b&&(b.Kc.push(a.Be),Xb(b,"tokenChanged",a.xb),Xb(b,"userDeleted",a.ze),
Xb(b,"userInvalidated",a.Ae),0<a.Ka&&oj(b));M(a,"currentUser",b)};T.prototype.signOut=function(){var a=this,b=this.ra.then(function(){if(!U(a))return B();Vj(a,null);return Tj(a.ua).then(function(){a.Pa()})});return this.b(b)};
var bk=function(a){var b=a.h().options.authDomain,b=Pj(a.rb,b).then(function(b){if(a.Xb=b)b.Ua=a.rb;return Kj(a.rb)});return a.b(b)},Wj=function(a){var b=a.h().options.authDomain,c=bk(a).then(function(){return Uj(a.ua,b)}).then(function(b){return b?(b.Ua=a.rb,a.Xb&&(a.Xb.Aa||null)==(b.Aa||null)?b:b.reload().then(function(){return Sj(a.ua,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:Tj(a.ua)})):null}).then(function(b){Vj(a,b||null)});return a.b(c)},Xj=
function(a){return a.ic.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Ga)return a.gd()}).f(function(){}).then(function(){if(!a.Ga){a.xc=!0;var b=a.ua;b.l.addListener(Rj,b.v,a.gd)}})};h=T.prototype;
h.Of=function(){var a=this,b=this.h().options.authDomain;return Uj(this.ua,b).then(function(b){if(!a.Ga){var c;if(c=U(a)&&b){c=U(a).uid;var e=b.uid;c=void 0===c||null===c||""===c||void 0===e||null===e||""===e?!1:c==e}if(c)return U(a).copy(b),U(a).getIdToken();if(U(a)||b)Vj(a,b),b&&(sj(b),b.Ua=a.rb),a.s&&a.s.subscribe(a),a.Pa()}})};h.ib=function(a){return Sj(this.ua,a)};h.jd=function(){this.Pa();this.ib(U(this))};h.df=function(){this.signOut()};h.ef=function(){this.signOut()};
var ck=function(a,b){var c=null,d=null;return a.b(b.then(function(b){c=Bg(b);d=si(b);return ak(a,b)}).then(function(){return Pf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=T.prototype;h.hf=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.kf=function(a){var b=this;dk(this,function(){a.next(U(b))})};
h.onIdTokenChanged=function(a,b,c){var d=this;this.xc&&firebase.Promise.resolve().then(function(){p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.vf(a,b,c)};h.onAuthStateChanged=function(a,b,c){var d=this;this.xc&&firebase.Promise.resolve().then(function(){d.gc=d.getUid();p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.xf(a,b,c)};h.getIdToken=function(a){var b=this,c=this.ra.then(function(){return U(b)?U(b).getIdToken(a).then(function(a){return{accessToken:a}}):null});return this.b(c)};
h.signInWithCustomToken=function(a){var b=this;return this.ra.then(function(){return ck(b,Q(b.g,sh,{token:a}))}).then(function(a){a=a.user;yj(a,"isAnonymous",!1);return b.ib(a)}).then(function(){return U(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return ck(c,Q(c.g,rg,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return ck(c,Q(c.g,oh,{email:a,password:b}))}).then(function(a){return a.user})};
h.signInWithCredential=function(a){return this.signInAndRetrieveDataWithCredential(a).then(function(a){return a.user})};h.signInAndRetrieveDataWithCredential=function(a){var b=this;return this.ra.then(function(){return ck(b,a.Eb(b.g))})};h.signInAnonymously=function(){var a=this;return this.ra.then(function(){var b=U(a);return b&&b.isAnonymous?b:ck(a,a.g.signInAnonymously()).then(function(b){b=b.user;yj(b,"isAnonymous",!0);return a.ib(b)}).then(function(){return U(a)})})};h.h=function(){return this.app};
var U=function(a){return a.currentUser};T.prototype.getUid=function(){return U(this)&&U(this).uid||null};var ek=function(a){return U(a)&&U(a)._lat||null};h=T.prototype;h.Pa=function(){if(this.xc){for(var a=0;a<this.Da.length;a++)if(this.Da[a])this.Da[a](ek(this));if(this.gc!==this.getUid()&&this.wb.length)for(this.gc=this.getUid(),a=0;a<this.wb.length;a++)if(this.wb[a])this.wb[a](ek(this))}};h.Ke=function(a){this.addAuthTokenListener(a);this.Ka++;0<this.Ka&&U(this)&&oj(U(this))};
h.Cf=function(a){var b=this;w(this.Da,function(c){c==a&&b.Ka--});0>this.Ka&&(this.Ka=0);0==this.Ka&&U(this)&&pj(U(this));this.removeAuthTokenListener(a)};h.addAuthTokenListener=function(a){var b=this;this.Da.push(a);this.b(this.ra.then(function(){b.Ga||Ka(b.Da,a)&&a(ek(b))}))};h.removeAuthTokenListener=function(a){Na(this.Da,function(b){return b==a})};var dk=function(a,b){a.wb.push(b);a.b(a.ra.then(function(){!a.Ga&&Ka(a.wb,b)&&a.gc!==a.getUid()&&(a.gc=a.getUid(),b(ek(a)))}))};h=T.prototype;
h["delete"]=function(){this.Ga=!0;for(var a=0;a<this.G.length;a++)this.G[a].cancel("app-deleted");this.G=[];this.ua&&(a=this.ua,a.l.removeListener(Rj,a.v,this.gd));this.s&&this.s.unsubscribe(this);return firebase.Promise.resolve()};h.b=function(a){var b=this;this.G.push(a);wd(a,function(){Ma(b.G,a)});return a};h.fetchProvidersForEmail=function(a){return this.b(Tg(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.b(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.b(this.g.checkActionCode(a).then(function(a){return new ji(a)}))};h.applyActionCode=function(a){return this.b(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.b(this.g.sendPasswordResetEmail(a).then(function(){}))};
h.signInWithPhoneNumber=function(a,b){return this.b(ii(this,a,b,q(this.signInAndRetrieveDataWithCredential,this)))};var fk="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),V=function(a,b){return{name:a||"",N:"a valid string",optional:!!b,O:m}},gk=function(){return{name:"opt_forceRefresh",N:"a boolean",optional:!0,O:ba}},W=function(a,b){return{name:a||"",N:"a valid object",optional:!!b,O:ia}},hk=function(a,b){return{name:a||"",N:"a function",optional:!!b,O:p}},ik=function(){return{name:"",N:"null",optional:!1,O:fa}},jk=function(){return{name:"",N:"an HTML element",optional:!1,O:function(a){return!!(a&&
a instanceof Element)}}},kk=function(){return{name:"auth",N:"an instance of Firebase Auth",optional:!0,O:function(a){return!!(a&&a instanceof T)}}},lk=function(){return{name:"app",N:"an instance of Firebase App",optional:!0,O:function(a){return!!(a&&a instanceof firebase.app.App)}}},mk=function(a){return{name:a?a+"Credential":"credential",N:a?"a valid "+a+" credential":"a valid credential",optional:!1,O:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.Eb||!c)}}},nk=function(){return{name:"authProvider",
N:"a valid Auth provider",optional:!1,O:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},ok=function(){return{name:"applicationVerifier",N:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,O:function(a){return!!(a&&m(a.type)&&p(a.verify))}}},X=function(a,b,c,d){return{name:c||"",N:a.N+" or "+b.N,optional:!!d,O:function(c){return a.O(c)||b.O(c)}}};var Y=function(a,b){for(var c in b){var d=b[c].name;a[d]=pk(d,a[c],b[c].a)}},Z=function(a,b,c,d){a[b]=pk(b,c,d)},pk=function(a,b,c){if(!c)return b;var d=qk(a);a=function(){var a=Array.prototype.slice.call(arguments);a:{var e=Array.prototype.slice.call(a);var l=0;for(var n=!1,C=0;C<c.length;C++)if(c[C].optional)n=!0;else{if(n)throw new N("internal-error","Argument validator encountered a required argument after an optional argument.");l++}n=c.length;if(e.length<l||n<e.length)e="Expected "+(l==n?1==
l?"1 argument":l+" arguments":l+"-"+n+" arguments")+" but got "+e.length+".";else{for(l=0;l<e.length;l++)if(n=c[l].optional&&void 0===e[l],!c[l].O(e[l])&&!n){e=c[l];if(0>l||l>=fk.length)throw new N("internal-error","Argument validator received an unsupported number of arguments.");e=fk[l]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.N+".";break a}e=null}}if(e)throw new N("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},qk=function(a){a=a.split(".");return a[a.length-1]};Y(T.prototype,{applyActionCode:{name:"applyActionCode",a:[V("code")]},checkActionCode:{name:"checkActionCode",a:[V("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[V("code"),V("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[V("email"),V("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[V("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[X(W(),hk(),"nextOrObserver"),
hk("opt_error",!0),hk("opt_completed",!0)]},onIdTokenChanged:{name:"onIdTokenChanged",a:[X(W(),hk(),"nextOrObserver"),hk("opt_error",!0),hk("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[V("email")]},signInAndRetrieveDataWithCredential:{name:"signInAndRetrieveDataWithCredential",a:[mk()]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[mk()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[V("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",
a:[V("email"),V("password")]},signInWithPhoneNumber:{name:"signInWithPhoneNumber",a:[V("phoneNumber"),ok()]},signInWithPopup:{name:"signInWithPopup",a:[nk()]},signInWithRedirect:{name:"signInWithRedirect",a:[nk()]},signOut:{name:"signOut",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[V("code")]}});
Y(S.prototype,{"delete":{name:"delete",a:[]},getIdToken:{name:"getIdToken",a:[gk()]},getToken:{name:"getToken",a:[gk()]},linkAndRetrieveDataWithCredential:{name:"linkAndRetrieveDataWithCredential",a:[mk()]},linkWithCredential:{name:"linkWithCredential",a:[mk()]},linkWithPhoneNumber:{name:"linkWithPhoneNumber",a:[V("phoneNumber"),ok()]},linkWithPopup:{name:"linkWithPopup",a:[nk()]},linkWithRedirect:{name:"linkWithRedirect",a:[nk()]},reauthenticateAndRetrieveDataWithCredential:{name:"reauthenticateAndRetrieveDataWithCredential",
a:[mk()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[mk()]},reauthenticateWithPhoneNumber:{name:"reauthenticateWithPhoneNumber",a:[V("phoneNumber"),ok()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",a:[nk()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[nk()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},unlink:{name:"unlink",a:[V("provider")]},updateEmail:{name:"updateEmail",
a:[V("email")]},updatePassword:{name:"updatePassword",a:[V("password")]},updatePhoneNumber:{name:"updatePhoneNumber",a:[mk("phone")]},updateProfile:{name:"updateProfile",a:[W("profile")]}});Y(A.prototype,{f:{name:"catch"},then:{name:"then"}});Y(hi.prototype,{confirm:{name:"confirm",a:[V("verificationCode")]}});Z(tg,"credential",function(a,b){return new qg(a,b)},[V("email"),V("password")]);Y(ig.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(ig,"credential",jg,[X(V(),W(),"token")]);Y(kg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(kg,"credential",lg,[X(V(),W(),"token")]);Y(mg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(mg,"credential",ng,[X(V(),X(W(),ik()),"idToken"),X(V(),ik(),"accessToken",!0)]);
Y(og.prototype,{setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(og,"credential",pg,[X(V(),W(),"token"),V("secret",!0)]);Y(P.prototype,{addScope:{name:"addScope",a:[V("scope")]},credential:{name:"credential",a:[X(V(),ik(),"idToken",!0),X(V(),ik(),"accessToken",!0)]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(yg,"credential",Ag,[V("verificationId"),V("verificationCode")]);
Y(yg.prototype,{verifyPhoneNumber:{name:"verifyPhoneNumber",a:[V("phoneNumber"),ok()]}});Y(N.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Dg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y($f.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Kh.prototype,{clear:{name:"clear",a:[]},render:{name:"render",a:[]},verify:{name:"verify",a:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:T,Error:N};Z(a,"EmailAuthProvider",tg,[]);Z(a,"FacebookAuthProvider",ig,[]);Z(a,"GithubAuthProvider",kg,[]);Z(a,"GoogleAuthProvider",mg,[]);Z(a,"TwitterAuthProvider",og,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",yg,[kk()]);Z(a,"RecaptchaVerifier",Kh,[X(V(),jk(),"recaptchaContainer"),W("recaptchaParameters",!0),lk()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new T(a);c({INTERNAL:{getUid:q(a.getUid,a),getToken:q(a.getIdToken,a),addAuthTokenListener:q(a.Ke,a),removeAuthTokenListener:q(a.Cf,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:S})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

/*! @license Firebase v4.1.2
Build: rev-4a4cc92
Terms: https://firebase.google.com/terms/

---

typedarray.js
Copyright (c) 2010, Linden Research, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

(function() {
            var firebase = __webpack_require__(40);
            var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function na(){this.Fd=void 0}
function oa(a,b,c){switch(typeof b){case "string":pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],oa(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),pa(f,c),
c.push(":"),oa(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var qa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ra=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function pa(a,b){b.push('"',a.replace(ra,function(a){if(a in qa)return qa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return qa[a]=e+b.toString(16)}),'"')};function sa(){this.Wa=-1};function ta(){this.Wa=-1;this.Wa=64;this.M=[];this.Wd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(ta,sa);ta.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
function ua(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],m=a.M[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+m&4294967295}
ta.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Wd,f=this.$b;d<b;){if(0==f)for(;d<=c;)ua(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){ua(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){ua(this,e);f=0;break}}this.$b=f;this.Pd+=b}};var r;a:{var va=aa.navigator;if(va){var wa=va.userAgent;if(wa){r=wa;break a}}r=""};var t=Array.prototype,xa=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Aa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ba=t.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;ya(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ca=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Da(a,b){var c=Ea(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ea(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Fa(a,b){var c=xa(a,b);0<=c&&t.splice.call(a,c,1)}function Ga(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Ha(a,b){a.sort(b||Ia)}function Ia(a,b){return a>b?1:a<b?-1:0};function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ja(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Ka(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function La(a){var b=0,c;for(c in a)b++;return b}function Ma(a){for(var b in a)return b}function Na(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Oa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Pa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Qa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ra(a,b){var c=Qa(a,b,void 0);return c&&a[c]}function Sa(a){for(var b in a)return!1;return!0}function Ta(a){var b={},c;for(c in a)b[c]=a[c];return b};var Ua=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),Va=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),Wa=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),Xa=-1!=r.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){if(!a)throw db(b);}function db(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function eb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function gb(a){var b=[];fb(a,function(a,d){ea(d)?ya(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var hb=firebase.Promise;function ib(){var a=this;this.reject=this.resolve=null;this.ra=new hb(function(b,c){a.resolve=b;a.reject=c})}function jb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(kb(a.ra),1===b.length?b(c):b(c,d))}}function kb(a){a.then(void 0,ba)};function lb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):ma(a)}function x(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];oa(new na,a,b);a=b.join("")}return a};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,cb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function A(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function B(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(A(a,b,d)+"must be a valid function.");}function ob(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(A(a,b,!0)+"must be a valid context object.");};function pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function C(a,b){this.name=a;this.R=b}function qb(a,b){return new C(a,b)};function rb(a,b){return sb(a.name,b.name)}function tb(a,b){return sb(a,b)};function ub(a){this.uc=a;this.Cd="firebase:"}g=ub.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,x(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:lb(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return eb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new ub(b)}}catch(c){}return new vb}var xb=wb("localStorage"),yb=wb("sessionStorage");function zb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.qg=d;this.gf=e||"";this.$a=xb.get("host:"+a)||this.host}function Ab(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&xb.set("host:"+a.host,a.$a))}
function Bb(a,b,c){D("string"===typeof b,"typeof type must == string");D("object"===typeof c,"typeof params must == object");if(b===Cb)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if(b===Db)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.pe);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Eb(a,b){return a&&"object"===typeof a?(D(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Fb(a,b){var c=new Gb;Hb(a,new E(""),function(a,e){Ib(c,a,Jb(e,b))});return c}function Jb(a,b){var c=a.C().H(),c=Eb(c,b),d;if(a.J()){var e=Eb(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new Kb(e,G(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new Kb(c)));a.O(H,function(a,c){var e=Jb(c,b);e!==c&&(d=d.T(a,e))});return d};var Lb=function(){var a=1;return function(){return a++}}(),D=cb,Mb=db;
function Nb(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ga(d,c,c+8192));b=a}return b}catch(l){I("base64Decode failed: ",
l)}return null}function Ob(a){var b=mb(a);a=new ta;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Wd[d]=c&255,c/=256;ua(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function Pb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Pb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+x(arguments[c]):b+arguments[c],b+=" ";return b}var Qb=null,Rb=!0;
function Sb(a,b){cb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Qb=q(console.log,console):"object"===typeof console.log&&(Qb=function(a){console.log(a)})),b&&yb.set("logging_enabled",!0)):ha(a)?Qb=a:(Qb=null,yb.remove("logging_enabled"))}function I(a){!0===Rb&&(Rb=!1,null===Qb&&!0===yb.get("logging_enabled")&&Sb(!0));if(Qb){var b=Pb.apply(null,arguments);Qb(b)}}
function Tb(a){return function(){I(a,arguments)}}function Ub(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Pb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Vb(a){var b=Pb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function J(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Pb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Wb(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Vb(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||Vb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new zb(b,d,c,"ws"===e||"wss"===e),path:new E(f)}}function Xb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Yb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Zb(a),d=Zb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function $b(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+x(b));}
function ac(a){if("object"!==typeof a||null===a)return x(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=x(b[d]),c+=":",c+=ac(a[b[d]]);return c+"}"}function bc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function cc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
function dc(a){D(!Xb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var ec=/^-?\d{1,10}$/;function Zb(a){return ec.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function fc(a){try{a()}catch(b){setTimeout(function(){J("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function gc(a,b,c){Object.defineProperty(a,b,{get:c})}function hc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function ic(a){var b={},c={},d={},e="";try{var f=a.split("."),b=lb(Nb(f[0])||""),c=lb(Nb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Je:c,data:d,mg:e}}function jc(a){a=ic(a);var b=a.Je;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function kc(a){a=ic(a).Je;return"object"===typeof a&&!0===w(a,"admin")};function lc(){}var mc={};function nc(a){return q(a.compare,a)}lc.prototype.nd=function(a,b){return 0!==this.compare(new C("[MIN_NAME]",a),new C("[MIN_NAME]",b))};lc.prototype.Hc=function(){return oc};function pc(a){D(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(pc,lc);g=pc.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?sb(a.name,b.name):c};
g.Ec=function(a,b){var c=G(a),c=L.F(this.bc,c);return new C(b,c)};g.Fc=function(){var a=L.F(this.bc,qc);return new C("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function rc(){}la(rc,lc);g=rc.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?sb(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",new Kb("[PRIORITY-POST]",qc))};
g.Ec=function(a,b){var c=G(a);return new C(b,new Kb("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var H=new rc;function sc(){}la(sc,lc);g=sc.prototype;g.compare=function(a,b){return sb(a.name,b.name)};g.xc=function(){throw Mb("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",L)};g.Ec=function(a){D(p(a),"KeyIndex indexValue must always be a string.");return new C(a,L)};g.toString=function(){return".key"};
var tc=new sc;function uc(){}la(uc,lc);g=uc.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?sb(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return oc};g.Fc=function(){return vc};g.Ec=function(a,b){var c=G(a);return new C(b,c)};g.toString=function(){return".value"};var wc=new uc;function xc(a,b){this.od=a;this.cc=b}xc.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===mc?null:b};function yc(a,b,c){var d=Ja(a.od,function(d,f){var h=w(a.cc,f);D(h,"Missing index implementation for "+f);if(d===mc){if(h.xc(b.R)){for(var k=[],m=c.Wb(qb),l=M(m);l;)l.name!=b.name&&k.push(l),l=M(m);k.push(b);return zc(k,nc(h))}return mc}h=c.get(b.name);k=d;h&&(k=k.remove(new C(b.name,h)));return k.Oa(b,b.R)});return new xc(d,a.cc)}
function Ac(a,b,c){var d=Ja(a.od,function(a){if(a===mc)return a;var d=c.get(b.name);return d?a.remove(new C(b.name,d)):a});return new xc(d,a.cc)}var Bc=new xc({".priority":mc},{".priority":H});function Kb(a,b){this.B=a;D(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||L;Cc(this.aa);this.Db=null}var Dc=["object","boolean","number","string"];g=Kb.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new Kb(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:L};g.P=function(a){return a.e()?this:".priority"===K(a)?this.aa:L};g.Da=function(){return!1};g.Ve=function(){return null};
g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:L.T(a,b).fa(this.aa)};g.F=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;D(".priority"!==c||1===Ec(a),".priority must be the last token in a path");return this.T(c,L.F(N(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Fc(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+dc(this.B):a+this.B;this.Db=Ob(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===L)return 1;if(a instanceof O)return-1;D(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=xa(Dc,b),e=xa(Dc,c);D(0<=d,"Unknown leaf type: "+b);D(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return x(this.H(!0))};function Gc(){this.set={}}g=Gc.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return eb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return Sa(this.set)};g.count=function(){return La(this.set)};function Hc(a,b){v(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Ic(a){D(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}Ic.prototype.Ge=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ie.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};Ic.prototype.gc=function(a,b,c){Jc(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({Ie:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
Ic.prototype.Ic=function(a,b,c){Jc(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ie===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Jc(a,b){D(Da(a.Bf,function(a){return a===b}),"Unknown event: "+b)};var Kc=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);D(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);D(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lc(){Ic.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!pb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ge("online",!1))},!1)}}la(Lc,Ic);Lc.prototype.Ue=function(a){D("online"===a,"Unknown event type: "+a);return[this.hc]};ca(Lc);function Mc(){Ic.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ge("visible",b))},!1)}}la(Mc,Ic);Mc.prototype.Ue=function(a){D("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(Mc);function E(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function P(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return P(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Nc(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=sb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ec(a){return a.o.length-a.Y}function N(a){var b=a.Y;b<a.o.length&&b++;return new E(a.o,b)}function Oc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=E.prototype;
g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new E(a,0)};
g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof E)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new E(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ec(this)!==Ec(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Y,c=a.Y;if(Ec(this)>Ec(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var Q=new E("");function Pc(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Qe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qc(this)}Pc.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qc(this)};Pc.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
function Qc(a){if(768<a.Ha)throw Error(a.Qe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Qe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Rc(a));}function Rc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Sc(){this.children={};this.bd=0;this.value=null}function Tc(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Sc}function Uc(a,b){for(var c=b instanceof E?b:new E(b),d=a,e;null!==(e=K(c));)d=new Tc(e,d,w(d.A.children,e)||new Sc),c=N(c);return d}g=Tc.prototype;g.Ca=function(){return this.A.value};function Vc(a,b){D("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Wc(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Wc(this)};
g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;v(this.A.children,function(c,d){a(new Tc(d,b,c))})};function Xc(a,b,c,d){c&&!d&&b(a);a.O(function(a){Xc(a,b,!0,d)});c&&d&&b(a)}function Yc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new E(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
function Wc(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=eb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Wc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Wc(b))}};function Zc(a,b){this.La=a;this.ba=b?b:$c}g=Zc.prototype;g.Oa=function(a,b){return new Zc(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new Zc(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function ad(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
g.Wb=function(a){return new bd(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new bd(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new bd(this.ba,a,this.La,!0,b)};g.We=function(a){return new bd(this.ba,null,this.La,!0,a)};function bd(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.le?a.right:a.left}
function M(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function cd(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function dd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:$c;this.right=null!=e?e:$c}g=dd.prototype;
g.X=function(a,b,c,d,e){return new dd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function ed(a){return a.left.e()?a:ed(a.left)}g.Gc=function(){return ed(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return gd(e)};function hd(a){if(a.left.e())return $c;a.left.ea()||a.left.left.ea()||(a=id(a));a=a.X(null,null,null,hd(a.left),null);return gd(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=id(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=jd(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=kd(c),c.left.left.ea()&&(c=jd(c),c=kd(c)));if(0===b(a,c.key)){if(c.right.e())return $c;d=ed(c.right);c=c.X(d.key,d.value,null,null,hd(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return gd(c)};g.ea=function(){return this.color};
function gd(a){a.right.ea()&&!a.left.ea()&&(a=ld(a));a.left.ea()&&a.left.left.ea()&&(a=jd(a));a.left.ea()&&a.right.ea()&&(a=kd(a));return a}function id(a){a=kd(a);a.right.left.ea()&&(a=a.X(null,null,null,null,jd(a.right)),a=ld(a),a=kd(a));return a}function ld(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function kd(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function md(){}g=md.prototype;g.X=function(){return this};g.Oa=function(a,b){return new dd(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var $c=new md;function O(a,b,c){this.k=a;(this.aa=b)&&Cc(this.aa);a.e()&&D(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=O.prototype;g.J=function(){return!1};g.C=function(){return this.aa||L};g.fa=function(a){return this.k.e()?this:new O(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?L:a};g.P=function(a){var b=K(a);return null===b?this:this.Q(b).P(N(a))};g.Da=function(a){return null!==this.k.get(a)};
g.T=function(a,b){D(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new C(a,b),d,e;b.e()?(d=this.k.remove(a),c=Ac(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=yc(this.yb,c,this.k));e=d.e()?L:this.aa;return new O(d,e,c)};g.F=function(a,b){var c=K(a);if(null===c)return b;D(".priority"!==K(a)||1===Ec(a),".priority must be the last token in a path");var d=this.Q(c).F(N(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
var nd=/^(0|[1-9]\d*)$/;g=O.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(H,function(f,h){b[f]=h.H(a);c++;e&&nd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Fc(this.C().H())+":");this.O(H,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":Ob(a)}return this.Db};
g.Ve=function(a,b,c){return(c=od(this,c))?(a=ad(c,new C(a,b)))?a.name:null:ad(this.k,a)};function pd(a,b){var c;c=(c=od(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new C(c,a.k.get(c)):null}function qd(a,b){var c;c=(c=od(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new C(c,a.k.get(c)):null}g.O=function(a,b){var c=od(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
g.Xb=function(a,b){var c=od(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,qb),d=cd(c);null!=d&&0>b.compare(d,a);)M(c),d=cd(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=od(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,qb),d=cd(c);null!=d&&0<b.compare(d,a);)M(c),d=cd(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===qc?-1:0};
g.nb=function(a){if(a===tc||Pa(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;D(a!==tc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(qb),f=M(c);f;)e=e||a.xc(f.R),d.push(f),f=M(c);d=e?zc(d,nc(a)):mc;e=a.toString();c=Ta(b.cc);c[e]=a;a=Ta(b.od);a[e]=d;return new O(this.k,this.aa,new xc(a,c))};g.yc=function(a){return a===tc||Pa(this.yb.cc,a.toString())};
g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(H);a=a.Wb(H);for(var c=M(b),d=M(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=M(b);d=M(a)}return null===c&&null===d}return!1};function od(a,b){return b===tc?null:a.yb.get(b.toString())}g.toString=function(){return x(this.H(!0))};function G(a,b){if(null===a)return L;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);D(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Kb(a,G(c));if(a instanceof Array){var d=L,e=a;v(e,function(a,b){if(eb(e,b)&&"."!==b.substring(0,1)){var c=G(a);if(c.J()||!c.e())d=
d.T(b,c)}});return d.fa(G(c))}var f=[],h=!1,k=a;fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=G(k[a]);b.e()||(h=h||!b.C().e(),f.push(new C(a,b)))}});if(0==f.length)return L;var m=zc(f,rb,function(a){return a.name},tb);if(h){var l=zc(f,nc(H));return new O(m,G(c),new xc({".priority":l},{".priority":H}))}return new O(m,G(c),Bc)}var rd=Math.log(2);
function sd(a){this.count=parseInt(Math.log(a+1)/rd,10);this.Oe=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function td(a){var b=!(a.Cf&1<<a.Oe);a.Oe--;return b}
function zc(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new dd(u,l.R,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new dd(u,l.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new dd(F,k.R,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var F=td(b),fd=Math.pow(2,b.count-(z+1));F?d(fd,!1):(d(fd,!1),d(fd,!0))}return l}(new sd(a.length));
return null!==f?new Zc(d||b,f):new Zc(d||b)}function Fc(a){return"number"===typeof a?"number:"+dc(a):"string:"+a}function Cc(a){if(a.J()){var b=a.H();D("string"===typeof b||"number"===typeof b||"object"===typeof b&&eb(b,".sv"),"Priority must be a string or number.")}else D(a===qc||a.e(),"priority of unexpected type.");D(a===qc||a.C().e(),"Priority nodes can't have a priority of their own.")}var L=new O(new Zc(tb),null,Bc);function ud(){O.call(this,new Zc(tb),L,Bc)}la(ud,O);g=ud.prototype;
g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return L};g.e=function(){return!1};var qc=new ud,oc=new C("[MIN_NAME]",L),vc=new C("[MAX_NAME]",qc);function vd(a,b){this.value=a;this.children=b||wd}var wd=new Zc(function(a,b){return a===b?0:a<b?-1:1});function xd(a){var b=R;v(a,function(a,d){b=b.set(new E(d),a)});return b}g=vd.prototype;g.e=function(){return null===this.value&&this.children.e()};function yd(a,b,c){if(null!=a.value&&c(a.value))return{path:Q,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=yd(a,N(b),c),null!=b?{path:(new E(d)).n(b.path),value:b.value}:null):null}
function zd(a,b){return yd(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):R};g.set=function(a,b){if(a.e())return new vd(b,this.children);var c=K(a),d=(this.children.get(c)||R).set(N(a),b),c=this.children.Oa(c,d);return new vd(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?R:new vd(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?R:new vd(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
function Ad(a,b,c){if(b.e())return c;var d=K(b);b=Ad(a.children.get(d)||R,N(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new vd(a.value,d)}function Bd(a,b){return Cd(a,Q,b)}function Cd(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Cd(f,b.n(a),c)});return c(b,a.value,d)}function Dd(a,b,c){return Ed(a,b,Q,c)}function Ed(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?Ed(a,N(b),c.n(e),d):null}
function Fd(a,b,c){Gd(a,b,Q,c)}function Gd(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Gd(a,N(b),c.n(e),d):R}function Hd(a,b){Id(a,Q,b)}function Id(a,b,c){a.children.ha(function(a,e){Id(e,b.n(a),c)});a.value&&c(b,a.value)}function Jd(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var R=new vd(null);vd.prototype.toString=function(){var a={};Hd(this,function(b,c){a[b.toString()]=c.toString()});return x(a)};var Kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ld=/[\[\].#$\u0000-\u001F\u007F]/;function Md(a){return p(a)&&0!==a.length&&!Kd.test(a)}function Nd(a){return null===a||p(a)||ga(a)&&!Xb(a)||ia(a)&&eb(a,".sv")}function Od(a,b,c,d){d&&!n(b)||Pd(A(a,1,d),b,c)}
function Pd(a,b,c){c instanceof E&&(c=new Pc(c,a));if(!n(b))throw Error(a+"contains undefined "+Rc(c));if(ha(b))throw Error(a+"contains a function "+Rc(c)+" with contents: "+b.toString());if(Xb(b))throw Error(a+"contains "+b.toString()+" "+Rc(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Rc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;fb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Md(b)))throw Error(a+" contains an invalid key ("+b+") "+Rc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Pd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Rc(c)+" in addition to actual children.");}}
function Qd(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Md(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Nc);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function Rd(a,b,c){var d=A(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];fb(b,function(a,b){var k=new E(a);Pd(d,b,c.n(k));if(".priority"===Oc(k)&&!Nd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Qd(d,e)}
function Sd(a,b,c){if(Xb(c))throw Error(A(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nd(c))throw Error(A(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Td(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(A(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ud(a,b){if(n(b)&&!Md(b))throw Error(A(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Vd(a,b){if(!p(b)||0===b.length||Ld.test(b))throw Error(A(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Wd(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}
function Xd(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!Md(b.jc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!Ld.test(c)));if(d)throw Error(A(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function Gb(){this.k=this.B=null}Gb.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=K(a);a=N(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Ib(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Gc);var d=K(b);a.k.contains(d)||a.k.add(d,new Gb);a=a.k.get(d);b=N(b);Ib(a,b,c)}}
function Yd(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(H,function(b,c){Ib(a,new E(b),c)});return Yd(a,b)}return null!==a.k?(c=K(b),b=N(b),a.k.contains(c)&&Yd(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Hb(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new E(b.toString()+"/"+a);Hb(e,f,c)})}Gb.prototype.O=function(a){null!==this.k&&Hc(this.k,function(b,c){a(b,c)})};function Zd(a,b){this.type=$d;this.source=a;this.path=b}Zd.prototype.Mc=function(){return this.path.e()?new Zd(this.source,Q):new Zd(this.source,N(this.path))};Zd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ae(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}ae.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new E(a)),a.e()?null:a.value?new ce(this.source,Q,a.value):new ae(this.source,Q,a);D(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ae(this.source,N(this.path),this.children)};ae.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function de(a,b,c){this.type=ee;this.source=fe;this.path=a;this.Ob=b;this.Id=c}de.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return D(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new E(a));return new de(Q,a,this.Id)}D(K(this.path)===a,"operationForChild called for unrelated child.");return new de(N(this.path),this.Ob,this.Id)};
de.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};function ce(a,b,c){this.type=ge;this.source=a;this.path=b;this.Ga=c}ce.prototype.Mc=function(a){return this.path.e()?new ce(this.source,Q,this.Ga.Q(a)):new ce(this.source,N(this.path),this.Ga)};ce.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};var ge=0,be=1,ee=2,$d=3;function he(a,b,c,d){this.ee=a;this.Se=b;this.Hb=c;this.Ee=d;D(!d||b,"Tagged queries must be from server.")}var fe=new he(!0,!1,null,!1),ie=new he(!1,!0,null,!1);he.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Hb+")":"server"};function je(a,b,c){this.A=a;this.da=b;this.Sb=c}function ke(a){return a.da}function le(a){return a.Sb}function me(a,b){return b.e()?a.da&&!a.Sb:ne(a,K(b))}function ne(a,b){return a.da&&!a.Sb||a.A.Da(b)}je.prototype.j=function(){return this.A};function oe(a,b){this.N=a;this.Ld=b}function pe(a,b,c,d){return new oe(new je(b,c,d),a.Ld)}function qe(a){return a.N.da?a.N.j():null}oe.prototype.w=function(){return this.Ld};function re(a){return a.Ld.da?a.Ld.j():null};function se(){}se.prototype.Te=function(){return null};se.prototype.fe=function(){return null};var te=new se;function ue(a,b,c){this.xf=a;this.Ka=b;this.yd=c}ue.prototype.Te=function(a){var b=this.Ka.N;if(ne(b,a))return b.j().Q(a);b=null!=this.yd?new je(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};ue.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:re(this.Ka);a=this.xf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function ve(a,b){this.Sd=a;this.Df=b}function we(a){this.U=a}
we.prototype.eb=function(a,b,c,d){var e=new xe,f;if(b.type===ge)b.source.ee?c=ye(this,a,b.path,b.Ga,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w())&&!b.path.e(),c=ze(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===be)b.source.ee?c=Ae(this,a,b.path,b.children,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w()),c=Be(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new ue(c,a,d);d=a.N.j();if(b.e()||".priority"===K(b))ke(a.w())?
b=c.Aa(re(a)):(b=a.w().j(),D(b instanceof O,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=K(b),k=c.qc(h,a.w());null==k&&ne(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,N(b),f,e):a.N.j().Da(h)?this.U.F(d,h,L,N(b),f,e):d;b.e()&&ke(a.w())&&(d=c.Aa(re(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=ke(a.w())||null!=c.lc(Q);c=pe(a,b,d,this.U.Na())}else c=Ce(this,a,b.path,b.Ob,c,d,e);else if(b.type===$d)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=De(this,new oe(a.N,new je(f,
h,b.Sb)),d,c,te,e);else throw Mb("Unknown operation type: "+b.type);e=Na(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=qe(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(Ee(qe(d))));return new ve(c,e)};
function De(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())D(ke(b.w()),"If change path is empty, we must have complete server data"),le(b.w())?(e=re(b),d=d.rc(e instanceof O?e:L)):d=d.Aa(re(b)),f=a.U.ya(b.N.j(),d,f);else{var m=K(c);if(".priority"==m)D(1==Ec(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var l=N(c);ne(h,m)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(m).F(l,d):h.j().Q(m)):d=d.qc(m,
b.w());f=null!=d?a.U.F(h.j(),m,d,l,e,f):h.j()}}return pe(b,f,h.da||c.e(),a.U.Na())}function ze(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(m.j(),d,null);else if(h.Na()&&!m.Sb)d=m.j().F(c,d),d=h.ya(m.j(),d,null);else{var l=K(c);if(!me(m,c)&&1<Ec(c))return b;var u=N(c);d=m.j().Q(l).F(u,d);d=".priority"==l?h.fa(m.j(),d):h.F(m.j(),l,d,u,te,null)}m=m.da||c.e();b=new oe(b.N,new je(d,m,h.Na()));return De(a,b,c,e,new ue(e,b,f),k)}
function ye(a,b,c,d,e,f,h){var k=b.N;e=new ue(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=pe(b,h,!0,a.U.Na());else if(f=K(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=pe(b,h,k.da,k.Sb);else{c=N(c);var m=k.j().Q(f);if(!c.e()){var l=e.Te(f);d=null!=l?".priority"===Oc(c)&&l.P(c.parent()).e()?l:l.F(c,d):L}m.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=pe(b,h,k.da,a.U.Na()))}return a}
function Ae(a,b,c,d,e,f,h){var k=b;Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))&&(k=ye(a,k,u,l,e,f,h))});Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))||(k=ye(a,k,u,l,e,f,h))});return k}function Fe(a,b){Hd(b,function(b,d){a=a.F(b,d)});return a}
function Be(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!ke(b.w()))return b;var m=b;c=c.e()?d:Ad(R,c,d);var l=b.w().j();c.children.ha(function(c,d){if(l.Da(c)){var F=b.w().j().Q(c),F=Fe(F,d);m=ze(a,m,new E(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!ne(b.w(),c)&&null==d.value;l.Da(c)||F||(F=b.w().j().Q(c),F=Fe(F,d),m=ze(a,m,new E(c),F,e,f,h,k))});return m}
function Ce(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=le(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.da||me(m,c))return ze(a,b,c,m.j().P(c),e,f,k,h);if(c.e()){var l=R;m.j().O(tc,function(a,b){l=l.set(new E(a),b)});return Be(a,b,c,l,e,f,k,h)}return b}l=R;Hd(d,function(a){var b=c.n(a);me(m,b)&&(l=l.set(a,m.j().P(b)))});return Be(a,b,c,l,e,f,k,h)};function Ge(a){this.V=a;this.g=a.m.g}function He(a,b,c,d){var e=[],f=[];ya(b,function(b){b.type===Ie&&a.g.nd(b.qe,b.Ja)&&f.push(new S(Je,b.Ja,b.Xa))});Ke(a,e,Le,b,d,c);Ke(a,e,Me,b,d,c);Ke(a,e,Je,f,d,c);Ke(a,e,Ie,b,d,c);Ke(a,e,Ne,b,d,c);return e}function Ke(a,b,c,d,e,f){d=za(d,function(a){return a.type===c});Ha(d,q(a.Ff,a));ya(d,function(c){var d=Oe(a,c,f);ya(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function Oe(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}Ge.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw Mb("Should only compare child_ events.");return this.g.compare(new C(a.Xa,a.Ja),new C(b.Xa,b.Ja))};function Pe(a,b){this.V=a;var c=a.m,d=new Qe(c.g),c=T(c)?new Qe(c.g):c.xa?new Re(c):new Se(c);this.hf=new we(c);var e=b.w(),f=b.N,h=d.ya(L,e.j(),null),k=c.ya(L,f.j(),null);this.Ka=new oe(new je(k,f.da,c.Na()),new je(h,e.da,d.Na()));this.Za=[];this.Jf=new Ge(a)}function Te(a){return a.V}g=Pe.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=re(this.Ka);return b&&(T(this.V.m)||!a.e()&&!b.Q(K(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
g.kb=function(a,b){var c=[];if(b){D(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;ya(this.Za,function(a){(a=a.Me(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
g.eb=function(a,b,c){a.type===be&&null!==a.source.Hb&&(D(re(this.Ka),"We should always have a full cache before handling merges"),D(qe(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;D(c.N.j().yc(b.U.g),"Event snap not indexed");D(c.w().j().yc(b.U.g),"Server snap not indexed");D(ke(a.Sd.w())||!ke(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Ue(this,a.Df,a.Sd.N.j(),null)};
function Ve(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(H,function(a,b){d.push(new S(Me,b,a))});c.da&&d.push(Ee(c.j()));return Ue(a,d,c.j(),b)}function Ue(a,b,c,d){return He(a.Jf,b,c,d?[d]:a.Za)};function We(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.hd=a}We.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};We.prototype.ge=function(){return this.hd};We.prototype.Tb=function(){return this.ae.Tb(this)};We.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+x(this.Md.be())};function Xe(a,b,c){this.ae=a;this.error=b;this.path=c}Xe.prototype.Yb=function(){return this.path};Xe.prototype.ge=function(){return"cancel"};
Xe.prototype.Tb=function(){return this.ae.Tb(this)};Xe.prototype.toString=function(){return this.path.toString()+":cancel"};function Ye(){this.vb=[]}function Ze(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new $e(f));c.add(e)}c&&a.vb.push(c)}function af(a,b,c){Ze(a,c);bf(a,function(a){return a.Z(b)})}function cf(a,b,c){Ze(a,c);bf(a,function(a){return a.contains(b)||b.contains(a)})}
function bf(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Qb&&I("event: "+h.toString());fc(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function $e(a){this.qa=a;this.jd=[]}$e.prototype.add=function(a){this.jd.push(a)};$e.prototype.Yb=function(){return this.qa};function Qe(a){this.g=a}g=Qe.prototype;g.F=function(a,b,c,d,e,f){D(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?df(f,new S(Le,e,b)):D(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?df(f,new S(Me,c,b)):df(f,new S(Ie,c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
g.ya=function(a,b,c){null!=c&&(a.J()||a.O(H,function(a,e){b.Da(a)||df(c,new S(Le,e,a))}),b.J()||b.O(H,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||df(c,new S(Ie,e,b,f))}else df(c,new S(Me,e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?L:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Se(a){this.he=new Qe(a.g);this.g=a.g;var b;a.ka?(b=ef(a),b=a.g.Ec(ff(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=gf(a),a=a.g.Ec(hf(a),b)):a=a.g.Fc();this.vc=a}g=Se.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new C(b,c))||(c=L);return this.he.F(a,b,c,d,e,f)};
g.ya=function(a,b,c){b.J()&&(b=L);var d=b.nb(this.g),d=d.fa(L),e=this;b.O(H,function(a,b){e.matches(new C(a,b))||(d=d.T(a,L))});return this.he.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.he};function Re(a){this.sa=new Se(a);this.g=a.g;D(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!jf(a)}g=Re.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new C(b,c))||(c=L);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):kf(this,a,b,c,e,f)};
g.ya=function(a,b,c){var d;if(b.J()||b.e())d=L.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=L.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=M(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(L);var k,m,l;if(this.Ib){b=d.We(this.g);k=this.sa.vc;m=this.sa.Uc;var u=nc(this.g);l=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
m=this.sa.vc,l=nc(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=M(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.T(f.name,L)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
function kf(a,b,c,d,e,f){var h;if(a.Ib){var k=nc(a.g);h=function(a,b){return k(b,a)}}else h=nc(a.g);D(b.Eb()==a.oa,"");var m=new C(c,d),l=a.Ib?pd(b,a.g):qd(b,a.g),u=a.sa.matches(m);if(b.Da(c)){for(var z=b.Q(c),l=e.fe(a.g,l,a.Ib);null!=l&&(l.name==c||b.Da(l.name));)l=e.fe(a.g,l,a.Ib);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&df(f,new S(Ie,d,c,z)),b.T(c,d);null!=f&&df(f,new S(Le,z,c));b=b.T(c,L);return null!=l&&a.sa.matches(l)?(null!=f&&df(f,new S(Me,l.R,l.name)),b.T(l.name,l.R)):b}return d.e()?
b:u&&0<=h(l,m)?(null!=f&&(df(f,new S(Le,l.R,l.name)),df(f,new S(Me,d,c))),b.T(c,d).T(l.name,L)):b};function S(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.qe=d;this.Dd=void 0}function Ee(a){return new S(Ne,a)}var Me="child_added",Le="child_removed",Ie="child_changed",Je="child_moved",Ne="value";function xe(){this.fb={}}
function df(a,b){var c=b.type,d=b.Xa;D(c==Me||c==Ie||c==Le,"Only child changes supported for tracking");D(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if(c==Me&&f==Le)a.fb[d]=new S(Ie,b.Ja,d,e.Ja);else if(c==Le&&f==Me)delete a.fb[d];else if(c==Le&&f==Ie)a.fb[d]=new S(Le,e.qe,d);else if(c==Ie&&f==Me)a.fb[d]=new S(Me,b.Ja,d);else if(c==Ie&&f==Ie)a.fb[d]=new S(Ie,b.Ja,d,e.qe);else throw Mb("Illegal combination of changes: "+b+" occurred after "+
e);}else a.fb[d]=b};function lf(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=H}var mf=new lf;function jf(a){return""===a.mb?a.ka:"l"===a.mb}function ff(a){D(a.ka,"Only valid if start has been set");return a.dc}function ef(a){D(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function hf(a){D(a.na,"Only valid if end has been set");return a.ac}
function gf(a){D(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function nf(a){var b=new lf;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=lf.prototype;g.ne=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.oe=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=nf(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
g.gd=function(a,b){var c=nf(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function of(a,b){var c=nf(a);c.g=b;return c}function pf(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=jf(a)?"l":"r");b.vf=c}a.g!==H&&(b.i=a.g.toString());return b}function T(a){return!(a.ka||a.na||a.xa)}function qf(a){return T(a)&&a.g==H}
function rf(a){var b={};if(qf(a))return b;var c;a.g===H?c="$priority":a.g===wc?c="$value":a.g===tc?c="$key":(D(a.g instanceof pc,"Unrecognized index type!"),c=a.g.toString());b.orderBy=x(c);a.ka&&(b.startAt=x(a.dc),a.Kb&&(b.startAt+=","+x(a.zb)));a.na&&(b.endAt=x(a.ac),a.Rb&&(b.endAt+=","+x(a.xb)));a.xa&&(jf(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return x(pf(this))};function sf(a){this.W=a}var tf=new sf(new vd(null));function uf(a,b,c){if(b.e())return new sf(new vd(c));var d=zd(a.W,b);if(null!=d){var e=d.path,d=d.value;b=P(e,b);d=d.F(b,c);return new sf(a.W.set(e,d))}a=Ad(a.W,b,new vd(c));return new sf(a)}function vf(a,b,c){var d=a;fb(c,function(a,c){d=uf(d,b.n(a),c)});return d}sf.prototype.Ed=function(a){if(a.e())return tf;a=Ad(this.W,a,R);return new sf(a)};function wf(a,b){var c=zd(a.W,b);return null!=c?a.W.get(c.path).P(P(c.path,b)):null}
function xf(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(H,function(a,c){b.push(new C(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new C(a,c.value))});return b}function yf(a,b){if(b.e())return a;var c=wf(a,b);return null!=c?new sf(new vd(c)):new sf(a.W.subtree(b))}sf.prototype.e=function(){return this.W.e()};sf.prototype.apply=function(a){return zf(Q,this.W,a)};
function zf(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(D(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=zf(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function Af(){this.Jd=L}Af.prototype.j=function(a){return this.Jd.P(a)};Af.prototype.toString=function(){return this.Jd.toString()};function Bf(a){this.oc=a}Bf.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Cf(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Df(){this.S=tf;this.la=[];this.Bc=-1}function Ef(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Df.prototype;
g.Ed=function(a){var b=Ea(this.la,function(b){return b.Zc===a});D(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Ff(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Gf(this.la,Hf,Q),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;v(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
g.Aa=function(a,b,c,d){if(c||d){var e=yf(this.S,a);return!d&&e.e()?b:d||null!=b||null!=wf(e,Q)?(e=Gf(this.la,function(b){return(b.visible||d)&&(!c||!(0<=xa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||L,e.apply(b)):null}e=wf(this.S,a);if(null!=e)return e;e=yf(this.S,a);return e.e()?b:null!=b||null!=wf(e,Q)?(b=b||L,e.apply(b)):null};
g.rc=function(a,b){var c=L,d=wf(this.S,a);if(d)d.J()||d.O(H,function(a,b){c=c.T(a,b)});else if(b){var e=yf(this.S,a);b.O(H,function(a,b){var d=yf(e,new E(a)).apply(b);c=c.T(a,d)});ya(xf(e),function(a){c=c.T(a.name,a.R)})}else e=yf(this.S,a),ya(xf(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){D(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=wf(this.S,a))return null;a=yf(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
g.qc=function(a,b,c){a=a.n(b);var d=wf(this.S,a);return null!=d?d:ne(c,b)?yf(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return wf(this.S,a)};g.Xd=function(a,b,c,d,e,f){var h;a=yf(this.S,a);h=wf(a,Q);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=nc(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=M(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=M(e);return b};
function Ff(a,b){return a.Ga?a.path.contains(b):!!Qa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Hf(a){return a.visible}
function Gf(a,b,c){for(var d=tf,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=P(c,h),d=uf(d,h,f.Ga)):h.contains(c)&&(h=P(h,c),d=uf(d,Q,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=P(c,h),d=vf(d,h,f.children);else{if(h.contains(c))if(h=P(h,c),h.e())d=vf(d,Q,f.children);else if(f=w(f.children,K(h)))f=f.P(N(h)),d=uf(d,Q,f)}else throw Mb("WriteRecord should have .snap or .children");}}return d}function If(a,b){this.Lb=a;this.W=b}g=If.prototype;
g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Xd=function(a,b,c,d,e){return this.W.Xd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new If(this.Lb.n(a),this.W)};function Jf(a,b){this.rf={};this.Vc=new Kf(a);this.va=b;var c=1E4+2E4*Math.random();hc(q(this.lf,this),Math.floor(c))}Jf.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&eb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);hc(q(this.lf,this),Math.floor(6E5*Math.random()))};function Lf(){this.tc={}}function Mf(a,b,c){n(c)||(c=1);eb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Lf.prototype.get=function(){return Ta(this.tc)};function Kf(a){this.Ef=a;this.rd=null}Kf.prototype.get=function(){var a=this.Ef.get(),b=Ta(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var Nf={},Of={};function Pf(a){a=a.toString();Nf[a]||(Nf[a]=new Lf);return Nf[a]}function Qf(a,b){var c=a.toString();Of[c]||(Of[c]=b());return Of[c]};function Rf(a,b,c){this.f=Tb("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Sf(a,b){if(n(b))return"tag$"+b;D(qf(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Rf.prototype;
g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Sf(a,c),h={};this.$[f]=h;a=rf(a.m);var k=this;Tf(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Sf(a,b);delete this.$[c]};g.kf=function(){};g.re=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.ye=function(){};
function Tf(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+gb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=lb(h.responseText)}catch(c){J("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&J("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Uf(a){this.te=a;this.Bd=[];this.Qb=0;this.Yd=-1;this.Fb=null}function Vf(a,b,c){a.Yd=b;a.Fb=c;a.Yd<a.Qb&&(a.Fb(),a.Fb=null)}function Wf(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;fc(function(){f.te(d[e])})}if(a.Qb===a.Yd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};var Cb="websocket",Db="long_polling";var Xf=null;"undefined"!==typeof MozWebSocket?Xf=MozWebSocket:"undefined"!==typeof WebSocket&&(Xf=WebSocket);function Yf(a,b,c,d){this.Zd=a;this.f=Tb(this.Zd);this.frames=this.zc=null;this.pb=this.qb=this.Fe=0;this.Va=Pf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ke=Bb(b,Cb,a)}var Zf;
Yf.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Ke);this.wc=!1;xb.set("previous_websocket_failure",!0);try{this.Ia=new Xf(this.Ke)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
a.length,Mf(e.Va,"bytes_received",a.length),$f(e),null!==e.frames)ag(e,a);else{a:{D(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&ag(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};Yf.prototype.start=function(){};
Yf.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Xf&&!Zf};Yf.responsesRequiredToBeHealthy=2;Yf.healthyTimeout=3E4;g=Yf.prototype;g.sd=function(){xb.remove("previous_websocket_failure")};function ag(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=lb(c);a.Xf(c)}}
g.send=function(a){$f(this);a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=bc(a,16384);1<a.length&&bg(this,String(a.length));for(var b=0;b<a.length;b++)bg(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
function $f(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&bg(a,"0");$f(a)},Math.floor(45E3))}function bg(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function cg(a,b,c,d){this.Zd=a;this.f=Tb(a);this.jc=b;this.pb=this.qb=0;this.Va=Pf(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Bb(b,Db,a)}}var dg,eg;
cg.prototype.open=function(a,b){this.Ne=0;this.ia=b;this.bf=new Uf(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Yb(function(){if(!c.Ab){c.Ta=new fg(function(a,b,d,k,m){gg(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,Vf(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){gg(c,arguments);
Wf(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);hg(c.Ta,a,function(){})}})};
cg.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;ig(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
cg.isAvailable=function(){return dg||!eg&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=cg.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=bc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Ne,pg:a.length,Pe:a[b]});c.Ud&&ig(c);this.Ne++}};function gg(a,b){var c=x(b).length;a.pb+=c;Mf(a.Va,"bytes_received",c)}
function fg(a,b,c,d){this.Yc=d;this.ib=c;this.ve=new Gc;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Lb();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
fg.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function ig(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Pe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Pe;d++}else break;jg(a,b+c,a.$d);return!0}return!1}function jg(a,b,c){function d(){a.ve.remove(c);ig(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));hg(a,b,function(){clearTimeout(e);d()})}
function hg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function kg(a){lg(this,a)}var mg=[cg,Yf];function lg(a,b){var c=Yf&&Yf.isAvailable(),d=c&&!(xb.Ze||!0===xb.get("previous_websocket_failure"));b.qg&&(c||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[Yf];else{var e=a.Wc=[];cc(mg,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ng(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function og(a,b,c,d,e,f,h){this.id=a;this.f=Tb("c:"+this.id+":");this.te=c;this.Lc=d;this.ia=e;this.se=f;this.L=b;this.Ad=[];this.Le=0;this.sf=new kg(b);this.Ua=0;this.Cb=h;this.f("Connection created");pg(this)}
function pg(a){var b=ng(a.sf);a.I=new b("c:"+a.id+":"+a.Le++,a.L,void 0,a.Cb);a.xe=b.responsesRequiredToBeHealthy||0;var c=qg(a,a.I),d=rg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=hc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function rg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(xb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function qg(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=$b("t",c);c=$b("d",c);if("c"==d){if(d=$b("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ab(a.L,f);0==a.Ua&&(a.I.start(),sg(a,a.I,d),"5"!==e&&J("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&tg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];ug(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.se&&(a.se(c),a.se=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ab(a.L,c),1===a.Ua?a.close():(vg(a),pg(a))):"e"===d?Ub("Server Error: "+c):"o"===d?(a.f("got pong on primary."),wg(a),xg(a)):Ub("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=$b("t",c),c=$b("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?yg(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.pf--,yg(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}og.prototype.ua=function(a){zg(this,{t:"d",d:a})};function ug(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
function yg(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,ug(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}og.prototype.wd=function(a){wg(this);this.te(a)};function wg(a){a.Bb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
function tg(a,b){a.D=new b("c:"+a.id+":"+a.Le++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(qg(a,a.D),rg(a,a.D));hc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function sg(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Bb=!0):hc(function(){xg(a)},Math.floor(5E3))}
function xg(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),zg(a,{t:"c",d:{t:"p",d:{}}}))}function zg(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}og.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,vg(this),this.ia&&(this.ia(),this.ia=null))};function vg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Ag(a,b,c,d,e,f){this.id=Bg++;this.f=Tb("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.ue=d;this.L=a;this.ob=this.Fa=this.Cb=this.ze=null;this.$c=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Vd=f;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.me=null;Cg(this,0);Mc.Vb().gc("visible",this.Zf,this);-1===a.host.indexOf("fblocal")&&
Lc.Vb().gc("online",this.Yf,this)}var Bg=0,Dg=0;g=Ag.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(x(a));D(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};D(qf(a.m)||!T(a.m),"listen() called for non-default but complete query");D(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Eg(this,a)};
function Eg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=pf(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&eb(k,"w")){var l=w(k,"w");ea(l)&&0<=xa(l,"no_index")&&J("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Fg(a,d,e),b.G&&b.G(m,
k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Gg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||kc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Gg(a){if(a.ma&&a.ob){var b=a.ob,c=jc(b)?"auth":"gauth",d={cred:b};null===a.Vd?d.noauth=!0:"object"===typeof a.Vd&&(d.authvar=a.Vd);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ke=0:Hg(a,d,c))})}}
g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);D(qf(a.m)||!T(a.m),"unlisten() called for non-default but complete query");if(Fg(this,c,d)&&this.ma){var e=pf(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.re=function(a,b,c){this.ma?Ig(this,"o",a,b,c):this.Kc.push({we:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Ig(this,"om",a,b,c):this.Kc.push({we:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?Ig(this,"oc",a,null,b):this.Kc.push({we:a,action:"oc",data:null,G:b})};function Ig(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Jg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Jg(this,"m",a,b,c,d)};function Jg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Kg(a,b):a.f("Buffering put: "+c)}
function Kg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+x(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?Lg(this,a.p,a.q):"ac"===b?Hg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Ub("Unrecognized action received from server: "+
x(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Mg(this);this.Re=!1;this.Jc(!0)};
function Cg(a,b){D(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;Ng(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Cg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Cg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};Og(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Cg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
function Ng(a){if(Og(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Dg++,f=a.Cb,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Fa={close:m,ua:function(a){D(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.$c.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new og(e,a.L,b,c,d,function(b){J(b+
" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.ab=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];Sa(this.qd)&&(this.Sa=1E3,this.Fa||Cg(this,0))};
function Lg(a,b,c){c=c?Aa(c,function(a){return ac(a)}).join("$"):"default";(a=Fg(a,b,c))&&a.G&&a.G("permission_denied")}function Fg(a,b,c){b=(new E(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===La(a.$[b])&&delete a.$[b]):d=void 0;return d}
function Hg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.ob=null;a.de=!0;a.Fa.close();if("invalid_token"===b||"permission_denied"===b)a.ke++,3<=a.ke&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in
a.oc.options?b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(b))}
function Mg(a){Gg(a);v(a.$,function(b){v(b,function(b){Eg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Kg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Ig(a,b.action,b.we,b.data,b.G)}function Og(a){var b;b=Lc.Vb().hc;return Sa(a.qd)&&b};function Pg(a){a instanceof Qg||Vb("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,Q);this.INTERNAL=new Rg(this)}var Sg={TIMESTAMP:{".sv":"timestamp"}};g=Pg.prototype;g.app=null;g.jf=function(a){Tg(this,"ref");y("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
g.gg=function(a){Tg(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=Wb(a);Xd("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Vb("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function Tg(a,b){null===a.ta&&Vb("Cannot call "+b+" on a deleted database.")}g.Pf=function(){y("database.goOffline",0,0,arguments.length);Tg(this,"goOffline");this.ta.ab()};
g.Qf=function(){y("database.goOnline",0,0,arguments.length);Tg(this,"goOnline");this.ta.kc()};Object.defineProperty(Pg.prototype,"app",{get:function(){return this.ta.app}});function Rg(a){this.Ya=a}Rg.prototype.delete=function(){Tg(this.Ya,"delete");var a=Ug.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Vb("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
Pg.prototype.ref=Pg.prototype.jf;Pg.prototype.refFromURL=Pg.prototype.gg;Pg.prototype.goOnline=Pg.prototype.Qf;Pg.prototype.goOffline=Pg.prototype.Pf;Rg.prototype["delete"]=Rg.prototype.delete;function V(a,b,c){this.A=a;this.V=b;this.g=c}V.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.be=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.be;V.prototype.toJSON=function(){y("Firebase.DataSnapshot.toJSON",0,1,arguments.length);return this.be()};V.prototype.toJSON=V.prototype.toJSON;
V.prototype.Lf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Lf;V.prototype.n=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Vd("Firebase.DataSnapshot.child",a);var b=new E(a),c=this.V.n(b);return new V(this.A.P(b),c,H)};V.prototype.child=V.prototype.n;
V.prototype.Da=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Vd("Firebase.DataSnapshot.hasChild",a);var b=new E(a);return!this.A.P(b).e()};V.prototype.hasChild=V.prototype.Da;V.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;
V.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);B("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new V(d,b.V.n(c),H))})};V.prototype.forEach=V.prototype.forEach;V.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;
V.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};gc(V.prototype,"key",V.prototype.getKey);V.prototype.Eb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};V.prototype.numChildren=V.prototype.Eb;V.prototype.wb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};gc(V.prototype,"ref",V.prototype.wb);function Vg(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Vg.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new We("value",this,new V(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.matches=function(a){return a instanceof Vg?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Wg(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Wg.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.createEvent=function(a,b){D(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new We(a.type,this,new V(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof Wg){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=La(a.ga);if(b===La(this.ga)){if(1===b){var b=Ma(a.ga),c=Ma(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return Ka(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function Xg(){this.za={}}g=Xg.prototype;g.e=function(){return Sa(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),D(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof O?c.rc(d):L,k=!1);h=new Pe(a,new oe(new je(h,k,!1),new je(d,e,!1)));this.za[f]=h}h.Nb(b);return Ve(h,b)};
g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=Yg(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],T(a.V.m)||e.push(a.V))})}else{var m=w(this.za,d);m&&(f=f.concat(m.kb(b,c)),m.e()&&(delete this.za[d],T(m.V.m)||e.push(m.V)))}h&&null==Yg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Zg(a){return za(Na(a.za),function(a){return!T(a.V.m)})}g.hb=function(a){var b=null;v(this.za,function(c){b=b||c.hb(a)});return b};
function $g(a,b){if(T(b.m))return Yg(a);var c=b.ja();return w(a.za,c)}function Yg(a){return Ra(a.za,function(a){return T(a.V.m)})||null};function ah(a){this.wa=R;this.jb=new Df;this.De={};this.ic={};this.Cc=a}function bh(a,b,c,d,e){var f=a.jb,h=e;D(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=uf(f.S,b,c));f.Bc=d;return e?ch(a,new ce(fe,b,c)):[]}function dh(a,b,c,d){var e=a.jb;D(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=vf(e.S,b,c);e.Bc=d;c=xd(c);return ch(a,new ae(fe,b,c))}
function eh(a,b,c){c=c||!1;var d=Ef(a.jb,b);if(a.jb.Ed(b)){var e=R;null!=d.Ga?e=e.set(Q,!0):fb(d.children,function(a,b){e=e.set(new E(a),b)});return ch(a,new de(d.path,e,c))}return[]}function fh(a,b,c){c=xd(c);return ch(a,new ae(ie,b,c))}function gh(a,b,c,d){d=hh(a,d);if(null!=d){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=new ce(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
function kh(a,b,c,d){if(d=hh(a,d)){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=xd(c);c=new ae(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
ah.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;Fd(this.wa,c,function(a,b){var f=P(a,c);d=d||b.hb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.hb(Q)):(f=new Xg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=L,Jd(this.wa.subtree(c),function(a,b){var c=b.hb(Q);c&&(d=d.T(a,c))}));var k=null!=$g(f,a);if(!k&&!T(a.m)){var m=lh(a);D(!(m in this.ic),"View does not exist, but we have a tag");var l=mh++;this.ic[m]=l;this.De["_"+l]=m}h=f.Nb(a,b,new If(c,this.jb),d,h);k||
e||(f=$g(f,a),h=h.concat(nh(this,a,f)));return h};
ah.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=$g(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Ea(e,function(a){return T(a.m)});var h=Dd(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=oh(d),k=0;k<d.length;++k){var m=d[k],l=m.V,m=ph(this,m);this.Cc.Ae(qh(l),rh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(qh(a),null);else{var u=this;ya(e,function(a){a.ja();
var b=u.ic[lh(a)];u.Cc.Od(qh(a),b)})}sh(this,e)}return f};ah.prototype.Aa=function(a,b){var c=this.jb,d=Dd(this.wa,a,function(b,c){var d=P(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function oh(a){return Bd(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));v(d,function(a){e=e.concat(a)});return e})}function sh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.m)){var d=lh(d),e=a.ic[d];delete a.ic[d];delete a.De["_"+e]}}}
function qh(a){return T(a.m)&&!qf(a.m)?a.wb():a}function nh(a,b,c){var d=b.path,e=rh(a,b);c=ph(a,c);b=a.Cc.Ae(qh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)D(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bd(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[Te(Yg(b))];var d=[];b&&(d=d.concat(Aa(Zg(b),function(a){return a.V})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(qh(c),rh(a,c));return b}
function ph(a,b){var c=b.V,d=rh(a,c);return{ld:function(){return(b.w()||L).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=hh(a,d)){var h=ih(b);b=h.path;h=h.Hb;f=P(b,f);f=new Zd(new he(!1,!0,h,!0),f);b=jh(a,b,f)}else b=[]}else b=ch(a,new Zd(ie,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function lh(a){return a.path.toString()+"$"+a.ja()}function ih(a){var b=a.indexOf("$");D(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new E(a.substr(0,b))}}function hh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function rh(a,b){var c=lh(b);return w(a.ic,c)}var mh=1;
function jh(a,b,c){var d=a.wa.get(b);D(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new If(b,a.jb),null)}function ch(a,b){return th(a,b,a.wa,null,new If(Q,a.jb))}function th(a,b,c,d,e){if(b.path.e())return uh(a,b,c,d,e);var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[],k=K(b.path),m=b.Mc(k);if((c=c.children.get(k))&&m)var l=d?d.Q(k):null,k=e.n(k),h=h.concat(th(a,m,c,l,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
function uh(a,b,c,d,e){var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[];c.children.ha(function(c,f){var l=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(uh(a,z,f,l,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Qg(a,b,c){this.app=c;var d=new Bf(c);this.L=a;this.Va=Pf(a);this.Vc=null;this.ca=new Ye;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Rf(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride;if("undefined"!==da(b)&&null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{x(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Ag(this.L,q(this.Gb,this),q(this.Jc,this),q(this.ue,this),d,b)}var f=this;Cf(d,function(a){f.va.kf(a)});this.og=Qf(a,q(function(){return new Jf(this.Va,this.va)},this));this.mc=new Tc;this.ie=new Af;this.pd=new ah({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=ch(f.pd,new ce(ie,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});vh(this,"connected",!1);this.ia=new Gb;this.Ya=new Pg(this);this.fd=
0;this.je=null;this.K=new ah({Ae:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);cf(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Qg.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.pe};function wh(a){a=a.ie.j(new E(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function xh(a){a=a={timestamp:wh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.fd++;var e=new E(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=Ja(b,function(a){return G(a)}),a=kh(this.K,e,b,d)):(b=G(b),a=gh(this.K,e,b,d)):c?(d=Ja(b,function(a){return G(a)}),a=fh(this.K,e,d)):(d=G(b),a=ch(this.K,new ce(ie,e,d)));d=e;0<a.length&&(d=yh(this,e));cf(this.ca,d,a)};g.Jc=function(a){vh(this,"connected",a);!1===a&&zh(this)};g.ue=function(a){var b=this;cc(a,function(a,d){vh(b,d,a)})};
function vh(a,b,c){b=new E("/.info/"+b);c=G(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=ch(a.pd,new ce(ie,b,c));cf(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=xh(this);b=G(b,c);var e=Jb(b,e),f=this.vd++,e=bh(this.K,a,e,f,!0);Ze(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||J("set at "+a+" failed: "+b);e=eh(h.K,f,!e);cf(h.ca,a,e);Ah(d,b,c)});e=Bh(this,a);yh(this,e);cf(this.ca,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=xh(this),f={};v(b,function(a,b){d=!1;var c=G(a);f[b]=Jb(c,e)});if(d)I("update() called with empty data.  Don't do anything."),Ah(c,"ok");else{var h=this.vd++,k=dh(this.K,a,f,h);Ze(this.ca,k);var m=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||J("update at "+a+" failed: "+b);var e=eh(m.K,h,!e),f=a;0<e.length&&(f=yh(m,a));cf(m.ca,f,e);Ah(c,b,d)});v(b,function(b,c){var d=Bh(m,a.n(c));yh(m,d)});cf(this.ca,
a,[])}};function zh(a){a.f("onDisconnectEvents");var b=xh(a),c=[];Hb(Fb(a.ia,b),Q,function(b,e){c=c.concat(ch(a.K,new ce(ie,b,e)));var f=Bh(a,b);yh(a,f)});a.ia=new Gb;cf(a.ca,Q,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Yd(c.ia,a);Ah(b,d,e)})};function Ch(a,b,c,d){var e=G(c);a.va.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Ib(a.ia,b,e);Ah(d,c,h)})}
function Dh(a,b,c,d,e){var f=G(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Ib(a.ia,b,f);Ah(e,c,d)})}function Eh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),Ah(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=G(c[m]);Ib(a.ia,b.n(m),l)}Ah(d,e,f)})}function Fh(a,b,c){c=".info"===K(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);af(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Kf(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ba(Oa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Mf(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");I(b,arguments)};
function Ah(a,b,c){a&&fc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Gh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:Lb(),He:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||L;c.cd=d;d=c.update(d.H());if(n(d)){Pd("transaction failed: Data returned ",d,c.path);c.status=1;e=Uc(a.mc,b);var k=e.Ca()||[];k.push(c);Vc(e,k);"object"===typeof d&&null!==d&&eb(d,".priority")?(k=w(d,".priority"),D(Nd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Aa(b)||L).C().H();e=xh(a);d=G(d,k);e=Jb(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=bh(a.K,b,e,c.Ba,c.He);cf(a.ca,b,c);Hh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new V(c.cd,new U(a,c.path),H),c.G(null,!1,a))}function Hh(a,b){var c=b||a.mc;b||Ih(a,c);if(null!==c.Ca()){var d=Jh(a,c);D(0<d.length,"Sending zero length transaction queue");Ca(d,function(a){return 1===a.status})&&Kh(a,c.path(),d)}else c.kd()&&c.O(function(b){Hh(a,b)})}
function Kh(a,b,c){for(var d=Aa(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||L,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];D(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=P(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(eh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new V(h,k,H)))}c[f].Rd()}Ih(a,Uc(a.mc,b));Hh(a);cf(a.ca,b,e);for(f=0;f<d.length;f++)fc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(J("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;yh(a,b)}},e)}function yh(a,b){var c=Lh(a,b),d=c.path(),c=Jh(a,c);Mh(a,c,d);return d}
function Mh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=za(b,function(a){return 1===a.status}),f=Aa(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],m=P(c,k.path),l=!1,u;D(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(eh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)l=!0,u="maxretry",e=e.concat(eh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||L;k.cd=z;var F=b[h].update(z.H());n(F)?(Pd("transaction failed: Data returned ",F,
k.path),m=G(F),"object"===typeof F&&null!=F&&eb(F,".priority")||(m=m.fa(z.C())),z=k.Ba,F=xh(a),F=Jb(m,F),k.dd=m,k.ed=F,k.Ba=a.vd++,Fa(f,z),e=e.concat(bh(a.K,k.path,F,k.Ba,k.He)),e=e.concat(eh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(eh(a.K,k.Ba,!0)))}cf(a.ca,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new V(b[h].cd,k,H)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Ih(a,a.mc);for(h=0;h<d.length;h++)fc(d[h]);Hh(a)}}
function Lh(a,b){for(var c,d=a.mc;null!==(c=K(b))&&null===d.Ca();)d=Uc(d,c),b=N(b);return d}function Jh(a,b){var c=[];Nh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Nh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Nh(a,b,c)})}function Ih(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Vc(b,0<c.length?c:null)}b.O(function(b){Ih(a,b)})}
function Bh(a,b){var c=Lh(a,b).path(),d=Uc(a.mc,b);Yc(d,function(b){Oh(a,b)});Oh(a,d);Xc(d,function(b){Oh(a,b)});return c}
function Oh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(D(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(D(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(eh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Vc(b,null):c.length=f+1;cf(a.ca,b.path(),e);for(h=0;h<d.length;h++)fc(d[h])}};function Ug(){this.lb={};this.wf=!1}Ug.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ug.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ug.prototype.ce=function(a){this.wf=a};ca(Ug);Ug.prototype.interrupt=Ug.prototype.ab;Ug.prototype.resume=Ug.prototype.kc;var W={};W.nc=Ag;W.DataConnection=W.nc;Ag.prototype.ng=function(a,b){this.ua("q",{p:a},b)};W.nc.prototype.simpleListen=W.nc.prototype.ng;Ag.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};W.nc.prototype.echo=W.nc.prototype.Hf;Ag.prototype.interrupt=Ag.prototype.ab;W.zf=og;W.RealTimeConnection=W.zf;og.prototype.sendRequest=og.prototype.ua;og.prototype.close=og.prototype.close;
W.Rf=function(a){var b=Ag.prototype.put;Ag.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ag.prototype.put=b}};W.hijackHash=W.Rf;W.yf=zb;W.ConnectionTarget=W.yf;W.ja=function(a){return a.ja()};W.queryIdentifier=W.ja;W.Uf=function(a){return a.u.Ra.$};W.listens=W.Uf;W.ce=function(a){Ug.Vb().ce(a)};W.forceRestClient=W.ce;W.Context=Ug;function Ph(a,b){this.committed=a;this.snapshot=b};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
function Qh(a){var b=null,c=null;a.ka&&(b=ff(a));a.na&&(c=hf(a));if(a.g===tc){if(a.ka){if("[MIN_NAME]"!=ef(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=gf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===H){if(null!=b&&!Nd(b)||null!=c&&!Nd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(D(a.g instanceof pc||a.g===wc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Rh(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Sh(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){y("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.gc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Td("Query.on",a,!1);B("Query.on",2,b,!1);var e=Th("Query.on",c,d);if("value"===a)Fh(this.u,this,new Vg(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Fh(this.u,this,new Wg(f,e.cancel,e.Ma))}return b};
g.Ic=function(a,b,c){y("Query.off",0,3,arguments.length);Td("Query.off",a,!0);B("Query.off",2,b,!0);ob("Query.off",3,c);var d=null,e=null;"value"===a?d=new Vg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Wg(e,null,c||null));e=this.u;d=".info"===K(this.path)?e.pd.kb(this,d):e.K.kb(this,d);af(e.ca,this.path,d)};
g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Td("Query.once",a,!1);B("Query.once",2,b,!0);var d=Th("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new ib;kb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
g.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.ne(a),this.Nc)};
g.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.oe(a),this.Nc)};
g.ag=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Vd("Query.orderByChild",a);Sh(this,"Query.orderByChild");var b=new E(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new pc(b);b=of(this.m,b);Qh(b);return new X(this.u,this.path,b,!0)};g.bg=function(){y("Query.orderByKey",0,0,arguments.length);Sh(this,"Query.orderByKey");var a=of(this.m,tc);Qh(a);return new X(this.u,this.path,a,!0)};g.cg=function(){y("Query.orderByPriority",0,0,arguments.length);Sh(this,"Query.orderByPriority");var a=of(this.m,H);Qh(a);return new X(this.u,this.path,a,!0)};
g.dg=function(){y("Query.orderByValue",0,0,arguments.length);Sh(this,"Query.orderByValue");var a=of(this.m,wc);Qh(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Od("Query.startAt",a,this.path,!0);Ud("Query.startAt",b);var c=this.m.Nd(a,b);Rh(c);Qh(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
g.gd=function(a,b){y("Query.endAt",0,2,arguments.length);Od("Query.endAt",a,this.path,!0);Ud("Query.endAt",b);var c=this.m.gd(a,b);Rh(c);Qh(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
g.If=function(a,b){y("Query.equalTo",1,2,arguments.length);Od("Query.equalTo",a,this.path,!1);Ud("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.toJSON=function(){y("Query.toJSON",0,1,arguments.length);return this.toString()};g.ja=function(){var a=ac(pf(this.m));return"{}"===a?"default":a};
g.isEqual=function(a){y("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
function Th(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,B(a,3,d.cancel,!0),d.Ma=c,ob(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(A(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.ag;
X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;gc(X.prototype,"ref",X.prototype.wb);function Y(a,b){this.ta=a;this.qa=b}Y.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);B("Firebase.onDisconnect().cancel",1,a,!0);var b=new ib;this.ta.xd(this.qa,jb(b,a));return b.ra};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Wd("Firebase.onDisconnect().remove",this.qa);B("Firebase.onDisconnect().remove",1,a,!0);var b=new ib;Ch(this.ta,this.qa,null,jb(b,a));return b.ra};
Y.prototype.remove=Y.prototype.remove;Y.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Wd("Firebase.onDisconnect().set",this.qa);Od("Firebase.onDisconnect().set",a,this.qa,!1);B("Firebase.onDisconnect().set",2,b,!0);var c=new ib;Ch(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.set=Y.prototype.set;
Y.prototype.Jb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Wd("Firebase.onDisconnect().setWithPriority",this.qa);Od("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Sd("Firebase.onDisconnect().setWithPriority",2,b);B("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new ib;Dh(this.ta,this.qa,a,b,jb(d,c));return d.ra};Y.prototype.setWithPriority=Y.prototype.Jb;
Y.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Wd("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.onDisconnect().update",a,this.qa);B("Firebase.onDisconnect().update",2,b,!0);
c=new ib;Eh(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.update=Y.prototype.update;var Z={Mf:function(){dg=Zf=!0}};Z.forceLongPolling=Z.Mf;Z.Nf=function(){eg=!0};Z.forceWebSockets=Z.Nf;Z.Tf=function(){return Yf.isAvailable()};Z.isWebSocketsAvailable=Z.Tf;Z.lg=function(a,b){a.u.Ra.ze=b};Z.setSecurityDebugCallback=Z.lg;Z.Be=function(a,b){a.u.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.u.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.fd=function(a){return a.u.fd};Z.dataUpdateCount=Z.fd;Z.Sf=function(a,b){a.u.je=b};Z.interceptServerData=Z.Sf;function U(a,b){if(!(a instanceof Qg))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,mf,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:Oc(this.path)};
g.n=function(a){y("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof E))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Vd("Firebase.child",b)}else Vd("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Of=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);Wd("Firebase.set",this.path);Od("Firebase.set",a,this.path,!1);B("Firebase.set",2,b,!0);var c=new ib;this.u.Jb(this.path,a,null,jb(c,b));return c.ra};
g.update=function(a,b){y("Firebase.update",1,2,arguments.length);Wd("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.update",a,this.path);B("Firebase.update",2,b,!0);c=new ib;this.u.update(this.path,a,jb(c,b));return c.ra};
g.Jb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Wd("Firebase.setWithPriority",this.path);Od("Firebase.setWithPriority",a,this.path,!1);Sd("Firebase.setWithPriority",2,b);B("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new ib;this.u.Jb(this.path,a,b,jb(d,c));return d.ra};
g.remove=function(a){y("Firebase.remove",0,1,arguments.length);Wd("Firebase.remove",this.path);B("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Wd("Firebase.transaction",this.path);B("Firebase.transaction",1,a,!1);B("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(A("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new ib;ha(b)&&kb(d.ra);Gh(this.u,this.path,a,function(a,c,h){a?
d.reject(a):d.resolve(new Ph(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Wd("Firebase.setPriority",this.path);Sd("Firebase.setPriority",1,a);B("Firebase.setPriority",2,b,!0);var c=new ib;this.u.Jb(this.path.n(".priority"),a,null,jb(c,b));return c.ra};
g.push=function(a,b){y("Firebase.push",0,2,arguments.length);Wd("Firebase.push",this.path);Od("Firebase.push",a,this.path,!0);B("Firebase.push",2,b,!0);var c=wh(this.u),d=Kc(c),c=this.n(d),e=this.n(d),d=null!=a?c.set(a,b).then(function(){return e}):hb.resolve(e);c.then=q(d.then,d);c["catch"]=q(d.then,d,void 0);ha(b)&&kb(d);return c};g.ib=function(){Wd("Firebase.onDisconnect",this.path);return new Y(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;
U.prototype.update=U.prototype.update;U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;gc(U.prototype,"database",U.prototype.Gf);gc(U.prototype,"key",U.prototype.getKey);gc(U.prototype,"parent",U.prototype.getParent);gc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=Ug.Vb(),c=a.options.databaseURL;n(c)||Vb("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Wb(c),c=d.jc;Xd("Invalid Firebase Database URL",d);d.path.e()||Vb("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Vb("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Qg(c,b.wf,a);b.lb[a.name]=
d;return d.Ya},{Reference:U,Query:X,Database:Pg,enableLogging:Sb,INTERNAL:Z,TEST_ACCESS:W,ServerValue:Sg})}catch(Uh){Vb("Failed to register the Firebase Database Service ("+Uh+")")};
            module.exports = firebase.database;
          })();
          //# sourceMappingURL=database.js.map
          


/***/ }),
/* 146 */
/***/ (function(module, exports) {

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(148);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)
__webpack_require__(178)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(167),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/.nuxt/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(173)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(161),
  /* scopeId */
  "data-v-051f3c9e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/.nuxt/components/nuxt-error.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nuxt-error.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(166),
  /* scopeId */
  "data-v-4d9492b6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/.nuxt/components/nuxt-loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(165),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/.nuxt/components/nuxt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(163),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/layouts/admin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] admin.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(176)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/layouts/default.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] default.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(172),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/pages/about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(174)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(162),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/pages/admin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] admin.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(171),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/pages/contact.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] contact.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(168),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/pages/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(170),
  /* scopeId */
  "data-v-bb120d8a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/pages/posts/_slug.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] _slug.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(169),
  /* scopeId */
  "data-v-b7a4cafa",
  /* cssModules */
  null
)
Component.options.__file = "/Users/droyer/Playground-2017/nuxtfire/pages/posts/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error-page"
  }, [_c('div', [_c('h1', {
    staticClass: "error-code"
  }, [_vm._v(_vm._s(_vm.error.statusCode))]), _c('div', {
    staticClass: "error-wrapper-message"
  }, [_c('h2', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.error.message))])]), (_vm.error.statusCode === 404) ? _c('p', [_c('nuxt-link', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', {
    staticClass: "display-1"
  }, [_vm._v("Admin Page")]), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [(_vm.activeUser == false) ? _c('v-btn', {
    key: "login",
    attrs: {
      "primary": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.login($event)
      }
    }
  }, [_vm._v("Login")]) : _c('v-btn', {
    key: "logout",
    attrs: {
      "primary": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.logout($event)
      }
    }
  }, [_vm._v("Logout")])], 1), _c('v-text-field', {
    attrs: {
      "name": "post-title",
      "label": "Post title",
      "id": "title"
    },
    model: {
      value: (_vm.newTitle),
      callback: function($$v) {
        _vm.newTitle = $$v
      },
      expression: "newTitle"
    }
  }), _c('v-text-field', {
    attrs: {
      "name": "post-content",
      "label": "Post Content",
      "id": "content",
      "multi-line": ""
    },
    model: {
      value: (_vm.newContent),
      callback: function($$v) {
        _vm.newContent = $$v
      },
      expression: "newContent"
    }
  }), _c('v-btn', {
    attrs: {
      "primary": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.saveNewPost($event)
      }
    }
  }, [_vm._v("Save Post")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _c('h1', {
    staticClass: "display-2"
  }, [_vm._v("Admin Layout")]), _vm._m(0)], 1), _c('nuxt')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', [_c('p', [_vm._v("Nav will go here")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', [_c('v-navigation-drawer', {
    attrs: {
      "persistent": "",
      "disable-route-watcher": false,
      "enable-resize-watcher": ""
    },
    model: {
      value: (_vm.drawerOpen),
      callback: function($$v) {
        _vm.drawerOpen = $$v
      },
      expression: "drawerOpen"
    }
  }, [_c('v-list', [_vm._l((_vm.links), function(link, i) {
    return _c('v-list-item', {
      key: link.href
    }, [_c('v-list-tile', {
      attrs: {
        "router": "",
        "to": link.href
      }
    }, [_c('v-list-tile-content', [_c('v-list-tile-title', {
      domProps: {
        "textContent": _vm._s(link.title)
      }
    })], 1)], 1)], 1)
  }), _c('v-divider'), _c('v-subheader', {
    attrs: {
      "light": ""
    }
  }, [_vm._v("Blog Posts")]), _vm._l((_vm.blogPosts), function(post, key) {
    return _c('v-list-item', {
      key: key
    }, [_c('v-list-tile', {
      attrs: {
        "router": "",
        "exact": "",
        "to": ("/posts/" + (post.slug))
      }
    }, [_c('v-list-tile-content', [_c('v-list-tile-title', {
      domProps: {
        "textContent": _vm._s(post.title)
      }
    })], 1)], 1)], 1)
  })], 2), _c('v-divider'), _c('v-btn', {
    key: "admin",
    staticClass: "blue-grey",
    attrs: {
      "light": "",
      "router": "",
      "to": "/admin"
    }
  }, [_vm._v("\n       Admin\n       "), _c('v-icon', {
    attrs: {
      "right": "",
      "light": ""
    }
  }, [_vm._v("account_circle")])], 1)], 1), _c('v-toolbar', {
    staticClass: "secondary",
    attrs: {
      "light": ""
    }
  }, [_c('v-toolbar-side-icon', {
    attrs: {
      "right": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawerOpen = !_vm.drawerOpen
      }
    }
  }), _c('v-toolbar-title', [_vm._v("David Royer")])], 1), _c('main', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('nuxt')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.nuxt.err) ? _c('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _c('nuxt-child')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [_c('nuxt-loading', {
    ref: "loading"
  }), (_vm.layout) ? _c(_vm.layout, {
    tag: "component"
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h1', {
    staticClass: "display-1"
  }, [_vm._v("Home Page")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "post"
  }, [_c('h1', {
    staticClass: "display-1"
  }, [_vm._v("INDEX.VUE")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "post"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('div', {
    key: _vm.$route.params.slug
  }, [_c('h3', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.title)
    }
  }), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.content)
    }
  })])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h1', {
    staticClass: "display-1"
  }, [_vm._v("Contact Me")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h1', {
    staticClass: "display-1"
  }, [_vm._v("About Me")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("39659194", content, false);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("e6d39ff4", content, false);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("1f2e8df2", content, false);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("2c49c6d5", content, false);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("b0c35778", content, false);

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("d8d1901a", content, false);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("c76f0454", content, false);

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("9638527a", content, false);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("65d1f70e", content, false);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("93c45c82", content, false);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(5)("a83351c8", content, false);

/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("vuetify");

/***/ })
/******/ ]);