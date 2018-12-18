const Sequelize = require('sequelize');
var sequelize = require('../database');

const ExperienceModel = sequelize.define('experience', {
    description: {
        type: Sequelize.STRING
    }
}, {underscored: true,});

// // force: true will drop the table if it already exists
// ExperienceModel.sync({force: true}).then(() => {
//     // Table created
//     return ExperienceModel.create({
//         description: 'Less than 6 months'
//     });
// });

module.exports = ExperienceModel;