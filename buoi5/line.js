const Point = require('./point');

class Line {
  /**
   *
   * @param {Point} A
   * @param {Point} B
   */
  constructor(A, B) {
    this.pointA = A;
    this.pointB = B;
  }
  getLength() {
    const dx = this.pointA.x - this.pointB.x;
    const dy = this.pointA.y - this.pointB.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const A = new Point(2, 0);
const B = new Point(5, 0);
const AB = new Line(A, B);
console.log(AB.getLength());
