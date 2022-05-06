const express = require("express");
const path = require("path");
const multer = require("multer"); 
const { body } = require("express-validator"); 
const router = express.Router();
const usersController = require("../controllers/usersController");

//******Validations******
const validations = [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("logUser").notEmpty().withMessage("El nombre de usuario es obligatorio"),
    body("email").notEmpty().withMessage("El email es obligatorio").bail().isEmail().withMessage("Debes escribir el email en un formato válido"),
    body("password").notEmpty().withMessage("La contraseña es obligatoria").bail().isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
    body("repeat_password").notEmpty().withMessage("Debe repetir su contraseña").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }
        return true;
    }),
    body("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".PNG", ".JPG", ".JPEG"];
        if (!file) {
            throw new Error("Debes subir una imagen");
        } else { 
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Solo se admiten formatos de imagen: ${acceptedExtensions.join(", ")}`);
        }
      }
        return true;
    }),

];

//******Multer******
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../../public/images/users"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({ storage: storage });

//******Routes******
router.get("/login", usersController.login);

//register form
router.get("/register", usersController.register);
//register process
router.post("/register", upload.single("image"), validations, usersController.processRegister); 

module.exports = router;
