import cronService from "../services/cron";
import rssRequests from "./rssRequsts";

const queue: {
  [key: string]: any
} = {};
function putQueue(name: string, handler: any) {
  if (queue[handler]) {
    console.error(`Trying to putList already existed name = ${name}`);
  } else {
    queue[name] = handler;
  }
}

const startupQueue = () => {
  cronService.init();
  putQueue("rssRequests", cronService.registerJob("day", rssRequests));
}
export default startupQueue
