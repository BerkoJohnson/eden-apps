import { Request, Response } from 'express';
import Registration from '../models/registration';
import Student from '../models/student';
import Subject from '../models/subject';

export class RegistrationController {
  public static async deleteRegistration(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const registration = await Registration.findById(id);
      if (!registration)
        return res.status(400).send('Registration does not exist!');
      await Registration.findByIdAndDelete(id);
      await Student.findByIdAndUpdate(registration.student._id, {
        $pull: { registrations: id }
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async getRegistration(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      if (!id) {
        return res.status(400).send({ message: 'Invalid Request Data!' });
      }
      const registration = await Registration.findById(id);
      if (!registration) {
        return res.status(400).send('Registration does not exist!');
      }
      res.status(200).send(registration);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async unregisterSubjeect(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const subjectID: string = req.body.subject;
      if (!id || !subjectID)
        return res.status(400).send({ message: 'Invalid Request Data!' });
      const subject = await Subject.findById(subjectID);
      if (!subject)
        return res.status(400).send({ message: 'Subject Not Found!' });
      const registration = await Registration.findById(id);
      if (!registration)
        return res.status(400).send('Registration does not exist!');

      const updatedRegistration = await Registration.findByIdAndUpdate(
        id,
        { $pull: { subjects: subjectID } },
        { new: true }
      );
      res.status(201).send(updatedRegistration);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async getStudentsBySubjectsRegistered(
    req: Request,
    res: Response
  ) {
    try {
      const month: string = req.query.month;
      const s = await Registration.aggregate()
        .match({ month: month })
        .unwind('$subjects')
        .group({ _id: '$subjects', noOfStudents: { $sum: 1 } })
        .sort({ noOfStudents: -1 });

      const subjects: any = [];
      for (let i = 0; i < s.length; i++) {
        const id = s[i]._id.toString();
        const noOfStudents = s[i].noOfStudents;

        const subject = await Subject.findById(id).select('title');
        const studentsArray = await Registration.find()
          .populate('student')
          .where('subjects')
          .in(id);
        
          const students = studentsArray.map(doc => {
          return {
            _id: doc.student._id,
            name: doc.student.name
          };
        });
        if (subject) {
          subjects.push({
            _id: id,
            title: subject.title,
            noOfStudents: noOfStudents,
            students: students
          });
        }
      }

      return res.send(subjects);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
