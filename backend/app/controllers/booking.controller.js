var commonMethods = require('../commons/commonMethods');
var responseMessages = require('../commons/responseMessages');
const constants = require('../commons/constants');
const BookingModel = require('../models/booking.model');
const SalonModel = require('../models/salon.model');
const StylistModel = require('../models/stylist.model');
const NotificationModel = require('../models/notification.model');


exports.findBookingRequestsByStylist = (req, res) => {

    StylistModel.findOne({where: {user_id: req.user.id}}).then((stylist) => {

        BookingModel.findAll({
            where: {stylist_id: stylist.id, accepted: null},
            include: [SalonModel, StylistModel]
        }).then((bookings) => {
            res.json(commonMethods.createResponse(true, bookings, responseMessages.BOOKING_REQUESTS_LIST_RETRIEVE_SUCCESS));
        }).catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })

};


exports.create = (req, res) => {

    let temp = req.body;

    let booking = {
        date: temp.date,
        start: temp.start,
        end: temp.end,
        timeslot_id: temp.timeslot_id,
        stylist_id: temp.stylist_id,
        role: temp.role, // 1=>stylist, 2=>educator
    };

    SalonModel.findOne({where: {user_id: req.user.id}}).then((salon) => {
        booking.salon_id = salon.id;

        BookingModel.create(booking).then((booking) => {
            StylistModel.findByPk(booking.stylist_id).then((stylist) => {
                let notification = {
                    description: 'New booking request from ' + salon.name,
                    user_id: stylist.user_id
                }
                NotificationModel.create(notification);
            }).catch((err) = {})
            res.json(commonMethods.createResponse(true, booking, responseMessages.BOOKING_ADD_SUCCESS));

        }).catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })

};



exports.reject = (req, res) => {
    BookingModel.findOne({where: {id: req.body.booking_id}}).then((booking) => {
        bookingUpdate = {
            accepted : false
        };
        booking.update(bookingUpdate).then((booking)=>{
            res.json(commonMethods.createResponse(true, booking, responseMessages.BOOKING_REJECT_SUCCESS));
        }).catch((err)=>{
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });
    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })
};