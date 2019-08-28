import { Request, Response } from 'express';
import Accounts from '../models/accounts';
import Payment from '../models/payment';

export class AccountController {
  public static async getPayments(req: Request, res: Response) {
    try {
      const accountID: string = req.query.account_id;

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async createAccount(req: Request, res: Response) {
    try {
      const studentID: string = req.query.student_id;
      if (!studentID) return res.status(400).send({ message: 'Invalid Request' });

      const accounts = new Accounts({
        student: studentID
      });

      const accountsSaved = await accounts.save();
      res.send(accountsSaved);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async updateAccount(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async getAccount(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async deleteAccount(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async getAccountByStudentID(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async getPayment(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async deletePayment(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
  public static async updatePayment(req: Request, res: Response) {
    try {

    } catch (e) {
      res.status(500).send(e);
    }
  }
}
