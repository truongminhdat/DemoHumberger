import { Role } from './roles.interface';
import mongoose from "mongoose";


const roleSchema = new mongoose.Schema<Role>({
  
  username: {
    type: String,
    required: true,
  },

  
 
});
let roles  = mongoose.model("roles", roleSchema);
 export default roles;
