var express = require('express');
var TestController = require('../controllers/test.controller');

var router = express.Router();

router.get('/', TestController.findAll);

router.post('/', TestController.create);


module.exports = router;