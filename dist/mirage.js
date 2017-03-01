(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mirage"] = factory();
	else
		root["mirage"] = factory();
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locations_js__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["conjure"] = conjure;


const defaults = {
	bound: [[90, -180],[-90, 180]], // A bounding box representing whole earth
	count: 100, // The amount of points to return
	geojson: false // Return points as an array of coordinates instead of a geojson feature set
}

function conjure(options) {
	options = Object.assign({}, defaults, options); // Merge options and defaults, declared options taking priority
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locations_js__["a" /* randomPoints */])(bound, count);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = randomPoints;
/* unused harmony export getPointsInPolygon */
/* unused harmony export getPointsInBBox */
/* unused harmony export randomInRange */


function randomPoints(bound, count) {
	if(Array.isArray(bound)) return getPointsInBBox(bound, count)
	else return getPointsInPolygon(bound, count);
}

function getPointsInPolygon(bound, count) {
		const points = rand(count, bound);
		return points.map(p => ({lat: p.geometry.coordinates[1], lng: p.geometry.coordinates[0]}));
}

function getPointsInBBox(bbox, count) {
	const arr = []
	for (var i = 0; i < count; i++) {
		arr.push({
			lat: randomInRange(bbox[1][0], bbox[0][0], 180, 4),
			lng: randomInRange(bbox[0][1], bbox[1][1], 360, 4),
		});
	}
	return arr;
}

// s is the # of values before the cycle repeats (the earth being a sphere).
function randomInRange(from, to, s, fixed) {
	from+= s/2;
	to+= s/2;
	if(to < from) to+= s;
    return ((Math.random() * (to - from) + from).toFixed(fixed) * 1) % s - s/2;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=mirage.map