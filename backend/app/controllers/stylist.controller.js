var StylistModel = require('../models/stylist.model');
var UserModel = require('../models/user.model');
var ExperienceModel = require('../models/experience.model');
var commonMethods = require('../commons/commonMethods');
var responseMessages = require('../commons/responseMessages');
var validations = require('../commons/validaion');
const constants = require('../commons/constants');

var sequelize = require('../database');


exports.findAll = (req, res) => {
    StylistModel.findAll().then(stylists => {
        res.json(commonMethods.createResponse(true, stylists, responseMessages.STYLIST_LIST_RETRIEVE_SUCCESS));

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};


exports.findById = (req, res) => {

    StylistModel.findOne({where: {id:req.params.id}, include:[ExperienceModel]}).then(stylist => {
        res.json(commonMethods.createResponse(true, stylist, responseMessages.STYLIST_RETRIEVE_SUCCESS));

    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });

};


exports.create = (req, res) => {
    let temp = req.body;


    let stylist = {
        firstname: temp.firstname,
        lastname: temp.lastname,
        email: temp.email,
        promotional_emails: temp.promotional_emails,
        experience_id: temp.experience,
        stylist_price : temp.stylist_price,
        bio: temp.bio
    };

    let user = {
        email: temp.email,
        password: commonMethods.generateBcryptHash(temp.password),
        user_role_id: constants.USER_ROLE_ID_STYLIST

    };


    sequelize.transaction((t) => {
        // chain all your queries here. make sure you return them.
        return UserModel.create(user, {transaction: t}).then((user) => {
            stylist.user_id = user.id;
            return StylistModel.create(stylist, {transaction: t});
        });
    }).then((result) => {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
        res.json(commonMethods.createResponse(true, stylist, responseMessages.STYLIST_ADD_SUCCESS));

    }).catch((err) => {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));

    });


};



exports.update = (req, res) => {
    let id = req.params.id;
    let temp = req.body;


    let stylistUpdate = {
        firstname: temp.firstname,
        lastname: temp.lastname,
        image: temp.image,
        experience_id: temp.experience_id,
        stylist_price : temp.stylist_price,
        educator_price : temp.educator_price,
        bio: temp.bio
    };

    StylistModel.findOne({where: {id:req.params.id}, include:[ExperienceModel]}).then((stylist) => {
        stylist.update(stylistUpdate).then((stylist)=>{
            res.json(commonMethods.createResponse(true, stylist, responseMessages.STYLIST_UPDATE_SUCCESS));
        }).catch((err)=>{
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        })
    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });


}


