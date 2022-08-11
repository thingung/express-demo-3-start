const router = require('express').Router();
const {Movie} = require('../db');


router.get('/', async (req, res, next)=>{

    try {
        const movies = await Movie.findAll();
        res.send(movies); 
    } catch(err) {
        next(err);
    }

})

router.get('/:id', async (req, res, next)=>{

    try {
        const movie = await Movie.findByPk(req.params.id);
        
        if (movie === null) {
            const error = new Error('There is no movie!');
            error.status = 404;
            throw error;
        } else {
            const yearStatement = movie.yearStatement();
            res.send(yearStatement);

        }
        res.send(movie); 
    } catch(err) {
        next(err);
    }

})

module.exports = router;