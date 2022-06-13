const UserModel= require("../models/userModel")



const createUser= async function (req, res) {
    
    let data= req.body
    let savedData=await UserModel.create(data)
 res.send({msg:savedData})
}



const basicCode= async function(req, res) {
   res.send({ msg: "This is coming from controller (handler)"})
}

const basicCode1= async function(req, res) {
   res.send({ msg: "This is coming from controller (handler)"})
}
const basicCode2= async function(req, res) {
      res.send({ msg: "This is coming from controller (handler)"})
 }
 const basicCode3= async function(req, res) {
    res.send({ msg: "This is coming from controller (handler)"})
 }
  


module.exports.createUser= createUser
module.exports.basicCode1= basicCode1
module.exports.basicCode2= basicCode2
module.exports.basicCode3= basicCode3
module.exports.basicCode= basicCode