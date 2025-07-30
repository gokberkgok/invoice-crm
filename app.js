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
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

