import { expect } from 'chai';
import { min, minBy, max, maxBy } from 'lodash';
import inside from 'turf-inside';
import * as locations from '../lib/locations.js';

describe('locations.js', () => {

	const options = {
		bbox: [90, -180, -90, 180], // A bounding box representing whole earth
		polygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]}},
		otherPolygon: {"type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[ [102.0, 2.0], [105.0, 2.0], [105.0, 5.0], [102.0, 5.0], [102.0, 2.0]]]}},
		count: 100, // The amount of points to return
	}

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

	describe('getPointsInPolygon(bound, count)', () => {
		it('Returns points inside of polygon (positive)', () => {
			const result = locations.getPointsInPolygon(options.polygon, options.count).map(i => {
				return {"type": "Feature", "geometry": {"type": "Point", "coordinates":[i.lng, i.lat]}}
			});
			let flag = true;
			result.forEach(i => { if(!inside(i, options.polygon)) flag = false });
			expect(flag).to.equal(true);
		})
		it('Returns points inside of polygon (negative)', () => {
			const result = locations.getPointsInPolygon(options.polygon, options.count).map(i => {
				return {"type": "Feature", "geometry": {"type": "Point", "coordinates":[i.lng, i.lat]}}
			});
			let flag = true;
			result.forEach(i => { if(!inside(i, options.otherPolygon)) flag = false });
			expect(flag).to.equal(false);
		})
	})

	describe('getPointsInBBox(bound, count)', () => {
		const results = locations.getPointsInBBox([40, 0, 30, 20], options.count);
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
			results.push(locations.randomInRange(0, 100, 100))
		}
		it('Stays within lower bound', () => {
			const resultMin = min(results);
			expect(resultMin).to.be.above(-50);
		})
		it('Stays within upper bound', () => {
			const resultMax = max(results);
			expect(resultMax).to.be.below(50);
		})
	})
})