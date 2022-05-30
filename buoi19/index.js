const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get('/', (req, res) => {
  return res.json({
    name: 'BEN4',
    address: 'Kmin Quan 3'
  })
});

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server start on port ${port}`);
  }
});