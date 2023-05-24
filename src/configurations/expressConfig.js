// Express configuration

const express = require('express')
const path = require('path')

function expressConfig(app){

app.use(express.static(path.resolve(__dirname, '../public'))); // to be able to use static files from public Need to setup Path module
app.use(express.urlencoded({extended: false}))
}

module.exports = expressConfig