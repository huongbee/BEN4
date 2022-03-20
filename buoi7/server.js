const express = require('express');
const app = express();
const Calculate = require('./lib/Calculate');

app.get('/:pheptinh/:a/:b', (req, res) => {
  try {
    let { pheptinh, a, b } = req.params
    pheptinh = pheptinh.toLowerCase()
    arrPheptinh = ['cong', 'tru', 'nhan', 'chia', 'chiadu'];
    if (arrPheptinh.find(pt => pheptinh === pt)) {
      const cal = new Calculate(pheptinh, a, b)
      res.send({
        pheptinh: cal.operator,
        a: +a,
        b: +b,
        result: cal.result
      })
    }
    else {
      res.send({ error: true, message: 'CANNOT FIND OPERATOR!' })
    }
  } catch (error) {
    res.send({ error: true, message: error.message })
  }
})
app.get('/', (req, res) => { res.send({ message: 'Thanh cong' }) });
app.listen(3000, () => console.log(`Server start on port 3000`))