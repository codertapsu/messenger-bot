import { callSendAPI } from '../callSendAPI';
/*
 * Send a receipt message using the Send API.
 *
 */
export function sendReceiptMessage(recipientId: string) {
  const SERVER_URL = process.env.SERVER_URL;
  // Generate a random receipt ID as the API requires a unique ID
  const receiptId = 'order' + Math.floor(Math.random() * 1000);

  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'receipt',
          recipient_name: 'Peter Chang',
          order_number: receiptId,
          currency: 'USD',
          payment_method: 'Visa 1234',
          timestamp: '1428444852',
          elements: [
            {
              title: 'Oculus Rift',
              subtitle: 'Includes: headset, sensor, remote',
              quantity: 1,
              price: 599.0,
              currency: 'USD',
              image_url: SERVER_URL + '/assets/riftsq.png'
            },
            {
              title: 'Samsung Gear VR',
              subtitle: 'Frost White',
              quantity: 1,
              price: 99.99,
              currency: 'USD',
              image_url: SERVER_URL + '/assets/gearvrsq.png'
            }
          ],
          address: {
            street_1: '1 Hacker Way',
            street_2: '',
            city: 'Menlo Park',
            postal_code: '94025',
            state: 'CA',
            country: 'US'
          },
          summary: {
            subtotal: 698.99,
            shipping_cost: 20.0,
            total_tax: 57.67,
            total_cost: 626.66
          },
          adjustments: [
            {
              name: 'New Customer Discount',
              amount: -50
            },
            {
              name: '$100 Off Coupon',
              amount: -100
            }
          ]
        }
      }
    }
  };

  callSendAPI(messageData);
}
