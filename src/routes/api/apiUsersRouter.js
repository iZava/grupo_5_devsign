const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/api/apiUsersController");



router.get("/", usersController.UserList);
router.get("/latestUser", usersController.latestUser);
router.get("/:id", usersController.UserDetail);


module.exports = router;

