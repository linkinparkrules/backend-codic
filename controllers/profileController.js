const jwt = require('jsonwebtoken');
const { findById } = require('../database/user.js');

const verifyToken = async (token) => {
    if (!token) {
        throw new Error("Missing token!");
    }
    try {
        const result = jwt.verify(token, "My_Private_Key");
        const user = await findById(result.userId);
        // console.log(user);
        function checkAdmin() {
            if (!user.isAdmin) {
                return false
            } else return user.isAdmin
        }
        return ({
            username: user.username,
            email: user.email,
            isAdmin: checkAdmin()
        })
    } catch (err) {
        throw new Error("Invalid token!");
    }
};

module.exports = { verifyToken };