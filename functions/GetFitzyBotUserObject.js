const dcsdk = require("dragonchain-sdk");

// functions/GetFitzyBotUserObject.js
exports.handler = async (event) => {
    const commandSource = event.queryStringParameters.commandSource;
    const targetUsername = event.queryStringParameters.targetUsername;
    const contractId = event.queryStringParameters.contractId;

    if (typeof commandSource === "null" || commandSource.trim() == "" || 
        typeof targetUsername === "null" || targetUsername.trim() == "")
    {
        return {
            statusCode: 500,
            body: 'Invalid parameters'
        };
    } else {

        const client = await dcsdk.createClient();

        const key = `${commandSource}-${targetUsername}`;

        return {
            statusCode: 200,
            body: JSON.stringify(await client.getSmartContractObject({"key": key, "smartContractId": contractId}))
        };
    }
  }