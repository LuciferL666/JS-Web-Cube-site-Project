const router = require('express').Router();

const homeController = require('./controllers/homeController'); //Router
const cubeController = require('./controllers/cubeController'); // Create page   with F12 I can go directly to the file 
const accessoryController = require('./controllers/accessoryController');
const userController = require('./controllers/userController');
//Router
//app.get('/', homeController.getHome); // Not very good way 
router.use(homeController);

//create page
router.use('/cubes', cubeController);

//create accessory
router.use('/accessories', accessoryController)

//user
router.use('/user', userController)

//For page 404
router.get('*', (req, res) =>{
    res.redirect('/404');
})


module.exports = router