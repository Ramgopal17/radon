const jwt = require("jsonwebtoken")
const blogModel = require("../models/blogModel")

// .................................................................Authentication........................................................................

const mid1 = function (req, res, next) {
  try {


    // console.log(req)
    token = req.headers["x-api-key"]
    if (!token) token = req.headers["x-Api-key"]
    if (!token) return res.status(400).send({ status: false, msg: "token is required" })
    console.log(token)
    let decodedToken = jwt.verify(token, "project-1")
    if (!decodedToken) return res.status(400).send({ status: false, msg: " token is invalid" })
    
    req.decodedToken = decodedToken;
    console.log(req.decodedToken)

    next()
  }
catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

// .........................................................Authorisation....................................................................

const mid2 = async function (req, res, next) {
  try {
    // console.log(req.decodedToken)

    const token = req.decodedToken;
    const blogId = req.params.blogId;
    const blog = await blogModel.findById(blogId);
    console.log(blog)

    if (!blog && blog.isDeleted == true) {
      return res.status(400).send({ status: false, msg: "Blog Not Found or may be deleted" })
    }
    const authorId = blog.authorId;
    if (token)

      if (token.authorId != authorId)
        return res.status(403).send({
          msg: 'FORBIDDEN',
          error: 'User logged is not allowed to modify the requested users data',
        });
    next();
  } catch (err) {
    console.log('This is the error :', err.message);
    res.status(500).send({ msg: 'Error', error: err.message });
  }
};


const mid3 = async function (req, res, next) {
  try {
      let decodedToken =req.decodedToken
      let data = req.query
  
      let obj = {isDeleted : true , isPublished : false};

      if (data.authorId) {
          obj.authorId = data.authorId
      }
      if (data.category) {
          obj.category = data.category
      }
      if (data.tags) {
          obj.tags = data.tags
      }
      if (data.subcategory) {
          obj.subcategory = data.subcategory
      }
      if (data.isPublished) {
          obj.isPublished = data.isPublished
      }
      req.findObj = obj
console.log(obj)
      let authorIdObject = await blogModel.find(obj).select({ authorId: 1, _id: 0 })
      let ids = authorIdObject.map((item)=>{return item.authorId.toString()})
      console.log(ids)
  
      if (authorIdObject.length == 0) {return res.status(400).send({ msg: "no such blog" }) }

      let authorIdInToken = decodedToken.authorId

          if ((ids.includes(authorIdInToken))) { next()  }
          
        else{  return res.status(403).send({ status: false, msg: 'User logged is not allowed to delete the requested users data' })}

      }
  
  catch (err) {
    return  res.status(500).send({ msg: "Error", error: err.message})
  }
}


module.exports = { mid1, mid2 ,mid3}
// 