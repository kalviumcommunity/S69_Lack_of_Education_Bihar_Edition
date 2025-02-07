const express = require('express');
const app = express();
const routes = require('./routes'); // Import the routes

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

// Define the /ping route
app.get('/ping', (req, res) => {
    res.send('Devansh Singh');
});

// Mount the CRUD API routes under /api
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
