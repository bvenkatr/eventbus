(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@nsisodiya/eventbus"));
	else if(typeof define === 'function' && define.amd)
		define(["EventBus"], factory);
	else if(typeof exports === 'object')
		exports["example"] = factory(require("@nsisodiya/eventbus"));
	else
		root["example"] = factory(root["EventBus"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _eventbus = __webpack_require__(1);

	var _eventbus2 = _interopRequireDefault(_eventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var b1 = new _eventbus2.default();

	console.log("SubScribe ADD_EVENT, Section 1");
	var unsub1 = b1.subscribe("ADD_EVENT", function (obj) {
		console.log("AddEvent Received at Section 1", obj);
	});

	console.log("SubScribe ADD_EVENT, Section 2");
	var unsub2 = b1.subscribe("ADD_EVENT", function (obj) {
		console.log("AddEvent Received at Section 2", obj);
	});

	console.log("SubScribe All Events, Section 3");
	var unsub3 = b1.subscribeAll(function (obj, obj2) {
		console.log("Some Event Received at Section 3", obj, obj2);
	});

	console.log("Publish ADD_EVENT");
	b1.publish("ADD_EVENT", { done: false, title: "write JS" });
	console.log("Publish EDIT_EVENT");
	b1.publish("EDIT_EVENT", { done: false, title: "write JS" });

	console.log("UNSubScribe ADD_EVENT, Section 1");
	unsub1();

	console.log("Publish ADD_EVENT");
	b1.publish("ADD_EVENT", { done: false, title: "write JS" });

	console.log("UNSubScribe Section 3");
	unsub3();

	console.log("Publish EDIT_EVENT");
	b1.publish("EDIT_EVENT", { done: false, title: "write JS" });

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;