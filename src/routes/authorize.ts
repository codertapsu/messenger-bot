import express from 'express';
const authorize = express.Router();

/*
 * This path is used for account linking. The account linking call-to-action
 * (sendAccountLinking) is pointed to this URL.
 *
 */
authorize.get('/', (req, res) => {
  const accountLinkingToken = req.query.account_linking_token;
  const redirectURI = req.query.redirect_uri;
  console.log(req.query);
  

  // Authorization Code should be generated per user by the developer. This will
  // be passed to the Account Linking callback.
  // const authCode = '1234567890';

  // Redirect users to this URI on successful login
  // const redirectURISuccess = redirectURI + '&authorization_code=' + authCode;
// Authorization Code should be generated per user by the developer. This will
  // be passed to the Account Linking callback.
  const authCode = '1234567890';

  // Redirect users to this URI on successful login
  const redirectURISuccess = `${redirectURI}&authorization_code=${authCode}`;
  res.redirect();
  // res.render('authorize', {
  //   accountLinkingToken: accountLinkingToken,
  //   redirectURI: redirectURI,
  //   redirectURISuccess: redirectURISuccess,
  // });
});

export { authorize };
