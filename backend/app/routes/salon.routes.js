var express = require('express');
var SalonController = require('../controllers/salon.controller');

var router = express.Router();

router.get('/', SalonController.findAll);
router.get('/:id', SalonController.findById);


router.post('/', SalonController.create);


module.exports = router;