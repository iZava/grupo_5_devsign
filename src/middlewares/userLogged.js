function userLogged(req, res, next) {
  res.locals.isLogged = req.session.userLogged;
  
  // console.log("soy el userlogged",Blob.text(req.session.userLogged?.image?.data))
  next();
}

module.exports = userLogged;

//! stand by