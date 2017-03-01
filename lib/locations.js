import randomPointsInPolygon from 'random-points-on-polygon';

export function randomPoints(bound, count) {
	if(Array.isArray(bound)) return getPointsInBBox(bound, count)
	else return getPointsInPolygon(bound, count);
}

export function getPointsInPolygon(bound, count) {
		const points = randomPointsInPolygon(count, bound);
		return points.map(p => ({lat: p.geometry.coordinates[1], lng: p.geometry.coordinates[0]}));
}

export function getPointsInBBox(bbox, count) {
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
export function randomInRange(from, to, s, fixed) {
	from+= s/2;
	to+= s/2;
	if(to < from) to+= s;
    return ((Math.random() * (to - from) + from).toFixed(fixed) * 1) % s - s/2;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}