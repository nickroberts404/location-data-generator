import randomPointsInPolygon from 'random-points-on-polygon';

export function randomPoints(bound, count) {
	if (!count || !bound) return [];
	else if(Array.isArray(bound)) return getPointsInBBox(bound, count)
	else return getPointsInPolygon(bound, count);
}

export function getPointsInPolygon(bound, count) {
		const points = randomPointsInPolygon(count, bound);
		return points.map(p => ({lat: p.geometry.coordinates[1], lng: p.geometry.coordinates[0]}));
}

export function getPointsInBBox(bound, count) {
	const arr = []
	for (var i = 0; i < count; i++) {
		arr.push({
			lat: randomInRange(bound[2], bound[0], 180, 4),
			lng: randomInRange(bound[1], bound[3], 360, 4),
		});
	}
	return arr;
}

// s is the # of values before the cycle repeats (the earth being a sphere).
// given an s of x, this will return a function between -x/2 and x/2.
// It seems confusing now, but it was created for using with lat, lng.
export function randomInRange(from, to, s, fixed=1) {
	from+= s/2;
	to+= s/2;
	if(to < from) to+= s;
    return ((Math.random() * (to - from) + from).toFixed(fixed) * 1) % s - s/2;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}