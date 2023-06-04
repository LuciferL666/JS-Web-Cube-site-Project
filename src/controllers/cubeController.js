const router = require('express').Router()

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager')

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

res.redirect('/');
});

//setup details of specific cube
router.get('/:cubeId/details', async (req, res) =>{
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    if(!cube){
        return res.redirect('/404')
    }
    
    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) =>{
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
    const accessories = await accessoryManager.getAll().lean()

    res.render('accessory/attach', { cube, accessories  })
})

module.exports = router;

