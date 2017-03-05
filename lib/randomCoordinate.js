
// Accepts a bbox as an argument, defaulting to the whole earth, and returns a random point within it. 
export function randomCoordinate(bbox=[-180, -90, 180, 90]) {
	return {
		lat: randomInRange(bbox[1], bbox[3], 180, 4),
		lng: randomInRange(bbox[0], bbox[2], 360, 4),
	}
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

export default randomCoordinate;