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
  }
};