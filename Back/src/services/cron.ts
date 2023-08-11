import { CronJob } from "cron";

const cronHandle: {
  [key: string]: { cron: string, jobs: any[], handle: any }
} = {
  day: { cron: "1 1 0 * * *", jobs: [], handle: null },
  minute: { cron: "1 * * * * *", jobs: [], handle: null },
};

const starterJobs = [
  {
    schedule: "day",
    job: () => { },
  },
  {
    schedule: "minute",
    job: () => { },
  },
];

const registerJob = (schedule: string, job: () => void) => {
  cronHandle[schedule].jobs.push(job);
  return cronHandle[schedule].jobs.length - 1;
}

const init = () => {
  for (let schedule of Object.keys(cronHandle)) {
    cronHandle[schedule].handle = new CronJob(
      cronHandle[schedule].cron,
      function () {
        for (let job of cronHandle[schedule].jobs) {
          job();
        }
      },
    );
    cronHandle[schedule].handle.start();
  }
  for (let starterJob of starterJobs) {
    registerJob(starterJob.schedule, starterJob.job);
  }
}

export default {
  init,
  registerJob
};
