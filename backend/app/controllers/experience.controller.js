var ExperienceModel = require('../models/experience.model');
var commonMethods = require('../commons/commonMethods');
var responseMessages = require('../commons/responseMessages');


exports.findAll = (req, res, next) => {
    ExperienceModel.findAll().then((experiences)  => {
        res.json(commonMethods.createResponse(true, experiences, responseMessages.EXPERIENCE_LIST_RETRIEVE_SUCCESS));

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));

    });
};


