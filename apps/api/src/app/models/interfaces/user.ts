import { Document } from 'mongoose';
import { User } from '@eden-apps/user';
export interface IUser extends User, Document { }
