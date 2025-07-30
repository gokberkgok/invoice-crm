const express = require('express');
const CustomerController = require('../controllers/customerController');
const router = express.Router();
const customerController = new CustomerController;

router.get('/', customerController.getCustomers);
router.get('/:id', customerController.getCustomer);
router.post('/', customerController.addCustomer);
router.put('/', customerController.updateCustomer);
router.delete('/', customerController.deleteCustomer);

module.exports = router;