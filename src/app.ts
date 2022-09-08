import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// import { messageWebHook } from './modules/message-webhook';
// import { verifyWebhook } from './modules/verify-webhook';
import { authorize } from './routes/authorize';
import { webHook } from './routes/webHook';
import { verifyRequestSignature } from './utils/verifyRequestSignature';

const app = express();

app.set('port', process.env.PORT || 5000);
app.set('view engine','ejs'); 
// app.engine('ejs', require('ejs').__express);

//verify request came from facebook
app.use(bodyParser.json({
  verify: verifyRequestSignature
}));
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/webhook', webHook);
app.use('/authorize', authorize);
// app.get('/', verifyWebhook);
// app.post('/', messageWebHook);

export { app };
