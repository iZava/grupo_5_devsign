function userLogged(req, res, next) {
  res.locals.isLogged = req.session.user;

  next();
}

module.exports = userLogged;

//! stand by