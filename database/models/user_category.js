module.exports = (sequelize, DataTypes) => {
    let alias = 'user_category'
    
    let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    name_category: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
    }
    let config = {
        tableName: 'user_category',
        timestamps: false
    }
   
    let user_category = sequelize.define(alias, cols, config);
    
    user_category.associate = function(models){
        user_category.hasMany(models.user, {
            as: "categories",
            foreignKey: "category_id"
        });
    }    
    return user_category;
    };