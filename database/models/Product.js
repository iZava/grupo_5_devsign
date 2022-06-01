module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.VARCHAR(50),
            allowNull: false
        },
        image: {
            type: DataTypes.VARCHAR(50),
            allowNull: false
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.VARCHAR(150),
            allowNull: false
        },
        color: {
            type: DataTypes.VARCHAR(50),
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        color_id: {
            type: DataTypes.INTEGER(FK),
            allowNull: false
        },
        size_id: {
            type: DataTypes.INTEGER(FK),
            allowNull: false
        }, 
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
    });
    
    return Product;
    };
    