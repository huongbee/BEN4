// const { signToken, verifyToken } = require('./jwt');
// const user = {
//   id: 132123213,
//   username: 'admin',
//   email: 'admin@example.com'
// };
// const token = signToken(user);
// console.log(token);
// // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMyMTIzMjEzLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlhdCI6MTY0OTY4MjQwNCwiZXhwIjoxNjQ5NjgyNDY0fQ.MK7ntdZWQhxNZkWRbAmmi9B4ZYoOm62DX_x8_tFok7U';
// const check = verifyToken(token);
// console.log(check);

// https://www.npmjs.com/package/bcrypt
const md5 = require('md5');
const PASS_KEY = '123232!PASS_KEY';
const passSignUp = '1234567890';
const password = md5(md5(passSignUp + PASS_KEY)); // generate pass // f72582821a489a2345f58378186c85e4

const passSignIn = '1234567890';
const passwordToCompare = md5(md5(passSignIn + PASS_KEY));
if (password === passwordToCompare) console.log('Login thành công');
else console.log('Sai pass')
