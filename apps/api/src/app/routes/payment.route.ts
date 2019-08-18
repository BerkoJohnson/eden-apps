import { Application } from 'express';

import { IRoute } from './route.interface';
import { checkJWT } from '../middlewares';
import { AccountController } from '../controllers/account.controller';

const URL = '/api/payments';

export class PaymentRoutes implements IRoute {
  public routes(app: Application): void {
    app.route(`${URL}`)
      .get([checkJWT], AccountController.getPayments)
      .post([checkJWT], AccountController.createAccount);

    app.route(`${URL}/:id`)
      .get([checkJWT], AccountController.getAccount)
      .delete([checkJWT], AccountController.deleteAccount)

    app.route(`${URL}/student/:id`)
      .get([checkJWT], AccountController.getAccountByStudentID);

    app.route(`${URL}/payment/:id`)
      .get([checkJWT], AccountController.getPayment)
      .patch([checkJWT], AccountController.updatePayment)
      .delete([checkJWT], AccountController.deletePayment);
  }
}
