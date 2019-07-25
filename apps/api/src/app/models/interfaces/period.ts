import { Document } from 'mongoose';
import {Period} from '@eden-apps/period';

export interface IPeriod extends Period, Document {}
