import { expect } from 'chai';
import * as mirageo from '../lib/index.js';

const options = {
	bbox: [-180, -90, 180, 90], // A bounding box representing whole earth
	polygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]}},
	otherPolygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [102.0, 2.0], [105.0, 2.0], [105.0, 5.0], [102.0, 5.0], [102.0, 2.0]]]}},
	count: 100, // The amount of points to return
}

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
		it('Allows custom polygon bounds', () => {
			const result = mirageo.conjure({bound: options.polygon});
			expect(result).to.have.lengthOf(100);
		})
		it('Allows custom bbox bounds', () => {
			const result = mirageo.conjure({bound: options.bbox});
			expect(result).to.have.lengthOf(100);
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
