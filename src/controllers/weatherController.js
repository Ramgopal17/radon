let axios = require('axios')


let getweather= async function(req,res){
try{

let  q= req.query.q
let  appid=req.query.appid


let options={
    method:"get",
    url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
}

let result = await axios(options)


res.status(200).send({msg:result.data})


}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}




let getcity = async function (req, res) {


    try {
        let  city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for (i = 0; i < city.length; i++) {
            let obj = { city: city[i] }
            // let q = req.query.city[i]
            let appid = req.query.appid
        let result= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${appid}`)
            
            obj.temp = result.data.main.temp
            cityObjArray.push(obj)
        }
            let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
          

            res.status(200).send({ msg: sorted })
        }
     catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getcity=getcity
module.exports.getweather = getweather