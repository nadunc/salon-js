const Sequelize = require('sequelize');
const sequelize = require('../database');
const UserRoleModel = require('../models/user_role.model');
const constants = require('../commons/constants');
const UserModel = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate:{
            isEmail: {
                msg : 'Email is not valid'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty:{
                msg : 'Password cannot be empty'
            }
        }
    },
    // user_role:{
    //     type: Sequelize.INTEGER,
    // },
    password_reset_token:{
        type: Sequelize.STRING
    }
}, {
    underscored: true
});

UserModel.belongsTo(UserRoleModel);

// // force: true will drop the table if it already exists
// UserModel.sync({force: true}).then(() => {
//     // Table created
//     return UserModel.create({
//         email: 'admin@example.com',
//         password: 'admin',
//         user_role_id: constants.USER_ROLE_ID_ADMIN
//     });
// });

// UserModel.sync();


module.exports = UserModel;