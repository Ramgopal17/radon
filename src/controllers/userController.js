const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
 
  try {
    let data = req.body;
    if (Object.keys.length != 0) {
      let savedData = await userModel.create(data);
      console.log(req.newAtribute);
      res.status(201).send({ msg: savedData });
    }
    else res.status(400).send({ msg: "Bad Request" })
    if(!data.mobile){
      res.status.send({msg:"Error",error:"mobile number is mandatory"})
    }
    
  } catch (err) {
    console.log("This is the error:",err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
if (!userName && ! password) return res.status(400).send({msg:"please enter username and password"})
  let user = await userModel.findOne({ emailId: userName, password: password });
  
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    })
let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });

} catch (err) {
  console.log("This is the error:",err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}

}
  
const getUserData = async function (req, res) {
 
 try{
   let user = await userModel.findById(req.params.userId)
  if (!user) return res.status(400).send({ status: false, msg: 'No such user exists' })


  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
   
  
}catch (err) {
  console.log("This is the error:",err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}


 }


const updateUser = async function (req, res) {

try{
  
  let userId = req.params.userId;
  let user= await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: updatedUser, data: updatedUser });
}catch (err) {
  console.log("This is the error:",err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}

}



const deleteUser = async function (req, res) {
try{



  let userId = req.params.userId
  let deleteUser = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
  res.status(200).send({ status: true, data: deleteUser });

}
catch (err) {
  console.log(" This is the error:",err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}




}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
