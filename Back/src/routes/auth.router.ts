import express from 'express'
import authController from '../controllers/auth.controller'
import check from "../utils/validator";
import Joi from 'joi';

const router = express()

/**
 * @api {post} /auth/register Register new user
 * @apiVersion 1.0.0
 * @apiName RegisterUser
 * @apiGroup Auth
 *
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 * @apiBody {String} name User name
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *          success: true
 *      }
 *      error: null,
 * }
 *
 * @apiError {json} object object with error
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      status: false,
 *      payload: null,
 *      error: "Error message"
 */
router.post('/register', check({
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required()
    })
}), authController.register)

/**
 * @api {post} /auth/login Login user
 * @apiVersion 1.0.0
 * @apiName LoginUser
 * @apiGroup Auth
 *
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: "jwt access token"
 *      error: null,
 * }
 *
 * @apiError {json} object object with error
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      status: false,
 *      payload: null,
 *      error: "Error message"
 */
router.post('/login', check({
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
}), authController.login)

export default router