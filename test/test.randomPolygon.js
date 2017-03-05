import { expect } from 'chai';
import { min, minBy, max, maxBy } from 'lodash';
import inside from '@turf/inside';
import * as rp from '../lib/randomInPolygon.js';
const options = {
	polygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]}},
	otherPolygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [102.0, 2.0], [105.0, 2.0], [105.0, 5.0], [102.0, 5.0], [102.0, 2.0]]]}}
}

describe('randomInPolygon(polygon)', () => {
	it('Returns point inside of polygon (positive)', () => {
		const result = getRandomPointsInPolygon(100, options.polygon);
		let flag = true;
		result.forEach(i => { if(!inside(i, options.polygon)) flag = false });
		expect(flag).to.equal(true);
	})
	it('Returns point inside of polygon (negative)', () => {
		const result = getRandomPointsInPolygon(100, options.polygon);
		let flag = true;
		result.forEach(i => { if(!inside(i, options.otherPolygon)) flag = false });
		expect(flag).to.equal(false);
	})
})

function getRandomPointsInPolygon(count,polygon) {
	const result = []
	for(var i = 0; i < count; i++) {
		result.push(rp.randomInPolygon(polygon));
	};
	return result.map(i => ({"type": "Feature", "geometry": {"type": "Point", "coordinates":[i.lng, i.lat]}}));
}