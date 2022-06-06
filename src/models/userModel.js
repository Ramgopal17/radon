const mongoose = require('mongoose');
// const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: String,
    category:String,

    year: Number

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array