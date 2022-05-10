const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//******Middlewares******
const uploadFile = require("../middlewares/userMulter");
const validations = require("../middlewares/validateRegister");
const guestMiddleware = require("../middlewares/guest"); 
const authMiddleware = require("../middlewares/auth"); 

//******Routes******
//login form
router.get("/login", usersController.login);

//login process
router.post("/login", usersController.loginProcess);

//register form
router.get("/register", guestMiddleware, usersController.register);

//register process
router.post("/register", uploadFile.single("image"), validations, usersController.registerProcess); 

module.exports = router;

//profile page
router.get("/profile", authMiddleware, usersController.profile); 

//logout
router.get("/logout", usersController.logout); 
