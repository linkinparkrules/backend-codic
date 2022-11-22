const { db } = require('./index');

const findTagType = async (tagType) => {
    const tag = await db.element.find({ tagType: tagType }).toArray();
    return tag;
}

const insertNewTag = async (info) => {
    return await db.element.insertOne(info);
}

const findTagByName = async (name) => {
    const tag = await db.element.findOne({name: name});
    return tag;
}

module.exports = { findTagType, insertNewTag, findTagByName };