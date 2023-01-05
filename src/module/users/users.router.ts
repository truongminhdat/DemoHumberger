import { Router } from "express";
const {registerController,loginController,authController} = require("../users/users.controller")
const verifyToken = require('../middlewares/verifyToken')
const userRouter = Router();
// userRouter.get('/authen', verifyToken,authController);


userRouter.post('/create',  registerController);
userRouter.post('/login',loginController);
userRouter.get('/authen', verifyToken,authController);



export default userRouter;