import { callSendAPI } from '../callSendAPI';

/*
 * Turn typing indicator on
 *
 */
export function sendTypingOn(recipientId: string) {
  console.log('Turning typing indicator on');

  const messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_on'
  };

  callSendAPI(messageData);
}
