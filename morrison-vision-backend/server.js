const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to my node .js app!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});