import { Schema, model } from 'mongoose';
import { IPayment } from './interfaces/payment';

const PaymentSchema = new Schema(
  {
    accounts: {
      type: Schema.Types.ObjectId,
      ref: 'Accounts'
    },
    month: {
      type: String,
    },
    registrations: [{
      type: Schema.Types.ObjectId,
      ref: 'Registration'
    }],
    amount: { type: Number },
  },
  {
    timestamps: true
  }
);

const Payment = model<IPayment>('Payment', PaymentSchema);
export default Payment;
