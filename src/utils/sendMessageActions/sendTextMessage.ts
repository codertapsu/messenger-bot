import { callSendAPI } from '../callSendAPI';
/*
 * Send a text message using the Send API.
 *
 */
export function sendTextMessage(recipientId: string, messageText: string) {
  const messageData: MessageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText,
      metadata: 'DEVELOPER_DEFINED_METADATA'
    }
  };

  callSendAPI(messageData);
}
