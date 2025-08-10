const asyncHandler = require('express-async-handler');
const User = require('../../models/User');

const addUser = asyncHandler(async (req,res) => {
     const {name, email} = req.body;
     if (!name || !email) {
          res.status(400);
          throw new Error("Name,phone,email fields are required");
     }
      // Aynı isim var mı kontrol et
     const existing = await User.findOne({where: {name}});
     if (existing) {
          res.status(400);
          throw new Error("User with this name already exists");
     }
     await User.create({name : name, email:email});
     res.status(201).json({ message: `User added : ${name}` });
});

module.exports = addUser