import mongoose from "mongoose";
import { User  } from "./users.interface";

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
 
});
let users  = mongoose.model("users", userSchema);
 export default users;
