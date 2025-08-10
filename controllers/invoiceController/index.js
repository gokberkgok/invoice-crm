const getInvoices  = require("./getInvoices");
const getInvoice = require("./getInvoice");
const addInvoice = require("./addInvoice");
const deleteInvoice = require("./deleteInvoice");
const updateInvoice = require("./updateInvoice");
class InvoiceController {
    getInvoices = getInvoices;
    getInvoice = getInvoice;
    addInvoice = addInvoice;
    deleteInvoice = deleteInvoice;
    updateInvoice = updateInvoice;
}

module.exports = InvoiceController;