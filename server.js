const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Define the /ping route
app.get('/ping', (req, res) => {
    res.send('Devansh Singh');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
