const asyncHandler = require('express-async-handler');
const Invoice = require('../../models/Invoice');

const addInvoice = asyncHandler(async (req,res) => {
    const {customer_id, amount, description} = req.body;
    const userId = req.user.userId;
    if(!customer_id || !amount || !description){
        res.status(400);
        throw new Error("ID, amount, description fields are required");
    }
    const existing = await Invoice.findOne({where: {customer_id : customer_id}});
    if(!existing){
        res.status(400);
        throw new Error("Customer not found"); 
    }
    const date = new Date();
    await Invoice.create({customer_id : customer_id, user_id : userId, amount : amount, description : description, invoice_date : date});
    return res.status(200).json({message : "Invoice added"});
});

module.exports = addInvoice