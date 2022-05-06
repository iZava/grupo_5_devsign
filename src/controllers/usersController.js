const { validationResult } = require("express-validator"); 

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
  }, 
  register: (req, res) => {
    res.render("users/register");
  },
};

module.exports = controller;
