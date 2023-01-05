import { Router } from 'express';
const orderRoute = Router();
const { createOrder,getByIdOrder } = require("../orders/orders.controller");
orderRoute.post("/postOrder", createOrder);
orderRoute.get("/getAllOrderById", getByIdOrder)



  
export default orderRoute