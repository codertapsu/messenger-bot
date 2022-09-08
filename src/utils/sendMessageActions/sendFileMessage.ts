import { callSendAPI } from '../callSendAPI';
/*
 * Send a file using the Send API.
 *
 */
export function sendFileMessage(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "file",
        payload: {
          url: SERVER_URL + "/assets/test.txt"
        }
      }
    }
  };

  callSendAPI(messageData);
}
