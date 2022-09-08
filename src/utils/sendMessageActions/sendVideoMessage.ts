import { callSendAPI } from '../callSendAPI';
/*
 * Send a video using the Send API.
 *
 */
export function sendVideoMessage(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "video",
        payload: {
          url: SERVER_URL + "/assets/allofus480.mov"
        }
      }
    }
  };

  callSendAPI(messageData);
}
