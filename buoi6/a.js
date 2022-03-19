const a = require('./a1.js');
const data = require('./data.json');

setTimeout(() => {
  console.log('log in settimeout');
}, 1000) // 1 seconds
setInterval(() => {
  console.log('log in setinterval');
}, 2000);

console.log(a);