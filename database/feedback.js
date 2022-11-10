const { db } = require('./index');

const postFeedBack = async (user) => {
  await db.feedback.insertOne(user);
  return user;
}

const findByEmail = async (email) => {
  const existed = await db.feedback.findOne({ email: email });
  return existed;
}

const updateFeedBack = async (email, message) => {
  const result = await db.feedback
    .updateOne({
      email: email
    }, {
      $set: {
        feedback: message
      }
    });
  return result;
}

const getAllFeedBack = async () => {
  return await db.feedback.find({}).toArray();
}

module.exports = { postFeedBack, findByEmail, getAllFeedBack, updateFeedBack };