const { verifyToken } = require('../services/jwt.service');

module.exports = {
  validatePage: (req, res, next) => {
    const page = +req.params.page;
    console.log(page);
    if (isNaN(page)) {
      return res
        .status(400)
        .send('page must be a number');
    }
    next();
  },
  authenticate: (req, res, next) => {
    const { accesstoken = '' } = req.headers;
    let checkToken = null;
    try {
      checkToken = verifyToken(accesstoken);
    } catch (error) {
      return res.status(401)
        .send('Authenticate fail');
    }
    next();
  }
};