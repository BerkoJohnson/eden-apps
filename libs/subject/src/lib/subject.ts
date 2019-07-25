import {Teacher} from '@eden-apps/teacher';
import {Period} from '@eden-apps/period';

export interface Subject {
  title: string;
  teacher?: Teacher;
  periods?: Period[];
  createdAt?: Date;
  updatedAt?: Date;
}
