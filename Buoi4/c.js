// const Person = require('./b.js').Person;
// const Child = require('./b.js').Child;
// const b = require('./b.js');
// const Person = b.Person;
const { Person, functionX, Child } = require('./b.js'); // Destructuring
const nam = new Person('Teo');
nam.diChoi('4:56');
functionX();


/**
1.cho hệ trục tọa độ Oxy, cho điểm A(4,9), tính khoảng cách từ O(0,0) đến điểm A
2.cho hệ trục tọa độ Oxy, cho điểm A(1,4), B(1,10), C(10,20) tính chu vi của hình tam giác ABC
*/
class Point {
  x = toadoX;
  y = toadoY;
}
