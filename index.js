const express = require('express');
const bodyParser= require('body-parser');
const routes = require('./routes/index')
const characters = require('./routes/index')
const morgan = require('morgan');
const expressValidator = require('express-validator');
const app=express()


require('./db')

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'))
app.use(expressValidator())

app.use('/', routes)
// app.use('/characters', characters)

const PORT= 3000;
app.listen(PORT, ()=>{
    console.log("server on port ", PORT)
})