const asyncHandler = require('express-async-handler');
const Invoice = require('../../models/Invoice');

const updateInvoice = asyncHandler(async (req,res) => {
     const { amount, description } = req.body;
     const { id } = req.params;
     if (!amount || !description) {
          res.status(400);
          throw new Error("amount and description field is required");
     }
     // isim var mı kontrol et
     const existing = await Invoice.findOne({where: {id}});
     if (!existing){
          res.status(400);
          throw new Error("Invoice id not found");
     }
     await Invoice.update({ amount:amount, description:description}, {where : {id:id} });
     res.status(201).json({ message: `Invoice updated name : ${amount} with id : ${id}` });
});

module.exports = updateInvoice;