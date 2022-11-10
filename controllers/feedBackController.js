const { postFeedBack, updateFeedBack, getAllFeedBack, findByEmail } = require('../database/feedback');


const postFb = async(email, message) => {
  const existed = await findByEmail(email);
  if (existed) {
    return await updateFeedBack(email, message);
  } 

  const newFb = await postFeedBack({
    email: email,
    feedback: message
  })
  return newFb;  
};

const getFb = async() => {
  return await getAllFeedBack();
};

module.exports = {postFb, getFb};