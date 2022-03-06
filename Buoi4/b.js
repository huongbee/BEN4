class Person {
  #privateProp = 1000;
  constructor(ten) {
    this.name = ten;
    this.diChoi = (time) => {
      console.log(`Bạn ${this.name} đi choi luc ${time}`);
    };
    // #privateMethod() {
    //   console.log('This is private method');
    // }
  }
  diHoc(schoolName) {
    console.log(`Bạn ${this.name} đi học tại trường ${schoolName}`);
  }

  /**
   */
  set tuoi(number) {
    this.age = number;
  }
  get soTuoi() {
    return this.age;
  }
  getProp() {
    console.log(this.#privateProp);
  }
  // #privateMethod() {
  //   console.log('This is private method');
  // }
}
class Child extends Person {
  // getProp() {
  //   // console.log(this.#privateProp);
  // }
}
// const child = new Child('Ti');
// child.diHoc('Kmin 2');
// child.getProp();

// const teo = new Person('Teo');
// teo.getProp();
// teo.diHoc('Kmin');
// console.log(teo.name);
// teo.tuoi = 10;
// console.log(teo.soTuoi);
// teo.diChoi(new Date().getHours());

// module.exports = Person;
// module.exports = Child;
const fn = () => {
  console.log('This is functionX');
};
module.exports = { Person, Child, functionX: fn };