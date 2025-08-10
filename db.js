const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const sequelize = new Sequelize(
  process.env.DB_DATABASE, 
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+03:00', // Türkiye saati
    logging: false // SQL log'larını kapar
});


module.exports = sequelize;
