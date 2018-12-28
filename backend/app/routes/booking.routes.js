const commonMethods = require("../commons/commonMethods");
const responseMessages = require("../commons/responseMessages");
const CONSTANTS = require("../commons/constants");

const express = require('express');
const passport = require('passport');
const BookingController = require('../controllers/booking.controller');
const jwt = require('jsonwebtoken')


// const StylistModel = require('../models/stylist.model')
// const SalonModel = require('../models/salon.model')

require('../authentication/auth')

var router = express.Router();


router.post('/', passport.authenticate('salon_only', {session: false}), BookingController.create);
router.post('/requests', passport.authenticate('stylist_only', {session: false}), BookingController.findBookingRequestsByStylist);
router.patch('/reject', passport.authenticate('stylist_only', {session: false}), BookingController.reject);

module.exports = router;
