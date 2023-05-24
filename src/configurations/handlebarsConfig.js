//Handlebars configurations
const handlebars = require('express-handlebars')

function handlebarsConfig(app){
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',  //Make it easier to be used 
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views'); // To set the directory views because it will look for it in the main folder 
}
 module.exports = handlebarsConfig;