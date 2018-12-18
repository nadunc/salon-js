const Sequelize = require('sequelize');
var sequelize = require('../database');
var UserModel = require('.//user.model');
var ExperienceModel = require('./experience.model');

const StylistModel = sequelize.define('stylist', {
    firstname: {
        type: Sequelize.STRING,
        validate:{
            isAlpha:{
                msg: "First Name can only contain letters."
            }
        }
    },
    lastname: {
        type: Sequelize.STRING,
        validate:{
            isAlpha:{
                msg: "Last Name can only contain letters."
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate:{
            isEmail: {
                msg : 'Email is not valid'
            }
        }
    },
    image: {
        type: Sequelize.STRING
    },
    bio: {
        type: Sequelize.TEXT
    },
    stylist_price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        validate:{
            isNumeric: {
                msg : 'Price can only be numbers.'
            },
            min: 0
        }
    },
    educator_price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        validate:{
            isNumeric: {
                msg : 'Price can only be numbers.'
            },
            min: 0
        }
    },
    promotional_emails: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    work_as_stylist: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    work_as_educator: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }

},{underscored: true});

// StylistModel.belongsTo(UserModel, {foreignKey: 'fk_user'});
StylistModel.belongsTo(UserModel);
StylistModel.belongsTo(ExperienceModel);


// // force: true will drop the table if it already exists
// StylistModel.sync({force: true}).then(() => {
//     // return StylistModel.create({
//     //     user_id:1,
//     //     experience_id:1
//     // });
// });


module.exports = StylistModel;
