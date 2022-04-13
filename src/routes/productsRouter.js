const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/detail", productsController.detail);
router.get("/addeditProduct", productsController.addEditProduct);
router.get("/addProduct", productsController.addProduct);
router.get("/editProduct", productsController.editProduct);
router.get("/cart", productsController.cart);
router.get("/product", productsController.addEditProduct);
router.get("/products-list/:product", productsController.products);
router.get("/detail/:id", productsController.detail);

module.exports = router;
