const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const orderSchema = mongoose.Schema(
  {
    serialId: {
      type: String,
      required: true,
      trim: true,
    },
    metalQuantity: {
      type: Number,
      required: true,
    },
    workTimeInMilliseconds: {
      type: Number,
      required: true,
    },
    tpzTimeInMilliseconds: {
      type: Number,
      required: true,
    },
    metalName: {
      type: String,
      required: true,
      trim: true,
    },
    operationNumber: {
      type: String,
      required: true,
    },
    machineNumber: {
      type: String,
      required: true,
    },
    machineName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
// orderSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
