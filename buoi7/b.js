const request = require('request');
const fs = require('fs');
const urn = 'http://localhost:3000';
const cong = (a, b) => {
  const uri = `${urn}/cong/${a}/${b}`;
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) return reject(new Error('Invalid arguments'));
    request.get(uri, {}, (error, data, body) => {
      if (error) return reject(error); // loi do http request
      try {
        const bodyResult = JSON.parse(body);
        if (bodyResult.error) return reject(new Error(bodyResult.message)); // loi do api tra ve
        return resolve(bodyResult.result);
      } catch (e) {
        return reject(new Error(e.message));
      }
    })
  })
}
const nhan = (a, b) => {
  const uri = `${urn}/nhan/${a}/${b}`;
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) return reject(new Error('Invalid arguments'));
    request.get(uri, {}, (error, data, body) => {
      if (error) return reject(error); // loi do http request
      try {
        const bodyResult = JSON.parse(body);
        if (bodyResult.error) return reject(new Error(bodyResult.message)); // loi do api tra ve
        return resolve(bodyResult.result);
      } catch (e) {
        return reject(new Error(e.message));
      }
    })
  })
}

const chia = (a, b) => {
  const uri = `${urn}/chia/${a}/${b}`;
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) return reject(new Error('Invalid arguments'));
    request.get(uri, {}, (error, data, body) => {
      if (error) return reject(error); // loi do http request
      try {
        const bodyResult = JSON.parse(body);
        if (bodyResult.error) return reject(new Error(bodyResult.message)); // loi do api tra ve
        return resolve(bodyResult.result);
      } catch (e) {
        return reject(new Error(e.message));
      }
    })
  })
}
// (20+15)*5/2
// cong(20, 15)
//   .then(tong => {
//     nhan(tong, 5)
//       .then(tich => {
//         chia(tich, 2)
//           .then(result => console.log(result))
//         // .catch(error => console.log(error))
//       })
//     // .catch(error => console.log(error))
//   })
//   .catch(err => console.log(err.message));
// cong(20, 15)
//   .then(tong => nhan(tong, 5))
//   .then(tich => chia(tich, 2))
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message));


// const dienTich = (a, b, h) => {
//   return cong(a, b)
//     .then(tong => nhan(tong, h))
//     .then(tich => chia(tich, 2))
// }

// dienTich(20, 15, 5) // async
//   .then(result => console.log(result)) // đợi kq tu resolve()
//   .catch(err => console.log(err.message)) // đợi kq tu reject()

const dienTich = async (a, b, h) => {
  const tong = await cong(a, b);
  const tich = await nhan(tong, h);
  const result = await chia(tich, 2);
  return result;
}
// (async () => {
//   const result = await dienTich(20, 15, 5); // sync
//   console.log(result);
// })();


// const test = a => new Promise((resolve, reject) => resolve(a += 1));
const test = async (a) => a += 1; // return Promise
(async () => {
  const r = test(5).then(result => result); // dư await
  const result = await test(5); // dư await
  console.log(r, result);
})();
