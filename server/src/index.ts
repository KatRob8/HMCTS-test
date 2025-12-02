import express from 'express';  
import type { Request, Response } from 'express';  
import cors from 'cors';
import env from 'dotenv';
import db from './db.js';

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
    // Get data from form
    const {title, description, status, dateTime} = req.body.task;

    // Clean the data

    try {
        const stmt = db.prepare("INSERT INTO tasks (title, description, status, date_time) VALUES (?, ?, ?, ?)");
        stmt.run(title, description, status, dateTime);

        res.status(200).json({
            data: {title, description, status, dateTime},
            message: 'Data received successfully!',
        });

    } catch (error) {
        // Res status here
        console.error("Database error:", error);
    } 
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});