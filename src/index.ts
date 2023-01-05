

// import { addOrderAllInventory, getorderInventory } from './module/orderInventory/orderInventory.controller';

import userRouter from "./module/users/users.router";
import orderRoute from "./module/orders/orders.router";
import cors from "cors";



// import { addRestaurant } from './module/restaurant/restaurant.controller';
const express = require("express");
// const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();

require("dotenv").config();

const port = process.env.SERVER_PORT || 8080; 



require("dotenv").config();
const DB = process.env.connect;
mongoose.set('strictQuery', true);
mongoose.connect(DB, {}).then(() => {
  console.log("DB connections success");
});


app.use(express.json());




//get router


//options for cors midddleware
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use('/user', userRouter);
app.use('/order', orderRoute);





// app.get('/customer/getAll', getAllCustomers);
// app.post('/customer/add', addAllCustomer);
// app.post('/restaurant/add', addRestaurant)
// app.get('/restaurant/getAll',excludeRestaurant )
// app.post('/inventory/add', addAllInventory)
// app.post('/orderinventory/add', addOrderAllInventory)
// app.get('/orderInventory/getInventory',getorderInventory)
// app.post('/order/add',addOrder );
// app.post('/product/add', addProduct)


app.listen(port, () => console.log(`Server is running time ${port}`));

