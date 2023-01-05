


import users from './users.collection';

const bcrypt = require("bcrypt") ;

require("dotenv").config();
const jwt = require('jsonwebtoken');





let registerController = async(req, res) => {
    try {
        let { username, name, password} = req.body;
        const salt = 10;
        const hash = await bcrypt.hash(password, salt)
  
       
        if(!username || !name || !password) {
            return res.status(200).json({ 
                msg:  "please enter the value"
            })
        }
        const example = await users.findOne({username});
        if(example){
            return res.status(200).json({
                msg: "Username already exists"
            })
        }
        const newUser = new users({ username, name , password: hash})
        await newUser.save();
        return res.status(200).json({
            msg: "Register success",
          
        })
    
        
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })
        
    }

}
let loginController = async(req,res,next) => {
    
        let {username, password } = req.body;
        let data = await users.findOne({ username});
            
 

        if(!data){
            return res.status(401).json({
                msg: "User not exit"
            })
           
        }
        else {
            let comparePassword = await bcrypt.compare(password,data?.password);
            const accessToken = jwt.sign(
                JSON.stringify({
                   username: data.username,
                   id: data._id,
                                  
                }),
                process.env.JWT_SECRET
              );          
              const refreshToken = jwt.sign(
                JSON.stringify({
                  id: data._id,
                }),
                process.env.JWT_SECRET
              );
            if(comparePassword){
                next();
                return res.status(200).json({
                    msg: "Login success ",
                    accessToken, 
                    refreshToken,
                    
                    // refreshToken

                })
               
            }
            else{
                return res.status(401).json({
                    msg: "Login failed"
                })
            }
        }
    
       
        
    
}
let authController = (req, res) => {
    return res.json(req.user);
  };
module.exports = {
    registerController,
    loginController,
    authController,

}
 



