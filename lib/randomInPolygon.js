import randomCoordinate from './randomCoordinate';
import { pointsToGeoJSON } from './index.js';
import inside from '@turf/inside';
import extent from '@mapbox/extent';

export function randomInPolygon(polygon) {
	const bbox = getPolygonExtent(polygon);
	let point = randomCoordinate(bbox);
	while(!inside(pointsToGeoJSON([point])[0], polygon)) point = randomCoordinate(bbox);
	return point;
}

function getPolygonExtent(polygon) {
	const coords = polygon.geometry.coordinates[0];
	let ext = extent();
	coords.forEach(c => ext.include(c));
	return ext.bbox();
}

export default randomInPolygon;