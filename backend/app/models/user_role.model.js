const Sequelize = require('sequelize');
var sequelize = require('../database');

const UserRoleModel = sequelize.define('user_role', {
    // id:{
    //     type: Sequelize.INTEGER,
    //     primaryKey: true
    // },
    name: {
        type: Sequelize.STRING
    }
}, {underscored: true,});

// // force: true will drop the table if it already exists
// UserRoleModel.sync({force: true}).then(() => {
//     // Table created
//     // return TestModel.create({
//     //     firstname: 'John',
//     //     lastname: 'Hancock'
//     // });
//     return UserRoleModel.bulkCreate([{id: 1, name:'Admin'}, {id: 2, name:'Stylist'}, {id: 3, name:'Salon'}]);
// });

module.exports = UserRoleModel;