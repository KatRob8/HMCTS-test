import type { Task } from '../types/Task.js';

// Function returns a task only if all data can be validated
export function validateTask(data: any): { errors: string[]; task: Task | null } {

    const {title, description, status, dateTime} = data;

    // Initialise variables
    let task: Task | null = {title: '', description: null, status: 0, dateTime: ''};
    const errors: string[] = [];

    // Check all necessary arguments have been passed
    if (!title || !status || !dateTime) {
        errors.push('One or more of the required arguments are missing')
    }
    else {

        // Validate title
        if (typeof title !== 'string' || title.trim().length === 0 ) {
            errors.push('The title is required and must be a non-empty string');
        }
        else {
            task.title = title.trim();
        }

        // Validate description

        if (description !== undefined && typeof description !== "string") {
            errors.push('If the description is provided it must be a string');
        }
        else if (description === undefined || description.length === 0) {
            task.description = null;
        }
        else {
            task.description = description.trim();
        }

        // Validate status
        const newStatus = Number(status);

        if (isNaN(newStatus) || !Number.isInteger(newStatus) || newStatus < 1 || newStatus > 5) {
            errors.push("Status must be an integer between 1 and 5");
        }
        else {
            task.status = newStatus;
        }

        // Validate date & time
        if (typeof dateTime !== 'string' || isNaN(Date.parse(dateTime))) {
            errors.push("Datetime must be a valid date string");
        }
        else {
            task.dateTime = dateTime;
        }
    }

    if (errors.length !== 0) {
        task = null;
    }

    return {
        errors,
        task
    };
}