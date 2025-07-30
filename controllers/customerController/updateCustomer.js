const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');

const updateCustomer = asyncHandler(async (req,res) => {
     const { name } = req.body;
     const { id } = req.params;
     if (!name) {
          res.status(400);
          throw new Error("Name field is required");
     }
     // isim var mı kontrol et
     const existing = await Customer.findOne({where: {id}});
     if (!existing){
          res.status(400);
          throw new Error("Customer id not found");
     }
     await Customer.update({name : name}, {where : {id:id}});
     res.status(201).json({ message: `Customer updated name : ${name} with id : ${id}` });
});

module.exports = updateCustomer