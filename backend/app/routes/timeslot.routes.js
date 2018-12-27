var express = require('express');
var TimeSlotController = require('../controllers/timeslot.controller');

var router = express.Router();

router.post('/stylists', TimeSlotController.findAvailableStylistsByTimeRange);
// router.post('/my', TimeSlotController.findStylistAvailableSlotsByTimeRange);
router.post('/my', TimeSlotController.findStylistsAvailableSlotsByDate);
router.post('/my/all', TimeSlotController.findStylistsAvailableSlots);

// router.get('/:id', SalonController.findById);


router.post('/', TimeSlotController.create);


module.exports = router;