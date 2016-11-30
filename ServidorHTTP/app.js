var express = require('express')
var app = express()

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!')
})

app.post('/TecnologiasWebPost', function (req, res) {
  res.send('Hola post')
})
app.put('/TecnologiasWebPut', function (req, res) {
  res.send('Hola put')
})

//request req
//respond res
app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})