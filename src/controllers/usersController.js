const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

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
    }
    const userinDB = User.findByField("email", req.body.email);
    if (userinDB) {
      return res.render("users/register", {
        errors: {
          email:{
            msg: "El email ya esta registrado"
          }
        },
        oldData: req.body,
      });
    
    }
    const userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      repeat_password: bcryptjs.hashSync(req.body.repeat_password, 10),
      image: req.file?.filename ?? "user_01.png",
    };

    let usercreated = User.create(userToCreate);
      return res.redirect("/users/login");
  
  },

  register: (req, res) => {
    res.render("users/register");
  },
};

module.exports = controller;
