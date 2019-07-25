import { Document } from 'mongoose';
import { Registration } from '@eden-apps/registration';

export interface IRegistration extends Registration, Document {}
