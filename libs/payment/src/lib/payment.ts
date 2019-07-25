import {Subject} from '@eden-apps/subject';
// tslint:disable-next-line: nx-enforce-module-boundaries
import {Student} from '@eden-apps/student';

export interface Payment {
  // _id: string;
  student: Student;
  month: string;
  subjects: Subject[];
  amounts: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
