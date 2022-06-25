module.exports = (sequelize, DataTypes) => {
    let alias = "color";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_color: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        tableName: 'color',
        timestamps: false
    }
   
    let color = sequelize.define(alias, cols, config);
    
    color.associate = function(models){
        color.hasMany(models.product, {
            as: "colors",
            foreignKey: "color_id"
        });
    }    
    return color;
    };
    