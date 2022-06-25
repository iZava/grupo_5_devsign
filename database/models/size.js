module.exports = (sequelize, DataTypes) => {
    let alias = "size";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_size: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        tableName: 'size',
        timestamps: false
    }
   
    let size = sequelize.define(alias, cols, config);
    
    size.associate = function(models){
        size.hasMany(models.product, {
            as: "fkproduct",
            foreignKey: "size_id"
        });
    }


    return size;
    };
    