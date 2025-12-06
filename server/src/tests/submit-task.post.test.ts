import request from 'supertest';
import type { Task } from '../types/Task.js';
import { describe, it, expect } from '@jest/globals';
import app from '../index.js';

describe("POST /submit-task", () => {
    it("Should create a task and return 201 with a task object when task data is valid", async () => {
        const newTask: Task = {
            title: 'Test task',
            description: 'A simple test task',
            status: 5,
            dateTime: '2025-06-12T19:30'
        };

        const response = await request(app)
            .post('/submit-task')
            .send({task: newTask})
            .expect(201)

        expect(response.body).toHaveProperty('newTask'); 
        expect(response.body.newTask).toHaveProperty('id'); 
        expect(response.body.newTask).toHaveProperty('createdTask'); 
        expect(response.body.newTask.createdTask.title).toBe(newTask.title);
        expect(response.body.newTask.createdTask.description).toBe(newTask.description);
        expect(response.body.newTask.createdTask.status).toBe(newTask.status);
        expect(response.body.newTask.createdTask.dateTime).toBe(newTask.dateTime);
    });

    it("Should return 400 error when task data is invalid", async () => {
        const newTask: Task = {
            title: '',
            description: 'A simple test task',
            status: 8,
            dateTime: '2025-06-12T19:30'
        };

        await request(app)
            .post('/submit-task')
            .send({task: newTask})
            .expect(400)
    });
})