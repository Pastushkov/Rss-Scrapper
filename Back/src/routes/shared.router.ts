import express from 'express'
import sharedController from '../controllers/shared.controller';
const router = express();

router.get('/medium/:id',sharedController.shareToMedium)
router.get('/ghost/:id',sharedController.shareToGhost)

export default router