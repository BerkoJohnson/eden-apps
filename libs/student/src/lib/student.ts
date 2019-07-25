import { Registration } from '@eden-apps/registration';

export interface Student {
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
