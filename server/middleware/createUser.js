const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = process.env.JWT_SECRET

module.exports = async (req, res, next) => {
    try {

        const newUser = await User.create(req.userData);

        req.token = jwt.sign({id: newUser._id}, secret, {expiresIn: '3hr'});
        req.username = newUser.username;
        next()
    } catch (err) {
        res.status(500).json({
            message: err.message || err
        })
    }
}