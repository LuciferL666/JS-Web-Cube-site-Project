const router = require('express').Router();

const homeController = require('./controllers/homeController'); //Router
const cubeController = require('./controllers/cubeController'); // Create page

//Router
//app.get('/', homeController.getHome); // Not very good way 
router.use(homeController);

//create page
router.use('/cubes', cubeController);

//For page 404
router.get('*', (req, res) =>{
    res.redirect('/404');
})


module.exports = router