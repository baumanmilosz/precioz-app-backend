const Joi = require('joi');
const { password, objectId } = require('./custom.validation');
const {RegExpTypes} = require("../enums/RegExpTypes");

const createOrder = {
  body: Joi.object().keys({
    serialId: Joi.string().max(255).required(),
    metalQuantity: Joi.number().greater(0).required(),
    workTimeInMilliseconds: Joi.number().greater(0).required(),
    tpzTimeInMilliseconds: Joi.number().greater(0).required(),
    metalName: Joi.string().max(255).required(),
    operationNumber: Joi.string().length(4).pattern(RegExpTypes.number).required(),
    machineNumber: Joi.string().length(5).pattern(RegExpTypes.number).required(),
    machineName: Joi.string().max(255).required(),
  }),
};

// const getUsers = {
//   query: Joi.object().keys({
//     name: Joi.string(),
//     role: Joi.string(),
//     sortBy: Joi.string(),
//     limit: Joi.number().integer(),
//     page: Joi.number().integer(),
//   }),
// };
//
// const getUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };
//
// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };
//
// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  createOrder,
  // getUsers,
  // getUser,
  // updateUser,
  // deleteUser,
};
