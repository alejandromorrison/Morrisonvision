const express = require('express');
const path = require('path');
const { ScanCommand } = require('@aws-sdk/client-dynamodb');
const dbClient = require('./db/dbClient'); // Make sure this file points to your DynamoDB client setup

const app = express();
const PORT = process.env.PORT || 3002;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js app!');
});

// Users route to fetch data from DynamoDB
app.get('/users', async (req, res) => {
    try {
        const command = new ScanCommand({ TableName: 'UsersTable' });
        const response = await dbClient.send(command);

        const formattedItems = response.Items.map(item => ({
            id: item.PK.S,
            username: item.username.S,
            accesslevel: item.accesslevel.S,
            email: item.email.S,
            createdAt: item.createdAt.S,
        }));

        res.json(formattedItems);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
