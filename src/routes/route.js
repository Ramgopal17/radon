const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const AuthorModel= require("../models/authorModel.js")

const UserController= require("../controllers/userController.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook  )

router.post("/createAuthor", UserController.createAuthor  )
router.get("/getBookbychetan", UserController.getBookbychetan  )
router.get("/bookauthor", UserController.bookauthor )
router.get("/bookrange", UserController.bookrange )





module.exports = router;