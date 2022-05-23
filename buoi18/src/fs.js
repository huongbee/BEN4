const fs = require('fs');

const path2file = __dirname + '/views/test-fs.txt';
const isExist = fs.existsSync(path2file);
if (isExist) {
  // fs.writeFileSync(path2file, Buffer.from('3~Khóa học JS~1 tháng~20000')); // xóa content cũ => ghi content mới
  fs.appendFileSync(path2file, Buffer.from('\n3~Khóa học JS~3 tháng~400000'));
  const contentFile = fs.readFileSync(path2file, 'utf-8');
  let arr = contentFile.split('\n');
  arr = arr.map((item) => {
    const itemArr = item.split('~');
    const itemObj = {
      id: itemArr[0],
      name: itemArr[1],
      time: itemArr[2],
      price: itemArr[3]
    };
    item = itemObj;
    return item;
  });
  console.log(arr);
  // fs.unlinkSync(path2file)
} else {
  console.log("File not exist");
  // fs.mkdirSync('path')
  // tạo file
  fs.appendFileSync(path2file, Buffer.from('1~Khóa học JS~3 tháng~400000'));
}