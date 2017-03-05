(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mirageo"] = factory();
	else
		root["mirageo"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.randomPoints = randomPoints;

var _randomCoordinate = __webpack_require__(9);

var _randomCoordinate2 = _interopRequireDefault(_randomCoordinate);

var _randomInPolygon = __webpack_require__(10);

var _randomInPolygon2 = _interopRequireDefault(_randomInPolygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomPoints(bound, count) {
	var arr = [];
	if (!count || !bound) return arr;
	for (var i = 0; i < count; i++) {
		arr.push(Array.isArray(bound) ? (0, _randomCoordinate2.default)(bound) : (0, _randomInPolygon2.default)(bound));
	}
	return arr;
}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.conjure = conjure;
exports.pointsToGeoJSON = pointsToGeoJSON;

var _locations = __webpack_require__(0);

var defaults = {
	bound: [-180, -90, 180, 90], // A bounding box representing whole earth
	count: 100, // The amount of points to return
	geojson: false // Return points as an array of coordinates instead of a geojson feature set
};

function conjure(options) {
	options = Object.assign({}, defaults, options); // Merge options and defaults, declared options taking priority
	var points = (0, _locations.randomPoints)(options.bound, options.count);
	if (options.geojson) points = pointsToGeoJSON(points);
	return points;
}

function pointsToGeoJSON() {
	var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	return points.map(function (p) {
		return {
			"type": "Feature",
			"geometry": { "type": "Point", "coordinates": [p.lng, p.lat] }
		};
	});
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.randomCoordinate = randomCoordinate;
exports.randomInRange = randomInRange;

// Accepts a bbox as an argument, defaulting to the whole earth, and returns a random point within it. 
function randomCoordinate() {
	var bbox = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [-180, -90, 180, 90];

	return {
		lat: randomInRange(bbox[1], bbox[3], 180, 4),
		lng: randomInRange(bbox[0], bbox[2], 360, 4)
	};
}

// s is the # of values before the cycle repeats (the earth being a sphere).
// given an s of x, this will return a function between -x/2 and x/2.
// It seems confusing now, but it was created for using with lat, lng.
function randomInRange(from, to, s) {
	var fixed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	from += s / 2;
	to += s / 2;
	if (to < from) to += s;
	return (Math.random() * (to - from) + from).toFixed(fixed) * 1 % s - s / 2;
	// .toFixed() returns string, so ' * 1' is a trick to convert to number
}

exports.default = randomCoordinate;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.randomInPolygon = randomInPolygon;

var _randomCoordinate = __webpack_require__(9);

var _randomCoordinate2 = _interopRequireDefault(_randomCoordinate);

var _index = __webpack_require__(8);

var _inside = __webpack_require__(16);

var _inside2 = _interopRequireDefault(_inside);

var _extent = __webpack_require__(11);

var _extent2 = _interopRequireDefault(_extent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomInPolygon(polygon) {
	var bbox = getPolygonExtent(polygon);
	var point = (0, _randomCoordinate2.default)(bbox);
	while (!(0, _inside2.default)((0, _index.pointsToGeoJSON)([point])[0], polygon)) {
		point = (0, _randomCoordinate2.default)(bbox);
	}return point;
}

function getPolygonExtent(polygon) {
	var coords = polygon.geometry.coordinates[0];
	var ext = (0, _extent2.default)();
	coords.forEach(function (c) {
		return ext.include(c);
	});
	return ext.bbox();
}

exports.default = randomInPolygon;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Extent;

function Extent(bbox) {
    if (!(this instanceof Extent)) {
        return new Extent(bbox);
    }
    this._bbox = bbox || [Infinity, Infinity, -Infinity, -Infinity];
    this._valid = !!bbox;
}

Extent.prototype.include = function (ll) {
    this._valid = true;
    this._bbox[0] = Math.min(this._bbox[0], ll[0]);
    this._bbox[1] = Math.min(this._bbox[1], ll[1]);
    this._bbox[2] = Math.max(this._bbox[2], ll[0]);
    this._bbox[3] = Math.max(this._bbox[3], ll[1]);
    return this;
};

Extent.prototype.equals = function (_) {
    var other;
    if (_ instanceof Extent) {
        other = _.bbox();
    } else {
        other = _;
    }
    return this._bbox[0] == other[0] && this._bbox[1] == other[1] && this._bbox[2] == other[2] && this._bbox[3] == other[3];
};

Extent.prototype.center = function (_) {
    if (!this._valid) return null;
    return [(this._bbox[0] + this._bbox[2]) / 2, (this._bbox[1] + this._bbox[3]) / 2];
};

Extent.prototype.union = function (_) {
    this._valid = true;
    var other;
    if (_ instanceof Extent) {
        other = _.bbox();
    } else {
        other = _;
    }
    this._bbox[0] = Math.min(this._bbox[0], other[0]);
    this._bbox[1] = Math.min(this._bbox[1], other[1]);
    this._bbox[2] = Math.max(this._bbox[2], other[2]);
    this._bbox[3] = Math.max(this._bbox[3], other[3]);
    return this;
};

Extent.prototype.bbox = function () {
    if (!this._valid) return null;
    return this._bbox;
};

Extent.prototype.contains = function (ll) {
    if (!ll) return this._fastContains();
    if (!this._valid) return null;
    var lon = ll[0],
        lat = ll[1];
    return this._bbox[0] <= lon && this._bbox[1] <= lat && this._bbox[2] >= lon && this._bbox[3] >= lat;
};

Extent.prototype.intersect = function (_) {
    if (!this._valid) return null;

    var other;
    if (_ instanceof Extent) {
        other = _.bbox();
    } else {
        other = _;
    }

    return !(this._bbox[0] > other[2] || this._bbox[2] < other[0] || this._bbox[3] < other[1] || this._bbox[1] > other[3]);
};

Extent.prototype._fastContains = function () {
    if (!this._valid) return new Function('return null;');
    var body = 'return ' + this._bbox[0] + '<= ll[0] &&' + this._bbox[1] + '<= ll[1] &&' + this._bbox[2] + '>= ll[0] &&' + this._bbox[3] + '>= ll[1]';
    return new Function('ll', body);
};

Extent.prototype.polygon = function () {
    if (!this._valid) return null;
    return {
        type: 'Polygon',
        coordinates: [[
        // W, S
        [this._bbox[0], this._bbox[1]],
        // E, S
        [this._bbox[2], this._bbox[1]],
        // E, N
        [this._bbox[2], this._bbox[3]],
        // W, N
        [this._bbox[0], this._bbox[3]],
        // W, S
        [this._bbox[0], this._bbox[1]]]]
    };
};

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var invariant = __webpack_require__(17);

// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

/**
 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point resides inside the polygon. The polygon can
 * be convex or concave. The function accounts for holes.
 *
 * @name inside
 * @param {Feature<Point>} point input point
 * @param {Feature<(Polygon|MultiPolygon)>} polygon input polygon or multipolygon
 * @return {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
 * @example
 * var pt = turf.point([-77, 44]);
 * var poly = turf.polygon([[
 *   [-81, 41],
 *   [-81, 47],
 *   [-72, 47],
 *   [-72, 41],
 *   [-81, 41]
 * ]]);
 *
 * var isInside = turf.inside(pt, poly);
 *
 * //=isInside
 */
module.exports = function input(point, polygon) {
    var pt = invariant.getCoord(point);
    var polys = polygon.geometry.coordinates;
    // normalize to multipolygon
    if (polygon.geometry.type === 'Polygon') polys = [polys];

    for (var i = 0, insidePoly = false; i < polys.length && !insidePoly; i++) {
        // check if it is in the outer ring first
        if (inRing(pt, polys[i][0])) {
            var inHole = false;
            var k = 1;
            // check for the point in any of the holes
            while (k < polys[i].length && !inHole) {
                if (inRing(pt, polys[i][k], true)) {
                    inHole = true;
                }
                k++;
            }
            if (!inHole) insidePoly = true;
        }
    }
    return insidePoly;
};

// pt is [x,y] and ring is [[x,y], [x,y],..]
function inRing(pt, ring, ignoreBoundary) {
    var isInside = false;
    if (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) ring = ring.slice(0, ring.length - 1);

    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var xi = ring[i][0],
            yi = ring[i][1];
        var xj = ring[j][0],
            yj = ring[j][1];
        var onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 && (xi - pt[0]) * (xj - pt[0]) <= 0 && (yi - pt[1]) * (yj - pt[1]) <= 0;
        if (onBoundary) return !ignoreBoundary;
        var intersect = yi > pt[1] !== yj > pt[1] && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi;
        if (intersect) isInside = !isInside;
    }
    return isInside;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Unwrap a coordinate from a Feature with a Point geometry, a Point
 * geometry, or a single coordinate.
 *
 * @param {*} obj any value
 * @returns {Array<number>} a coordinate
 */
function getCoord(obj) {
    if (Array.isArray(obj) && typeof obj[0] === 'number' && typeof obj[1] === 'number') {
        return obj;
    } else if (obj) {
        if (obj.type === 'Feature' && obj.geometry && obj.geometry.type === 'Point' && Array.isArray(obj.geometry.coordinates)) {
            return obj.geometry.coordinates;
        } else if (obj.type === 'Point' && Array.isArray(obj.coordinates)) {
            return obj.coordinates;
        }
    }
    throw new Error('A coordinate, feature, or point geometry is required');
}

/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @alias geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) throw new Error('type and name required');

    if (!value || value.type !== type) {
        throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + value.type);
    }
}

/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @alias featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!name) throw new Error('.featureOf() requires a name');
    if (!feature || feature.type !== 'Feature' || !feature.geometry) {
        throw new Error('Invalid input to ' + name + ', Feature with geometry required');
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type);
    }
}

/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @alias collectionOf
 * @param {FeatureCollection} featurecollection a featurecollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featurecollection, type, name) {
    if (!name) throw new Error('.collectionOf() requires a name');
    if (!featurecollection || featurecollection.type !== 'FeatureCollection') {
        throw new Error('Invalid input to ' + name + ', FeatureCollection required');
    }
    for (var i = 0; i < featurecollection.features.length; i++) {
        var feature = featurecollection.features[i];
        if (!feature || feature.type !== 'Feature' || !feature.geometry) {
            throw new Error('Invalid input to ' + name + ', Feature with geometry required');
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type);
        }
    }
}

module.exports.geojsonType = geojsonType;
module.exports.collectionOf = collectionOf;
module.exports.featureOf = featureOf;
module.exports.getCoord = getCoord;

/***/ })
/******/ ]);
});
//# sourceMappingURL=mirageo.map