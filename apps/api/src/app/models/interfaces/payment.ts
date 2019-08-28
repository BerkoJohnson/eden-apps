import { Document } from 'mongoose';
import { IAccounts } from './account';
import { IRegistration } from './registration';

export interface IPayment extends Document {
  accounts: IAccounts;
  month: string;
  registrations: IRegistration[];
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
}
