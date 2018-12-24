'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
const passport = require('passport')
var cors = require('cors')


var routes = require('./app/routes/index');
var app = express();

// app.use(morgan('combined'));


app.use(cors())
app.use(bodyParser.json());
app.use(routes);




app.listen(5000, (err) => {
    if (err) {
        console.error(err);
    }else {
        console.log('Server is running on port 3000')
    }
});


module.exports = app;