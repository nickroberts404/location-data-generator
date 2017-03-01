import { expect } from 'chai';
import { conjure } from '../dist/mirage.js';

describe('mirage.js', () => {
	describe('conjure()', () => {
		it('Returns 1000', () => {
			const result = conjure();
			expect(result).to.equal(1000);
		})
	})
})