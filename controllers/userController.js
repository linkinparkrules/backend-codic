const jwt = require('jsonwebtoken');
const {findUsername} = require('../database/user.js');

const login = (username, password) => {
    const user = findUsername(username);
    if (!user) {
        throw new Error ("user does not exist !");
    }
    if (password.length <= 8) {
        throw new Error("password must have at least 8 characters !");
    }
    const token = jwt.sign(
        {username: username, password: password},
        "My_Private_Key",
        {expiresIn: "3600s"}
    );
    console.log(token);
    return ({
        username: username,
        token: token
    });
}

module.exports = {login};