const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');
const getCustomer = asyncHandler(async (req,res) => {
    const id = req.params.id;
    const row = await Customer.findOne({where: {id}});
    if (!row) {
       res.status(400);
       throw new Error("Hata!");
    }
    res.status(200).json(row);
});

module.exports = getCustomer