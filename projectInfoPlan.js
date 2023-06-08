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




req.query = за куери стринга това е всичко след ? във http и ако има фрагмент "=" преди фрагмента
req.params = за параметрите
req.body = за пост данните на формата които са изпратени и са парснати
*/