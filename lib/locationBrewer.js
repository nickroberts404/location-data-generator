
const rand = require('random-points-on-polygon');

function getCoordinateArray(nodeCount, boundingFeature) {
	var arr = [];
	if(Array.isArray(boundingFeature)){
		for (var i = 0; i < nodeCount; i++) {
			arr = arr.concat([randomCoordinates(boundingFeature)]);
		}
	} else {
		const points = rand(nodeCount, boundingFeature);
		arr = points.map(p => ({lat: p.geometry.coordinates[1], lng: p.geometry.coordinates[0]}));
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
}












