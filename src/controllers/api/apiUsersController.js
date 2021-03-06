const { sequelize } = require('../../../database/models/index');
const db = require('../../../database/models/index');

const User = db.user;

const controller = {
    UserList: async function (req, res) {
        try {
            const usersList = await User.findAll({
                include: {all: true},
                attributes: ['id','firstName','lastName','email','url']                
            })
            
            return res.json({
                count: usersList.length,
                users: usersList,
                status: 200
            });
        } catch (err) {
            console.error(err);
        }
    },

    UserDetail: async function (req, res) {
        try { 
            const id = req.params.id;
            const user = await User.findByPk(id, {
                include: {all: true},
                attributes: ['id','firstName','lastName','logUser','email','image']
        })
        return res.json({
            detail: user
        })
        }catch (err) {
            console.error(err);
        }
    },

    latestUser: async function (req, res) {        
        try {            
            const latUser = await User.findAll({
                attributes: [[sequelize.fn('max', sequelize.col('id')), 'ultimo']]
            })
            const idLatest = latUser[0].dataValues.ultimo            
            const latestUser = await User.findOne({
                where: { id: idLatest },
                attributes: ['id','firstName','lastName','logUser','email','image']
            })
            
            return res.json({
                latestUser: latestUser,
                status: 200
            })
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = controller;