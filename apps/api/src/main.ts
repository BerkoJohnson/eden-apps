import * as http from 'http';
import app from './../src/app/app';
import { CONFIG } from './app/config';

http.createServer(app).listen(CONFIG.PORT, () => {
  console.log('EDEN-API server listening on port ' + CONFIG.PORT);
});
