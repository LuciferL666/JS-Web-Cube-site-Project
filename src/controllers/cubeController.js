const router = require('express').Router()

// Path /cubes/create
router.get('/create', (req, res) => { // it give the form for create
res.render('create');
});

router.post('/create', (req, res) =>{ // accepte create data
console.log(req.body);

res.redirect('/');
})

module.exports = router;