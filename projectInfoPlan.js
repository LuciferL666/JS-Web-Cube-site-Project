/*
Първо:
правя папка src
после npm init -y
после npm i nodemon -D със Д е за devdepandance използва се само за разработката, но не и за крайния продукт
в папка "src" правя файл "index.js" например в който ще се намира сървъра
след нодемона в джейсон сменям тест със старт и пиша "start: nodemon /src/името на папката примерно index.js"
може да се провери дали работи нодемона със един конзол лог и в терминала пиша "npm start"
накрая инсталирам "npm i express"
след това ако конзолЛога ми се показва мога да КОМИТВАМЕ в ГИТ и да напиша примерно "Add all libraries to the Project" or "ADD initial structure"

Второ:
използвам "express" за да сетъпна базовия сървър по следния начин:
const express = require('express'); в index.js

!!!!!!!
const app = express();
const PORT = 5000;
app.get('/', (req, res) => {

    res.send('Hello from express'); по този начин може да се тества дали работи след това го заменяме със res.render('index') или ако е файла е с друго име слагаме него
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`)) И СЛЕД ТОВА ТЕСТВАМЕ С "npm start"
ако всичко работи КОМИТВАМЕ със "Add express to Project"
!!!!!!!

Трето:
копирам папката views or view или папката в която се намират html-a или handlebars-a файловете за страниците и поставям папката в 'src' ако нямам такава си я правя сам
ако са във формат handlebars инсталирам библиотеката със npm i express-handlebars
и в сървъра добавям под app = express() / const handlebars = require('express-handlebars) и сетъпвам handlebars под PORT = 5000;
//handlebars configurations app.engine('hbs', handlebars.engine({
    extname: 'hbs
})
app.set("view engine", 'hbs')
app.set('view', 'src/views) 
 ако всичко е наред и няма грешки може да КОМИТВАМЕ Add views files to Project

 Четвърто:
 в папка views създаваме папка layouts и в нея правим файл main в който ще сложим всичко което се повтаря от "хтмла или хбс" и слагаме едно {{body}} по средата 
 ако не разпознава папка layouts може да сетнем със layoutsDir
 АКО САЙТА ЗАРЕДИ БЕЗ CSS КОМИТВАМЕ 'SETUP VIEWS TO PROJECT' "EXTRACT COMMON HTML TO MAIN LAYOUT"

 ПЕТО:
 Правим папка "PUBLIC в SRC" и вътре слагаме CSS И IMAGES след това го настройваме в "Indеx.js след const handlebars правим const path = require('path') след Port //EXPRESS CONFIGURATIONS" 
 "app.use(express.static('path.resolve(__dirname, 'public'))); ИЛИ app.use(express.static('src/public'));" в майн проверяваме дали пътя за CSS Е НАСТРОЕН ПРАВИЛНО 
 КОМИТВАМЕ "ADD STATIC TO ASSETS TO PROJECT"

 Шесто: за визия не е задължително
 Правим папка config в src и правим expressConfig.js файл правим 
    const path = require('path')
    function expressConfig(app){
    и прехвърляме вътре "app.use(express.static('path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({extended: false})); от index.js файла другото няма да работи но да пробвам така app.use(express.static('src/config/public'));
 } 
module.exports = express.config
а във файла index.js над const app = express() слагаме const expressCongif = require('./config/expressConfig') а след PORT ПИШЕМ expressConfig(app)
АКО ВСИЧКО РАБОТИ КОМИТВАМЕ 'Add express configuration'


СЕДМО: за визия не е задължително
В ПАПКА CONFIG ПРАвим файл handlebarsConfig 
поставяме от index.js и го поставяме във файла handlebarseConfig
const handlebars = require('express-handlebars')

function handlebarseConfig(app){
    app.engine(''hbs, handlebars.engine({
        extname: 'hbs',
    }))
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}
module.exports = handlebarsConfig;
и го махаме от index.js а под const expressConfig пишем const handlebarsConfig = require('./config/handlebarsConfig');
и под expressConfig(app); пишем handlebarsConfig(app)
АКО ВСИЧКО РАБОТИ КОМИТВАМЕ 'Add handlebars configuration'

ОСМО:
ПРАВИМ ПАПКА CONTROLERS В SRC
правим файл "homeController" в него слагаме 
const router = require('express').Router();

router.get('/', (req, res) => { 
        res.render(''index) 
    });
    Първо КОМИТВАМ ПОСЛЕ ПРАВЯ ABOUT 'Add home controller' 
    router.get('/about',(req, res) =>{
        res.render('about'); и трябва да махнем излишното от страницата ABOUT.HBS
    })
    module.exports = router

а от index.js файла махам app.get('/', (req, res) => { 
        res.render(''index) 
    })
а на негово място в index.js под handlebarsConfig  пиша const homeController = require('./controllers/homeController);
и под handlebarsConfig(app) пиша app.use(homeController);

след като и ABOUT е готов КОМИТВАМ ОТНОВО "Add about page to project"

ДЕВЕТО:
Страница за добавяне на предмет ADDCUBE НАПИМЕР в папка CONTROLERS В SRC правим файл cubeController.js
и пак по същия начин
const router = require('express').Router();

router.get('/create', (req, res) =>{
    res.render('create') и влизаме във create.hbs и изтриваме ненужното
})

module.exports = router

в main.hbs трябва да поправим пътя /create на /cubes/create

в файла index.js под homeController  пишем const cubeController = require('./controllers/cubeController')
и под app.use(homeController) във index.js
пишем  app.use('/cubes', cubeController) 

ако страницата се зарежда КОМИТВАМ 'ADD CREATE PAGE TO PROJECT'
И ПРОМЕНЯМЕ ВЪВ create.hbs <form action='/cubes/create' method="POST" трябва да изглежда така 

и след това във cubeController  под router.get правим
router.post('/create', (req, res)=>{
    console.log(req.body);
    res.redirect('/');
});
след това КОМИТВАМ 'ADD CUBE CONTROLLER TO PROJECT'

ДЕСЕТО:
ПРАВИМ ПАПКА MANAGERS ВЪВ SRC

const cubes = [];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(), за уникално ID 
        ...cubeData //когато направим нов куб да има ново ид 
    }

    cubes.push(cubeData);
return newCube
}

след това трябва да бъде поставен във cubeControllers.js
const cubeManager = require('../managers/cubeManager');
и заместваме console.log(req.body) със
const { name, description, imageUrl,
     difficultyLevel } = req.body
     cubeManager.create({ name, description, imageUrl,
     difficultyLevel: Number(difficultyLevel) })

     след това във cubeManager.js pod cubes = []
     правим exports.getAll = () => cubes.slice()
     
и във cubeController под router.get()
 слагам consol.log(cubeManager.getAll())

 АКО ВСИЧКО РАБОТИ ПРАВИМ КОМИТВАМ 'ADD CUBEMANAGER WITH CREATE LOGIC'

 ЕДИНАДЕСЕТО:
 ВЛИЗАМЕ В INDEX.HBS изтриваме множеството предмети или кубове с изключение на един
 влизаме в homeController.js и взимаме кубовете за да ги визоализираме 
 под  router  и 
 пишем const cubeManager = require('../managers/cubeManager);
а под router get и преди res.render 
пишем const cubes = cubeManager.getAll();
и във res.render('index', добавяме {cubes});
след това във index.hb под form правим {{#each}} над div class='cube' и след затварящия div {{/each}}
изтриваме линка при src и на негово място {{imageUrl}}
на името name {{name}}
на Difficulty level където е числото {{difficultyLevel}}
проверяваме сайта дали са изчезнали кубовете и правим куб да видим дали ще се появи
КОМИТВАМ 'SHOW CUBES ON HOME PAGE WORKING CREATE'
след това може да добавим и едно {{else}} <p>There are no cubes yet! между each отварящия и затварящия 
след тожа може да изнесе diva в папка partials във файл cube.hbs която се създатава в папка views а във each просто пишем {{>cube}}
КОМИТВАМ "ADD PARTIALS TO PROJECT"

ДВАНАДЕСЕТО:
В PARTIALS BTN LINK ГО ПРЕПРАВЯМЕ НА /cubes/{{id}}/details 
проверяваме дали работи трябва при натискане на detals да видим кубс/ид/детайлс
след това във cubeController под res.redirect('/') }) правим

router.get('/:cubeId/details', (req,res)=>{
    res.render('details');
});
след това във details.hbs махаме всичко излишно което вече го има в main.hbs

в cubeManager слагаме куб който да си стой при всеки рефреш 
const cube = [
  {  
    id: '1ndasdfj134kds',
    name: 'nqkakvo',
    decription: 'neshto si',
    imageUrl: 'някакъв линк',
    difficultyLevel: 4 
}
]
и може да се създаде още един
ако при натискане на детайлс вече се показват 
КОМИТВАМ 'ADD DETAILS WITH HARDCORDE DATA'
И след това в details.hbs махам сложеното име и пиша {{name}} после линка {{imageUrl}} после описанието {{description}}
после трудността числото на {{difficultyLevel}}

след това във cubeManager pri eksportite еьпортс.гетОне = (cubeId) => cubes.fined(c => c.id == cubeId);
и накрая в cubeController между роутер.гет('/:кубид)
и рес.рендер(детайлс)
слагам const cube = cube.Manager.getOne(req.params.cubeId)
и после при рендер детайлс добавям със запетая , {cube}
ако пак не се показват във details.hbs пред name, imageUrl и останалото слагам едно cube.
или  ПОД МАЙН СЛАГАМ {{#with cube}} и след див {{/with}} и не слагам cube. пред името и останалите неща
КОМИТВАМ 'ADD CUBE DETAILS PAGE'

ТРИНАДЕСЕТО:
СТРАНИЦА "404" В index.js под app.use правим app.get('*',(req,res) =>{
    res.redirect('/404');
})

описваме страницата в homeController под останалите routers правим
router.get('/404', (req, res)=>{
    res.render('404');
});

и в 404.hbs изтриваме излишното оставаме само майн часта 

и накрая в cubeController между const cube  и res.render('details', {{ cube }})

слагаме ифове if(!cube){ //ако нямаш куб
return res.redirect('/404')
}
ако работи КОМИТВАМ 'ADD PAGE 404 TO PROJECT'

ЧЕТЕРИНАДЕСЕТ:
SEARCH: ВЛИЗАМЕ В INDEX.HBS И ДОБАВЯМЕ на актион '/' метода е GET
след това влизам в homeController и в раутера за главната страница тоест в router.get('/', (req, res))
след тази част добавям конзолЛог(req.query) просто да видя дали подава това което търся в търсачката след това го махам
и на негово място правяв const {search, from, to } = req.query
и ги подаваме на getAll , след това във файла cubeManager.getAll слагам (search, from, to) махаме куб.слайс и слагаме
{
    let result = cubes.slice();
    if(search){
result = result.filter(cube => cube.name.toLowerCase.includes(search.toLowerCase))
    }
if(from){
    result = result.filter(cube => cube.difficultyLevel >= Number(from))
}
if(to){
    result = result.filter(cube => cube.difficultyLevel <= Number(to))
}
}

след това за да се запазва какво сме търсили влизаме в homeController.js и във res.render('index', { cubes, search, from, to }) добавяме search from и to

 и след това в  index.hbs след name="search" слагам value="{{search}}", sled class="difficultyLevel" value="{{from}}"
 и на следващото value="{{to}}"
ако всичко работи КОМИТВАМ "ADD SEARCH TO PROJECT"

ПЕТНАДЕСЕТО И ПОСЛЕДНО: ТОВА Е САМО ПО ИЗБОР И Е ЗА ВИЗИЯ 
  В ПАПКА SRC ПРАВИМ ФАЙЛ ROUTES.JS
  const router = require('express').Router()

  взимаме от индекс.дж хомеКонтролер и кубеКонтролер и ги поставяме тук
  по средата взимаме всички апп.юсс и апп.гет от  индекс.дж файла и ги поставяме тук и заменям app със router 

  module.exports = router
  и в файла индекс.дж пот хандлебарсКонфиг импортваме const routes = require('./routes')
  под хандлебарсКонфиг(апп)
  слагам app.use(routes)

  ако всичко работи КОМИТВАМ 'EXTRACT ROUTES'

  ATTACHMENTS DATABASE 

ШЕСНАДЕСЕТО ИНСТАЛИРАНЕ НА БИБЛИОТЕКИ ЗА БАЗА ДАННИ 
npm i mongoose
достъпваме библиотеката : index.js влизаме и пишем под експреса const mongoose = require('mongoose') и В папка конфиг правим файл dbConfig.js
 в него правим const mongoose = require('mongoose')
правим променлива за Uri: const uri = 'mongodb://localhost:27017/cubicle-may-2023'
 и  асинхронна функция async function dbConnect(){
    await mongoose.connect(uri)
 }
 module.exports = dbConnect

 след като сме направили функцията влизаме обратно в index.js и изтриваме const mongoose = require('mongoose') 
 вместо него над const routes пиша const dbConnect = require(./configurations/dbConfig)  
 и я извикваме над expressConfig(app) просто пишем dbConnect();

 ако базата данни ни е изключително важна и искаме приложението да не работи ако няма база данни първо трябва да се кънектне
 към базата данни чак след това да сетъпне всичко останало и се прави така 
 dbConnect()
 .then(() =>{
    expressConfig(app);
    handlebarsConfig(app);

    app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`)); // така всичко ще тръгне чак след като се зареди базата данни 
 })
 .catch(err => {
    console.log('DB error: ', err);
 });
 НО ако базата данни не е толкова важна тогава просто под handlebarsConfig(app) пишем:
 dbConnect()
 .then(() => console.log('DB Connected successfully)); // това е просто да ни извести когато базата данни се е свързала 
 .catch(err =>  console.log('DB error: ', err));

 ако сървъра се стартира без грешка КОМИТВАМ 'Setup mongoose'

 СЕДЕМНАДЕСЕТО ПАПКА ЗА МОДЕЛИТЕ:

 В SRC папка правим папка models конвенцията е името на ресурса винаги с главна буква правим файл Cube.js
 в него взимаме mongoose
 const mongoose = require('mongoose')
 и създаваме схема:
 const cubeSchema = new mongoose.Schema({ и в нея се описва какво има в Data-та
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,  // изброяваме отделните пропъртита 
 });
const Cube = mongoose.model('cube', cubeSchema); //базов модел който може да използваме

module.exports = Cube;

ако няма грешка КОМИТВАМЕ 'Add base cube model'

ОСЕМНАДЕСЕТО ЗАПОЧВАНЕ НА РАБОТА С КУБОВЕ СЪЗДАДЕНИ В БАЗАТА ДАННИ:
В ФАЙЛ cubeManager.js
най-отгоре импортваме куба const Cube = require('../models/Cube');
след това във exports.create = (cubeData) =>{
    }
    // изтриваме newCube id: и ...cubeData тоест всичко изтриваме под exports.create и я правим асинхронна
    тоест ето така:
    exports.create = async (cubeData) =>{
        const cube = new Cube(cubeData);

        await cube.save();

        return cube;
    }
    след това влизаме във cubeController.js и create го правим асинхронен на 
    router.post('/create', async (req, res) =>{ 
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
   });
   res.redirect('/')
}) // ПО ТОЗИ НАЧИН
СЛЕД ТОВА ИЗПРОБВАМЕ ДА СЪЗДАДЕМ НОВ КУБ НЯМА ДА СЕ ВИЗУАЛИЗИРА НА СТРАНИЦАТА,
 НО ТРЯБВА ДА ГО ИМА В БАЗАТА ДАННИ АКО ГО ИМА ЗНАЧИ ВСИЧКО Е НАРЕД И КОМИТВАМ 'Add cube to DB'

 ДЕВЕТНАДЕСЕТО ВИЗУАЛИЗИРАНЕ НА КУБОВЕ ОТ БАЗАТА ДАННИ:
 влизаме във файл cubeManager.js и при exports.getOne = (cubeId) го заместваме
 exports.getOne = (cubeId) => Cube.findById(cubeId); в тази функция няма смисъл да се awaitva, но
 след това влизаме в cubeController.js  и при router.get(':/cubeId/details', async (req, res)) поднего 
 където е const cube пишем await тоест 
 const cube = await cubeManager.getOne просто добавяме await 
 в файл index.js при dbConnect в catch вместо err пишем err.message
навярно сървъра ще гръмне за това отиваме в cubeManager.js и където е exports.getOne най накрая след (cubeId) слагаме .lean()
но най-доброто място да поставим този 'lean' е в файл cubeController.js ето така router.get('/:cubeId/details', async (req, res) =>{
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean(); тук само се добавя .lean 
И НАКРАЯ ВЪВ ФАЙЛ cubeManager.js при exports.getAll
след него където се намира let result = вместо cubes.slice() пишем Cube.find(); но трябва да се await-не и тоест става:
exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();

  и изтриваме вградените кубове тоест в cubeManager.js трием от:
  const uniqid  до exports.getAll тоест всичко във const uniqid включително и const uniqid

  И накрая в homeController.js при router.get('/') трябва да сложим async  и в const cube под него трябва да сложим await тоест ето така:
  router.get('/', async (req, res) => { //First end point with first handler
const { search, from, to } = req.query

    const cubes = await cubeManager.getAll(search, from, to) // да проуча как работи .lean()

    res.render('index', { cubes, search, from, to })
});

АКО ВСИЧКО СЕ ВИЗУАЛИЗИРА И НЯМА ГРЕШКИ В СЪРВЪРА КОМИТВАМ 'Get cubes fromdb'

ДВАДЕСЕТО СЪЗДАВАНЕ НА АКСЕСОАР:
НАЙ-НАПРЕД ВЗИМАМЕ НОВИТЕ РЕСУРСИ КАТО CSS И HTML OR HBS 
И ГИ ПОСТАВЯМЕ CSS AND IMAGES В ПАПКА PUBLIC А ДРУГИТЕ РЕСУСРСИ ТОЕСТ HTML OR HBS ГИ ПОСТАВЯМЕ В ПАПКА VIEWS
Създаваме папка във views accessory и в нея поставяме attachAccessory и createAccessory и преименуваме само на create
ако има нов линк като наприме 'Add accessory' го копираме и го поставяме в main.hbs при останалите линкове между "/cubes/create" и "/about"
след това трием всичко освен main във папка accessory, file create.hbs 
линка за accessory create трябва да бъде "/accessories/create"

за да се появи страницата трябва да се направи нов контролер в папка controllers правим файл accessoryController.js

const router = require('express').Router()
router.get('/create', (req, res)=>{
    res.render('accessory/create);
})
module.exports = router

и това нещо трябва да се върже към сървъра
влизаме във file routes.js и добавяме нов контролер
const accessoryController = require('./controllers/accessoryController);
и под router.use('/cubes')
правя router.use('/accessories', accessoryController) това е за всички пътища които започват със /accessories
СЛЕД ТОВА ПРОВЕРЯВАМЕ ДАЛИ РАБОТИ ВЛИЗАМЕ В САЙТА И НАТИСКАМЕ НА ADD ACCESSORY АКО ЗАРЕДИ
ВСИЧКО Е ГОТОВО И КОМИТВАМ 'ADD ACCESSORY PAGE'

ДВАДЕСЕТ И ЕДНО
ВЛИЗАМЕ В ФАЙЛ create.hbs при action ако искаме на същата страница да се постнат няма нужда от акшън
но е хубаво да се постави "/accessories/create"  и метода е POST 
ЗА ДА ГО ДОСТЪПИМ ОБАЧЕ ТРЯБВА ДА ГО СВЪРЖЕМ ВЪВ ФАЙЛ accessoryController 
под router.get правим нов 
router.post('/create', (req, res) => {
    const body = req.body; // Това body ни дава име описание и картинка

    res.redirect('/') //Да ни отведе на главната страница
}) 
ако ни върне на главната страница и сървъра не гърми КОМИТВАМ 'Add post action action for create accessory'

ДВАДЕСЕТ И ДВЕ:
във папка managers създаваме файл accessoryManager.js
след това отиваме във папка models и създаваме модел Accessory.js
в него както в Cube.js пак си правим схема тоест информация за базата данни която да се запазва:
const mongoose = require('mongoose');
const accessory = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
})
const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;
след това КОМИТВАМ 'Add accessory model'

ДВАДЕСЕТ И ТРИ:
ВЛИЗАМ В ФАЙЛ accessoryManager.js и пиша следното
const Accessory = require('../models/Accessory')'

exports.create = (accessoryData) => Accessory.create(accessoryData);

КОМИТВАМ 'ADD ACCESSORY MANAGER'

ДВАДЕСЕТ И ЧЕТИРИ:
ВЛИЗАМ ВЪВ ФАЙЛ accessoryController.js
и под експрес раутера пиша
const accessoryManager = require('../managers/accessoryManager');
и променяме router.post по този начин:
router.post('/create', async (req, res) =>{
    const { name, description, imageUrl } = req.body;
    //TODO: ADD accessory data to db
await accessoryManager.create({ name, description, imageUrl })
    res.redirect('/')
})
след това си правим аксесоар рефрешваме базата данни и проверяваме дали се е запазило
ако всичко е наред КОМИТВАМ 'ADD ACCESSORY TO DB'

ДВАДЕСЕТ И ПЕТ:
 във файл cube.Controller.js преди module.exports = router

 правя нов раутер:
 router.get('/:cubeId/attach-accessory', (req, res)=>{
res.render('accessory/attach);
 })
за да оправим страницата за attach влизаме във папка view файл attachAccessory ако е html го правим на HBS
след това изтриваме всичко в нея освен това което е в main останалото вече го имаме запаметено
трябва да влезем във cube.hbs  и при клас бутона трябва {{id}} да го направим на {{_id}} 
ето така: <a class="btn" href="/cubes/{{_id}}/details">Details</a>

МНОГО ВАЖНО!! ВЛИЗАМ В ФАЙЛ updateDetailsPage.html и копирам новата секция която е 
accessories която започва от <h2>Accessories</h2> и копирам от там до </div> точно преди </main>
и го поставям във details.hbs точно под </div> и след това updateDetailsPage.html може директно да се изтрие вече не е нужна
ако се появят хардкорднати attach значи всичко работи и КОМИТВАМ
'fix id to broken details page' , 'add dummy accessories to details page', 'add attach' по отделно 

ДВАДЕСЕТ И ШЕСТ:
ДОБАВЯНЕ НА ПЪТ ЗА ATTACH ТОВА СТАВА ВЪВ details.hbs  под бутона Back правя нов бутон:
 <a class="btn" href="/cubes/{{_id}}/attach-accessory">Attach</a>
 след като го натисна ако работи и ме отрави в хардкордната страница КОМИТВАМ 'ADD ATTACH ACCESSORY LINK'

 ДВАДЕСЕТ И СЕДЕМ:
ВЛИЗАМЕ ВЪВ ФАЙЛ attach.hbs и под клас = форм където е <h2>Rubik cube</h2>
го променяме там трябва да е името <h2>{{cube.name}}</h2>
след това променяме линка за картинката в src на src="{{cube.imageUrl}}"
след това може да се възползваме от дефолтния action и директно да го махнем така във form ]e stane taka:
 <form method="POST">
след това влизаме във cubeController.js и променяме router.get('/:cubeId/attach-accessory')
по следния начин:
router.get('/:cubeId/attach-accessory', async (req, res) =>{
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
    res.render('accessory/attach', { cube });
})
след това влизаме във attach a new accessory и ако се покаже нашия куб ЗНАЧИ ВСИЧКО РАБОТИ
после влизаме в cubeManager.js и под const cubeManager правя:
const accessoryManager = require('../managers/accessoryManager) 

след това под router.get('/:cubeId/attach-accessory', async (req, res) =>{
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
    пиша const accessories = await accessoryManager.getAll().lean()

    след това в accessoryManager между const Accessory и exports.create 
    пиша exports.getAll = () => Accessory.find()
    и след това в cubeController.js при router.get('/:cubeId/attach-accessory', async (req, res) =>{ отдоло в  res.render('accessory/attach', { cube
след cube добавяме accessory и става така:  res.render('accessory/attach', { cube, accessories }) 

след това в attach.hbs под <options value="Accessory" 1,2,3,4,5, и тн. под тях правя 
{{#each accessories}}
<option value="{{_id}}">{{name}}</option>
{{/each}}
и след това изтривам всичките останали option със Accessory 1,2,3,4,5 и тн. ги махам без select id="accessory" name="accessory"

след това проверявам при закачването на аксесоар в сайта дали всичко работи правя нов аксесоар и проверявам дали го има в падащото меню
 ако всичко е наред КОМИТВАМ 'SHOW CUBE AND ACCESSORIES ON ATTACH PAGE'

ДВАДЕСЕТ И ОСЕМ:
ПРЕМАХВАНЕ НА НАТПИСА ЗА АКСЕСОАРИТЕ КОГАТО НЕ НИ ТРЯБВА
ВЛИЗАМЕ В ФАЙЛ cubeController.js и при router.get за attach-accessory
след const accessories пишем:
const hasAccessories = accessories.length > 0 

и в res.render след cube, accessories подаваме и hasAccessories
след това във файл attach.hbs над form method и под src="{{cube.imageUrl}}"
правим {{#if hasAccessories}} и под {{/form}} пишем {{else}} и след <h3 надписа за кубовете</h3> {{/if}}
ако всичко е наред КОМИТВАМ "Show no accessory title when there has non"


ДВАДЕСЕТ И ДЕВЕТ:
СВЪРЗВАНЕ НА АКЕСОАРА С КУБА
ВЛИЗАМЕ ВЪВ file Cube.js във схемата където са името, описанието, картинката, трудността сега слагаме и 
,accessory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory' // трябва да се направи със квадратни скоби за да бъде масив 
}]
след това влизаме във файл cubController.js
и правим раутер за пост пот този за гет

router.post('/:cubeId/attach-accessory', async (req, res) =>{
    const { accessory: accessoryId } = req.body // по този начин го преименуваме от accessory на accessoryId със ':'
const cubeId = req.params.cubeId;
    await cubeManager.attachAccessory(cubeId, accessoryId) //слагаме преименуваното accessory
})
нямаме създаден такъв мениджър за това отиваме във файл cubeManager.js и под return cube.save(); };
го създаваме ето така:

exports.attachAccessory = async (cubeId, accessoryId) =>{
 return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } }); // first way 

 };
след това във файл cubeController.js под await cubeManager.attachAccessory
добавяме res.redirect('/cubes/${cubeId}/details')

най вероятно ще гръмне за това създаваме нов куб и след това гледаме в базата данни на новия куб дали се е появило нова опция за аксесоар
ако да може ръчно през базата данни да добавим и на дугите кубове accessories
след това добавяме аксесоар на куба и гледаме дали го е вкарало в базата данни  може да видим ObjectId
АКО ВСИЧКО РАБОТИ КОМИТВАМ 'ADD RELATION FROM CUBE TO ACCESSORY'

ТРИДЕСЕТ:
ВЛИЗАМ ВЪВ ФАЙЛ details.hbs и изтривам всички вградени аксесоари без един
след това над <div class="accessory">
слагам {{#each}} след това слагам {{else}} преди това <h3 class="italic">This cube has no accessories yet...</h3>
а след него затварям със {{/each}}

след това на img src слагам вместо линка {{imageUrl}} alt="{{name}}"
после на <h3>{{name}}</h3> и на <p>{{description}}</p>
след това влизам във файл cubeManager.js и при 
експорта за един тоест exports.getOne = (cubeId) => Cube.findById(cubeId) добавям .populate('accessories') накрая и става така:
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories')
но е най добре да имаме два метода със популиране и без популиране така че може да са по следния начин:
exports.getOne = (cubeId) => Cube.findById(cubeId) // To take details of the cube 
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories')
И след това влизам във cubeController и при router.get за детайлите го правя ето така:
router.get('/:cubeId/details', async (req, res) =>{
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean()

    при details.hbs accessories трябва да бъде така:
<h2>Accessories</h2>
    <div class="accessories">
  {{#each accessories}}
    <div class="accessory">
      <img src="{{imageUrl}}" alt="{{name}}">
      <h3>{{name}}</h3>
      <p>{{description}}</p>
    </div>
    {{else}}
    <h3 class="italic">This cube has no accessories yet...</h3>
    {{/each}}
  </div>
  {{/with}}
</main>
АКО ВСИЧКО РАБОТИ ПРАВИЛНО И АКСЕСОАРИТЕ СЕ ПОКАЗВАТ ПОД КУБА КОМИТВАМ "SHOW ATTACHED ACCESSORIES"

ТРИДЕСЕТ И ЕДНО:
ДА ВЗИМАМЕ АКСЕСОАРИ КОИТО НЕ ПРИНАДЛЕЖАТ НА ДАДЕНИЯ КУБ:
ЗА ЦЕЛТА ВЛИЗАМЕ ВЪВ ФАЙЛ cubeControllers.js
и при раутера за аксесоарите и атачването го променяме по този начин:
router.get('/:cubeId/attach-accessory', async (req, res) =>{
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
    const accessories = await accessoryManager.getOthers(cube.accessories).lean()

    след това влизаме във файл accessoryManager.js и създаваме нов експорт най-отдолу ето така:
    exports.getOthers = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } });

и накрая във файл attach.hbs трябва да оправим бутона след като добавим аксесоар да ни връща на детайлите ето така 
след  {{/if}} бутона го правим ето така:
        <a class="btn" href="/cubes/{{cube._id}}/details">Back</a>

АКО ВСИЧКО Е КАКТО ТРЯБВА И НЕ НИ ПОКАЗВА ОТНОВО АКСЕСОАРИТЕ КОИТО ИМАМЕ КОМИТВАМЕ "SHOW REMAINING ACCESSORIES ONLY"

ТРИДЕСЕТ И ДВЕ: ЛОГИН РЕГИСТРАЦИЯ БИСКВИТКИ И ТОКЕНИ ЗА ПОТРЕБИТЕЛИ ДОБАВЯНЕ НА БИБЛИОТЕКИ
НАЙ-НАПРЕД ИНСТАЛИРАМЕ БИБЛИОТЕКА npm i bcrypt
прехвърляме новите ресурси css и images във папка public, а новите страници във views
след това във папка views създаваме нова папка users за логин и за регистер и директно вътре слагаме
loginPage и registerPage И ТРЯБВА ДА ГИ ПРЕИМЕНУВАМЕ registerPage НА register.hbs login-после
След това влизаме във файл registerPage и от нея взимаме Logout, Login, Register и ги прехвърляме във 
папка layouts файл main.js и ги преподреждаме login register logout
na login linka да бъде /users/login, register /users/register logout /users/logout
правим ги с user за да го направим като контролер
след това във registerPage трием всичко освен main часта
след това в папка controllers правим файл userController.js
 в него взимаме раутера:

 const router = require('express').Router()
 router.get('/register', (req, res)=>{
    res.render('user/register')
 })
 module.exports = router;

след това връзваме контролера във  routes.js
под const accessoryController правим
const userController = require('./controllers/userController')
и под router.use ('/accessories')
правим: router.use('/users', userController)
АКО RIGISTER СЕ ОТВАРЯ БЕЗ ПРОБЛЕМ МОЖЕ ДА КОМИТВАМЕ "ADD REGISTER PAGE"

ТРИДЕСЕТ И ТРИ: POST ЗАЯВКИ
ВЛИЗАМЕ В userController.js и след затварящите скоби на router.get точно преди module.exports правим:
router.post('/register', async (req, res)=>{
const { username, password, repeatPassword } = req.body
и може по желание да сложим console.log(req.body) за да видим дали дава правилните данни
res.redirect('/users/login')
})
във register.hbs може да изтрием екшъна за да се визуализира на същата страница или 
да му дадеме правилния път който е: "/users/register" и метода е POST

след това стартираме пишем име и пароли натискаме регистер трябва да ни даде 404 защото нямаме логин страница, но трябва да
имаме данните в конзолата ако сме ги получили всичко е наред И МОЖЕ ДА ПРОДЪЛЖИМ.

ВЪВ ПАПКА MODELS ПРАВИМ МОДЕЛ НА ПОТРЕБИТЕЛЯ User.js
и в него пишем:
 const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})
const User = mongoose.model('User', userSchema)
module.exports = User;

след това в папка menagers създаваме файл userManager.js

и във него пишем:
const User = require('../models/User')
exports.register = (userData) =>User.create(userData)

за да валидираме паролата преди да я хешираме във папка models file User.js
 в схемавта вместо да бъде password: String, го променяме ето така:
 password:{
    type: String,
    // validate: {
    //     validator: function(value){
    //         return this.repeatPassword === value //това не работи но може да се остави
    //     },
    //     message: `Password missmatch!`
    // }
 },
});
ЗА ТОВА ПОД const userSchema username, password и тн под });
пишем
userSchema.virtual('repeatPassword')
.set(function(value){
    if(value !== this.password){
        throw new mongoose.MongooseError('Password missmatch!)
    }
})

 влизаме във userController.js
под const router правим:
const userManager = require('../manager/userManager') 
а във router.post('/register) под const {username, password, repeatPassword}
пишем: await userManager.register({ username, password, repeatPassword})

след това опитваме да се регистрираме с различни пароли и трябва да крашне и в конзолата да видим Password missmatch!
след това пробваме с еднаква пароли и ако ни прати на 404 значи всичко е наред проверяваме в базата данни дали се е запазило името и паролата
АКО ДА КОМИТВАМ "SAVE USER WITH VALIDATED PASSWORD"

ТРИДЕСЕТ И ЧЕТИРИ: ИЗПОЛЗВАНЕ НА БИБЛИОТЕКА bcrypt
във папка models file User.js
под const mongoose 
правим:
const bcrypt = require('bcrypt)
след това под userSchema.virtual('repeatPassword')
точно след '})' тези скоби
пишем userSchema.save('save', async function(){
const hash = await bcrypt.hash(this.password, 10)
this.password = hash
})
пробваме дали ще се запази в базата данни с хешираната парола ако да и няма грешка
КОМИТВАМ 'HASH PASSWORD BEFORE SAVE '

ТРИДЕСЕТ И ПЕТ: ПРАВЕНЕ НА ЛОГИН СТРАНИЦА
ВЪВ ПАПКА controllers ФАЙЛ userController.js

под res.redirect('/users/login');
})
пишем:
router.get('/login', (req, res)=>{
    res.render('/users/login')
})
след това влизаме във файл loginPage.html и го преименуваме на login.hbs
и изтриваме всичко освен майн частта защото другото го има във файл main.js
и вътре изтриваме action за да използваме default path
след това влизаме в сайта и проверяваме като натиснем логин дали ще ни отвори страницата ако да всичко е наред
след като се регистрираме трябва да ни изпраща на логин страницата
ако всичко се получава и няма грешка КОМИТВАМ "ADD LOGIN PAGE"


req.query = за куери стринга това е всичко след ? във http и ако има фрагмент "=" преди фрагмента
req.params = за параметрите
req.body = за пост данните на формата които са изпратени и са парснати
*/