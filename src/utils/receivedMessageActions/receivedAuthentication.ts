import { sendTextMessage } from '../sendMessageActions';

/*
 * Authorization Event
 *
 * The value for 'optin.ref' is defined in the entry point. For the "Send to
 * Messenger" plugin, it is the 'data-ref' field. Read more at
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/authentication
 *
 */
const receivedAuthentication = (event: MessagingEvent) => {
  const senderID = event.sender.id;
  const recipientID = event.recipient.id;
  const timeOfAuth = event.timestamp;

  // The 'ref' field is set in the 'Send to Messenger' plugin, in the 'data-ref'
  // The developer can set this to an arbitrary value to associate the
  // authentication callback with the 'Send to Messenger' click event. This is
  // a way to do account linking when the user clicks the 'Send to Messenger'
  // plugin.
  const passThroughParam = event.optin.ref;

  console.log('Received authentication for user %d and page %d with pass ' + "through param '%s' at %d", senderID, recipientID, passThroughParam, timeOfAuth);

  // When an authentication is received, we'll send a message back to the sender
  // to let them know it was successful.

  sendTextMessage(senderID, 'Authentication successful');
};

export { receivedAuthentication };
