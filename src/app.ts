import bodyParser from 'body-parser';
import ConnectMongoDBSession from 'connect-mongodb-session';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import { createStream } from 'rotating-file-stream';

import { logConversation, logFallback } from './bot/libs/AgentEvents';
import globals from './bot/libs/globals';
import { Agent } from './bot/tensorflowjs/agent';
import config from './config';
import { agentRoute } from './routes/agent.route';
import { authorize } from './routes/authorize';
import { webHook } from './routes/webHook';
// import { verifyRequestSignature } from './utils/verifyRequestSignature';

const AgentInstance = new Agent(config.Language);

global.appRoot = process.cwd();
global.AgentInstance = AgentInstance;

mongoose
  .connect(config.DB)
  .then(async () => {
    console.log('MongoDB Connected');
    //setup the agent
    console.log('Starting build agent');
    await AgentInstance.buildAgent(false);
    console.log('Agent ready');
    //events
    AgentInstance.on('fallback', logFallback);
    AgentInstance.on('conversation', logConversation);
  })
  .catch(err => console.log(err));

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
  uri: config.DB,
  collection: 'mySessions',
});

const app = express();

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
// app.engine('ejs', require('ejs').__express);

// setup the logger
const accessLogStream = createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(globals.RootPath(), 'log'),
  size: '5M', // rotate every 10 MegaBytes written
  compress: 'gzip', // compress rotated files
});
const logger = morgan('combined', { stream: accessLogStream });
app.use(logger);

//verify request came from facebook
// app.use(
//   bodyParser.json({
//     verify: verifyRequestSignature,
//   }),
// );
// Process application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
// Process application/json
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(
  session({
    secret: config.BotName,
    resave: false,
    store: store,
    saveUninitialized: false,
  }),
);
app.use('/webhook', webHook);
app.use('/authorize', authorize);
app.use('/', agentRoute);

export { app };
