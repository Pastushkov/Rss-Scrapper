import mongoose from "mongoose";
import config from '../config/config'

const initDB = async () => {
  return new Promise((resolve, reject) => {
    mongoose.set("strictQuery", true);
    mongoose.connect(config.dbUrl, {}, (err:any) => {
      if (err) {
        console.error(err);
        reject(err);
        process.exit(1);
      }
      resolve(true);
      console.log("DB connected successfully");
    });
  });
};

export default initDB;
