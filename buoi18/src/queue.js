const Async = require('async');
const { User } = require('./models/user.model');


// INIT_POOL = [].length = 10; 2 // get data || receive request
// INIT_POOL gui data cho EXECUTE_POOL1  2 2   execute task 1 + task2
// EXECUTE_POOL1 gui data cho EXECUTE_POOL2  3 // execute task 3

const INIT_POOL = Async.queue(async (task, callback) => {
  console.log('----start INIT_POOL------');
  const user = await User.findUserByUsername(task.username);
  console.log(user);
  EXECUTE_POOL.push(user);
  // EXECUTE_POOL2.push(user);
  callback();
}, 2);

const EXECUTE_POOL = Async.queue(async (task, callback) => {
  console.log('----start EXECUTE_POOL------');
  const userUpdate = await User.updatePassword(task.username, '111111');
  console.log({ userUpdate });
  callback();
}, 1);
// const EXECUTE_POOL2 = Async.queue(async (task, callback) => {
//   console.log('----start EXECUTE_POOL2------');
//   const userUpdate = await User.updatePassword(task.username, '111111');
//   console.log({ userUpdate });
//   callback();
// }, 1);
INIT_POOL.drain(() => {
  console.log('INIT_POOL thuc thi xong, INIT_POOL = ' + INIT_POOL.length());
});
EXECUTE_POOL.drain(() => {
  console.log('EXECUTE_POOL thuc thi xong, EXECUTE_POOL = ' + INIT_POOL.length());
});

// INIT_POOL.push([
//   { username: 'user-1' },
//   { username: 'user-2' },
//   { username: 'user-3' },
//   { username: 'user-4' },
//   { username: 'user-5' }
// ]);

var cargoQueue = Async.cargoQueue(function (tasks, callback) {
  console.log(tasks.length);
  for (var i = 0; i < tasks.length; i++) {
    console.log('hello ' + tasks[i].name);
  }
  callback();
}, 2, 3);
// song song 2
// payload: 3 => 6
cargoQueue.push({ name: 'Tui nè 1' })
cargoQueue.push({ name: 'Tui nè 2' })
cargoQueue.push({ name: 'Tui nè 3' })
cargoQueue.push({ name: 'Tui nè 4' })
cargoQueue.push({ name: 'Tui nè 5' })
cargoQueue.push({ name: 'Tui nè 6' })
cargoQueue.push({ name: 'Tui nè 7' })
cargoQueue.push({ name: 'Tui nè 8' })
cargoQueue.push({ name: 'Tui nè 9' })
cargoQueue.push({ name: 'Tui nè 10' })
