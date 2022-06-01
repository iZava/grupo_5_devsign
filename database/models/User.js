module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
    },
    logUser: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.VARCHAR(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.VARCHAR(10),
      allowNull: false,
    },
    repeat_password: {
      type: DataTypes.VARCHAR(10),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER(FK),
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });

  return User;
};
