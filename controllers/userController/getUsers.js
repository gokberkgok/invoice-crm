const asyncHandler = require('express-async-handler');
const User = require('../../models/User');
const getUsers = asyncHandler(async (req,res) => {
     const rows = await User.findAll({
          attributes: ['id', 'name', 'email'],
     });
     if (rows.length === 0){
          res.status(404).json({message : "Henüz veri yok"});
     }
     res.status(200).json(rows);
});

module.exports = getUsers