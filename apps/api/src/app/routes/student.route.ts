import { Application } from 'express';
import * as multer from 'multer';

import { IRoute } from './route.interface';
import { checkJWT } from '../middlewares';
import { StudentController } from '../controllers/student.controller';

const upload = multer({ dest: '/tmp/' });
const STUDENT_URL = '/api/students';

export class StudentRoutes implements IRoute {
  public routes(app: Application) {
    app
      .route(`${STUDENT_URL}`)
      .get([checkJWT], StudentController.getByPage)
      .post([checkJWT], StudentController.createStudent);

    app
      .route(`${STUDENT_URL}/summary`)
      .get([checkJWT], StudentController.summary);

    app
      .route(`${STUDENT_URL}/registered-subjects`)
      .get(
        [checkJWT],
        StudentController.getStudentsRegisteredThisMonthAndSubjects
      );

    app
      .route(`${STUDENT_URL}/registered-subjects`)
      .get(
        [checkJWT],
        StudentController.getStudentsRegisteredThisMonthAndSubjects
      );

    app
      .route(`${STUDENT_URL}/upload-photo`)
      .post([checkJWT, upload.single('photo')], StudentController.uploadPhoto);
      
    app
      .route(`${STUDENT_URL}/:id`)
      .patch([checkJWT], StudentController.updateStudent)
      .get([checkJWT], StudentController.getStudent)
      .delete([checkJWT], StudentController.deleteStudent);

    app
      .route(`${STUDENT_URL}/:id/register`)
      .put([checkJWT], StudentController.registerSubjects);
  }
}
