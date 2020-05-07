var Modal =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MODAL_CONFIG = {\n\tannimation: false,\n\tannimationType: 'fade',\n\tappendClose: true,\n\tclassName: {\n\t\tactive: 'active',\n\t\tclose: 'modal-close',\n\t},\n\tcloseCallback: null,\n\tfade: false,\n\tfadeSpeed: 500,\n\topenCallback: null,\n\tscroll: false,\n\tstyle: {\n\t\tbackground: null,\n\t\tpadding: 0,\n\t}\n}\n\nclass Modal {\n\n\tconstructor(modal, config) {\n\t\tthis.modal = modal;\n\n\t\tthis.config = this.configure(config);\n\t\tthis.content = modal.querySelector('.modal-content');\n\t\tthis.buttons = this.getButton();\n\t\tthis.closeButton = this.makeCloseButton();\n\n\t\tthis.init();\n\t}\n\n\tconfigure(config) {\n\t\treturn Object.assign(MODAL_CONFIG, config);\n\t}\n\n\tinit () {\n\t\t// Append close button\n\t\tthis.modal.appendChild(this.closeButton);\n\n\t\t// Add Events\n\t\tthis.addEvent();\n\n\t\t// CSS\n\t\tthis.style();\n\t}\n\n\taddEvent() {\n\t\t// Open\n\t\tthis.buttons.forEach(button => {\n\t\t\tbutton.addEventListener('click', this.open.bind(this), false);\n\t\t})\n\t\t// Close\n\t\tthis.modal.addEventListener('click', this.close.bind(this), false);\n\t\tthis.content.addEventListener('click', e => {\n\t\t\te.stopPropagation();\n\t\t}, false);\n\t}\n\n\topen(e) {\n\t\te.preventDefault();\n\t\te.stopPropagation();\n\n\t\tthis.modal.classList.add('active');\n\t\tthis.config.openCallback();\n\t}\n\n\tclose(e) {\n\t\te.preventDefault();\n\t\te.stopPropagation();\n\n\t\tthis.modal.classList.remove('active');\n\t\tthis.config.closeCallback();\n\t}\n\n\tgetButton() {\n\t\tvar id = this.modal.getAttribute('id'),\n\t\t\t\tselector = `[data-for=\"${id}\"].modal-button`;\n\t\treturn document.querySelectorAll(selector);\n\t}\n\n\tmakeCloseButton() {\n\t\tvar button = document.createElement('BUTTON');\n\t\tvar text = document.createTextNode(this.config.closeText || 'close');\n\n\t\tbutton.className = 'modal-close';\n\t\tbutton.appendChild(text);\n\n\t\treturn button;\n\t}\n\n\tstyle() {\n\t\t// Padding\n\t\tvar p = this.config.padding;\n\t\tif ( p ) {\n\t\t\tthis.modal.style.padding = isNaN(p) ? p : p + 'px';\n\t\t}\n\t}\n}\n\nmodule.exports = Modal;\n\n\n//# sourceURL=webpack://Modal/./src/index.js?");

/***/ })

/******/ });