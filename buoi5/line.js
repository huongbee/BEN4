const Point = require('./point');

class Line {
  /**
   *
   * @param {Point} A
   * @param {Point} B
   */
  // constructor(A, B) {
  //   this.pointA = A;
  //   this.pointB = B;
  // }
  /**
   *
   * @param {Point} A
   * @param {Point} B
   * @returns
   */
  static getLength(A, B) {
    const dx = A.x - B.x;
    const dy = A.y - B.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  /**
   *
   * @param {int} d1
   * @param {int} d2
   */
  static compare(d1, d2) {
    return d1 > d2 ? 'd1 is longer d2' : (d2 > d1 ? 'd2 is longer d1' : 'd1 equal d2');
  }
}

const A = new Point(2, 0);
const B = new Point(5, 0);
// const AB = new Line(A, B).getLength();
const C = new Point(0, 0);
// const AC = new Line(A, C).getLength();
const AB = Line.getLength(A, B);
const AC = Line.getLength(A, C);
console.log(Line.compare(AB, AC));

module.exports = Line;
