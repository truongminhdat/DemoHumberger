import users from "../users/users.collection";
import Orders from "./orders.collection"
require("dotenv").config();
const jwt = require('jsonwebtoken')
const  createOrder = async(req, res) => {
   
        const checkToken = jwt.verify(
            req.headers.accessToken,
            process.env.JWT_SECRET
         );  
        
        let newOrder = new Orders(req.body);
        let user = await users.findById({
            _id: checkToken.id
         })
        await newOrder.save();
        await newOrder.updateOne({$push:{userId:user?._id}});
        return res.status(200).json({
            msg: "Tạo order thành công "
        })  
    
}
const getByIdOrder = async (req, res) => {
    try {
        let {id } = req.query;
        let user = await Orders.findById(id);
       return res.status(200).json({
        msg: "get all orders by id ",
        user
       })
        
    } catch (e) {
        return res.status(500).json({
            msg: "Error from server"
        })
        
    }
}


     

   
        

module.exports = {
    createOrder, 
    getByIdOrder
}
 