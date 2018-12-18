var TestModel = require('../models/test.model');
var commonMethods = require('../commons/commonmethods');


exports.findAll = (req, res, next) => {
    TestModel.findAll().then(tests  => {
        // console.log(tests);
        res.json(commonMethods.createResponse(true, tests, ''));

    }).catch(err => {
        // console.error(err);
        res.json(commonMethods.createResponse(false, null, err));
    });
};


exports.create = (req, res) => {
    let temp = req.body;


    let test = {
        firstname: temp.firstname,
        lastname: temp.lastname
    };

    TestModel.create(test).then((test) => {

        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
        res.json(commonMethods.createResponse(true, test, ''));

    }).catch((err) => {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
        // res.json(commonMethods.createResponse(false, null, commonMethods.getSequelizeErrorMessage(err)));
        res.json(commonMethods.createResponse(false, null, err));

    });


};


