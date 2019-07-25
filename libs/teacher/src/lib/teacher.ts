import {Subject} from '@eden-apps/subject';

export interface Teacher {
    name: string;
    email:string;
    password?: string;
    contacts: string[];
    subjects: Subject[],
    createdAt?: Date;
    updatedAt?: Date;
}