import * as bodyParser from 'body-parser';
import * as express from 'express';
import { connect } from 'mongoose';
import * as morgan from 'morgan';

import Routes from './routes';
import { CONFIG } from './config';

class App {
  public app: express.Application;
  public mongoUrl = `mongodb://localhost:27017/${CONFIG.DB_URL}`;

  constructor() {
    this.app = express();
    this.config();
    Routes.initiateRoutes(this.app);
    this.connectMongoDB();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
  }

  private connectMongoDB(): void {
    connect(
      this.mongoUrl,
      { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
    );
  }
}

export default new App().app;
