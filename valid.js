const joi = require('@hapi/joi');

const validRegister = (props) => {
    const schema = joi.object({
        FirstName: joi.string().min(3).required(),

        LastName: joi.string().min(3).required(),

        Email: joi.string().min(6).required().email(),

        Password: joi.string().min(8).required()

    })
    return validation = schema.validate(props);

}

const validLogin = (props) => {
    const schema = joi.object({
        Email: joi.string().min(6).required().email(),

        Password: joi.string().min(8).required()
    })
    return validation = schema.validate(props);
}

module.exports.validRegister = validRegister;
module.exports.validLogin = validLogin;