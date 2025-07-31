const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const login = asyncHandler(async (req,res) => {
    const {email , password} = req.body;
    if (!email || !password) {
       return res.status(400).json({message : "E-mail and password required!"})
    };
    const user = await User.findOne({where: {email}});
    if (!user){
        return res.status(400).json({message : "E-mail not found!"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid){
        return res.status(400).json({message : "Email or password is wrong!"});
    }
    const token = createToken(user.id,user.name);
    console.log(token);
    return res.status(200).json({token});
});

const createToken = (id,name) => {
    return jwt.sign(
        {
            user: {userId: id, name : name},
        }, JWT_SECRET, 
        { expiresIn : "1h", }
    );
}

module.exports = login;