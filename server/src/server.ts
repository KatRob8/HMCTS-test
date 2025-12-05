import app from './index.js';
import env from 'dotenv';

env.config({ path: '../.env' });

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});