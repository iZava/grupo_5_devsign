const controller = {
  index: (req, res) => { res.render("index") },
  detail: (req, res) => { res.render("productDetail") },
  login: (req, res) => { res.render("login") },
  register: (req, res) => { res.render("register") },
  cart: (req, res) => { res.render("productCart") },
}

module.exports = controller;