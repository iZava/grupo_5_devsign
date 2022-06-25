module.exports = (sequelize, DataTypes) => {
    let alias = 'product'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        category_id: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        }
   
}
    let config = {
        tableName: 'product',
        timestamps: false
    }
    
    let product = sequelize.define(alias, cols, config);
    
    product.associate = function(models){
        product.belongsTo(models.color,{
            as: "fkcolor",
            foreignKey: "color_id"
        });
        product.belongsTo(models.size,{
            as: "fksize",
            foreignKey: "size_id"
        });
        product.belongsTo(models.product_category,{
            as: "fkproduct_category",
            foreignKey: "category_id"
        });

    }
    return product;
    };
    