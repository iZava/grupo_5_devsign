const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const User = require("../models/Users");

const controller = {
  loginProcess: (req, res) => {
    const userToLogin = User.findByField("logUser", req.body.logUser);
    if (userToLogin) {
      const passwordOk = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (passwordOk) {
        delete userToLogin.password && delete userToLogin.repeat_password;
        req.session.user = userToLogin;
        if (req.body.remember) {
          res.cookie("userName", req.body.logUser, { maxAge: 1000 * 60 * 60 * 24 * 7 });
        }
        return res.redirect("/");
      } else {
        return res.render("users/login", {
          errors: {
            password: {
              msg: "La contraseña es incorrecta",
            },
          },
        });
      }
    }
    return res.render("users/login", {
      errors: {
        logUser: {
          msg: "El usuario no está registrado",
        },
      },
    });
  },

  login: (req, res) => {
    res.render("users/login");
  },

  registerProcess: (req, res) => {
    const validation = validationResult(req);
    if (validation.errors.length > 0) {
      return res.render("users/register", {
        errors: validation.mapped(),
        oldData: req.body,
      });
    }

    const emailinDB = User.findByField("email", req.body.email);
    if (emailinDB) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "El email ya esta registrado",
          },
        },
        oldData: req.body,
      });
    }

    const userinDB = User.findByField("logUser", req.body.logUser);
    if (userinDB) {
      return res.render("users/register", {
        errors: {
          logUser: {
            msg: "El usuario ya esta registrado",
          },
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

  profile: (req, res) => {
    res.render("users/profile", { user: req.session.user });
  },

  logout: (req, res) => {
    res.clearCookie("userName");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = controller;
