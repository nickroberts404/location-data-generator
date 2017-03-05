import { expect } from 'chai';
import { min, minBy, max, maxBy } from 'lodash';
import inside from '@turf/inside';
import * as rc from '../lib/randomCoordinate.js';
const options = {
	bbox: [-180, -90, 180, 90], // A bounding box representing whole earth
	otherbbox: [0, 30, 20, 40]
}

describe('randomCoordinate(bound)', () => {
	const results = getRandomPointsInBBox(100, options.otherbbox);
	it('Stays within lower bound (lat)', () => {
		const resultMin = minBy(results, i => i.lat);
		expect(resultMin.lat).to.be.above(30);
	})
	it('Stays within upper bound (lat)', () => {
		const resultMax = maxBy(results, i => i.lat);
		expect(resultMax.lat).to.be.below(40);
	})
	it('Stays within lower bound (lng)', () => {
		const resultMin = minBy(results, i => i.lng);
		expect(resultMin.lng).to.be.above(0);
	})
	it('Stays within upper bound (lng)', () => {
		const resultMax = maxBy(results, i => i.lng);
		expect(resultMax.lng).to.be.below(20);
	})
})

describe('randomInRange(from, to, s, fixed)', () => {
	var results = [];
	for (var i = 0; i < 100; i++){
		results.push(rc.randomInRange(0, 100, 100))
	}
	it('Stays within lower bound', () => {
		const resultMin = min(results);
		expect(resultMin).to.be.above(-51);
	})
	it('Stays within upper bound', () => {
		const resultMax = max(results);
		expect(resultMax).to.be.below(51);
	})
})


function getRandomPointsInBBox(count,bbox) {
	const result = []
	for(var i = 0; i < count; i++) {
		result.push(rc.randomCoordinate(bbox));
	};
	return result;
}