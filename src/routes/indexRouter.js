const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/detail", mainController.detail);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/cart", mainController.cart);

router.get("/tshirts", mainController.index);
router.get("/bottles", mainController.index);
router.get("/hoddies", mainController.index);
router.get("/hat", mainController.index);
router.get("/pillows", mainController.index);
router.get("/mugs", mainController.index);
router.get("/stickers", mainController.index);

module.exports = router;