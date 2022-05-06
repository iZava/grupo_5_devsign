const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//******Middlewares******
const uploadFile = require("../middlewares/userMulter");
const validations = require("../middlewares/validateRegister");

//******Routes******
//login form
router.get("/login", usersController.login);

//login process


//register form
router.get("/register", usersController.register);

//register process
router.post("/register", uploadFile.single("image"), validations, usersController.processRegister); 

module.exports = router;
