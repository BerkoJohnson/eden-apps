import { Document } from 'mongoose';
import { Teacher } from '@eden-apps/teacher';

export interface ITeacher extends Teacher, Document {}
