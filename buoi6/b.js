const request = require('request');
const uri = 'https://api.weatherapi.com/v1/current.json?key=b72b885b72f84ed681c42155220102&q=SaiGon'
// uri = urn + url

let location = '-----';
let temC = 0;
// request.get(uri, {}, (e, allData, body) => {
//   if (e) throw e;
//   // console.log(allData.body);
//   // console.log(body);
//   const bodyData = JSON.parse(body);
//   location = bodyData.location.name; // Saigon
//   temC = bodyData.current.temp_c; // 33
//   console.log(`Tại ${location} có nhiet do la: ${temC} do C`);
// });

// setTimeout(() => {
//   console.log(`Tại ${location} có nhiet do la: ${temC} do C`);
// }, 2000);
/**
 *
 * @param {string} uri
 * @param {(error: Error, data: obj)=>{}} callback
 */
const getData = (uri, callback) => {
  request.get(uri, {}, (e, allData, body) => {
    if (e) return callback(e, null);
    const bodyData = JSON.parse(body);
    const location = bodyData.location.name; // Saigon
    const temC = bodyData.current.temp_c; // 33
    return callback(null, { location, temC });
  });
}

getData(uri, (error, data) => {
  if (error) throw error;
  console.log(`Tại ${data.location} có nhiet do la: ${data.temC} do C`);
});

/**
3 cách xu ly async
- dung callback fn
- dung Promise
- await
 */
