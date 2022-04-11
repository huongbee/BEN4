const jwt = require('jsonwebtoken');
const md5 = require('md5'); // hash

const PRIVATE_KEY = md5('jwt_private_key!234590@@@@');

const signToken = (data) => {
  const token = jwt.sign(data, PRIVATE_KEY, { algorithm: 'HS256', expiresIn: 60 }); // 60s
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, PRIVATE_KEY, { algorithm: 'HS256', expiresIn: 60 });
    console.log(decoded);
    if (decoded.exp) return true;
    return false;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
module.exports = { signToken, verifyToken };