// tslint:disable-next-line: nx-enforce-module-boundaries
import {Student} from '@eden-apps/student';
// tslint:disable-next-line: nx-enforce-module-boundaries
import {Payment} from '@eden-apps/payment';
import {Subject} from '@eden-apps/subject';

export interface Registration {
    // _id: string;
    student: Student;
    month: string;
    subjects: Subject[];
    payments?: Payment[];
    createdAt?: Date;
    updatedAt?: Date;
}