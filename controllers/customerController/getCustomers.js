const asyncHandler = require('express-async-handler');
const pool = require('../../db');

const getCustomers = asyncHandler(async (req,res) => {
     const [rows] = await pool.query("SELECT * FROM customers");
     if (rows == ''){
          res.status(500).json({message : "Henüz veri yok"});
     }
     res.status(200).json(rows);
});

module.exports = getCustomers