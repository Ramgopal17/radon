const jwt = require("jsonwebtoken");

const mid1= function ( req, res, next) {

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];


  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    // let userToBeModified = req.params.userId
    // //userId for the logged-in user
    // let userLoggedIn = decodedToken.userId

    // //userId comparision to check if the logged-in user is requesting for their own data
    // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    

 
  

next()
}


module.exports.mid1= mid1
