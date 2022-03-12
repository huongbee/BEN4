class Person {
  constructor(name) {
    this.name = name;
    this.age = 10;
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

function deleteName(obj) {
  delete obj.name;
}

const ti = new Person('Ti');
console.log(ti);
rename(ti, 'Nguyen Van Ti');
deleteName(ti);

console.log(ti);
// console.log(obj);





// let x = 10;
// function cal(x) {
//   return x += 1;
// }
// cal(x);
// console.log(x);


// function A(array) {
//   array.push('n');
// }

// const arr = [1, 2, 3];
// A(arr);

// console.log(arr);
