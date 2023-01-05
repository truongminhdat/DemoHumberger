import mongoose  from "mongoose";
import { Orders } from "./orders.interface";

const orderSchema  = new mongoose.Schema<Orders>({
 
    contact:{
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        
        },
        name: {
           type: String, 
           required: true
        },
        note:{
            type: String,
            required: true,
        },
        phone:{
            type: Number,
            required: true, 
        },


    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    order:{
        Cheese: {
            type: Number,
            required: true,
        },
        Salad:{
            type: Number,
            required: true,
        },
        Bacon:{
            type: Number,
            required: true
        },
      Meat: {
        type: Number,
        required: true
      }, 
     
  
    },
    timestamp:{
        type: Date
    }, 
    Price:{
        type: Number
    }
})
let Orders  = mongoose.model("orders", orderSchema);
 export default Orders;