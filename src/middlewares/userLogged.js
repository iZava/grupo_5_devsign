function userLogged(req, res, next) {
  res.locals.isLogged = req.session.userLogged;
  
  next();
}

module.exports = userLogged;

//! stand by