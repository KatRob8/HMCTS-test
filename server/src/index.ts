import express from 'express';  
import type { Request, Response } from 'express';  
import cors from 'cors';
import env from 'dotenv';
import db from './db.js';
import { validateTask } from './validateTask.js';

const app = express();
env.config({ path: '../.env' });
const port = process.env.PORT
const corsOptions = {
    origin: [`http://localhost:${process.env.REACT_APP_PORT}`],
    credentials: true
};

// Middleware 
app.use(cors(corsOptions)); 
app.use(express.json());

// Routes

app.post('/submit-task', (req: Request, res: Response) => {
    // Validate the data
    const {isValid, errors, task} = validateTask(req.body.task);

    if (!isValid) {
        // Return error if invalid
        return res.status(400).json({
            error: "Validation failed",
            details: errors,
        });
    }
    else {
        // Data is valid, store in database
        const {title, description, status, dateTime} = task;

        try {
            const stmt = db.prepare("INSERT INTO tasks (title, description, status, date_time) VALUES (?, ?, ?, ?) RETURNING *");
            const result = stmt.run(title, description, status, dateTime);

            // Send data back to client
            res.status(201).json({
                newTask: {id: result.lastInsertRowid, createdTask: {title, description, status, dateTime}},
                message: 'Task created!',
            });

        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong'
            })
        } 
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});