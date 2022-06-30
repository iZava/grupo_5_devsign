const fs = require('fs');
const path = require('path');
const db = require('../../database/models/index.js');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');

const Product = db.product;
const Color = db.color;
const Size = db.size;
const Product_category = db.product_category;

const controller = {
    products: async function (req, res) {
        const product = req.params.product;
        let products;
        let category;
        const productsDB = await Product.findAll();
        switch (product) {
            case 'camisetas':
                const tshirts = productsDB.filter(
                    (product) => product.category_id == 1
                );
                products = tshirts;
                category = 'camisetas';
                break;
            case 'hoddies':
                const hoddies = productsDB.filter(
                    (product) => product.category_id == '4'
                );
                products = hoddies;
                category = 'hoddies';
                break;
            case 'mugs':
                const mugs = productsDB.filter(
                    (product) => product.category_id == '2'
                );
                products = mugs;
                category = 'mugs';
                break;
            case 'cojines':
                const cojines = productsDB.filter(
                    (product) => product.category_id == '7'
                );
                products = cojines;
                category = 'cojines';
                break;
            case 'stickers':
                const stickers = productsDB.filter(
                    (product) => product.category_id == '5'
                );
                products = stickers;
                category = 'stickers';
                break;
            case 'gorras':
                const gorras = productsDB.filter(
                    (product) => product.category_id == '6'
                );
                products = gorras;
                category = 'gorras';
                break;
            case 'botellas':
                const botellas = productsDB.filter(
                    (product) => product.category_id == '3'
                );
                products = botellas;
                category = 'botellas';
                break;
        }

        res.render('products/products', { products, category });
    },
    detail: async function (req, res) {
        try {
            const id = req.params.id;
            const products = await Product.findAll();
            const product = products.find((product) => product.id == id);
            return res.render('products/productDetail', { product });
        } catch (err) {
            console.error(err);
        }
    },
    cart: (req, res) => {
        res.render('products/productCart');
    },
    adminProductUser: (req, res) => {
        res.render('products/adminProductUser');
    },
    addEditProduct: async function (req, res) {
        try {
            const allColor = await Color.findAll();
            const allSize = await Size.findAll();
            const allCategory = await Product_category.findAll();
            const Products = await Product.findAll({
                include: ['fkcolor', 'fksize', 'fkproduct_category'],
            });
            return res.render('products/add-edit-Product', {
                Products,
                allColor,
                allSize,
                allCategory,
            });
        } catch (err) {
            console.error(err);
        }
    },

    addProduct: async function (req, res) {
        try {
            const allColor = await Color.findAll();
            const allSize = await Size.findAll();
            const allCategory = await Product_category.findAll();
            return res.render('products/addProduct', {
                allColor,
                allSize,
                allCategory,
            });
        } catch (err) {
            console.error(err);
        }
    },
    create: async function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await Product.create({
                    name: req.body.name,
                    image: req.file?.filename ?? 'default_image.png',
                    category_id: req.body.category_id,
                    description: req.body.description,
                    price: req.body.price,
                    color_id: req.body.color_id,
                    size_id: req.body.size_id,
                });
                res.redirect('/products/addEditProduct');
            } catch (err) {
                console.error(err);
            }
        } else {
            const allColor = await Color.findAll();
            const allSize = await Size.findAll();
            const allCategory = await Product_category.findAll();
            const Products = await Product.findAll({
                include: ['fkcolor', 'fksize', 'fkproduct_category'],
            });
            const oldData = req.body;
            return res.render('products/addProduct', {
                Products,
                allColor,
                allSize,
                allCategory,
                errors: errors.mapped(),
                oldData,
            });
        }
    },
    editProduct: async function (req, res) {
        try {
            const id = req.params.id;
            const allColor = await Color.findAll();
            const allSize = await Size.findAll();
            const allCategory = await Product_category.findAll();
            const product = await Product.findByPk(id, {
                include: ['fkcolor', 'fksize', 'fkproduct_category'],
            });
            return res.render('products/editProduct', {
                allColor,
                allSize,
                allCategory,
                product,
            });
        } catch (err) {
            console.error(err);
        }
    },

    update: async function (req, res) {
        try {
            await Product.update(
                {
                    name: req.body.name,
                    image: req.file?.filename ?? 'default_image.png',
                    category_id: req.body.category_id,
                    description: req.body.description,
                    price: req.body.price,
                    color_id: req.body.color_id,
                    size_id: req.body.size_id,
                },
                {
                    where: { id: req.params.id },
                }
            );
            return res.redirect('/products/addeditProduct');
        } catch (err) {
            console.error(err);
        }
    },

    delete: async function (req, res) {
        try {
            const id = req.params.id;
            await Product.destroy({
                where: { id: id },
            });
            return res.redirect('/products/addeditProduct');
        } catch (err) {
            console.error(err);
        }
    },
};

module.exports = controller;
