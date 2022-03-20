const request = require('request');

const urn = 'http://localhost:3000';
const cong = (a, b, cb) => {
  const uri = `${urn}/cong/${a}/${b}`;
  request.get(uri, {}, (error, data, body) => {
    if (error) return cb(error); // loi do http request
    try {
      const bodyResult = JSON.parse(body);
      if (bodyResult.error) return cb(new Error(bodyResult.message)); // loi do api tra ve
      return cb(null, bodyResult.result);
    } catch (e) {
      return cb(new Error(e.message));
    }
  })
}
const nhan = (a, b, cb) => {
  const uri = `${urn}/nhan/${a}/${b}`;
  request.get(uri, {}, (error, data, body) => {
    if (error) return cb(error); // loi do http request
    try {
      const bodyResult = JSON.parse(body);
      if (bodyResult.error) return cb(new Error(bodyResult.message)); // loi do api tra ve
      return cb(null, bodyResult.result);
    } catch (e) {
      return cb(new Error(e.message));
    }
  })
}
const chia = (a, b, cb) => {
  const uri = `${urn}/chia/${a}/${b}`;
  request.get(uri, {}, (error, data, body) => {
    if (error) return cb(error); // loi do http request
    try {
      const bodyResult = JSON.parse(body);
      if (bodyResult.error) return cb(new Error(bodyResult.message)); // loi do api tra ve
      return cb(null, bodyResult.result);
    } catch (e) {
      return cb(new Error(e.message));
    }
  })

}
// (20+15)*5/2

// cong(20, 15, (err, tong) => {
//   if (err) throw err;
//   // tong: la ket qua cua fn cong(20,15)
//   nhan(tong, 5, (err, tich) => {
//     if (err) throw err;
//     chia(tich, 2, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     })
//   })
// })


// (async () => {
//   const tong = await cong(20, 15);
//   console.log(tong);
// })()

// const a = async (a, b) => {
//   const tong = new Promise((resolve, reject) => {
//     cong(a, b, (err, result) => {
//       if (err) return reject(err);
//       return resolve("line 67: " + result);
//     })
//   })
//   return tong
// }
// (async () => {
//   const result = await a(20, 15);
//   console.log("line 73: " + result);
// })();
