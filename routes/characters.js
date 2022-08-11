const router = require('express').Router();
const {Character} = require('../db');

router.get('/', async (req, res, next) => {

    try {
        const characters = await Character.findAll();
        res.send(characters);

    } catch(err) {

        next(err);

    }

});

router.get('/:id', async (req, res, next) => {

    try {
    const character = await Character.findByPk(req.params.id)
    res.send(character);
    } catch(err) {
        next(err);
    }
});

module.exports = router;