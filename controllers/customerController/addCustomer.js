const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');

const addCustomer = asyncHandler(async (req,res) => {
     const {name, phone, email} = req.body;
     const user_id = 1;
     if (!name || !phone || !email) {
          res.status(400);
          throw new Error("Name,phone,email fields are required");
     }
      // Aynı isim var mı kontrol et
     const existing = await Customer.findOne({where: {name}});
     if (existing) {
          res.status(400);
          throw new Error("Customer with this name already exists");
     }
     await Customer.create({name : name, phone:phone, email:email, user_id : user_id});
     res.status(201).json({ message: `Customer added : ${name}` });
});

module.exports = addCustomer