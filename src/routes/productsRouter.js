const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

//******Middlewares******
const uploadFile= require("../middlewares/productMulter");
const validations = require("../middlewares/validateProducts");
const authMiddleware = require("../middlewares/auth"); 

//******Routes******

router.get("/detail", productsController.detail);
router.get("/adminProductUser", authMiddleware, productsController.adminProductUser);
router.get("/addeditProduct", authMiddleware, productsController.addEditProduct);
// ruta de creación de producto
router.get("/addProduct", authMiddleware, productsController.addProduct);
router.post("/createProduct", authMiddleware, uploadFile.single("image"), validations, productsController.create);

// rutas de edición de productos
router.get("/editProduct/:id", authMiddleware, productsController.editProduct);
router.put("/editProduct/:id", uploadFile.single("image"), validations, productsController.update);

//ruta para eliminar producto
router.delete("/delete/:id", authMiddleware, productsController.delete);

router.get("/cart", productsController.cart);
router.get("/product", productsController.addEditProduct);
router.get("/products-list/:product", productsController.products);
router.get("/detail/:id", productsController.detail);

module.exports = router;
