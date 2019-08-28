import { Document } from 'mongoose';
import { IRegistration } from './registration';
import { IAccounts} from './account';

export interface IStudent extends Document {
  name: string;
  contacts: string[];
  guardian: {
    name: string;
    contacts: string[];
  };
  date_registered?: Date;
  registrations?: IRegistration;
  accounts: IAccounts;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
