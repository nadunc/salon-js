var commonMethods = require('../commons/commonMethods');
var responseMessages = require('../commons/responseMessages');
const constants = require('../commons/constants');
const BookingModel = require('../models/booking.model');
const SalonModel = require('../models/salon.model');
const StylistModel = require('../models/stylist.model');
const NotificationModel = require('../models/notification.model');
var sequelize = require('../database');


exports.findBookingsByStylist = (req, res) => {

    StylistModel.findOne({where: {user_id: req.user.id}}).then((stylist) => {

        BookingModel.findAll({
            where: {stylist_id: stylist.id, accepted: true},
            include: [SalonModel, StylistModel]
        }).then((bookings) => {
            res.json(commonMethods.createResponse(true, bookings, responseMessages.BOOKING_LIST_RETRIEVE_SUCCESS));
        }).catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })

};

exports.findBookingsBySalon = (req, res) => {

    SalonModel.findOne({where: {user_id: req.user.id}}).then((salon) => {

        BookingModel.findAll({
            where: {salon_id: salon.id, accepted: true},
            include: [SalonModel, StylistModel]
        }).then((bookings) => {
            res.json(commonMethods.createResponse(true, bookings, responseMessages.BOOKING_LIST_RETRIEVE_SUCCESS));
        }).catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });

    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })

};

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
        price: temp.price,
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
            accepted: false
        };
        booking.update(bookingUpdate).then((booking) => {
            res.json(commonMethods.createResponse(true, booking, responseMessages.BOOKING_REJECT_SUCCESS));
        }).catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });
    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })
};


exports.accept = (req, res) => {

    BookingModel.findOne({where: {id: req.body.booking_id}}).then((booking) => {

        let date = booking.date;
        let start = booking.start;
        let end = booking.end;

        // TODO : token
        let stylistId = booking.stylist_id;

        let sql = "SELECT COUNT(*) as count FROM bookings " +
            "WHERE id<>:booking_id AND accepted=true AND stylist_id=:stylist_id AND date=:date " +
            "AND ((start>=:start AND (end>=:end AND start<:end)) " +
            "OR (start>=:start AND (end<=:end)) " +
            "OR (start<=:start AND (end>=:end)) " +
            "OR (start<=:start AND (end<=:end AND end>:start)))";


        sequelize.query(sql,
            {
                replacements: {booking_id:booking.id, stylist_id: stylistId, date: date, start: start, end: end},
                raw: true,
                type: sequelize.QueryTypes.SELECT
            })
            .then((result) => {
                // console.log(result);
                let count = result[0].count;

                if (count === 0) {
                    bookingUpdate = {
                        accepted: true
                    };
                    booking.update(bookingUpdate).then((booking) => {
                        res.json(commonMethods.createResponse(true, booking, responseMessages.BOOKING_ACCEPT_SUCCESS));
                    }).catch((err) => {
                        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
                    });

                } else {
                    res.json(commonMethods.createResponse(false, null, responseMessages.BOOKING_TIME_CONFLICT));
                }
            })
            .catch((err) => {
                res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));

            });


    }).catch((err) => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    })


};






