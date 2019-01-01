var commonMethods = require('../commons/commonMethods');
var responseMessages = require('../commons/responseMessages');
const constants = require('../commons/constants');
const BookingModel = require('../models/booking.model');
const SalonModel = require('../models/salon.model');
const StylistModel = require('../models/stylist.model');
const NotificationModel = require('../models/notification.model');
var sequelize = require('../database');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;



exports.findFeedbacksByStylist = (req, res) => {
    BookingModel.findAll({where: {stylist_id: req.params.id, rating:{[Op.ne]: 0}}, attributes: ['id','feedback', 'rating', 'date']}).then((bookings) => {
            res.json(commonMethods.createResponse(true, bookings, responseMessages.FEEDBACK_LIST_RETRIEVE_SUCCESS));
    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })
};



exports.findAverageRatingByStylist = (req, res) => {
    let sql = "SELECT AVG(rating) as rating FROM bookings WHERE stylist_id=:stylist_id AND rating!=0";

    sequelize.query(sql,
        {
            replacements: {stylist_id: req.params.id},
            raw: true,
            type: sequelize.QueryTypes.SELECT
        }).then((bookings) => {
        res.json(commonMethods.createResponse(true, bookings, responseMessages.RATING_RETRIEVE_SUCCESS));
    }).catch((err) => {
        res.json(err)
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })
};



exports.addFeedback = (req, res) => {
    let temp = req.body;

    let feeback = {
        rating: temp.rating,
        feedback: temp.review
    };

    BookingModel.findOne({where: {id: req.params.id}}).then((booking) => {
        booking.update(feeback).then((booking) => {
            res.json(commonMethods.createResponse(true, booking, responseMessages.FEEDBACK_ADD_SUCCESS));
        }).catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });
    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })

};
