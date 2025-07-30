const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // kendi db bağlantı dosyana göre düzenle
const User = require('./User'); // ilişki kurmak için import

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
      model: User,      // refere edilen model
      key: 'id',        // User tablosundaki id
    },
    onDelete: 'CASCADE', // kullanıcı silinirse müşteriler de silinsin
  },
}, {
  tableName: 'customers',
  timestamps: true,
});

module.exports = Customer;
