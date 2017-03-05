import { randomPoints } from './locations.js';

const defaults = {
	bound: [-180, -90, 180, 90], // A bounding box representing whole earth
	count: 100, // The amount of points to return
	geojson: false // Return points as an array of coordinates instead of a geojson feature set
}

export function conjure(options) {
	options = Object.assign({}, defaults, options); // Merge options and defaults, declared options taking priority
	let points = randomPoints(options.bound, options.count);
	if(options.geojson) points = pointsToGeoJSON(points);
	return points;
}

export function pointsToGeoJSON(points=[]) {
	return points.map(p => ({
		"type": "Feature",
		"geometry": {"type": "Point", "coordinates": [p.lng, p.lat]}
	}));
}