const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

// Create DynamoDB client
const client = new DynamoDBClient({
  region: 'us-west-2', // Region of your local DynamoDB instance
  endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
});

// Create the parameters for the PutItem command
const params = {
  TableName: 'UsersTable',
  Item: {
    'PK': { S: 'User#123' },         // Partition key
    'username': { S: 'admin' },      // Attribute 1
    'accesslevel': { S: 'admin' },   // Attribute 2
    'email': { S: 'admin@example.com' },  // Attribute 3
    'createAt': { S: '2025-02-06T12:00:00Z' },  // Attribute 4
  },
};

const run = async () => {
  try {
    const data = await client.send(new PutItemCommand(params));
    console.log('Item successfully inserted:', data);
  } catch (err) {
    console.error('Error inserting item:', err);
  }
};

// Execute the function
run();
