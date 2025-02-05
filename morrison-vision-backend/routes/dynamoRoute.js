// routes/dynamoRoute.js
import express from 'express';
import dynamoDB from '../lib/dynamodb';

const router = express.Router();

// Route to get data from DynamoDB
router.get('/testDynamoDB', async (req, res) => {
  try {
    const params = {
      TableName: 'TestTable',  // Make sure this matches the table you created
    };

    // Scan table for all items
    const data = await dynamoDB.scan(params).promise();

    // Return data as JSON
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to connect to DynamoDB' });
  }
});

export default router;
