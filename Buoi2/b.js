// const arr = [1, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6,];
// map, reduce, fitler, sort, forEarch
// const map1 = arr.map(function (value, i, arr) {
//   console.log(`${i}: ${value}`);
//   console.log(arr);
// });
// console.log(map1);

// const reduce1 = arr.reduce((prev, curr, currIndex) => {
//   const r = prev + curr;
//   return r;
// }, 'Value = ');
// console.log(reduce1);
// const filter1 = arr.filter((value) => value % 2 == 0);
// console.log(filter1);
// console.log(arr.sort(compare).reverse());
// function compare(a, b) {
//   if (a - b < 0) return -1;
//   else {
//     return 1;
//   }
// };

let init = 0;
const arr = new Array(5);
arr.forEach(() => {
  console.log(init);
  return init++;
});
// console.log(init);
