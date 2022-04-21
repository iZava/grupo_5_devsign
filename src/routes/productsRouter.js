const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/detail", productsController.detail);

router.get("/addeditProduct", productsController.addEditProduct);
// ruta de creación de producto
router.get("/addProduct", productsController.addProduct);
router.post("/createProduct", productsController.create);

// rutas de edición de productos
router.get("/editProduct/:id", productsController.editProduct);
router.put("/editProduct/:id", productsController.update);

router.get("/cart", productsController.cart);
router.get("/product", productsController.addEditProduct);
router.get("/products-list/:product", productsController.products);
router.get("/detail/:id", productsController.detail);

module.exports = router;
