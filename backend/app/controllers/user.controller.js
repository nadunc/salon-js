const UserModel = require('../models/user.model');
const commonMethods = require('../commons/commonmethods');
const constants = require('../commons/constants');
const responseMessages = require('../commons/responseMessages');
const jwt = require('jsonwebtoken');
const sequelize = require('../database');


exports.forgetPasswordSendLink = (req, res) => {
    let email = req.body.email;


    UserModel.findOne({where: {email: email}}).then((user) => {
        if (user) {

            jwt.sign({id: user.id, email: user.email, time: Date.now()}, constants.PASSWORD_RESET_KEY, (err, token) => {
                console.log("token: ", token);

                UserModel.update({password_reset_token: token,}, {where: {email: email}}).then((user) => {
                    res.json(commonMethods.createResponse(true, null, responseMessages.USER_PASSWORD_RESET_CODE_SENT));
                }).catch((err) => {
                    res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
                });
            });

        } else {
            res.json(commonMethods.createResponse(false, null, responseMessages.USER_NOT_FOUND));
        }

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });


};


exports.forgetPasswordValidate = (req, res) => {
    let token = req.body.token;

    jwt.verify(token, constants.PASSWORD_RESET_KEY, (err, decoded) => {
        if (decoded) {
            UserModel.findOne({where: {email: decoded.email, password_reset_token: token}}).then((user) => {
                res.json(commonMethods.createResponse(true, null, responseMessages.VALID_PASSWORD_RESET_LINK));
            }).catch((err) => {
                res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
            });
        } else {
            res.json(commonMethods.createResponse(false, null, responseMessages.INVALID_PASSWORD_RESET_LINK));
        }
    });
};



exports.forgetPassword = (req, res) => {

    let token = req.body.token;
    let password = req.body.password;

    jwt.verify(token, constants.PASSWORD_RESET_KEY, (err, decoded) => {
        if (decoded) {
            UserModel.findOne({where: {email: decoded.email, password_reset_token: token}}).then((user) => {
                if (user) {
                    UserModel.update({
                        password_reset_token: '',
                        password: commonMethods.generateBcryptHash(password)
                    }, {where: {email: decoded.email}}).then((user) => {
                        res.json(commonMethods.createResponse(true, null, responseMessages.USER_PASSWORD_RESET_SUCCESS));
                    }).catch((err) => {
                        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
                    });
                } else {
                    res.json(commonMethods.createResponse(false, null, responseMessages.INVALID_PASSWORD_RESET_LINK));
                }
            }).catch((err) => {
                res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
            });
        } else {
            res.json(commonMethods.createResponse(false, null, responseMessages.INVALID_PASSWORD_RESET_LINK));
        }
    });

};
