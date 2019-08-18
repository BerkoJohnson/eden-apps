// tslint:disable-next-line: nx-enforce-module-boundaries
import {Subject} from '@eden-apps/subject';

export interface Period {
  _id?: string;
  day: string;
  time: string;
  subject: Subject;
  createdAt?: Date;
  updatedAt?: Date;
}
