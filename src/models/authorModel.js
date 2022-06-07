const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id:{
            type:Number,
            required:true,
            unique:true},
            age:Number,
            author_name:String,
            address:String
        } , { timestamps: true })

            

module.exports = mongoose.model('Auuthor', authorSchema)

