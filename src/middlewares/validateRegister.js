const path = require("path");
const { body } = require("express-validator"); 

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
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];
        if (!file) {
            req.file = "user_01.png";
        } else { 
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Solo se admiten formatos de imagen: ${acceptedExtensions.join(", ")}`);
        }
      }
        return true;
    }),
];

    module.exports = validations;

    // if (!file || !acceptedExtensions.includes(path.extname(file.originalname))) //! Validación alternativa