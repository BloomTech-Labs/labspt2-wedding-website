const Joi = require('joi');

module.exports={
    userInput:{
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email({minDomainAtoms:2})
    }
}