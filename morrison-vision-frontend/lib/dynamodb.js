import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: "http://localhost:8000",
});

export default dynamoDB;