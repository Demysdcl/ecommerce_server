let express = require('express')
let http = require('http')

var app = express()
app.use(express.static('./public'))

http.createServer(app).listen(3000, () => {
  console.log('Listen port 3000')
})
