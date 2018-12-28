const NotificationModel = require('../models/notification.model');
const commonMethods = require('../commons/commonMethods');
const constants = require('../commons/constants');
const responseMessages = require('../commons/responseMessages');
const jwt = require('jsonwebtoken');
const sequelize = require('../database');


exports.findNotificationsByUser = (req, res) => {
    NotificationModel.findAll({where: {user_id: req.user.id}, order: sequelize.col('created_at', 'DESC'), limit:10}).then((notifications) => {
        res.json(commonMethods.createResponse(true, notifications, responseMessages.NOTIFICATION_LIST_RETRIEVE_SUCCESS));
    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })
};


exports.readNotification = (req, res) => {
    NotificationModel.findOne({where: {id: req.body.notification_id}}).then((notification) => {
        notificationUpdate = {
            seen : true
        };
        notification.update(notificationUpdate).then((notification)=>{
            res.json(commonMethods.createResponse(true, notification, responseMessages.NOTIFICATION_UPDATE_SUCCESS));
        }).catch((err)=>{
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        })
    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })

};
