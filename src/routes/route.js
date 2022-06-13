const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")
const ProductController= require("../controllers/productController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )




router.post("/createProduct", ProductController.createProduct  )




router.post("/createOrder", OrderController.createOrder)

router.get("/basicRoute",commonMW.mid1,commonMW.mid2,commonMW.mid3 ,UserController.basicCode)



router.get("/basicRoute",commonMW.mid1,UserController.basicCode)
router.get("/basicRoute1",commonMW.mid1,UserController.basicCode1)
router.get("/basicRoute2",commonMW.mid2, UserController.basicCode2)
router.get("/basicRoute3",commonMW.mid3, UserController.basicCode3)






module.exports = router;