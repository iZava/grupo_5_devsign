const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/api/apiProductsController");

//******Middlewares******

// const uploadFile= require("../middlewares/productMulter");
// const validations = require("../middlewares/validateProducts");
// const authMiddleware = require("../middlewares/auth"); 

//******Routes******

router.get("/", productsController.productList);
router.get("/:id", productsController.productDetail);


module.exports = router;