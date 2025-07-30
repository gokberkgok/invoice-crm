const asyncHandler = require('express-async-handler');

const updateCustomer = asyncHandler(async (req,res) => {
     res.status(200).json({message : "updateCustomer"});
});

module.exports = updateCustomer