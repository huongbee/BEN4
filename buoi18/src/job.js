const cron = require('node-cron');
const { checkPasswords } = require('./controllers/cron.controller');
//  # ┌────────────── second (optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *
// 0 0 * * * // 0:00
cron.schedule('*/2 * * * * *', () => {
  console.log('-------start task-------');
  console.log('Cron is running every 2s');
  checkPasswords();
  console.log('--------end task----------\n');
})