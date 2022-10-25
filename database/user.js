const {db} = require('./');

const findUsername = async (username) => {
    const user = await db.user.findOne({username: username});
    return user;
}

const insertUser = async (user) => {
    await db.user.insertOne(user);
    return user;
}

module.exports = {findUsername, insertUser};