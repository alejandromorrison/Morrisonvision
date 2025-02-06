// Import the necessary modules from AWS SDK v3
const { DynamoDBClient, CreateTableCommand } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/lib-dynamodb');

// Create the DynamoDB client
const client = new DynamoDBClient({
  region: 'us-west-2', // Choose your region
  endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
});

// Define the table creation parameters
const params = {
  TableName: 'UsersTable',
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' }, // String type for the PK
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

// Run the command to create the table
const createTable = async () => {
  try {
    const data = await client.send(new CreateTableCommand(params));
    console.log('Table created successfully:', data);
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

createTable();
