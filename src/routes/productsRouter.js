const express = require("express");
const path = require("path"); 
const multer  = require('multer'); 
const router = express.Router();
const productsController = require("../controllers/productsController");

//******Middlewares******
const validations = require("../middlewares/validateProducts");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../../public/images/products"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })

router.get("/detail", productsController.detail);
router.get("/adminProductUser", productsController.adminProductUser);
router.get("/addeditProduct", productsController.addEditProduct);
// ruta de creación de producto
router.get("/addProduct", productsController.addProduct);
router.post("/createProduct", upload.single("image"), validations, productsController.create);

// rutas de edición de productos
router.get("/editProduct/:id", productsController.editProduct);
router.put("/editProduct/:id", upload.single("image"), validations, productsController.update);

//ruta para eliminar producto
router.delete("/delete/:id", productsController.delete);

router.get("/cart", productsController.cart);
router.get("/product", productsController.addEditProduct);
router.get("/products-list/:product", productsController.products);
router.get("/detail/:id", productsController.detail);

module.exports = router;
