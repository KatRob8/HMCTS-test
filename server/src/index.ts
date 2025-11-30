import express from 'express';  
import type { Request, Response } from 'express';  
import cors from 'cors';
import env from 'dotenv';
import { Client } from 'pg';

const app = express();
env.config({ path: '../.env' });
const port = process.env.PORT
const corsOptions = {
    origin: [`http://localhost:${process.env.REACT_APP_PORT}`],
    credentials: true
};

// Create a new client instance
const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, 
    },
});

// Connect to database
try {
    await db.connect();
    console.log('Connected to PostgreSQL');
} catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
}


// Middleware 
app.use(cors(corsOptions)); 
app.use(express.json());

// Routes

app.post('/submit-task', async (req: Request, res: Response) => {
    // Get data from form
    const {title, description, status, dateTime} = req.body.task;

    try {
        await db.query("INSERT INTO tasks (title, description, status, datetime) VALUES ($1, $2, $3, $4)", [title, description, status, dateTime]);
    } catch (error) {
        console.log(error)
    }
    
    res.status(200).json({
        message: 'Data received successfully!',
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});