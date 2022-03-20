class Calculate {
  /**
   *
   * @param {enum} pheptinh [cong, tru, nhan, chia, chiadu]
   * @param {number} a
   * @param {number} b
   */
  constructor(pheptinh, a, b) {
    this.pheptinh = pheptinh;
    this.a = a;
    this.b = b;
  }
  get operator() {
    if (['+', 'cong'].includes(this.pheptinh)) return '+';
    if (['-', 'tru'].includes(this.pheptinh)) return '-';
    if (['*', 'nhan'].includes(this.pheptinh)) return '*';
    if ((this.pheptinh === '/' || this.pheptinh === 'chia') && this.b != 0) return '/';
    if (['%', 'chiadu'].includes(this.pheptinh) && this.b != 0) return '%';
    throw new Error('Math error!')
  }
  get result() {
    let r = this.a + this.operator + this.b;
    return eval(r);
  }
}
module.exports = Calculate;
