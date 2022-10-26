const jwt = require('jsonwebtoken');
const {findUsername} = require('../database/user.js');

const verifyToken = (token) => {
    if (!token) {
        throw new Error("Missing token!");
    }
    jwt.verify(token, "My_Private_Key", async(err, decoded) => {
        if (err) {
            throw new Error("Invalid token!");
        } else {
            const user = await findUsername(decoded.username);
            return {
                username: user.username,
                email: user.email
            };
        };
    });
};

module.exports = {verifyToken};