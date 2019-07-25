import {Subject} from '@eden-apps/subject';

export interface Period {
  day: string;
  time: string;
  subject: Subject;
  createdAt?: Date;
  updatedAt?: Date;
}
