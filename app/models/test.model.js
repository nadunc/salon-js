const Sequelize = require('sequelize');
var sequelize = require('../database');

const TestModel = sequelize.define('test', {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

// // force: true will drop the table if it already exists
// TestModel.sync({force: true}).then(() => {
//     // Table created
//     return TestModel.create({
//         firstname: 'John',
//         lastname: 'Hancock'
//     });
// });

module.exports = TestModel;