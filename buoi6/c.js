const request = require('request');
const uri = ''

/**
 *
 * @param {*} uri
 * @return Promise
 */
const getData = (uri) => {
  return new Promise((resolve, reject) => {
    request.get(uri, {}, (e, allData, body) => {
      if (e) return reject(e); // reject: loi neu co
      const bodyData = JSON.parse(body);
      location = bodyData.location.name; // Saigon
      temC = bodyData.current.temp_c; // 33
      return resolve({ location, temC })
    });
  });
}

const data = getData(uri)
  .then((result) => { // nhan ket qua cua resolve
    // console.log("then 1: " + JSON.stringify(result));
    console.log(`Tại ${result.location} có nhiet do la: ${result.temC} do C`);
    return 1;
  })
  .then((result1) => { // nhan ket qua cua resolve
    console.log("then 2: " + result1);
  })
  .catch((reason) => { // nhan ket qua cua reject
    // try {
    // return "Error: " + reason.message; // khong xu ly loi cua request vi da comment
    const name = Kmin;
    // }
    // catch (error) {
    //   return "Error important: " + error.message;
    // }
  })
  .catch((reason) => { // nhan ket qua cua catch truoc so
    console.log("catch 2 ");
    console.log({ code: 1001, message: reason });
  })
  .then((result) => {
    console.log(result); // ket qua cua .catch thu 1
  });

console.log(data);
