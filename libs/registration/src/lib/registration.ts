import {Student} from '@eden-apps/student';
import {Payment} from '@eden-apps/payment';
import {Subject} from '@eden-apps/subject';

export interface Registration {
    student: Student;
    month: string;
    subjects: Subject[];
    payments?: Payment[];
    createdAt?: Date;
    updatedAt?: Date;
}