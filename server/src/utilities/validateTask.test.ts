import { describe, it, expect } from '@jest/globals';
import { validateTask } from './validateTask.js';

describe('validateTask', () => {

    // Fix function to handle random input 

    it('returns error when title is missing', () => {
        const result = validateTask({ description: 'desc', status: '1', dateTime:'2025-06-12T19:30'});

        expect(result.isValid).toBe(false);                    // uses toBe since checking a value
        expect(result.errors).toContain("The title is required and must be a non-empty string");
    });

    it("returns errors when title is an empty string", () => {
    const result = validateTask({ title: '' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("The title is required and must be a non-empty string");
  });
});