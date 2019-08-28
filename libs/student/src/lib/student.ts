// tslint:disable-next-line: nx-enforce-module-boundaries
import { Registration } from '@eden-apps/registration';

export interface Student {
  // _id: string;
  name: string;
  contacts: string[];
  guardian: {
    name: string;
    contacts: string[];
  };
  date_registered?: Date;
  registrations?: Registration;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
