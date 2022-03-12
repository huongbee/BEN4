class Person {
  constructor(name) {
    this.name = name;
  }
}

/**
 *
 * @param {Person} obj
 * @param {String} newName
 */


function rename(obj, newName) {
  const o = { ...obj };
  o.name = newName;
  return o;
}


const ti = new Person('Ti');
// console.log(ti);
const obj = rename(ti, 'Nguyen Van Ti');

console.log(ti);
console.log(obj);





// let x = 10;
// function cal(x) {
//   return x += 1;
// }
// cal(x);
// console.log(x);


function A(array) {
  array.push('n');
}

const arr = [1, 2, 3];
A(arr);

console.log(arr);
