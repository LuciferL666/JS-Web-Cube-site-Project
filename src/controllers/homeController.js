//Router
const router = require('express').Router();


router.get('/', (req, res) => { //First end point with first handler
res.render('index')
});



module.exports = router