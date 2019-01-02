const Sequelize = require('sequelize');

const sequelize = new Sequelize('salon_js', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,
    // logging: false,
    // sync: { force: true },
});




sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



module.exports = sequelize;