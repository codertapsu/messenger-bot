import { callSendAPI } from '../callSendAPI';
/*
 * Send an image using the Send API.
 *
 */
export function sendImageMessage(recipientId: string, imagePath: string) {
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: imagePath
        }
      }
    }
  };

  callSendAPI(messageData);
}
