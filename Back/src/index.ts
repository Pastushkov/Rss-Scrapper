import express, { Request, Response } from "express";

import helmet from "helmet";
import cors from "cors";
import config from "./config/config";
import initDB from "./services/db";
import path from "path";
import startupQueue from "./functions/cronJobs";
import rssRequests from "./functions/rssRequsts";

import allRoutes from './routes'

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(express.static(__dirname));

app.use("/", allRoutes);

app.get("/doc", (req: Request, res: Response) => {
  try {
    res.sendFile(path.join(__dirname, "../doc", "index.html"));
  } catch (error) {
    console.log(error);
  }
});

(async () => {
  try {
    await initDB();
    startupQueue();

    app.listen(config.port, () => {
      console.info(`listening at http://localhost:${config.port}`);
      rssRequests();
    });
  } catch (e: any) {
    console.error("Server Error " + e.toString());
    process.exit(1);
  }
})();
