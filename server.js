const express = require('express');
const app = express();
const PORT = 3000;

const { MenueItem } = require('./menu'); // Import the menu object

// Route to get all menu items
app.get('/menu', (req, res) => {
    res.json(MenueItem);
});

// Route to get items by category
app.get('/menu/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const category = MenueItem[categoryId];
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ error: 'Category not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
