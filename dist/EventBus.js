(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EventBus"] = factory();
	else
		root["EventBus"] = factory();
})(this, function() {
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
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*

	 The MIT License (MIT)
	 Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya

	 */

	var EventBus = function () {
		function EventBus() {
			_classCallCheck(this, EventBus);

			this._topicList = {};
			this._globalCallbackList = [];
		}

		_createClass(EventBus, [{
			key: "subscribe",
			value: function subscribe(topic, callback) {
				var _this = this;

				if (typeof topic !== "string" || typeof callback !== "function") {
					throw "EventBus Unable to subscribe - topic is not string or callback is not a function";
				}
				if (this._topicList[topic] === undefined) {
					this._topicList[topic] = [];
				}

				var i = this._topicList[topic].push(callback) - 1;

				//UnSub function !!
				return function () {
					//Setting Callback as null;
					_this._topicList[topic][i] = null;
				};
			}
		}, {
			key: "subscribeAll",
			value: function subscribeAll(callback) {
				var _this2 = this;

				var i = this._globalCallbackList.push(callback) - 1;
				return function () {
					_this2._globalCallbackList[i] = null;
				};
			}
		}, {
			key: "publish",
			value: function publish(topic) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				if (this._topicList[topic] !== undefined) {
					this._topicList[topic].map(function (callback) {
						if (callback !== null) {
							//SKIP the unsubscribed callback !
							callback.apply(null, args);
						}
					});
				}
				this._globalCallbackList.map(function (callback) {
					if (callback !== null) {
						//SKIP the unsubscribed callback !
						callback.apply(null, [topic].concat(args));
					}
				});
			}
		}]);

		return EventBus;
	}();

	module.exports = EventBus;

/***/ }
/******/ ])
});
;