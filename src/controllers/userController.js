const UserModel= require("../models/userModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getbooklist= async function (req, res) {
    let allBook= await UserModel.find().select({bookName: 1,authorName: 1, _id:0})
    res.send({msg: allBook})
}
// const getBooksInYear=async function (req, res) {
//     let allBook= await UserModel.find().select({bookName: 1,authorName: 1})
//     res.send({msg: allBook})
const  getXINRBooks=async function (req, res) {
    let allBook= await UserModel.find({"prices.indianPrice" : {$in : ["450INR","250INR","510INR"]}})
    res.send({msg: allBook})
}
const getRandomBooks=async function (req, res) {
    let allBook= await UserModel.find({$or:[{totalPage:{$gt: 500}},{stockAvailable: true}]})
    res.send({msg: allBook})
  
    
}
const getBooksInYear= async function (req, res) {
    let year=req.query.year
    let allBook= await UserModel.find({year:year})
    res.send({msg: allBook})
}
const getParticularBooks =async function (req,res){
    let myData=req.body
    let allBooks=await UserModel.find(myData)
    res.send({msg: allBooks})
}


module.exports.createNewBook= createNewBook
module.exports.getbooklist=getbooklist
module.exports. getXINRBooks=getXINRBooks
module.exports. getRandomBooks=getRandomBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks= getParticularBooks 
