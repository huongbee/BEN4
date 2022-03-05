// function myLog(str) {
//   // console.log(str);
//   return console.log(str);
// }
// myLog("Hello");

// const log = console.log;
// log("Hello Ben4")

// function myLog2() {
//   return console.log;
// }
// const l = myLog2();
// l("abc");

// const sum = (a, b) => {
//   return a + b;
// }
// arrow function
const sum = (a, b) => a + b;
// // console.log(typeof sum);

// console.log(sum(3, 4));

// const log = (mess, fn) => {
//   return fn(mess); // console.log(mess);
// }

// log("hello", console.log);
// const s = (tinhtong) => console.log(tinhtong);
// console.log(typeof s);
// s(sum(3, 4));

// const s = (function () {
//   console.log("Hello");
// })();
// let r = null;
// (() => {
//   const a = 3;
//   const b = 4;
//   r = a + b;
// })();
// console.log(r);


/*
cho n = 100;
1. viết function in ra man hinh cac so chan
2. viết function in ra man hinh cac so le
3. viết function in ra man hinh cac so 5 du 4
*/
const n = 10;
const inSoChan = () => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
const inSoLe = () => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
const inSoChia5Du4 = () => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 4) {
      console.log(i);
    }
  }
}
/**
 *
 * @param {function} fn
 */
const inSo = (fn) => {
  for (let i = 1; i <= n; i++) {
    const dk = fn(i); // checkSoChan(i)
    if (dk) {
      console.log(i);
    }
  }
}

// inSo((i) => i % 2 == 0);
// inSo((i) => i % 5 == 4);

const checkSoChan = (i) => i % 2 == 0;
inSo(checkSoChan);



// inSoChan();
// inSoLe();
// inSoChia5Du4();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let foo = arr => (a, b) => arr.filter(num => num % a === b);
// console.log(foo(arr)(2, 0));
// console.log(foo(arr)(2, 1));
// console.log(foo(arr)(5, 4));

/**
 *
 * @param {int} soChia
 * @param {int} soDu
 */
// const inSo = (soChia, soDu) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % soChia == soDu) {
//       console.log(i);
//     }
//   }
// }
// inSo(2, 0);
// inSo(2, 1);
// inSo(5, 4);
// const print = (range, filter) => console.log(Array.from({ length: range + 1 }, (_, i) => i).filter(filter))

// const print = (arr, filter) => console.log(arr.filter(filter))

// print(arr, x => x % 2 == 0)
// print(arr, x => x % 2 == 1)
// print(arr, x => x % 5 == 4)