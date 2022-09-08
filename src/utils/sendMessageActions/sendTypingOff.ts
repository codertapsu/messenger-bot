import { callSendAPI } from '../callSendAPI';

/*
 * Turn typing indicator off
 *
 */
export function sendTypingOff(recipientId: string) {
  console.log('Turning typing indicator off');

  const messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_off'
  };

  callSendAPI(messageData);
}
