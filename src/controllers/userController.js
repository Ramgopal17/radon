const UserModel= require("../models/userModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getbooklist= async function (req, res) {
    let allBook= await UserModel.find()
    res.send({msg: allBook})
}

module.exports.createNewBook= createNewBook
module.exports.getbooklist=getbooklist