var express = require('express');
var UserController = require('../controllers/user.controller');

var router = express.Router();



router.post('/forget-password', UserController.forgetPasswordSendLink);
router.post('/forget-password-validate', UserController.forgetPasswordValidate);
router.post('/forget-password-change', UserController.forgetPassword);


module.exports = router;