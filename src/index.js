// SETUP basic server
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path')

const app = express() //instance of the express server

const PORT = 5000 // Making a constant for the port which server is running to

// Express configuration
app.use(express.static(path.resolve(__dirname, 'public'))); // to be able to use static files from public Need to setup Path module
//app.use(express.static('src/public')); // Or we can use basic way

//Handlebars configurations
app.engine('hbs', handlebars.engine({
    extname: 'hbs',  //Make it easier to be used 
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views'); // To set the directory views because it will look for it in the main folder 

//Router
app.get('/', (req, res) =>{ //First end point with first handler
res.render('index')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`)); // And massage to be sure that server is running without any problems