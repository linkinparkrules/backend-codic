const jwt = require('jsonwebtoken');
const {findUsername} = require('../database/user.js');

const login = async (username, password) => {
    const user = await findUsername(username);
    if (!user) {
        throw new Error ("user does not exist !");
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