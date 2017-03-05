import randomCoordinate from './randomCoordinate';
import randomInPolygon from './randomInPolygon';

export function randomPoints(bound, count) {
	const arr = [];
	if (!count || !bound) return arr;
	for (var i = 0; i < count; i++) {
		arr.push(Array.isArray(bound) ? randomCoordinate(bound) : randomInPolygon(bound));
	}
	return arr;
}