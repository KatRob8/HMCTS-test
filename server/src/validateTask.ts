import type { Task } from './types/Task.js';


export function validateTask(data: any): { isValid: boolean; errors: string[]; task: Task } {

    console.log(data);


    const {title, description, status, dateTime} = data;

    let task: Task = {title: '', description: null, status: 0, dateTime: ''};
    const errors: string[] = [];

    // Validate title
    const trimmedTitle = title.trim();
    if (typeof trimmedTitle !== 'string' || trimmedTitle.length === 0 ) {
        errors.push('The title is required and must be a non-empty string');
    }
    else {
        task.title = trimmedTitle;
    }

    // Validate description
    const trimmedDescription = description.trim();
    if (trimmedDescription !== undefined && typeof trimmedDescription !== "string") {
        errors.push('If the description is provided it must be a string');
    }
    else if (trimmedDescription === undefined || trimmedDescription.length === 0) {
        task.description = null;
    }
    else {
        task.description = trimmedDescription;
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
        errors.push("Datetime must be a valid date");
    }
    else {
        task.dateTime = dateTime;
    }

    return {
        isValid: errors.length === 0,
        errors,
        task
    };
}