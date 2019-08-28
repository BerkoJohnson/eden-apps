// tslint:disable-next-line: nx-enforce-module-boundaries
import {Subject} from '@eden-apps/subject';

export interface Teacher {
    _id?: string;
    name: string;
    email:string;
    password?: string;
    contacts: string[];
    subjects: Subject[],
    createdAt?: Date;
    updatedAt?: Date;
}