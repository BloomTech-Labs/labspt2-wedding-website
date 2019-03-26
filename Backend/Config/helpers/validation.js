const Joi = require('joi')

module.exports = {
  userInput: {
    username: Joi.string()
      .min(5)
      .max(20)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
      .regex(/(?=.*?[0-9])(?=.*?[A-Za-z]).+/),
    email: Joi.string().email({
      minDomainAtoms: 2,
    }),
  },
}
