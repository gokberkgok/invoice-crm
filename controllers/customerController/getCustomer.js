const asyncHandler = require('express-async-handler');
const pool = require('../../db');

const getCustomer = asyncHandler(async (req,res) => {
    const id = req.params.id;
    const [row] = await pool.query("SELECT * FROM customers WHERE id = ?", [id]);
    if (!row || row.length === 0) {
       res.status(400);
       throw new Error("Hata!");
    }
    res.status(200).json(row[0]);
});

module.exports = getCustomer