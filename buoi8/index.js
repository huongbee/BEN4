const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const Metaweather = require('./lib/metaweather');

// app.get('/', (req, res) => {
//   const obj = { id: 1212, name: 'John' };
//   const title = "Hello EJS";
//   const users = [
//     obj,
//     { id: 1213, name: 'John 2' }, // user
//     { id: 1214, name: 'John 3' } // user
//   ];
//   res.render('home', { obj, title, users: users });
// });

app.get('/', (req, res) => {
  res.render('index', {
    code: null,
    message: null,
    data: null
  });
});
app.post('/search', async (req, res) => {
  const body = req.body;
  const weatherApi = new Metaweather();
  let location = [];
  try {
    location = await weatherApi.getLocation(body.txtKeyword);
  } catch (error) {
    return res.render('index', {
      code: 1001,
      message: 'Lỗi, vui lòng thử lại sau',
      data: {
        txtKeyword: body.txtKeyword,
        location: null
      }
    });
  }
  if (location.length === 0 || !location) { // '' null undefined NaN false 0
    return res.render('index', {
      code: 1002,
      message: `Không tìm thấy thông cho ${body.txtKeyword}`,
      data: {
        txtKeyword: body.txtKeyword,
        location: null
      }
    });
  }
  return res.render('index', {
    code: 1000,
    message: 'Thành công',
    data: {
      txtKeyword: body.txtKeyword,
      location
    }
  })
});

app.get('/forecast/:id', async (req, res) => {
  const { id } = req.params;
  const weatherApi = new Metaweather();
  let result = null;
  try {
    result = await weatherApi.getWeather(id);
  } catch (error) {
    return res.render('detail', {
      code: 1001,
      message: 'Lỗi, vui lòng thử lại sau',
      data: null
    });
  }
  if (!result || !result.woeid) {
    return res.render('detail', {
      code: 1002,
      message: 'Không tìm thấy thông tin',
      data: null
    });
  }
  return res.render('detail', {
    code: 1000,
    message: 'Thành công',
    data: result
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})

// Dieukien ? kqNeuDieukienTrue : kqNeuDieukienFalse;


// https://www.metaweather.com/static/img/weather/lc.svg
// https://www.metaweather.com/api/location/2487956/
// https://www.metaweather.com/api/location/search/?query=San+Francisco



// const n = 3.45843343;
// console.log(Math.round(n * 1000) / 1000);
