// app/api/testDynamoDB/route.js
import * as AWS from 'aws-sdk';
import dynamoDB from '../../../../lib/dynamodb';

export async function GET(request) {
  try {
    const params = {
      TableName: 'TestTable',  // Make sure the table name is correct
    };

    const data = await dynamoDB.scan(params).promise();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to connect to DynamoDB' }), { status: 500 });
  }
}
