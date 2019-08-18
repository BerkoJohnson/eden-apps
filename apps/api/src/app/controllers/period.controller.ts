import { Request, Response } from 'express';
import Period from '../models/period';
import { IPeriod } from '../models/interfaces/period';
import Subject from '../models/subject';

interface IPeriodToday extends IPeriod {
  status?: 'Not Started' | 'In Progress' | 'Over';
}

export class PeriodController {
  public static async getPeriods(req: Request, res: Response) {
    try {
      const page = +req.query.page || 1;
      const itemsPerPage: number = +req.query.limit || 10;
      const searchTerm: string = req.query.day || '';

      const skipPages = itemsPerPage * (page - 1);
      const dayRegx = new RegExp(searchTerm, 'gi');

      const totalPeriods = await Period.countDocuments();
      const itemsFound = await Period.find({})
        .where('day', dayRegx)
        .count();

      const periods = await Period.find({})
        .where('day', dayRegx)
        .skip(skipPages)
        .limit(itemsPerPage)
        .populate({
          path: 'subject',
          select: '-periods -registrations -createdAt -updatedAt'
        });

        const result = {
          periods: periods,
          count: totalPeriods,
          hasNextPage: itemsPerPage * page < itemsFound,
          hasPrevPage: page > 1,
          nextPage: page + 1,
          prevPage: page - 1,
          currentPage: page
        };
        res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async getPeriod(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      if (!id) return res.status(400).send({message: 'Invalid Request'});
      const period = await Period.findById(id).populate({
        path: 'subject',
        select: '-periods -registrations -createdAt -updatedAt'
      });
      res.send(period);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async updatePeriod(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const body: IPeriod = req.body.period;
      if (!body || !id) return res.status(400).send();
      const period = await Period.findByIdAndUpdate(
        id,
        {
          day: body.day,
          time: body.time,
          subject: body.subject
        },
        {
          new: true
        }
      );
      res.status(201).send(period);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async changeDay(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const day: string = req.body.day;
      if (!day || !id) return res.status(400).send();
      const period = await Period.findByIdAndUpdate(
        id,
        {
          day: day
        },
        {
          new: true
        }
      );
      res.status(201).send(period);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async changeTime(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const time: string = req.body.time;
      if (!time || !id) return res.status(400).send();
      const period = await Period.findByIdAndUpdate(
        id,
        {
          time: time
        },
        {
          new: true
        }
      );
      res.status(201).send(period);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async resignPeriod(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const subject: string = req.body.subject;
      if (!subject || !id) return res.status(400).send();
      const period = await Period.findByIdAndUpdate(
        id,
        {
          subject: subject
        },
        {
          new: true
        }
      );
      res.status(201).send(period);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async deletePeriod(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      if (!id) return res.status(400).send({message: 'Invalid Request'});
      const period = await Period.findById(id);
      if(!period) return res.status(400).send({message: 'No such period exists'});
      if(await Period.findByIdAndRemove(id)) {
        await Subject.findByIdAndUpdate(period.subject._id, {$pull: {periods: period._id}});
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public static async today(req: Request, res: Response) {
    try {
      const today: string = req.query.today;
      if (!today) return res.status(400).send();
      const periodsForToday = await Period.find()
        .populate({
          path: 'subject',
          select: '-periods',
          populate: {
            path: 'teacher',
            select: '-password'
          }
        })
        .where('day', today);

      const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];

      // Get today's day no in JS
      const date = new Date();
      const dayIndex = date.getDay();
      const weekDay = weekDays[dayIndex];
      const requestDayIndex = weekDays.indexOf(today);

      const currentHour = date.getHours();
      const currentMinute = date.getMinutes();
      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      const periods = periodsForToday.map(period => {
        const time = period.time;
        const timeInMinutes = +time.split(':')[0] * 60 + +time.split(':')[1];
        let status: 'In Progress' | 'Over' | 'Not Started' | 'Unknown' =
          'Unknown';

        if (dayIndex < requestDayIndex) {
          status = 'Not Started';
        } else if (dayIndex === requestDayIndex) {
          if (currentTimeInMinutes < timeInMinutes) {
            status = 'Not Started';
          } else if (
            currentTimeInMinutes > timeInMinutes &&
            currentTimeInMinutes < timeInMinutes + 90
          ) {
            status = 'In Progress';
          } else if (currentTimeInMinutes > timeInMinutes + 90) {
            status = 'Over';
          }
        } else {
          status = 'Over';
        }

        return {
          _id: period._id,
          day: period.day,
          time: period.time,
          subject: period.subject,
          status: status
        };
      });
      res.status(200).send(periods);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
