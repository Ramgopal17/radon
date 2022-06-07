const mongoose = require('mongoose');
// const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    bookName:{type: String,
        required:true},
    authorName: String,
    tags: [String],
    totalPage:Number,
    year: Number,
    stockAvailable:Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('Boook', bookSchema) //users



// String, Number
// Boolean, Object/json, array