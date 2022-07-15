const path = require("path");
const { body } = require("express-validator"); 

const validations = [
    body("firstName").notEmpty().withMessage("El nombre es obligatorio").isLength({min: 2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    body("lastName").notEmpty().withMessage("El apellido es obligatorio").isLength({min: 2}).withMessage("El apellido debe tener al menos 2 caracteres"),
    body("logUser").notEmpty().withMessage("El nombre de usuario es obligatorio").isLength({min: 2}).withMessage("El nombre de usuario debe tener al menos 2 caracteres").isLength({ max: 8 }).withMessage("El nombre de usuario no debe tener más de 8 caracteres"),
    body("email").notEmpty().withMessage("El email es obligatorio").bail().isEmail().withMessage("Debes escribir el email en un formato válido"),
    //incluir mayusculas, minusculas, numeros y caracteres especiales
    body("password").notEmpty().withMessage("La contraseña es obligatoria").bail().isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@$!%*?&])[A-Za-z\d#$@$!%*?&]{8,}/).withMessage("La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial"),
    body("repeat_password").notEmpty().withMessage("Debe repetir su contraseña").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }
        return true;
    }),
    body("category_id").notEmpty().withMessage("La categoría es obligatoria"),
    body("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".jpeg", ".gif", ".png", ".JPG", ".JPEG", ".PNG", ".GIF"];
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