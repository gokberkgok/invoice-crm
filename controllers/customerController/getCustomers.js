const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');
const User = require('../../models/User');
const getCustomers = asyncHandler(async (req,res) => {
    // const userId = req.user.userId;
     const rows = await Customer.findAll({
         // where : {user_id : userId},
          attributes: ['id', 'name', 'phone', 'email'],
          include : [{
               model : User,
               as : 'user',
               attributes : ['name', 'email']
          }]
     });
     if (rows.length === 0){
          res.status(404).json({message : "Henüz veri yok"});
     }
     res.status(200).json(rows);
});

module.exports = getCustomers