import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

import { app } from './app';

app.listen(app.get('port'), () => {
  console.log(`Express server is listening at: http://localhost${app.get('port')}`);
  console.log(process.env.FB_VERIFY_TOKEN);
});
