const commonMethods = require("../commons/commonMethods");
const responseMessages = require("../commons/responseMessages");
const CONSTANTS = require("../commons/constants");

const express = require('express');
const passport = require('passport');
const FeedbackController = require('../controllers/feedback.controller');
const jwt = require('jsonwebtoken')


// const StylistModel = require('../models/stylist.model')
// const SalonModel = require('../models/salon.model')

require('../authentication/auth')

var router = express.Router();


router.get('/:id', FeedbackController.findFeedbacksByStylist);
router.get('/:id/rating', FeedbackController.findAverageRatingByStylist);

module.exports = router;
