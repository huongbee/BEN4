const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { accessToken } = req.cookies;
  res.send({ accessToken });
});
module.exports = router;