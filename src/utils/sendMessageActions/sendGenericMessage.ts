import { callSendAPI } from '../callSendAPI';
/*
 * Send a Structured Message (Generic Message type) using the Send API.
 *
 */
export function sendGenericMessage(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: 'rift',
              subtitle: 'Next-generation virtual reality',
              item_url: 'https://www.oculus.com/en-us/rift/',
              image_url: SERVER_URL + '/assets/rift.png',
              buttons: [
                {
                  type: 'web_url',
                  url: 'https://www.oculus.com/en-us/rift/',
                  title: 'Open Web URL'
                },
                {
                  type: 'postback',
                  title: 'Call Postback',
                  payload: 'Payload for first bubble'
                }
              ]
            },
            {
              title: 'touch',
              subtitle: 'Your Hands, Now in VR',
              item_url: 'https://www.oculus.com/en-us/touch/',
              image_url: SERVER_URL + '/assets/touch.png',
              buttons: [
                {
                  type: 'web_url',
                  url: 'https://www.oculus.com/en-us/touch/',
                  title: 'Open Web URL'
                },
                {
                  type: 'postback',
                  title: 'Call Postback',
                  payload: 'Payload for second bubble'
                }
              ]
            }
          ]
        }
      }
    }
  };

  callSendAPI(messageData);
}
