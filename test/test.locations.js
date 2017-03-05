import { expect } from 'chai';
import { min, minBy, max, maxBy } from 'lodash';
import inside from '@turf/inside';
import * as locations from '../lib/locations.js';

const options = {
	bbox: [-180, -90, 180, 90], // A bounding box representing whole earth
	polygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]}},
	otherPolygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [102.0, 2.0], [105.0, 2.0], [105.0, 5.0], [102.0, 5.0], [102.0, 2.0]]]}},
	count: 100, // The amount of points to return
}

describe('locations.js', () => {

	describe('randomPoints(bound, count)', () => {
		it('Returns an array with proper length', () => {
			const result = locations.randomPoints(options.bbox, options.count);
			expect(result).to.have.lengthOf(options.count);
		})
		it('Returns an array with bbox bound', () => {
			const result = locations.randomPoints(options.bbox, options.count);
			expect(result).to.be.an('array');
		})
		it('Returns an array with polygon bound', () => {
			const result = locations.randomPoints(options.polygon, options.count);
			expect(result).to.be.an('array');
		})
		it('Returns an empty array with no arguments', () => {
			const result = locations.randomPoints();
			expect(result).to.be.an('array').and.to.have.lengthOf(0);
		})
	})
})