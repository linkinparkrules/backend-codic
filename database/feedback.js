const { db } = require('/');

const postFeedBack = async (user) => {
  await db.feedback.insertOne(user);
  return user;
}

const findByEmail = async (email) => {
  await db.feedback.findOne({ email: email });
  return email;
}

const updateFeedBack = async (email, message) => {
  const result = db.feedback
    .updateOne({
      email: email
    }, {
      $set: {
        message: message
      }
    });
  return result;
}

const getAllFeedBack = async () => {
  return await db.feedback.find({}).toArray();
}

module.exports = { postFeedBack, findByEmail, getAllFeedBack, updateFeedBack };