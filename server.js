const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8020
const app = express()
const router = require('./src/server/index')

app.use(cors())
app.use(express.json())

//Static
app.use(express.static(__dirname + '/dist/'))

//DB
require('./src/server/config/db')

//Router
app.use('/', router)

//Output
app.listen(port, () => {
  console.log('Server Vue iniciado en ' + port)
})
