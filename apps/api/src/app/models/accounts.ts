import { Schema, model } from 'mongoose';
import { IAccounts } from './interfaces/account';

const AccountsSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    },
    payments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
      }
    ]
  },
  {
    timestamps: true
  }
);

const Acounts = model<IAccounts>('Accounts', AccountsSchema);
export default Acounts;
