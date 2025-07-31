const getUsers = require("./getUsers");
const getUser  = require("./getUser");
const addUser = require("./addUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");
const login = require("./login");
const register = require("./register");

class UserController {
    getUsers = getUsers;
    getUser = getUser;
    addUser = addUser;
    updateUser = updateUser;
    deleteUser = deleteUser;
    login = login;
    register = register;
}

module.exports = UserController;