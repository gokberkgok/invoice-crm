const asyncHandler = require('express-async-handler');

const deleteCustomer = asyncHandler(async (req,res) => {
     res.status(200).json({message : "deleteCustomer"});
});

module.exports = deleteCustomer