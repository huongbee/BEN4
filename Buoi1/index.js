const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    name: 'BEN4',
    key: 'abc'
  });
});
app.listen(3000, (req, res) => {
  console.log('Server listening on port 3000');
});

// localhost:3000|||127.0.0.1:3000