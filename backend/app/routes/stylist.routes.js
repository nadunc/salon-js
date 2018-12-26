var express = require('express');
var StylistController = require('../controllers/stylist.controller');

var router = express.Router();

router.get('/', StylistController.findAll);
router.get('/:id', StylistController.findById);


router.post('/', StylistController.create);
router.patch('/:id', StylistController.update); // only updating stylist can call


module.exports = router;