const {findTagType} = require('../database/element');

const showTagType = async(tagType) => {
    const tag = await findTagType(tagType)
    return tag;
}

module.exports = {showTagType};