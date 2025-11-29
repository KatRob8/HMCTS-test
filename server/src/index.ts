import express from 'express';  
import type { Request, Response } from 'express';  
import cors from 'cors';
import env from 'dotenv';

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
app.get('/', (req: Request, res: Response) => {

    const items = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
    ];
    res.json(items);
});

app.post('/data', (req: Request, res: Response) => {
    const data = req.body;
    res.status(200).json({
        message: 'Data received successfully!',
        data
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});