import crypto from 'crypto';

// App Secret can be retrieved from the App Dashboard

export function verifyRequestSignature(req: any, res: any, buf: any) {
  const FB_APP_SECRET = process.env.FB_APP_SECRET;
  const signature = req.headers["x-hub-signature"];

  if (!signature) {
    // For testing, let's log an error. In production, you should throw an
    // error.
    console.error("Couldn't validate the signature.");
  } else {
    const elements = signature.split('=');
    const method = elements[0];
    const signatureHash = elements[1];

    const expectedHash = crypto.createHmac('sha1', FB_APP_SECRET!)
      .update(buf)
      .digest('hex');

    if (signatureHash != expectedHash) {
      throw new Error("Couldn't validate the request signature.");
    }
  }
}
