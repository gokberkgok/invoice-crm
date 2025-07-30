const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');

const addCustomer = asyncHandler(async (req,res) => {
     const {name} = req.body;
     if (!name) {
          res.status(400);
          throw new Error("Name field is required");
     }
      // Aynı isim var mı kontrol et
     const existing = await Customer.findOne({where: {name}});
     if (existing) {
          res.status(400);
          throw new Error("Customer with this name already exists");
     }
     await Customer.create({name : name})
     res.status(201).json({ message: `Customer added : ${name}` });
});

module.exports = addCustomer