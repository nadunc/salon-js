var SalonModel = require('../models/salon.model');
var UserModel = require('../models/user.model');
var commonMethods = require('../commons/commonmethods');
var responseMessages = require('../commons/responseMessages');
const constants = require('../commons/constants');

var sequelize = require('../database');

exports.findAll = (req, res) => {
    SalonModel.findAll().then(salons => {
        res.json(commonMethods.createResponse(true, salons, responseMessages.SALON_LIST_RETRIEVE_SUCCESS));

    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};


exports.findById = (req, res) => {

    SalonModel.findByPk(req.params.id).then(salon => {
        res.json(commonMethods.createResponse(true, salon, responseMessages.SALON_RETRIEVE_SUCCESS));

    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};


exports.create = (req, res) => {

    let temp = req.body;

    let salon = {
        name: temp.name,
        email: temp.email,
        phone: temp.phone,
        address: temp.address,
        promotional_emails: temp.promotional_emails
    };

    let user = {
        email: temp.email,
        password: commonMethods.generateBcryptHash(temp.password),
        user_role_id: constants.USER_ROLE_ID_SALON

    };

    sequelize.transaction((t) => {
        return UserModel.create(user, {transaction: t}).then((user) => {
            salon.user_id = user.id;
            return SalonModel.create(salon, {transaction: t});
        });

    }).then((result) => {
        // Transaction has been committed
        res.json(commonMethods.createResponse(true, salon, responseMessages.SALON_ADD_SUCCESS));

    }).catch((err) => {
        // Transaction has been rolled back
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));

    });


};


