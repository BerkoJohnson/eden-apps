// tslint:disable-next-line: nx-enforce-module-boundaries
import { Student } from '@eden-apps/student';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { Registration } from '@eden-apps/registration';

export interface Payment {
  _id?: string;
  student: string | Student;
  month: string;
  registrations?: string[] | Registration[];
  amounts: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
