import { Document } from 'mongoose';
import { Payment } from '@eden-apps/payment';

export interface IPayment extends Payment, Document {}
