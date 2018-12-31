var express = require('express');
var TestRoutes = require('./test.routes');
var StylistRoutes = require('./stylist.routes');
var SalonRoutes = require('./salon.routes');
var UserRoutes = require('./user.routes');
var TimeSlotRoutes = require('./timeslot.routes');
var ExperienceRoutes = require('./experience.routes');
var BookingRoutes = require('./booking.routes');
var NotificationsRoutes = require('./notification.routes');
var FeedbackRoutes = require('./feedback.routes');

var router = express.Router();


router.use('/tests', TestRoutes);
router.use('/stylists', StylistRoutes);
router.use('/salons', SalonRoutes);
router.use('/users', UserRoutes);
router.use('/timeslots', TimeSlotRoutes);
router.use('/experiences', ExperienceRoutes);
router.use('/bookings', BookingRoutes);
router.use('/notifications', NotificationsRoutes);
router.use('/feedbacks', FeedbackRoutes);


module.exports = router;