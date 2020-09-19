const dcsdk = require('dragonchain-sdk');

// functions/GetFitzyBotUserObject.js
exports.handler = async (event) => {
  const { commandSource } = event.queryStringParameters;
  const { targetUsername } = event.queryStringParameters;
  const { contractId } = event.queryStringParameters;

  if (typeof commandSource === 'null' || commandSource.trim() == ''
        || typeof targetUsername === 'null' || targetUsername.trim() == ''
        || typeof contractId === 'null' || contractId.trim() == '') {
    return {
      statusCode: 500,
      body: 'Invalid parameters'
    };
  }

  const client = await dcsdk.createClient();

  const key = `${commandSource}-${targetUsername}`;

  return {
    statusCode: 200,
    body: JSON.stringify(await client.getSmartContractObject({ key, smartContractId: contractId }))
  };
};