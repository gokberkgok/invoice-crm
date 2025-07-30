const getCustomers  = require("./getCustomers");
const getCustomer  = require("./getCustomer");
const addCustomer = require("./addCustomer");
const updateCustomer = require("./updateCustomer");
const deleteCustomer = require("./deleteCustomer");

class CustomerController {
    getCustomers = getCustomers;
    getCustomer = getCustomer;
    addCustomer = addCustomer;
    updateCustomer = updateCustomer;
    deleteCustomer = deleteCustomer;
}

module.exports = CustomerController;