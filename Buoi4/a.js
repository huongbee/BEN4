const obj = {
  diChoi: function () {
  }
};
obj.name = "Teo";
obj.diHoc = (schoolName) => {
  console.log(`Bạn ${obj.name} đi học tại trường ${schoolName}`);
};
obj.diHoc('Kmin');