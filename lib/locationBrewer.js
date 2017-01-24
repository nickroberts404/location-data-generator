
function getCoordinateArray(entityCount) {
	var arr = [];
	for (var i = 0; i < entityCount; i++) {
		arr = arr.concat([randomCoordinates()]);
	}
	return arr;
}

function randomCoordinates() {
	return {
		lat: getRandomInRange(-90, 90, 4),
		lng: getRandomInRange(-180, 180, 4),
	}
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

module.exports = {
	getCoordinateArray,
}
