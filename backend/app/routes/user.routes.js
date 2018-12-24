const commonMethods = require("../commons/commonMethods");
const responseMessages = require("../commons/responseMessages");
const CONSTANTS = require("../commons/constants");

const express = require('express');
const passport = require('passport');
const UserController = require('../controllers/user.controller');
const jwt = require('jsonwebtoken')


const StylistModel = require('../models/stylist.model')
const SalonModel = require('../models/salon.model')
const ExperienceModel = require('../models/experience.model')

require('../authentication/auth')

var router = express.Router();


router.post('/forget-password', UserController.forgetPasswordSendLink);
router.post('/forget-password-validate', UserController.forgetPasswordValidate);
router.post('/forget-password-change', UserController.forgetPassword);

// router.post('/login', passport.authenticate('local'), UserController.login);


router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An Error occurred')
                return next(error);
            }
            req.login(user, {session: false}, async (error) => {
                if (error) return next(error)
                //We don't want to store the sensitive information such as the
                //user password in the token so we pick only the email and id
                const body = {id: user.id, email: user.email, user_role_id: user.user_role_id};
                //Sign the JWT token and populate the payload with the user email and id
                const token = jwt.sign({user: body}, 'top_secret');
                //Send back the token to the user
                // return res.json({token});

                let data = {
                    token: token,
                    id: user.id,
                    email: user.email,
                    user_role: user.user_role,
                    stylist: {},
                    salon: {},
                    admin: {}
                }


                if (user.user_role.id === CONSTANTS.USER_ROLE_ID_STYLIST) {
                    StylistModel.findOne({where: {user_id: user.id}, include: [ExperienceModel]}).then((stylist) => {
                        data.stylist = stylist;
                        return res.json(commonMethods.createResponse(true, data, responseMessages.USER_LOGIN_SUCCESS));
                    }).catch((err) => {
                        return res.json(commonMethods.createResponse(false, null, responseMessages.USER_LOGIN_FAILED));

                    })
                } else if (user.user_role.id === CONSTANTS.USER_ROLE_ID_SALON) {
                    SalonModel.findOne({where: {user_id: user.id}}).then((salon) => {
                        data.salon = salon;
                        return res.json(commonMethods.createResponse(true, data, responseMessages.USER_LOGIN_SUCCESS));
                    }).catch((err) => {
                        return res.json(commonMethods.createResponse(false, null, responseMessages.USER_LOGIN_FAILED));
                    })
                } else if (user.user_role.id === CONSTANTS.USER_ROLE_ID_ADMIN) {
                    return res.json(commonMethods.createResponse(true, data, responseMessages.USER_LOGIN_SUCCESS));
                }


            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});


//Displays information tailored according to the logged in user
router.get('/profile', passport.authenticate('stylist_only', {session: false}), (req, res, next) => {
    //We'll just send back the user details and the token
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
    })
});


module.exports = router;