const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user);
        req.user = user;
        next();
    } catch (err) {
        return res.status(400).json({ message: "Authentication failure!" })

    }
},