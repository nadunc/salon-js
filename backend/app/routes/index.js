var express = require('express');
var TestRoutes = require('./test.routes');
var StylistRoutes = require('./stylist.routes');
var SalonRoutes = require('./salon.routes');
var UserRoutes = require('./user.routes');

var router = express.Router();


router.use('/tests', TestRoutes);
router.use('/stylists', StylistRoutes);
router.use('/salons', SalonRoutes);
router.use('/users', UserRoutes);


module.exports = router;