import { Document } from 'mongoose';
import { Registration } from '@eden-apps/registration';
import { IStudent } from './student';
import { ISubject } from './subject';
import { IPayment } from './payment';

export interface IRegistration extends Document {
    student: IStudent;
    month: string;
    subjects: ISubject[];
    payments?: IPayment[];
    createdAt?: Date;
    updatedAt?: Date;
}
