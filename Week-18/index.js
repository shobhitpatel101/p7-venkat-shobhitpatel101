const express = require('express')
const app = express()
const port = 8080
const authRoute = require('./routes/auth')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/auth', authRoute)

app.listen(port, ()=>{
    console.log('Server is running on port: ' + port)
})

