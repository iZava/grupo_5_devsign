const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

function readDB() {
  return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
}

const controller = {
  index: (req, res) => {
    const productsDB = readDB();
    const products = productsDB.filter((product) => product.main == true);
    res.render("index", { products });
  },
};

module.exports = controller;
