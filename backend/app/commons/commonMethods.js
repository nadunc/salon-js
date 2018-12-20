const bcrypt = require('bcrypt');
const CONSTANTS = require('./constants')

exports.createResponse = (success, data, message) => {
    return {
        success: success,
        data: data,
        message: message
    }
};


exports.generateBcryptHash = (plainText) => {
    return plainText
    // return bcrypt.hash(plainText, CONSTANTS.BCRYPT_SALT_ROUNDS, (err, hash) => {
    //     if (err){
    //         console.log(err)
    //       return '';
    //     }
    //     console.log(hash)
    //     return hash;
    // });
};


exports.getSequelizeErrorMessage = (err) => {
    // err.errors[0].message

    if(err.name === "SequelizeValidationError"){
        return err.errors[0].message;
    }else{
        return 'Database Error';
    }
};

exports.getValidationErrorMessage = (err) => {
    // err.errors[0].message
    return err.details[0].message;
};