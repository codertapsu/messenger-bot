import { callSendAPI } from '../callSendAPI';
/*
 * Send a message with the account linking call-to-action
 *
 */
export function sendAccountLinking(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  console.log({SERVER_URL});
  
  const messageData: MessageData = {
    recipient: {
      id: recipientId,
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'Welcome. Link your account.',
          buttons: [
            {
              type: 'account_link',
              url: SERVER_URL + '/authorize',
            },
          ],
        },
      },
    },
  };

  callSendAPI(messageData);
}
