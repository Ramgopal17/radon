const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
const multer= require("multer");
const { AppConfig } = require('aws-sdk');
app.use( multer().any())



mongoose.connect("mongodb+srv://rajatrout470:tw1llhZ2PEKtw4qr@cluster0.rqmvg7o.mongodb.net/group55Database", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected")) // asynchronous behaviour
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});