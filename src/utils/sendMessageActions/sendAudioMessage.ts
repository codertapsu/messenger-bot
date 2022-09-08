import { callSendAPI } from '../callSendAPI';
/*
 * Send audio using the Send API.
 *
 */
export function sendAudioMessage(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "audio",
        payload: {
          url: SERVER_URL + "/assets/sample.mp3"
        }
      }
    }
  };

  callSendAPI(messageData);
}
