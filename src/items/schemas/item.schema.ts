import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: String,
  },
  description: {
    type: String,
  },
});
