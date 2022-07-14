const { sequelize } = require('../../../database/models/index');
const db = require('../../../database/models/index');

const Product = db.product;

const controller = {
    productList: async function (req, res) {
        try {
            const productsList = await Product.findAll({
                include: {all: true},
                attributes: ['id','name','description',
                        [sequelize.col('name_product_category'),'name_product_category'],
                        [sequelize.col('name_color'),'name_color'],
                        [sequelize.col('name_size'),'name_size']
                ]
            })
           
            const countCategory = await Product.findAll({
                include: ['fkproduct_category'],
                attributes: [[sequelize.col('name_product_category'),'name_product_category'],[sequelize.fn("COUNT", sequelize.col("category_id")), "Cantidad"]],
                group: ["name_product_category"]
                
            })
            
            const latProduct = await Product.findAll({
                attributes: [[sequelize.fn('max', sequelize.col('id')), 'ultimo']]
            });
            const idLatest = latProduct[0].dataValues.ultimo
            const latestProduct = await Product.findOne({ where: { id: idLatest } })
            
            return res.json({
                count: productsList.length,
                countByCategory: countCategory,
                products: productsList,
                countCategory: countCategory,
                latestProduct: latestProduct,
                status: 200
            });

        } catch (err) {
            console.error(err);
        }
    },

    productDetail: async function (req, res) {
        try { 
            const id = req.params.id;
            const product = await Product.findByPk(id, {
                include: ['fkcolor', 'fksize', 'fkproduct_category']
            })
        return res.json({
            detail: product
        })
        }catch (err) {
            console.error(err);
        }
    }
}

module.exports = controller;