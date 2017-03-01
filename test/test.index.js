const expect = require('chai').expect;
const mirage = require('../dist/mirage.js');

describe('mirage.js', () => {
	describe('conjure()', () => {
		it('Returns 1000', () => {
			const result = mirage.conjure();
			expect(result).to.equal(1000);
		})
	})
})
