const asyncHandler = require('express-async-handler');
const User = require('../../models/User');
const getUser = asyncHandler(async (req,res) => {
    const id = req.params.id;
    const row = await User.findOne({where: {id}});
    if (!row) {
       res.status(404);
       throw new Error("Not found!");
    }
    res.status(200).json(row);
});

module.exports = getUser