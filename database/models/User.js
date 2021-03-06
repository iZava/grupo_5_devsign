module.exports = (sequelize, DataTypes) => {
    let alias = 'user'
    
    let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'tu nombre'
            }
        }

    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    logUser: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    repeat_password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `http://localhost:3001/users/${this.id}`;
        },
        set(value) {
          throw new Error('Do not try to set the `fullName` value!');
        }
      }
    }

    let config = {
        tableName: 'user',
        timestamps: false
    }
    
    let user = sequelize.define(alias, cols, config);
    
    user.associate = function(models){
        user.belongsTo(models.user_category,{
            as: "categories",
            foreignKey: "category_id"
        });
    }
    return user;
    };