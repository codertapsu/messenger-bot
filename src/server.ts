import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${app.get('port')}`);
  console.log(process.env.FB_VERIFY_TOKEN);
});
