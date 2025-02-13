const express = require('express');
const path = require('path');
const { ScanCommand } = require('@aws-sdk/client-dynamodb');
const dbClient = require('./db/dbClient'); // Make sure this file points to your DynamoDB client setup
const formsrequest = require('./routes/formsreqs');

const app = express();
const PORT = process.env.PORT || 3002;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.use(express.json())

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// using the forms request route
app.use('/formsreqs', formsrequest);

// to render the view of the index page
app.get('/', (req, res) => {
    res.render('index', { title: 'Pagina Principal' });
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
