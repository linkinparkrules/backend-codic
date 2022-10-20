const {db} = require('./');

const findUsername = async (username) => {
    const user = await db.user.findOne({username: username});
    return user;
}

module.exports = findUsername;