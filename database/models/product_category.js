module.exports = (sequelize, DataTypes) => {
    let alias = "product_category";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_product_category: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: 'product_category',
        timestamps: false
    }
   
    let product_category = sequelize.define(alias, cols, config);
    
    product_category.associate = function(models){
        product_category.hasMany(models.product, {
            as: "categories",
            foreignKey: "category_id"
        });
    }
    
    
    return product_category;
    };
    