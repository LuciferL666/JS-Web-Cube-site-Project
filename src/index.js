// SETUP basic server
const express = require('express')

const app = express() //instance of the express server

const PORT = 5000 // Making a constant for the port which server is running to
app.get('/', (req, res) =>{ //First end point with first handler
res.send('Hello from express')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`)); // And massage to be sure that server is running without any problems