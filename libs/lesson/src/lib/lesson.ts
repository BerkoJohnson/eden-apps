import { Subject } from '@eden-apps/subject';

export interface Lesson {
  _id: string;
  day: string;
  time: string;
  subject: Subject;
  status: string;
}
