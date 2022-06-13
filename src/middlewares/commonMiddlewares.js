const productModel = require("../models/productModel")
const UserModel= require("../models/userModel")

const mid1= function ( req, res, next) {
       const header= req.headers.isFreeappuser
    if(!header){
        return res.send("Header is missing please provide it")
    }
    next()
}

const mid2=  async function ( req, res, next) {
    let data =req.body;
    let isproduct=await productModel.findOne({_id:data.productId})
    let isuser =await UserModel.findOne({_id:data.userId});
    if (isproduct && isuser){
    next()
    }
    else if (!isproduct){
      return  res.send ("please provide  valid product id ")
    }else(!isuser)
      return res.send("please provide valid user id")
    
}

const mid3= async function ( req, res, next) {
    let head=req.header.isFreeAppUser
    let data =req.body
    let isproduct = await productModel.findOne({_id:data.productId})
    let isuser =await UserModel.findOne({_id:data.userId});
   
    if(head){
        next()

    }else if (isproduct.price<isuser.balance){
        const valUpdate=isuser.balance-isproduct.price
        const blncOfUser= await UserModel.findOneAndUpdate({_id:data.userId},{$set:{balance:valUpdate}},
        {new:true}    )
    } else( valUpdate)
        return res.send("no enough balance")
    }
    
    



module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3

