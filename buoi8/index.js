const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const obj = { id: 1212, name: 'John' };
  const title = "Hello EJS";
  const users = [
    obj,
    { id: 1213, name: 'John 2' }, // user
    { id: 1214, name: 'John 3' } // user
  ];
  res.render('home', { obj, title, users: users });
});

app.post('/search', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})


// https://www.metaweather.com/api/location/2487956/
// https://www.metaweather.com/api/location/search/?query=San+Francisco