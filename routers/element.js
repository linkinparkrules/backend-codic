const express = require('express');
const elementRouter = express.Router();
const {showTagType, addNewTag} = require('../controllers/elementController');

elementRouter.get('/', async (req,res) => {
    try {
        const htmlTag = await showTagType("html");
        const cssTag  = await showTagType("css");
        const jsTag   = await showTagType("js");
        res.json({
            htmlTag: htmlTag,
            cssTag: cssTag,
            jsTag: jsTag
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
});

elementRouter.post('/', async (req, res) => {
    try {
        const info = await addNewTag(
            req.body.name, 
            req.body.meaning, 
            req.body.definition, 
            req.body.example,
            req.body.tagType
        );
        res.json(info);
    } catch (err) {
        res.status(409).send(err.message);
    }
})

module.exports = elementRouter;