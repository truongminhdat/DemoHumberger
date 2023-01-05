import roles from "./roles.collection";
let createRole = async(req,res) => {
    try {
      let {username } = req.body;
      const Roles = new roles(username);
      await Roles.save();
      return res.status(200).json({
        msg: "Create roles success!"
      })
        
    } catch (e) {
        return res.status(500).json({
            msg:"Error from the server"
        })        
    }
}
module.exports = createRole;