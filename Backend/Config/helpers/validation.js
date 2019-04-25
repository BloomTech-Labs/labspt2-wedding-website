const Joi = require('joi')

module.exports = {
  userInput: {
    username: Joi.string()
      .min(5)
      .max(20),
    password: Joi.string()
      .min(6)
      .required()
      .regex(/(?=.*?[0-9])(?=.*?[A-Za-z]).+/),
    email: Joi.string()
      .required()
      .email({
        minDomainAtoms: 2,
      }),
  },
}
