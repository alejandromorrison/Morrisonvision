const { ScanCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = require("./dbClient");

const queryData = async () => {
  const params = {
    TableName: "UsersTable",
  };

  try {
    const command = new ScanCommand(params);
    const response = await dbClient.send(command);
    console.log("Data retrieved:", response.Items);
  } catch (err) {
    console.error("Error retrieving data:", err);
  }
};

queryData();
