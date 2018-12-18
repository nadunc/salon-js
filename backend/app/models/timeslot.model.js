const Sequelize = require('sequelize');
const sequelize = require('../database');
const StylistModel = require('./stylist.model');

const TimeSlotModel = sequelize.define('timeslot', {
    from: {
        type: Sequelize.DATE,
        // validate: {
        //     isAlpha: {
        //         msg: "First Name must only contain letters."
        //     }
        // }
    },
    to: {
        type: Sequelize.DATE,
        // validate: {
        //     isAlpha: {
        //         msg: "Last Name must only contain letters."
        //     }
        // }
    }
}, {
    underscored: true,
    validate: {
        ToGreaterThanFrom() {
            if (new Date(this.from).getTime() > new Date(this.to).getTime()) {
                throw new Error('From cannot be grater than To')
            }
        }
    }
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

TimeSlotModel.sync();

module.exports = TimeSlotModel;