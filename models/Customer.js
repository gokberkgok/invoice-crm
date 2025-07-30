const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,      
      key: 'id',        // User tablosundaki id
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'customers',
  timestamps: true,
});

module.exports = Customer;
