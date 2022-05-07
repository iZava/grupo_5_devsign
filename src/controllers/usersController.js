const { validationResult } = require("express-validator");

const User = require("../models/Users");

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  processRegister: (req, res) => {
    const validation = validationResult(req);
    if (validation.errors.length > 0) {
      return res.render("users/register", {
        errors: validation.mapped(),
        oldData: req.body,
      });
    } else {
      res.redirect("/users/login");
    }

    const userToCreate = {
      ...req.body,
      image: req.file?.filename ?? "user_01.png",
    };

    User.create(userToCreate);
  },
  register: (req, res) => {
    res.render("users/register");
  },
};

module.exports = controller;
