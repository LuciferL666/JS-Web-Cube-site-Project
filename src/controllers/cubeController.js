const router = require('express').Router()

const cubeManager = require('../managers/cubeManager');

// Path /cubes/create
router.get('/create', (req, res) => { // it give the form for create
console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', async (req, res) =>{ // accepte create data
const { name,
     description,
     imageUrl,
     difficultyLevel
    } = req.body;

await cubeManager.create({ 
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
   })

   // Or
   /*
   const data = { name,
    description,
    imageUrl,
    difficultyLevel 
   } = req.body;

cubeManager.create(data)
*/
res.redirect('/');
});

//setup details of specific cube
router.get('/:cubeId/details', (req, res) =>{
    const cube = cubeManager.getOne(req.params.cubeId)
    
    if(!cube){
        return res.redirect('/404')
    }
    
    res.render('details', { cube });
});

module.exports = router;