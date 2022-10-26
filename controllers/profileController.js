const jwt = require('jsonwebtoken');
const {findById} = require('../database/user.js');

const verifyToken = (token) => {
    if (!token) {
        throw new Error("Missing token!");
    }
    jwt.verify(token, "My_Private_Key", async(err, decoded) => {
        if (err) {
            throw new Error("Invalid token!");
        } else {
            // console.log(decoded);
            const user = await findById(decoded.userId);
            return {
                username: user.username,
                email: user.email
            };
        };
    });
};

module.exports = {verifyToken};