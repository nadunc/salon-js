var TimeSlotModel = require('../models/timeslot.model');
var StylistModel = require('../models/stylist.model');
var commonMethods = require('../commons/commonMethods');
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

    let date = req.body.date;
    let start = req.body.start;
    let end = req.body.end;

    // TODO : rating & price
    let price = req.body.price;
    // let rating = req.body.rating;
    // let experience = req.body.experience;
    let role = req.body.role;

    // res.json({
    //     date: date,
    //     start: start,
    //     end: end,
    //     price: price,
    //     rating: rating,
    //     experience:experience,
    //     role: role
    // })

    // let experience_filter = (experience >= 4) ? experience:
    let experience_filter = 0;
        if(parseInt(role) === 2){
            experience_filter = 4
        }


        // TimeSlotModel.findAll({include:[{ model: StylistModel, where: { active: true }}]}).then(timeslots => {
        TimeSlotModel.findAll({
            where: {
                date: date,
                start: {[Op.lte]: start},
                end: {[Op.gte]: end},
                // experience_id : {[Op.gte]: experience_filter}
            },
            include: [{model: StylistModel}]
        }).then(timeslots => {
            // res.json(commonMethods.createResponse(true, timeslots, responseMessages.STYLIST_LIST_RETRIEVE_SUCCESS));

            res.json(commonMethods.createResponse(true,
                timeslots.filter((timeslot)=>{
                    return timeslot.stylist.experience_id > experience_filter
                })
                , responseMessages.STYLIST_LIST_RETRIEVE_SUCCESS));

        }).catch(err => {
            res.json(err)
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        });
};


exports.findStylistsAvailableSlotsByDate = (req, res) => {

    let date = req.body.date;

    // TODO : get logged stylists id, token
    let stylistId = req.body.stylist_id;

    /***************************************************************************************************************************************************/

    TimeSlotModel.findAll({where: {stylist_id: stylistId, date: date}}).then(timeslots => {
        res.json(commonMethods.createResponse(true, timeslots, responseMessages.STYLISTS_AVAILABLE_SLOTS_FETCH_SUCCESS));

    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};

exports.findStylistsAvailableSlots = (req, res) => {

    let date = req.body.date;

    // TODO : get logged stylists id, token
    let stylistId = req.body.stylist_id;

    /***************************************************************************************************************************************************/

    TimeSlotModel.findAll({where: {stylist_id: stylistId}}).then(timeslots => {
        res.json(commonMethods.createResponse(true, timeslots, responseMessages.STYLISTS_AVAILABLE_SLOTS_FETCH_SUCCESS));
    }).catch(err => {
        res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
    });
};

exports.create = (req, res) => {

    let date = req.body.date;
    let start = req.body.start;
    let end = req.body.end;

    // TODO : token
    let stylistId = req.body.stylist_id;

    let sql = "SELECT COUNT(*) as count FROM timeslots " +
        "WHERE stylist_id=:stylist_id AND date=:date " +
        "AND ((start>=:start AND (end>=:end AND start<:end)) " +
        "OR (start>=:start AND (end<=:end)) " +
        "OR (start<=:start AND (end>=:end)) " +
        "OR (start<=:start AND (end<=:end AND end>:start)))";

    sequelize.query(sql,
        {
            replacements: {stylist_id: stylistId, date: date, start: start, end: end},
            raw: true,
            type: sequelize.QueryTypes.SELECT
        })
        .then((result) => {
            // console.log(result);
            let count = result[0].count;

            if (count === 0) {

                let timeslot = {
                    date: date,
                    start: start,
                    end: end,
                    stylist_id: stylistId
                };

                TimeSlotModel.create(timeslot).then((timeslot) => {
                    res.json(commonMethods.createResponse(true, timeslot, responseMessages.TIMESLOT_ADD_SUCCESS));
                }).catch((err) => {
                    res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
                });
            } else {
                res.json(commonMethods.createResponse(false, null, responseMessages.TIMESLOT_IS_NOT_AVAILABLE));
            }
        })
        .catch((err) => {
            res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));

        });

};
