const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');

const dbClient = new DynamoDBClient({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});


module.exports = dbClient;