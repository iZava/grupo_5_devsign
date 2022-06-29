const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require('../../database/models/index')



const User = db.user;
const User_category = db.user_category;

const controller = {
  addEditUser: async function(req, res){
    try {
      const allCategory = await User_category.findAll();
      const users = await User.findAll({include :["categories"]});
    return res.render("users/addEditUser",{allCategory,users});
    } catch (err){
      console.error(err)
      }
  },
  editUser: async function(req, res){
    try {
      const id = req.params.id;      
      const allCategory = await User_category.findAll();
      const users = await User.findByPk(id, {include :["categories"]});    
    return res.render("users/editUser",{allCategory,users});
    } catch (err){
      console.error(err)
      }
  },
  update: async function(req, res){
    try {
      const users = await User.findAll();
      const allCategory = await User_category.findAll();
      const validation = validationResult(req);
          
      if (validation.errors.length > 0) {
          return res.render("users/editUser", {
            oldData: req.body,
            users: users,
            allCategory: allCategory,
            errors: validation.mapped(),
          });
        }
          const userEdit= {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            logUser: req.body.logUser,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            repeat_password: bcryptjs.hashSync(req.body.repeat_password, 10),
            category_id: req.body.category_id,
            image: req.file?.filename ?? "user_01.png"} 
          
          await User.update(userEdit,{
                where : {id: req.params.id}
              });
        
          return res.redirect('/users/addEditUser');      
    } catch (err){
      console.error(err)
    }
    },
  loginProcess: async (req, res) => {
    const checkLogUser = req.body.logUser;
    const userToLogin = await User.findOne({
      where :{
        logUser: checkLogUser,
      }
      })
    if (userToLogin) {
      const passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (passwordOk) {
        delete userToLogin.password && delete userToLogin.repeat_password;
        req.session.userLogged = userToLogin;       
        return res.redirect("/");
      } else {
        return res.render("users/login", {
          errors: {
            password: {
              msg: "La contraseña es incorrecta",
            },
          },
        });
      }
    }
    return res.render("users/login", {
      errors: {
        logUser: {
          msg: "El usuario no está registrado",
        },
      },
    });
  },

  login: (req, res) => {
    res.render("users/login");
  },
  register: async (req, res) => {
    try{
      const allCategory = await User_category.findAll();
      res.render("users/register",{allCategory});
    } catch (err){
    console.error(err)
    }
  },
  
  registerProcess: async function(req, res){
    try {
    const allCategory = await User_category.findAll();  
    const validation = validationResult(req);
          if (validation.errors.length > 0) {
          return res.render("users/register", {
            allCategory: allCategory,
            errors: validation.mapped(),
            oldData: req.body,
          });
        }
    const checkEmail = req.body.email;
      const emailinDB = await User.findOne({
            where :{email: checkEmail}  });
        if (emailinDB) {
          return res.render("users/register", {
            errors: {
              email: {
                msg: "El email ya esta registrado",
              },
            },
            oldData: req.body,
          });
        }

      const checkLogUser = req.body.logUser;
        const userDB = await User.findOne({
              where :{logUser: checkLogUser}});
          if (userDB) {
            return res.render("users/register", {
              errors: {
                logUser: {
                  msg: "El usuario ya esta registrado",
                },
              },
              oldData: req.body,
            });
          }
        const userToCreate = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              logUser: req.body.logUser,
              email: req.body.email,
              password: bcryptjs.hashSync(req.body.password, 10),
              repeat_password: bcryptjs.hashSync(req.body.repeat_password, 10),
              category_id: req.body.category_id,
              image: req.file?.filename ?? "user_01.png"
        };        
        
        await User.create(userToCreate);

        return res.redirect("/users/login");
      
    } catch (err){
      console.error(err)
    }
    },
  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  }, 
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
  delete: async function(req, res){
    try{
      const id = req.params.id;
      await User.destroy({
        where: {id:id}
      });
      return res.redirect("/users/addEditUser");
    } catch(err){
      console.error(err)
    }
  }
}

module.exports = controller;
