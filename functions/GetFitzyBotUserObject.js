const dcsdk = require("dragonchain-sdk");

// functions/GetFitzyBotUserObject.js
exports.handler = async (event) => {
    const commandSource = event.queryStringParameters.commandSource;
    const targetUsername = event.queryStringParameters.targetUsername;

    if (typeof commandSource === null || commandSource.trim() == "" || 
        typeof targetUsername === null || targetUsername.trim() == "")
    {
        return {
            statusCode: 500,
            body: 'Invalid parameters'
        };
    } else {

        const client = await dcsdk.createClient();

        return {
            statusCode: 200,
            body: await client.getStatus()
        };
    }
  }