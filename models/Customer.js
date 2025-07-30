const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'customers',
  timestamps: false // true yaparsan createdAt, updatedAt otomatik gelir
});

module.exports = Customer;
