const Sequelize = require('sequelize');
var sequelize = require('../database');
var UserModel = require('.//user.model');

const SalonModel = sequelize.define('salon', {
    name: {
        type: Sequelize.STRING,
        validate:{
            isAlphanumeric:{
                msg : 'Name can only contain letters & numbers'
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate:{
            isEmail:{
                msg : 'Email is not valid'
            }
        }
    },
    image: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING,
        validate:{
            notEmpty:{
                msg : 'Phone cannot be empty'
            }
        }
    },
    address: {
        type: Sequelize.STRING,
        validate:{
            notEmpty:{
                msg : 'Address cannot be empty'
            }
        }
    },
    description: {
        type: Sequelize.TEXT
    },

    promotional_emails: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }

},{underscored: true});


SalonModel.belongsTo(UserModel);



// force: true will drop the table if it already exists
// SalonModel.sync({force: true}).then(() => {
SalonModel.sync().then(() => {
//     // return StylistModel.create({
//     //     user_id:1,
//     //     experience_id:1
//     // });
});



module.exports = SalonModel;
