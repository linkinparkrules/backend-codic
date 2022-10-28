const {db} = require('./index');

const findTagType = async (tagType) => {
    const tag = await db.element.find({tagType: tagType}).toArray();
    return tag;
}

module.exports = {findTagType};