const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');
const {orderValidation} = require("../../validations");
const {orderController} = require("../../controllers");

const router = express.Router();

router.post('/', validate(orderValidation.createOrder), orderController.createOrder);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management and retrieval
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create an order
 *     description: Only admins can create other orders.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - serialId
 *               - metalQuantity
 *               - workTimeInMilliseconds
 *               - tpzTimeInMilliseconds
 *               - metalName
 *               - operationNumber
 *               - machineNumber
 *               - machineName
 *             properties:
 *               serialId:
 *                 type: string
 *               metalQuantity:
 *                 type: number
 *               workTimeInMilliseconds:
 *                 type: number
 *               tpzTimeInMilliseconds:
 *                 type: number
 *               metalName:
 *                 type: string
 *               operationNumber:
 *                 type: string
 *               machineNumber:
 *                 type: string
 *               machineName:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Order'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
