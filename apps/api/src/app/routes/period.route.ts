import { Application } from 'express';
import { checkJWT } from '../middlewares';
import { PeriodController } from '../controllers/period.controller';
import { IRoute } from './route.interface';

const URL = '/api/periods';

export class PeriodRoutes implements IRoute {
  public routes(app: Application): void {
    // PERIOD ROUTES
    app.route(`${URL}`).get([checkJWT], PeriodController.getPeriods);

    app.route(`${URL}/lessons`).get([checkJWT], PeriodController.today);
    app.route(`${URL}/time-table`).get([checkJWT], PeriodController.time_table);

    app
      .route(`${URL}/:id`)
      .get([checkJWT], PeriodController.getPeriod)
      .patch([checkJWT], PeriodController.updatePeriod)
      .delete([checkJWT], PeriodController.deletePeriod);

    app
      .route(`${URL}/:id/change-day`)
      .patch([checkJWT], PeriodController.changeDay);

    app
      .route(`${URL}/:id/change-time`)
      .patch([checkJWT], PeriodController.changeTime);

    app
      .route(`${URL}/:id/resign-period`)
      .patch([checkJWT], PeriodController.resignPeriod);
  }
}
