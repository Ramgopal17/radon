const mongoose = require("mongoose");
const blogModel = require("../models/blogModel")

const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId)
}

// ....................................create  Blog................................................................

const createBlog = async function (req, res) {
  try {
    let author_id = req.body.authorId
    if(!author_id) return res.status(400).send({status:false,msg:"authorId must be there"})
    let blog = req.body
    if (!blog.title) return res.status(400).send({ msg: "title is required" })
    if (!blog.body) return res.status(400).send({ msg: "body is required" })
    if (!blog.category) return res.status(400).send({ msg: "category is required" })
    if (!isValidObjectId(author_id)) return res.status(404).send({ msg: " author id is not valid" })

    let blogCreated = await blogModel.create(blog)
    return res.status(201).send({status:true, data: blogCreated })

  } catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })

  }
}
// ...............................................................get Blog..................................................................

const getBlog = async function (req, res) {

  try {
    let authorId = req.query.authorId
    let category = req.query.category
    let tags = req.query.tags
    let subcategory = req.query.subcategory

    let blog = {
      isDeleted: false,
      isPublished: true
    }

    if (authorId) {
      blog.authorId = authorId
    }
    if (category) {
      blog.category = category
    }
    if (tags) {
      blog.tags = tags
    }
    if (subcategory) {
      blog.subcategory = subcategory
    }

    let savedData = await blogModel.find(blog)
    if (savedData.length == 0) {
      return res.status(400).send({ status: false, msg: "No such Blogs Available" })
    } else {
      return res.status(200).send({ status:true,data: savedData })
    }
  } catch (err) {
    res.status(500).send({ msg: err.message })
  }
}


// ...............................................................update Blog.....................................................



const updatedBlog = async function (req, res) {
  try {
    let blogId = req.params.blogId;
    let data = req.body;
    if (Object.keys(data).length == 0) return res.status(404).send({status: false, msg: "Please include atleast one properties to be updated"});
    let blog= await blogModel.findById(blogId);
    console.log(blog)
    if (Object.keys(blog).length == 0) {
      return res.status(404).send({status: false, msg:"No such blog found"});
    }
    if (data.title) blog.title = data.title;
    if (data.category) blog.category = data.category;
    if (data.body) blog.body = data.body;
    if (data.tags) {
      blog.tags.push(data.tags);
    }
    if (data.subcategory) {
      blog.subcategory.push(data.subcategory);
    }
    blog.isPublished = true;
    blog.publishedAt = Date.now();
    let updateData = await blogModel.findOneAndUpdate({ _id: blogId }, blog, {
      new: true,
    });
    
    res.status(200).send({ status:true,data: updateData });
  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};
// .........................................................delete by blog Id......................................................

const deletedBlog = async function (req, res) {
  try {
    let blogId = req.params.blogId;


    let blog = await blogModel.findById(blogId);


    if (!blog) return res.status(404).send({status:false, msg: "not found" })

    // blogData = req.body
    let deletedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, {
      $set: {
        isDeleted: true, deletedAt: Date()
      }
    }, { new: true });
    res.status(200).send({ status: true, data: deletedBlog });



  } catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

}

// ............................................................delete by query .................................................................

const deleteBlogByQuery = async function (req, res) {
  try {
      let obj = req.findObj
      let decodedToken = req.decodedToken

      obj.authorId = decodedToken.authorId

      let blogs = await blogModel.find(obj)
      if (blogs.length > 0) {
          let deletedBlogs = await blogModel.updateMany(obj, { $set: { isDeleted: true, deletedAt : new Date()} })
          res.status(200).send({ status: true,data:deletedBlogs })
      }
      else {
          res.status(404).send({ status: false, msg: "no such blog available" })
      }
  }
  catch (err) {
      res.status(500).send({ msg: err.message })
  }
}

module.exports ={createBlog,getBlog,updatedBlog,deletedBlog,deleteBlogByQuery}
