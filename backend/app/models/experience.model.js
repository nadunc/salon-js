const Sequelize = require('sequelize');
var sequelize = require('../database');

const ExperienceModel = sequelize.define('experience', {
    description: {
        type: Sequelize.STRING
    }
}, {underscored: true,});

// // force: true will drop the table if it already exists
// ExperienceModel.sync({force: true}).then(() => {
ExperienceModel.sync().then(() => {
    // Table created
    return ExperienceModel.bulkCreate([
        {
            id: 1,
            description: 'Less than 6 months'
        },
        {
            id: 2,
            description: '6 months'
        },
        {
            id: 3,
            description: '1 Year'
        },
        {
            id: 4,
            description: '2 Years'
        },
        {
            id: 5,
            description: '3 Years'
        },
        {
            id: 6,
            description: '4 Years'
        },
        {
            id: 7,
            description: '5 Years'
        },
        {
            id: 8,
            description: '5-10 Years'
        },
        {
            id: 9,
            description: '10-15 Years'
        },
        {
            id: 10,
            description: '15 Years+'
        }
    ]);
});

module.exports = ExperienceModel;