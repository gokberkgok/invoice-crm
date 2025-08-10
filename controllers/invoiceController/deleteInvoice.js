const asyncHandler = require('express-async-handler');
const Invoice = require('../../models/Invoice');

const deleteInvoice = asyncHandler(async (req,res) => {
     const { id } = req.params;
      // isim var mı kontrol et
     const existing = await Invoice.findOne({where: {id}});
     if (!existing){
          res.status(400);
          throw new Error("Invoice id not found");
     }
     await Invoice.destroy({where : {id : id}});
     res.status(200).json({ message: `Invoice deleted with id ${id}` });
});

module.exports = deleteInvoice;