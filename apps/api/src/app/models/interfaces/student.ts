import { Document } from 'mongoose';
import { Student } from '@eden-apps/student';

export interface IStudent extends Student, Document {}
