import * as mongoose from 'mongoose';

export interface Item extends mongoose.Document {
  id?: string;
  name: string;
  description?: string;
  qty: number;
}
