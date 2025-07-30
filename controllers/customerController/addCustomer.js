const asyncHandler = require('express-async-handler');

const addCustomer = asyncHandler(async (req,res) => {
     res.status(200).json({message : "addCustomer"});
});

module.exports = addCustomer