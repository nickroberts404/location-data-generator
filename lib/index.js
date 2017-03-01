import { randomPoints } from './locations.js';

const defaults = {
	bound: [90, -180, -90, 180], // A bounding box representing whole earth
	count: 100, // The amount of points to return
	geojson: false // Return points as an array of coordinates instead of a geojson feature set
}

export function conjure(options) {
	options = Object.assign({}, defaults, options); // Merge options and defaults, declared options taking priority
	return randomPoints(bound, count);
}