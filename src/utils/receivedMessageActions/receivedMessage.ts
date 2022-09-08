import globals from '../../bot/libs/globals';
import {
  sendImageMessage,
  sendGifMessage,
  sendAudioMessage,
  sendVideoMessage,
  sendFileMessage,
  sendButtonMessage,
  sendGenericMessage,
  sendReceiptMessage,
  sendQuickReply,
  sendReadReceipt,
  sendTypingOn,
  sendTypingOff,
  sendAccountLinking,
  sendTextMessage,
} from '../sendMessageActions';

/*
 * Message Event
 *
 * This event is called when a message is sent to your page. The 'message'
 * object format can vary depending on the kind of message that was received.
 * Read more at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received
 *
 * For this example, we're going to echo any text that we get. If we get some
 * special keywords ('button', 'generic', 'receipt'), then we'll send back
 * examples of those bubbles to illustrate the special message bubbles we've
 * created. If we receive a message with an attachment (image, video, audio),
 * then we'll simply confirm that we've received the attachment.
 *
 */
const receivedMessage = async(event: MessagingEvent) => {
  const SERVER_URL = process.env.SERVER_URL;
  const senderID = event.sender.id;
  const recipientID = event.recipient.id;
  const timeOfMessage = event.timestamp;
  const message = event.message;

  console.log('Received message for user %d and page %d at %d with message:', senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  const isEcho = message.is_echo;
  const messageId = message.mid;
  const appId = message.app_id;
  const metadata = message.metadata;

  // You may get a text or attachment but not both
  const messageText = message.text;
  const messageAttachments = message.attachments;
  const quickReply = message.quick_reply;

  if (isEcho) {
    // Just logging message echoes to console
    console.log('Received echo for message %s and app %d with metadata %s', messageId, appId, metadata);
    return;
  } else if (quickReply) {
    const quickReplyPayload = quickReply.payload;
    console.log('Quick reply for message %s with payload %s', messageId, quickReplyPayload);
    const { response } = await globals.AgentInstance().response(quickReplyPayload, senderID);
    sendTextMessage(senderID, response || 'Quick reply tapped');
    return;
  }

  if (messageText) {
    // If we receive a text message, check to see if it matches any special
    // keywords and send back the corresponding example. Otherwise, just echo
    // the text we received.
    console.log('Received a new message: ', messageText);
    const type = messageText
      .replace(/[^\w\s]/gi, '')
      .trim()
      .toLowerCase();
    switch (type) {
      case 'image': {
        sendImageMessage(senderID, SERVER_URL + '/assets/rift.png');
        break;
      }

      case 'gif': {
        sendGifMessage(senderID);
        break;
      }

      case 'audio': {
        sendAudioMessage(senderID);
        break;
      }

      case 'video': {
        sendVideoMessage(senderID);
        break;
      }

      case 'file': {
        sendFileMessage(senderID);
        break;
      }

      case 'button': {
        sendButtonMessage(senderID);
        break;
      }

      case 'generic': {
        sendGenericMessage(senderID);
        break;
      }

      case 'receipt': {
        sendReceiptMessage(senderID);
        break;
      }

      case 'quick reply':
        sendQuickReply(senderID);
        break;

      case 'read receipt': {
        sendReadReceipt(senderID);
        break;
      }

      case 'typing on': {
        sendTypingOn(senderID);
        break;
      }

      case 'typing off': {
        sendTypingOff(senderID);
        break;
      }

      case 'account linking': {
        sendAccountLinking(senderID);
        break;
      }

      default: {
        const { response } = await globals.AgentInstance().response(messageText, senderID);
        sendTextMessage(senderID, response);
      }
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, 'Attachment received. Thank you.');
  }
};

export { receivedMessage };
