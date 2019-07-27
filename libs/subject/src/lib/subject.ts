// tslint:disable-next-line: nx-enforce-module-boundaries
import {Teacher} from '@eden-apps/teacher';
// tslint:disable-next-line: nx-enforce-module-boundaries
import {Period} from '@eden-apps/period';

export interface Subject {
  _id?: string;
  title: string;
  teacher?: Teacher;
  periods?: Period[];
  createdAt?: Date;
  updatedAt?: Date;
}
