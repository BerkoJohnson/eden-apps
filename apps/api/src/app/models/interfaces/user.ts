import { Document } from 'mongoose';
// import { User } from '@eden-apps/user';
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  contacts?: string[];
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

