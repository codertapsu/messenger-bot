import axios from 'axios';

const callSendAPI = async (messageData: MessageData) => {
  try {
    const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
    const url = `https://graph.facebook.com/v3.0/me/messages?access_token=${FB_PAGE_TOKEN}`;
    const response = await axios.post(url, messageData);
    if (response.status !== 200) {
      throw response;
    }
    const body = response.data;
    const recipientId = body.recipient_id;
    const messageId = body.message_id;

    if (messageId) {
      console.log('Successfully sent message with id %s to recipient %s', messageId, recipientId);
    } else {
      console.log('Successfully called Send API for recipient %s', recipientId);
    }
  } catch (error) {
    console.error('Failed calling Send API.');
  }
};

export { callSendAPI };
