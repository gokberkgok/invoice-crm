const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
const userController = new UserController;
const auth = require('../middlewares/validateTokenHandler');

router.get('/',auth, userController.getUsers).get('/:id', auth, userController.getUser);
router.post('/', auth, userController.addUser).post('/login', userController.login).post('/register', userController.register);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;