const express = require('express');
const passport = require('passport');
const NotificationController = require('../controllers/notification.controller');

require('../authentication/auth')

var router = express.Router();


router.post('/', passport.authenticate('anyone_logged', {session: false}), NotificationController.findNotificationsByUser);
router.patch('/', passport.authenticate('anyone_logged', {session: false}), NotificationController.readNotification);

module.exports = router;
