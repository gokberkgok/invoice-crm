const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 
const Customer = require('./Customer');
const User = require('./User');

const Invoice = sequelize.define('Invoice', {
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer, // hangi tabloya bağlı
      key: 'id',       // hangi alan primary key
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoice_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // POST sırasında otomatik şimdiki zaman
  },
}, {
  tableName: 'invoices',
  timestamps: true,
});
Invoice.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
module.exports = Invoice;
