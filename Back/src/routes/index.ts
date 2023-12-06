import express from "express";
import rssRoutes from "./rss.router";
import authRoutes from './auth.router'
import sharedRoutes from './shared.router'

const router = express();

router.use("/articles", rssRoutes);
router.use('/auth', authRoutes)
router.use('/share',sharedRoutes)

export default router;
