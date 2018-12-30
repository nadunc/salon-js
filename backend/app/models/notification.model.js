const Sequelize = require('sequelize');
const sequelize = require('../database');
const UserModel = require('./user.model');


const NotificationModel = sequelize.define('notification', {
    description:{
        type: Sequelize.STRING,
    },
    seen:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    underscored: true,
});

NotificationModel.belongsTo(UserModel);

// NotificationModel.sync();

module.exports = NotificationModel;