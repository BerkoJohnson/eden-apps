import { Document } from 'mongoose';
import { IStudent } from './student';
import { IPayment } from './payment';

export interface IAccounts extends Document {
  student: IStudent;
  payments?: IPayment[];
  createdAt?: Date;
  updatedAt?: Date;
}


