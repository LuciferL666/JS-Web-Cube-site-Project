// SETUP basic server
const express = require('express');

const expressConfig = require('./configurations/expressConfig'); // To call the express Configurations
const handlebarsConfig = require('./configurations/handlebarsConfig'); // To call the handlebarse configurations
const homeController = require('./controllers/homeController'); //Router

const app = express() //instance of the express server

const PORT = 5000 // Making a constant for the port which server is running to

// Express configuration
//require('./configurations/expressConfig')(app); // Other old way To call the express Configurations
expressConfig(app); // To call the express Configurations

//Handlebars configurations
handlebarsConfig(app); // To call the handlebarse configurations

//Router
//app.get('/', homeController.getHome); // Not very good way 
app.use(homeController)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`)); // And massage to be sure that server is running without any problems