import { expect } from 'chai';
import * as mirageo from '../lib/index.js';

describe('mirageo.js', () => {
	describe('conjure()', () => {
		it('Defaults to 100 points', () => {
			const result = mirageo.conjure();
			expect(result).to.have.lengthOf(100);
		})
		it('Allows custom point counts', () => {
			const result = mirageo.conjure({count: 589});
			expect(result).to.have.lengthOf(589);
		})
	})
	describe('pointsToGeoJSON(points)', () => {
		it('Returns empty array with no arguments', () => {
			const result = mirageo.pointsToGeoJSON();
			expect(result).to.have.lengthOf(0);
		})
		it('Returns valid geoJSON', () => {
			const result = mirageo.pointsToGeoJSON([{lat: 75.12979999999999, lng: 141.9685}]);
			expect(result[0]).to.contain.all.keys(['type', 'geometry']);
		})
	})
})
