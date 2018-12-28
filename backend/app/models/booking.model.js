const Sequelize = require('sequelize');
const sequelize = require('../database');
const TimeSlotModel = require('./timeslot.model');
const SalonModel = require('./salon.model');
const StylistModel = require('./stylist.model');
const moment = require('moment');


const BookingModel = sequelize.define('booking', {
    date: {
        type: Sequelize.DATEONLY,
        validate: {
            isDate: {
                msg: 'Date should be a valid date.'
            },
            isAfter: {
                args: moment().subtract(1, 'days').format('YYYY-MM-DD'),
                msg: 'Past dates are not allowed.'
            },
        }
    },
    start: {
        type: Sequelize.TIME,
        validate: {
            notEmpty: {
                msg: "Start time cannot be empty."
            }
        }
    },
    end: {
        type: Sequelize.TIME,
        validate: {
            notEmpty: {
                msg: "End time cannot be empty."
            }
        }
    },
    accepted:{
        type: Sequelize.BOOLEAN,
    },
    role:{
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "Hiring role cannot be empty."
            }
        }
    }
}, {
    underscored: true,
});

BookingModel.belongsTo(TimeSlotModel);
BookingModel.belongsTo(SalonModel);
BookingModel.belongsTo(StylistModel);


BookingModel.sync();

module.exports = BookingModel;