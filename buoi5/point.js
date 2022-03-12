class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getDistance() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}



//           A(2, 2)


//          A(2,1)          B(5, 1)
// O(0, 0)   A(2,0)          B(5, 0)

//           //  dx = A'B = xB - xA' = 5-2 = pow(-3, 2) = 9
//           //  dy = A'A = yA - yA' = 2-1 = 1


// // const A = new Point(4, 9);
// // console.log(A.getDistance());


module.exports = Point;