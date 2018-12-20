var express = require('express');
var ExperienceController = require('../controllers/experience.controller');

var router = express.Router();

router.get('/', ExperienceController.findAll);


module.exports = router;