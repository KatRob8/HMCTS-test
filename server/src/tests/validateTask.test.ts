import { describe, it, expect } from '@jest/globals';
import { validateTask } from '../utilities/validateTask.js';

describe('validateTask', () => {

    it('returns error when title is missing', () => {
        const result = validateTask({ description: 'desc', status: 1, dateTime:'2025-06-12T19:30'});

        expect(result.task).toBe(null);                  
        expect(result.errors).toContain('One or more of the required arguments are missing');
    });

    it('returns error when title is an empty string', () => {
        const result = validateTask({ title: '', status: 1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('One or more of the required arguments are missing');
    });

    it('returns error when no arguments are passed', () => {
        const result = validateTask({});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('One or more of the required arguments are missing');
    })

    it('returns error when title has multiple trailing spaces', () => {
        const result = validateTask({title: '     ', description: 'desc', status: 1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('The title is required and must be a non-empty string');
    })

    it('returns error when title is not a string', () => {
        const result = validateTask({ title: 2, description: 'desc', status: 1, dateTime: '2025-06-12T19:30' });

        expect(result.task).toBe(null);
        expect(result.errors).toContain('The title is required and must be a non-empty string');
    });

    it('returns a trimmed title in the task object if input data is valid', () => {
        const result = validateTask({title: 'title   ', status: 1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toStrictEqual({title: 'title', description: null, status: 1, dateTime: '2025-06-12T19:30'});
    })

    it('does not return error when optional description is empty', () => {
        const result = validateTask({title: 'title', status: 3, dateTime: '2025-06-12T19:30'});

        expect(result.task).toStrictEqual({title: 'title', description: null, status: 3, dateTime: '2025-06-12T19:30'});
        expect(result.errors).toHaveLength(0);
    });

    it('returns error if description is not a string', () => {
        const result = validateTask({title: 'title', description: true, status: 1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('If the description is provided it must be a string');
    });

    it('returns a trimmed description in the task object if input data is valid', () => {
        const result = validateTask({title: 'title', description: '  desc  ', status: 1, dateTime: '2025-06-12T19:30'})

        expect(result.task).toStrictEqual({title: 'title', description: 'desc', status: 1, dateTime: '2025-06-12T19:30'})
    });

    it('returns error if status is not a number', () => {
        const result = validateTask({title: 'title', status: 'complete', dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('Status must be an integer between 1 and 5');
    });

    it('returns error if status is not an integer', () => {
        const result = validateTask({title: 'title', status: '0.5', dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('Status must be an integer between 1 and 5');
    });

    it('returns error if status is less than 1', () => {
        const result = validateTask({title: 'title', status: -1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('Status must be an integer between 1 and 5');
    });

    it('returns error if status is greater than 5', () => {
        const result = validateTask({title: 'title', status: 6, dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('Status must be an integer between 1 and 5');
    });

    it('returns error when status is missing', () => {
        const result = validateTask({title: 'title', description: 'desc', dateTime: '2025-06-12T19:30'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('One or more of the required arguments are missing');
    });

    it('returns error when dateTime argument is missing', () => {
        const result = validateTask({title: 'title', description: 'desc', status: '1'});
        
        expect(result.task).toBe(null);
        expect(result.errors).toContain('One or more of the required arguments are missing');
    });

    it('returns error when dateTime is not a string', () => {
        const result = validateTask({title: 'title', status: 4, dateTime: 2025});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('Datetime must be a valid date string');
    });

    it('returns error when dateTime is not a valid date', () => {
        const result = validateTask({title: 'title', status: 4, dateTime: '25/12/2005'});

        expect(result.task).toBe(null);
        expect(result.errors).toContain('Datetime must be a valid date string')
    });

    it('returns a task and no errors when arguments are valid (no description)', () => {
        const result = validateTask({title: 'A title', status: 1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toStrictEqual({title: 'A title', description: null, status: 1, dateTime: '2025-06-12T19:30'})
        expect(result.errors).toHaveLength(0)
    });

    it('returns a task and no errors when arguments are valid (description)', () => {
        const result = validateTask({title: 'A title', description: 'desc', status: 1, dateTime: '2025-06-12T19:30'});

        expect(result.task).toStrictEqual({title: 'A title', description: 'desc', status: 1, dateTime: '2025-06-12T19:30'})
        expect(result.errors).toHaveLength(0)
    });
});