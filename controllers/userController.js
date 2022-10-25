const jwt = require('jsonwebtoken');
const { findUsername, insertUser } = require('../database/user.js');
const crypto = require('crypto');

const login = async (username, password) => {
    const user = await findUsername(username);
    // Step1: check if user is existed or not
    if (!user) {
        throw new Error("User does not exist!");
    }
    // Step2: check password correct or not
    if (!verifyPassword(password, user)) {
        throw new Error("Wrong password!")
    }

    const token = jwt.sign(
        { userId: user._id },
        "My_Private_Key",
        { expiresIn: "3600s" }
    );
    console.log(token);
    return ({
        username: username,
        token: token
    });
}

const register = async (username, password) => {
    const user = await findUsername(username);
    if (user) {
        throw new Error("User already existed!");
    }
    const { salt, hashedPassword } = encryptPassword(password);
    const addNewUser = await insertUser({
        username: username,
        salt: salt,
        hashedPassword: hashedPassword
    })
    return (addNewUser);
}

const encryptPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return ({
        salt: salt,
        hashedPassword: hashedPassword
    });
};

const verifyPassword = (password, user) => {
    const hashedPW = crypto.pbkdf2Sync(password, user.salt, 10000, 64, 'sha512').toString('hex');
    return hashedPW == user.hashedPassword;
}

module.exports = { login, register };