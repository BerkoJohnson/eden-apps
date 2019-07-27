import { Document } from 'mongoose';
import { ITeacher } from "./ITeacher";
import { IPeriod } from './period';

export interface ISubject extends Document {
    title: string;
    teacher?: ITeacher;
    periods?: IPeriod[];
    createdAt?: Date;
    updatedAt?: Date;
}
