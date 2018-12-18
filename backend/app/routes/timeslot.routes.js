var express = require('express');
var TimeSlotController = require('../controllers/timeslot.controller');

var router = express.Router();

router.post('/', TimeSlotController.findAvailableStylistsByTimeRange);
router.post('/my', TimeSlotController.findStylistAvailableSlotsByTimeRange);

// router.get('/:id', SalonController.findById);


// router.post('/', SalonController.create);


module.exports = router;