import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'fakeMyKeyId',
    secretAccessKey: 'fakeSecretAccessKey',
});

export default dynamoDB;