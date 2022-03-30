const controller = {
  index: (req, res) => { res.render("products/index") },
  detail: (req, res) => { res.render("products/productDetail") },
  login: (req, res) => { res.render("products/login") },
  register: (req, res) => { res.render("products/register") },
  cart: (req, res) => { res.render("products/productCart") },
  addEditProduct: (req, res) => { res.render("users/add-edit-Product") },
}

module.exports = controller;