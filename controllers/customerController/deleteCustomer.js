const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');

const deleteCustomer = asyncHandler(async (req,res) => {
     const { id } = req.params;
      // isim var mı kontrol et
     const existing = await Customer.findOne({where: {id}});
     if (!existing){
          res.status(400);
          throw new Error("Customer id not found");
     }
     await Customer.destroy({where : {id : id}});
     res.status(200).json({ message: `Customer deleted with id ${id}` });
});

module.exports = deleteCustomer