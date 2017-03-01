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
			expect(result).to.have.lengthOf(589);
		})
	})
})
