const asyncHandler = require('express-async-handler');
const User = require('../../models/User');

const deleteUser = asyncHandler(async (req,res) => {
     const { id } = req.params;
      // isim var mı kontrol et
     const existing = await User.findOne({where: {id}});
     if (!existing){
          res.status(400);
          throw new Error("User id not found");
     }
     await User.destroy({where : {id : id}});
     res.status(200).json({ message: `User deleted with id ${id}` });
});

module.exports = deleteUser