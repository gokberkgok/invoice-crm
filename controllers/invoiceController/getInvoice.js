const asyncHandler = require('express-async-handler');
const Invoice = require('../../models/Invoice');
const getInvoice = asyncHandler(async (req,res) => {
     const id = req.params.id;
     console.log("req.userId : " , id);
     const rows = await Invoice.findAll({where : {user_id : id}});
     if (rows.length === 0){
       return res.status(404).json({message : "No data"});
     }
    return res.status(200).json(rows);
});

module.exports = getInvoice