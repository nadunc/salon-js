const Sequelize = require('sequelize');
var sequelize = require('../database');

const TestModel = sequelize.define('test', {
    firstname: {
        type: Sequelize.STRING,
        validate: {
            isAlpha: {
                msg: "First Name must only contain letters."
            }
        }
    },
    lastname: {
        type: Sequelize.STRING,
        validate: {
            isAlpha: {
                msg: "Last Name must only contain letters."
            }
        }
    }
}, {underscored: true,});

// // force: true will drop the table if it already exists
// TestModel.sync({force: true}).then(() => {
//     // Table created
//     return TestModel.create({
//         firstname: 'John',
//         lastname: 'Hancock'
//     });
// });

module.exports = TestModel;