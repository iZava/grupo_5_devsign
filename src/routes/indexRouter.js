const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/detail", mainController.detail);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/add-edit-Product", mainController.addEditProduct);

router.get("/cart", mainController.cart);
router.get("/product", mainController.addEditProduct);

router.get("/products-list/:product", mainController.products);
router.get("/detail/:id", mainController.detail)


module.exports = router;