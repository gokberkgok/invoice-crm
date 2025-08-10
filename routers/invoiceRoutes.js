const express = require('express');
const InvoiceController = require('../controllers/invoiceController');
const router = express.Router();
const invoiceController = new InvoiceController;
const auth = require('../middlewares/validateTokenHandler');

router.use(auth);
router.get('/', invoiceController.getInvoices);
router.get('/:id', invoiceController.getInvoice);
router.post('/', invoiceController.addInvoice);
router.delete('/:id', invoiceController.deleteInvoice);
router.put('/:id', invoiceController.updateInvoice);
module.exports = router;