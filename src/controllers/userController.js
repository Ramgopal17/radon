const UserModel= require("../models/userModel.js")
const AuthorModel= require("../models/authorModel.js")
const express = require('express');

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const getBookbychetan=async function (req,res){
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let book=await UserModel.find({author_id:data[0].author_id})
res.send({msg:book})
}
let bookauthor=async function(req,res){
    let data=await UserModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.prices
    res.send({msg: authorData,price})
}
let bookrange=async function(req,res){
    let data= await UserModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    // let authorData=await AuthorModel.find(forEach(()=>{author_id:data.author_id})).select("author_name")
    res.send({msg:data})
}

module.exports.createBook= createBook

module.exports.createAuthor= createAuthor

module.exports.getBookbychetan= getBookbychetan

module.exports.bookauthor= bookauthor
module.exports.bookrange= bookrange
