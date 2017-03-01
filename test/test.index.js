import { expect } from 'chai';
import * as mirage from '../lib/index.js';

describe('mirage.js', () => {
	describe('conjure()', () => {
		it('Returns 1000', () => {
			const result = mirage.conjure();
			expect(result).to.equal(1000);
		})
	})
})
