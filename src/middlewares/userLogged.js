const User = require("../models/Users");

function userLogged(req, res, next) {
  res.locals.isLogged = false;

  if (req.session.user) {
    res.locals.isLogged = true;
    res.locals.user = req.session.user;
  }

  next();

  const userInCookie = req.cookies.userName;
  const userFromCookie = User.findByField("logUser", userInCookie);
  if (userFromCookie) {
    res.locals.isLogged = true;
    res.locals.user = userFromCookie;
  }
}

module.exports = userLogged;


