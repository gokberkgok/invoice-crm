const asyncHandler = require('express-async-handler');
const Invoice = require('../../models/Invoice');
const Customer = require('../../models/Customer');
const getInvoices = asyncHandler(async (req,res) => {
     const id = req.user.userId;
     console.log("req.user.userId : ", id);
     const rows = await Invoice.findAll({
          where : {user_id : id},
          attributes: ['id', 'amount','description','invoice_date'],
          include : [{
               model : Customer,
               as : 'customer',
               attributes: ['id', 'name', 'email', 'phone'] 
          }]
     });
     if (rows.length === 0){
          res.status(404).json({message : "No data"});
     }
     res.status(200).json(rows);
});

module.exports = getInvoices