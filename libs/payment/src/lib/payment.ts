import {Subject} from '@eden-apps/subject';
import {Student} from '@eden-apps/student';

export interface Payment {
  student: Student;
  month: string;
  subjects: Subject[];
  amounts: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
