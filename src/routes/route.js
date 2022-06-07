const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")

const UserController= require("../controllers/userController.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewBook", UserController.createNewBook  )
router.post("/getBooksInYear", UserController.getBooksInYear  )
router.post("/getParticularBooks", UserController.getParticularBooks)



router.get("/getbooklist", UserController.getbooklist)
router.get("/getXINRBooks", UserController. getXINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)




module.exports = router;