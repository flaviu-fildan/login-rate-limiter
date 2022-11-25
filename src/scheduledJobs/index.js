const cron = require("node-cron");
const moment = require('moment');

const setupScheduledJobs = () => {
  cron.schedule("*/1 * * * *", function () {
    console.log("---------------------");
    console.log("running a task every minute", moment());
  });
};

module.exports = { setupScheduledJobs };
