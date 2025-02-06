const express = require("express");
const router = express.Router();
const { ScanCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = require("../db/dbClient"); // DynamoDB client instance

// Define the '/users' GET route
router.get("/users", async (req, res) => {
  try {
    const command = new ScanCommand({ TableName: "UsersTable" }); // Fetch all users from DynamoDB
    const response = await dbClient.send(command); // Send the scan command
    const formattedItems = response.Items.map(item => ({
      id: item.PK.S,
      username: item.username.S,
      accesslevel: item.accesslevel.S,
      email: item.email.S,
      createdAt: item.createdAt.S,
    }));
    res.json(formattedItems); // Send the users as a JSON response
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router; // Export the router
