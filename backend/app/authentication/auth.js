// tutorial : https://scotch.io/@devGson/api-authentication-with-json-web-tokensjwt-and-passport#toc-setting-up-the-project

const passport = require('passport')
const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user.model')
const UserRoleModel = require('../models/user_role.model')

const CONSTANTS =  require('../commons/constants')

//Create a passport middleware to handle User login
passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {

        //Find the user associated with the email provided by the user
        const user = await UserModel.findOne({where: {email: email}, include:[UserRoleModel]});
        if (!user) {
            //If the user isn't found in the database, return a message
            return done(null, false, {message: 'User not found'});
        }
        //Validate password and make sure it matches with the corresponding hash stored in the database
        //If the passwords match, it returns a value of true.


        // const validate = await user.isValidPassword(password);
        const validate = (user.password === password);


        if (!validate) {
            return done(null, false, {message: 'Wrong Password'});
        }

        //Send the user information to the next middleware
        return done(null, user, {message: 'Logged in Successfully'});
    } catch (error) {
        return done(error);
    }
}));


//This verifies that the token sent by the user is valid

passport.use('anyone_logged', new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    // jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    jwtFromRequest: ExtractJWT.fromBodyField('token')
}, async (token, done) => {
    try {
        //Pass the user details to the next middleware
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
}));


passport.use('stylist_only', new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromBodyField('token')
}, async (token, done) => {
    try {
        if (token.user.user_role_id !== CONSTANTS.USER_ROLE_ID_STYLIST) {
            return done(null, false, {message: 'Unauthorized operation'});
        } else {
            //Pass the user details to the next middleware
            return done(null, token.user);
        }
    } catch (error) {
        done(error);
    }
}));

passport.use('salon_only', new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromBodyField('token')
}, async (token, done) => {
    try {
        if (token.user.user_role_id !== CONSTANTS.USER_ROLE_ID_SALON) {
            return done(null, false, {message: 'Unauthorized operation'});
        } else {
            //Pass the user details to the next middleware
            return done(null, token.user);
        }
    } catch (error) {
        done(error);
    }
}));

passport.use('admin_only', new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromBodyField('token')
}, async (token, done) => {
    try {
        if (token.user.user_role_id !== CONSTANTS.USER_ROLE_ID_ADMIN) {
            return done(null, false, {message: 'Unauthorized operation'});
        } else {
            //Pass the user details to the next middleware
            return done(null, token.user);
        }
    } catch (error) {
        done(error);
    }
}));