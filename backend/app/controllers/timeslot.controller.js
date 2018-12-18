var TimeSlotModel = require('../models/timeslot.model');
var StylistModel = require('../models/stylist.model');
var commonMethods = require('../commons/commonmethods');
var responseMessages = require('../commons/responseMessages');
const constants = require('../commons/constants');

var sequelize = require('../database');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');


/*
* Find available stylist by time range.
* Searching time slot must in between stylists' available time
* Ex:- available_time 01:00:00 - 05:00:00 /  searching_slot 02:00:00 - 04:00:00
 */
exports.findAvailableStylistsByTimeRange = (req, res) => {

    let from = req.body.from;
    let to = req.body.to;

    // from = moment(from).local().format();
    from = moment.parseZone(from).local().format();
    // to = moment(to).format();
    to = moment.parseZone(to).local().format();


    console.log(from)

    // TimeSlotModel.findAll({include:[{ model: StylistModel, where: { active: true }}]}).then(timeslots => {
    TimeSlotModel.findAll({where:{from:{[Op.lte]: from}, to:{[Op.gte]:to}}, include:[{ model: StylistModel}]}).then(timeslots => {
        res.json(commonMethods.createResponse(true, timeslots, responseMessages.STYLIST_LIST_RETRIEVE_SUCCESS));

    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};


/*
* Find available time slots of a stylist by time range.
* Available time slot(s) of stylist must in between searching time slot
* Ex:- available_time 01:00:00 - 05:00:00 /  searching_slot 00:00:00 - 08:00:00
 */
exports.findStylistAvailableSlotsByTimeRange = (req, res) => {

    let from = req.body.from;
    let to = req.body.to;

    // from = moment(from).local().format();
    from = moment.parseZone(from).local().format();
    // to = moment(to).format();
    to = moment.parseZone(to).local().format();

    console.log(from)

    // TODO : get logged stylists id
    let stylistId = 1;
    /***************************************************************************************************************************************************/

    // TimeSlotModel.findAll({include:[{ model: StylistModel, where: { active: true }}]}).then(timeslots => {
    TimeSlotModel.findAll({where:{stylist_id:stylistId, from:{[Op.gte]: from}, to:{[Op.lte]:to}} }).then(timeslots => {
        res.json(commonMethods.createResponse(true, timeslots, responseMessages.STYLIST_LIST_RETRIEVE_SUCCESS));

    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};


exports.createTimeSlots = (req, res) => {

};
