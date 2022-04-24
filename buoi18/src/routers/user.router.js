const express = require('express');
const router = express.Router();

router.get('/login', () => {
  throw new Error('Plz login')
});

module.exports = router;