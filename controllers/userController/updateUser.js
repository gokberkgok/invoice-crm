const asyncHandler = require('express-async-handler');
const User = require('../../models/User');

const updateUser = asyncHandler(async (req,res) => {
     const { name, email } = req.body;
     const { id } = req.params;
     if (!name) {
          res.status(400);
          throw new Error("Name field is required");
     }
     // isim var mı kontrol et
     const existing = await User.findOne({where: {id}});
     if (!existing){
          res.status(400);
          throw new Error("User id not found");
     }
     await User.update({name:name, email:email}, {where : {id:id}});
     res.status(201).json({ message: `User updated name : ${name} with id : ${id}` });
});

module.exports = updateUser