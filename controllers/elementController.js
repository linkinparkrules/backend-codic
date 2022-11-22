const { findTagType, insertNewTag, findTagByName } = require('../database/element');

const showTagType = async (tagType) => {
    const tag = await findTagType(tagType)
    return tag;
}

const addNewTag = async (name, meaning, definition, example) => {
    const existed = await findTagByName(name);
    if (existed) {
        throw new Error("thẻ này đã tồn tại!");
    }
    return await insertNewTag({
        name: name,
        meaning: meaning,
        definition: definition,
        example: example
    });
}

module.exports = { showTagType, addNewTag };