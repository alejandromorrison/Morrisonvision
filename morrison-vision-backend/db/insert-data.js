const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = require("./dbClient");

const insertData = async () => {
  const params = {
    TableName: "UsersTable",
    Item: {
      PK: { S: "User#123" },
      username: { S: "admin" },
      accesslevel: { S: "admin" },
      email: { S: "admin@example.com" },
      createdAt: { S: new Date().toISOString() },
    },
  };

  try {
    const command = new PutItemCommand(params);
    const response = await dbClient.send(command);
    console.log("Data inserted successfully:", response);
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};

insertData();
