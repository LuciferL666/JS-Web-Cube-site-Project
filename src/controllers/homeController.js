//Router
const router = require('express').Router();
const cubeManager = require('../managers/cubeManager')

router.get('/', (req, res) => { //First end point with first handler
const cubes = cubeManager.getAll()

    res.render('index', { cubes })
});

router.get('/about', (req, res) =>{
    res.render('about')
});

module.exports = router