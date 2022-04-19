const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

function readDB() {
  return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
};

const controller = {
  products: (req, res) => {
    const product = req.params.product;
    let products;
    let category;
    const productsDB = readDB();
    switch (product) {
      case "camisetas":
        const tshirts = productsDB.filter(
          (product) => product.category == "camisetas"
        );
        products = tshirts;
        category = "camisetas";
        break;
      case "hoddies":
        const hoddies = productsDB.filter(
          (product) => product.category == "hoddies"
        );
        products = hoddies;
        category = "hoddies";
        break;
      case "mugs":
        const mugs = productsDB.filter((product) => product.category == "mugs");
        products = mugs;
        category = "mugs";
        break;
      case "cojines":
        const cojines = productsDB.filter(
          (product) => product.category == "cojines"
        );
        products = cojines;
        category = "cojines";
        break;
      case "stickers":
        const stickers = productsDB.filter(
          (product) => product.category == "stickers"
        );
        products = stickers;
        category = "stickers";
        break;
      case "gorras":
        const gorras = productsDB.filter(
          (product) => product.category == "gorras"
        );
        products = gorras;
        category = "gorras";
        break;
      case "botellas":
        const botellas = productsDB.filter(
          (product) => product.category == "botellas"
        );
        products = botellas;
        category = "botellas";
        break;
    }

    res.render("products/products", { products, category });
  },
  detail: (req, res) => {
    const id = req.params.id;
    const products = readDB();
    const product = products.find((product) => product.id == id);
    res.render("products/productDetail", { product });
  },

  cart: (req, res) => {
    res.render("products/productCart");
  },
  addEditProduct: (req, res) => {
    const products = readDB();
    res.render("products/add-edit-Product", { products });
  },
  addProduct: (req, res) => {
    res.render("products/addProduct");
  },
  create: (req, res) => {
    const products = readDB();
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: req.body.name,
      image: "/images/products/default_image.png",
      category: req.body.category,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price
    }

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))

    return res.redirect("/products/addeditProduct")
  },
  editProduct: (req, res) => {
    res.render("products/editProduct");
  }
};

module.exports = controller;
