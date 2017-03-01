import { expect } from 'chai';
import * as mirage from '../lib/index.js';

describe('mirage.js', () => {
	describe('conjure()', () => {
		it('Defaults to 100 points', () => {
			const result = mirage.conjure();
			expect(result).to.have.lengthOf(100);
		})
		it('Allows custom point counts', () => {
			const result = mirage.conjure({count: 589});
			console.log(result[1])
			expect(result).to.have.lengthOf(589);
		})
	})
	describe('pointsToGeoJSON(points)', () => {
		it('Returns empty array with no arguments', () => {
			const result = mirage.pointsToGeoJSON();
			expect(result).to.have.lengthOf(0);
		})
		it('Returns valid geoJSON', () => {
			const result = mirage.pointsToGeoJSON();
			expect(result).to.have.lengthOf(0);
		})
	})
})
