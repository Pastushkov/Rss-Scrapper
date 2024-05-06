import express from 'express'
import rssController from "../controllers/rss.controller";
import check from "../utils/validator";
import Joi from "joi";
import authMiddleware from '../middlewares/auth.middleware';

const router = express();

/**
 * @api {get} /categories Get list of category
 * @apiVersion 1.0.0
 * @apiName CategoriesList
 * @apiGroup Category
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: ['Ohio', 'Politics']
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
router.get('/categories', rssController.getCategoryList)

/**
 * @api {get} /source Get list of source
 * @apiVersion 1.0.0
 * @apiName SourceList
 * @apiGroup Source
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: ['bbs', 'nyt']
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
router.get('/source', rssController.getSourceList)

/**
 * @api {get} /article Get list of article
 * @apiVersion 1.0.0
 * @apiName ArticleList
 * @apiGroup Article
 *
 * @apiQuery {String} [source] Article source
 * @apiQuery {String} [search] Text to search
 * @apiQuery {String} [category] Category to search
 * @apiQuery {String} [limit] Limit
 * @apiQuery {String} [offset] Offset
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *          list: [],
 *          total: 0
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
router.get(
  "/",
  check({
    query: Joi.object({
      source: Joi.string().optional(),
      search: Joi.string().optional(),
      category: Joi.string().optional(),
      limit: Joi.string().optional(),
      offset: Joi.string().optional(),
      sortBy: Joi.string().optional()
    }),
  }),
  rssController.getList,
);

/**
 * @api {get} /article/:_id Get article by id
 * @apiVersion 1.0.0
 * @apiName GetArticleById
 * @apiGroup Article
 *
 * @apiParam {String} _id Article id
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
router.get('/:_id', check({
  params: Joi.object({
    _id: Joi.string().required()
  })
}), authMiddleware, rssController.getArticleById)

/**
 * @api {post} /article Create new Article
 * @apiVersion 1.0.0
 * @apiName CreateArticle
 * @apiGroup Article
 *
 * @apiBody {String} title Article title
 * @apiBody {String} description Article description
 * @apiBody {String} link Article link
 * @apiBody {String} pubDate Article pubDate
 * @apiBody {String[]} category Article category
 * @apiBody {String} source Article source
 * @apiBody {String} [medila] Article medila url
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
router.post('/', check({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    link: Joi.string().required(),
    pubDate: Joi.date().required(),
    category: Joi.array().items(Joi.string()).required(),
    source: Joi.string().required(),
    media: Joi.string().optional().allow(''),
  
  })
}), authMiddleware, rssController.createArticle)


/**
 * @api {patch} /article/:_id Edit Article by id
 * @apiVersion 1.0.0
 * @apiName EditArticle
 * @apiGroup Article
 *
 * @apiParam {String} _id Article id
 * 
 * @apiBody {String} [title] Article title
 * @apiBody {String} [description] Article description
 * @apiBody {String} [link] Article link
 * @apiBody {String} [pubDate] Article pubDate
 * @apiBody {String[]} [category] Article category
 * @apiBody {String} [source] Article source
 * @apiBody {String} [medila] Article medila url
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
router.patch('/:_id', check({
  params: Joi.object({
    _id: Joi.string().required()
  }),
  body: Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    link: Joi.string().optional(),
    pubDate: Joi.string().optional(),
    media: Joi.string().optional().allow(''),
    category: Joi.array().items(Joi.string()).optional(),
    source: Joi.string().optional()
  })
}), authMiddleware, rssController.updateArticleById)


/**
 * @api {delete} /article/:_id Delete Article by id
 * @apiVersion 1.0.0
 * @apiName DeleteArticle
 * @apiGroup Article
 *
 * @apiParam {String} _id Article id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *          id: /article id/
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
 *      }
 */
router.delete('/:_id',authMiddleware,rssController.deleteArticleById)

export default router;
