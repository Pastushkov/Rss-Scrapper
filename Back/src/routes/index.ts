import express from "express";
import rssRoutes from "./rss.router";
import authRoutes from './auth.router'

const router = express();

router.use("/articles", rssRoutes);
router.use('/auth', authRoutes)

export default router;
