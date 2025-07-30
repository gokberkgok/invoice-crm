const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');
const getCustomers = asyncHandler(async (req,res) => {
     const rows = await Customer.findAll({
          attributes: ['id', 'name'],
     });
     if (rows.length === 0){
          res.status(404).json({message : "Henüz veri yok"});
     }
     res.status(200).json(rows);
});

module.exports = getCustomers