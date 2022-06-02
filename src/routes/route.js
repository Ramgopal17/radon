const express = require('express');
const externalModule1 = require('../logger/logger.js')
const externalModule2 = require('../util/helper.js')
const externalModule3 = require('../validator/formatter.js')
const lodash =require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule1.test1()
    externalModule1.welcome()
    externalModule2.printDate()
    externalModule2.printMonth()
    externalModule2.getBatchinfo()
    externalModule3.trimIt()
    externalModule3.lowercase()
    externalModule3.uppercase()
    
    
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

router.get('/hello', function (req, res) {
    let arr=lodash.chunk(['January','February','March','April','May','June','July','August','September','October','November','December'],3);
    console.log(arr)
    let odd_num =lodash.tail([1,3,5,7,9,11,13,15,17,19]);
    console.log('the last 9 element is'+    odd_num);
    let non_duplicate=lodash.union([1,2],[2,3,4],[3,4,5,6],[6,7,8],[7,8,9,10]);
    console.log('Merged array is '+non_duplicate);
    let movie_lib=lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    console.log("the object containing key value pair is"+  JSON.stringify( movie_lib ))
    res.send('My last api!')
    
});

module.exports = router;
// adding this comment for no reason