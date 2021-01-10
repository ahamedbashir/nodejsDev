const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'bashdb20', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;