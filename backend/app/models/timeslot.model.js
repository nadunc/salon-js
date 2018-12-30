const Sequelize = require('sequelize');
const sequelize = require('../database');
const StylistModel = require('./stylist.model');
const moment = require('moment');


const TimeSlotModel = sequelize.define('timeslot', {
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
    }
}, {
    underscored: true,
    // validate: {
    //     ToGreaterThanNow() {
    //         if(this.date === moment().format('YYYY-MM-DD')){
    //             if(moment(this.start, 'HH:mm:ss').isBefore(moment(moment().format('HH:mm:ss'), 'HH:mm:ss'))){
    //                 throw new Error('Start time must be greater than current time.')
    //             }
    //         }
    //     },
    //     ToGreaterThanFrom() {
    //         if(moment(this.end, 'HH:mm:ss').isBefore(moment(this.start, 'HH:mm:ss'))){
    //             throw new Error('Start time cannot be grater than end time.')
    //         }
    //     },
    //
    //     AtLeaseOneHourGap() {
    //         // if(moment(this.end, 'HH:mm:ss').isBefore(moment(this.start, 'HH:mm:ss'))){
    //         //     throw new Error('Start time cannot be grater than end time.')
    //         // }
    //         // TODO
    //     }
    // }
});

TimeSlotModel.belongsTo(StylistModel);

// // force: true will drop the table if it already exists
// TestModel.sync({force: true}).then(() => {
//     // Table created
//     return TestModel.create({
//         firstname: 'John',
//         lastname: 'Hancock'
//     });
// });

// TimeSlotModel.sync();

module.exports = TimeSlotModel;