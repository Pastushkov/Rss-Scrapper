import express from 'express'
import sharedController from '../controllers/shared.controller';
const router = express();

/**
 * @api {get} /share/medium/:id Share article via medium
 * @apiVersion 1.0.0
 * @apiName ShareArticleViaMedium
 * @apiGroup Share
 *
 * @apiParam {String} id Article id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *          /article oject/
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
router.get('/medium/:id',sharedController.shareToMedium)

/**
 * @api {get} /share/ghost/:id Share article via ghost
 * @apiVersion 1.0.0
 * @apiName ShareArticleViaGhost
 * @apiGroup Share
 *
 * @apiParam {String} id Article id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *          /article oject/
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
router.get('/ghost/:id',sharedController.shareToGhost)

export default router