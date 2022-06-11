const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi(process.env.BEARER_TOKEN);

exports.handler = async (event) => {
  const param = event.queryStringParameters.username;

  try {
    const userTimeline = await client.v1.userTimelineByUsername(param);
    const userData = await userTimeline.tweets;
    
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
      },
      body: JSON.stringify(userData)
    };
    return response;

  } catch(error) {
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};