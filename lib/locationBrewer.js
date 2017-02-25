
const rand = require('random-points-on-polygon');

function getFeatureCollection(data) {
	return {
		type: "FeatureCollection",
		features: data.map(d => ({
			"type": "Feature",
			"geometry": {"type": "Point", "coordinates": [d.lng, d.lat]}
		}))
	}
}

function getCoordinateArray(nodeCount, boundingFeature) {
	boundingFeature = boundingFeature || [[90, -180],[-90, 180]];
	if(Array.isArray(boundingFeature)) return getArrayWithinBBox(nodeCount, boundingFeature)
	else return getArrayWithinPolygon(nodeCount, boundingFeature);
}

function getArrayWithinPolygon(nodeCount, polygon) {
		const points = rand(nodeCount, polygon);
		return points.map(p => ({lat: p.geometry.coordinates[1], lng: p.geometry.coordinates[0]}));
}

function getArrayWithinBBox(nodeCount, bbox) {
	var arr = []
	for (var i = 0; i < nodeCount; i++) {
		arr = arr.concat([randomCoordinates(bbox)]);
	}
	return arr;
}

function randomCoordinates(bbox) {
	return {
		lat: getRandomInRange(bbox[1][0], bbox[0][0], 180, 4),
		lng: getRandomInRange(bbox[0][1], bbox[1][1], 360, 4),
	}
}

// s is the # of values before the cycle repeats (the earth being a sphere).
function getRandomInRange(from, to, s, fixed) {
	from+= s/2;
	to+= s/2;
	if(to < from) to+= s;
    return ((Math.random() * (to - from) + from).toFixed(fixed) * 1) % s - s/2;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

module.exports = {
	getCoordinateArray,
	getFeatureCollection,
}












