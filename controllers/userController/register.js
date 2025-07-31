const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const validator = require('validator');

const register = asyncHandler(async (req,res) => {
    const {name, email , password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({message : "Name, e-mail and password required!"})
    };
    if(!validator.isEmail(email)){
        return res.status(400).json({message : "This email is invalid"})
    }
    const row = await User.findOne({where: {email}});
    if (row){
      return res.status(400).json({message : "Already registered email"})
    }
    const hashedPw = await bcrypt.hash(password, 10);
    await User.create({name:name, email:email, password: hashedPw});
    return res.status(201).json({message : "User registered!"});
});

module.exports = register;