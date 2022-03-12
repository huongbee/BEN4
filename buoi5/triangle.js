const Point = require('./point.js');
const Line = require('./line.js');

class Triangle {
  /**
   *
   * @param {Point} A
   * @param {Point} B
   * @param {Point} C
   */
  constructor(A, B, C) {
    this.pointA = A;
    this.pointB = B;
    this.pointC = C;
  }
  getPerimeter() {
    const AB = new Line(this.pointA, this.pointB);
    const BC = new Line(this.pointB, this.pointC);
    const AC = new Line(this.pointA, this.pointC);
    return AB.getLength() + BC.getLength() + AC.getLength();
  }
}

// OA = sqrt(4+4) = 2,8
// AB = sqrt(4+9) = 3,6
// AO = 5
// 5+2,8+3,6 = 11,4

const A = new Point(2, 2);
const B = new Point(5, 0);
const C = new Point(0, 0);
const ABC = new Triangle(A, B, C);
console.log(ABC.getPerimeter());
