const Joi = require('joi');
const schema = require('../Models/phoneData.tsx');

/* module.exports = function validateInfo (phone) {
    return Joi.validate(phone, schema);
} */

exports.validateInfo=(phone) =>{
    return Joi.validate(phone, schema)
}