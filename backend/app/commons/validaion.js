// const Joi = require('joi');
//
// exports.validateInteger = (val) =>{
//     return new Promise((resolve, reject)=>{
//         let schema = {
//             id: Joi.number().integer()
//         };
//
//
//         Joi.validate({ id: val }, schema, (err, value)=> {
//             if(err){
//                 reject(err)
//             }
//             resolve(value)
//         });
//     })
//
// };
//
//
//
//
// exports.validateStylistCreate = (data)=>{
//     return new Promise((resolve, reject)=>{
//         let schema = {
//             firstname: Joi.string().required(),
//             lastname: Joi.string().required(),
//             email: Joi.string().email({ minDomainAtoms: 2 }).required(),
//             image: Joi.string(),
//             bio: Joi.string(),
//             stylist_price: Joi.number().min(0),
//             educator_price: Joi.number().min(0),
//             promotional_emails: Joi.boolean().required(),
//             work_as_stylist: Joi.boolean(),
//             work_as_educator: Joi.boolean(),
//             experience: Joi.number().integer(),
//             password: Joi.string().required()
//         };
//
//         Joi.validate(data, schema, (err, value)=>{
//             if(err){
//                 // reject(err.details[0].message)
//                 reject(err)
//             }
//             resolve(value)
//         })
//     });
// };
//
//
// exports.validateSalonCreate = (data)=>{
//     return new Promise((resolve, reject)=>{
//         let schema = {
//             name: Joi.string().required(),
//             email: Joi.string().email({ minDomainAtoms: 2 }).required(),
//             phone: Joi.string().required(),
//             address: Joi.string().required(),
//             image: Joi.string(),
//             description: Joi.string(),
//             promotional_emails: Joi.boolean().required(),
//             password: Joi.string().required()
//         };
//
//         Joi.validate(data, schema, (err, value)=>{
//             if(err){
//                 reject(err)
//             }
//             resolve(value)
//         })
//     });
// };