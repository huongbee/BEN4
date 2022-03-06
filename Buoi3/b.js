/**
Cho biến n = 5; Viết 1 function để vẽ các hình sau:


o---------->x
|
|
|
|
y

*             x=1;        y=1
* *           x=1,2       y=2
* * *         x=1,2,3     y=3
* * * *       x=1,2,3,4   y=4
* * * * *     x=1,2,3,4,5 y=5

**/
const n = 5;
// for (let y = 1; y <= n; y++) {
//   let str = '';
//   for (let x = 1; x <= n; x++) {
//     if (x <= y) {
//       str += '* ';
//     } else {
//       str += ' ';
//     }
//   }
//   console.log(str);
// }

/*

* * * * *     x=1,2,3,4,5 y=1  x<=5-1+1 = 5
* * * *       x=1,2,3,4   y=2  x<=5-2+1 = 4
* * *         x=1,2,3,    y=3  x<=5-3+1 = 3
* *           x=1,2       y=4  x<=5-4+1 = 2
*             x=1         y=5  x<=5-5+1 = 1

*/

// for (let y = 1; y <= n; y++) {
//   let str = '';
//   for (let x = 1; x <= n; x++) {
//     if (x <= n - y + 1) {
//       str += '* ';
//     } else {
//       str += ' ';
//     }
//   }
//   console.log(str);
// }


/*
x=5
y=5

        *     x=5,5    y=1 x=5-y+1 =5-1+1 =5
      * *     x=4,5    y=2 x=5-y+1 =5-2+1 =4
    *   *     x=3,5    y=3
  *     *     x=2,5    y=4
* * * * *     x=12345  y=5
*/

// for (let y = 1; y <= n; y++) {
//   let str = '';
//   for (let x = 1; x <= n; x++) {
//     if (x == n || y == n || (x == n - y + 1)) {
//       str += '* ';
//     } else {
//       str += '  ';
//     }
//   }
//   console.log(str);
// }
/**
 * ***Function ve hinh***
 * @param {int} n
 * @param {function} fn - return bool
 */
function veHinh(n, fn) {
  for (let y = 1; y <= n; y++) {
    let str = '';
    for (let x = 1; x <= n; x++) {
      const dk = fn(x, y, n); // bool  // fn dang dc goi
      if (dk) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(str);
  }
}

// veHinh(n, (x, y, n) => x == n || y == n || (x == n - y + 1)); // hinh 3
// veHinh(n, (x, y) => { return x <= y }); // hinh 1 // fn dang dc dinh nghia
veHinh(n, (x, y, n) => x <= n - y + 1); // hinh 2 // fn dang dc dinh nghia
/*


* * * * *
*      *
*    *
*   *
* *
*


/*
 ......


0 1 1 1 1
2 0 1 1 1
2 2 0 1 1
2 2 2 0 1
2 2 2 2 0


0 1 1 1 0
2 0 1 0 1
2 2 0 1 1
2 0 2 0 1
0 2 2 2 0

 */
