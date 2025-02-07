const express = require('express');
const router = express.Router();

// Dummy database
let items = [];

// Create (POST)
router.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json({ message: 'Item created', item });
});

// Read (GET)
router.get('/items', (req, res) => {
    res.json(items);
});

// Update (PUT)
router.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items = items.map(item => (item.id === id ? updatedItem : item));
    res.json({ message: 'Item updated', updatedItem });
});

// Delete (DELETE)
router.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== id);
    res.json({ message: 'Item deleted' });
});

module.exports = router;
