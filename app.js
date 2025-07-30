const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const customerRoutes = require('./routers/customerRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.get('/', function (req,res) {
    res.send("hey");
});

app.use('/api/customers', customerRoutes);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

