import { expect } from 'chai';
import * as locations from '../lib/locations.js';

describe('locations.js', () => {
	describe('randomPoints()', () => {
		it('Returns 1000', () => {
			const result = locations.randomPoints();
			expect(result).to.equal(1000);
		})
	})
	describe('getPointsInPolygon()', () => {
		it('Returns 1000', () => {
			const result = locations.getPointsInPolygon();
			expect(result).to.equal(1000);
		})
	})
	describe('getPointsInBBox()', () => {
		it('Returns 1000', () => {
			const result = locations.getPointsInBBox();
			expect(result).to.equal(1000);
		})
	})
	describe('randomInRange()', () => {
		it('Returns 1000', () => {
			const result = locations.randomInRange();
			expect(result).to.equal(1000);
		})
	})
})