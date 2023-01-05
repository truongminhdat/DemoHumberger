import { Schema } from "mongoose";
import mongoose from "mongoose";


export interface Orders{
  contact:{
    address: string,
    email: string, 
    note: string, 
    phone: number,

  },
  userId: {
    type: Schema.Types.ObjectId,
  },
  order:{
    Cheese: number,
    Salad: Number,
    Bacon: Number,
    Meat: Number,
  },
  timestamp: Date,
  Price: number
}
 