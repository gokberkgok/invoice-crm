const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const customerRoutes = require('./routers/customerRoutes');
const errorHandler = require('./middlewares/errorHandler');
app.use(express.json());
const sequelize = require('./db');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', function (req,res) {
    res.send("hey");
});

app.use('/api/customers', customerRoutes);
app.use(errorHandler);

const port = process.env.PORT || 5000;
const User = require('./models/User');
const Customer = require('./models/Customer');
// ilişkileri tanımla
User.hasMany(Customer, { foreignKey: 'user_id' });
Customer.belongsTo(User, { foreignKey: 'user_id' });

sequelize.sync({ alter: true }) // 👈 alter true ise tabloyu günceller, force true ise silip yeniden oluşturur
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log('Server is running: http://localhost:5000');
    });
  })
  .catch(err => {
    console.error('Database error:', err);
  });
