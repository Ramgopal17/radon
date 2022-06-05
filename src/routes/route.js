const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


//  solution1

// router.get('/movies',function(req,res){
//      const arr=["Rang de basanti","The shining","Lord of the rings"," Batman begins"]
    
//         console.log(arr)
//         res.send("hello there!")
//     }
// )
// solution2


// router.get('/movies/:indexNumber',function(req,res){
//     const arr=["Rang de basanti","The shining","Lord of the rings"," Batman begins"]
//     let indexNumber=req.params.indexNumber
//     console.log("movie name is "+ arr[indexNumber])
//     res.send("done")

// })
// solution3



// router.get('/movies/:indexNumber',function(req,res){
//     const arr=["Rang de basanti","The shining","Lord of the rings"," Batman begins"]
//      for(let i=0;i<arr.length;i++){
//          if(req.params.indexNumber < arr.length){
//          let indexNumber=req.params.indexNumber;
//          console.log("movie name is"+arr[indexNumber])
//          res.send("use a valid !")
//           } 
//           else{
//               res.send("please use a valid index!")
//           }
//         }
//     })
// solution 4



// router.get('/movies',function(req,res){
//     let films=[
//         {
//             "id":1,
//             "name":"Rang de basanti"
//         },{
//             "id":2,
//             "name":"the shining"

//         },{
//             "id":3,
//             "name":"lord of the rings"
//         },{
//             "id":4,
//             "name":"Batman begins"
//         }
//     ]

// res.send(films)
// });

// // //  solution5
// router.get('/films/:filmId',function(req,res){


// let films=[
//     {
//         "id":1,
//         "name":"Rang de basanti"
//     },{
//         "id":2,
//         "name":"the shining"

//     },{
//         "id":3,
//         "name":"lord of the rings"
//     },{
//         "id":4,
//         "name":"Batman begins"
//     }
// ]
//  for(let i=0;i<films.length;i++){
//      let indexNumber=req.params.filmId;
//      if(indexNumber <=films.length && indexNumber>0){
//      console.log("the name of the movie is"+JSON.stringify(films[indexNumber-1]))
//      res.send("done!");
//  }
//  else {
//      res.send("no films existy with this id")

//  }

// }
// })
module.exports = router;  
