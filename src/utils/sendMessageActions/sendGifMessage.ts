import { callSendAPI } from '../callSendAPI';
/*
 * Send a Gif using the Send API.
 *
 */
export function sendGifMessage(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: SERVER_URL + '/assets/instagram_logo.gif'
        }
      }
    }
  };

  callSendAPI(messageData);
}
