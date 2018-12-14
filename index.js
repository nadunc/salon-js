'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());





app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    }else {
        console.log('Server is running on port 3000')
    }
});


module.exports = app;