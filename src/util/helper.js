let printDate= ()=>{
    const d = new Date();
    console.log(d)
}
let printMonth= ()=>{
    currentMonth = new Date().getMonth()
    console.log( currentMonth)
}
let getBatchinfo=()=>{
    let batch_name ="Radon;"
    let week_day="W3D1";
    let topic_taught="Nodejs module system"
    console.log(`${batch_name},${week_day},${ topic_taught}`+ "   is taught today")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchinfo = getBatchinfo

