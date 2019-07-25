import { Document } from 'mongoose';
import { Subject } from '@eden-apps/subject';

export interface ISubject extends Subject, Document {}
