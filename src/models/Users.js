const path = require("path");
const fs = require("fs");


const User = {
  fileName: path.join(__dirname, "../data/users.json"),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  generateId: function () {
    const users = this.findAll();
    const lastUser = users.pop();
    if (lastUser) {
    return lastUser.id + 1
    } else
    return 1 //if no users, start with 1
    },

  findAll: function () {
    return this.getData();
  },  //Buscar a todos los usuarios

  findById: function (id) {
    const users = this.findAll();
    const userFound = users.find(user => user.id === id);
    return userFound;
    }, //Buscar a un usuario por su id

    findByEmail: function (email) {
        const users = this.findAll();
        const userFound = users.find(user => user.email === email);
        return userFound;
    }, //Buscar a un usuario por su email

    findByField: function (field, text) {
        const users = this.findAll();
        const userFound = users.find(user => user[field] === text);
        return userFound;
    }, //Buscar a un usuario por un campo especifico

    create: function (user) {
        const users = this.findAll();
        const newUser = {
            id: this.generateId(),
            ...user
        };
        users.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(users, null, ' '));
        return newUser;
    }, //Crear un usuario

    delete: function (id) {
        const users = this.findAll();
        const finalUsers = users.filter(user => user.id !== id);
        fs.writeFileSync(this.fileName , JSON.stringify(finalUsers, null, ' '));
        return finalUsers;
    }, //Eliminar un usuario

};

module.exports = User;
