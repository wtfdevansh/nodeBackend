let express = require('express')

let app = express()

// app.use('/cartify',require('./cartify.js'))

app.get('/home', (req , res) => {
    res.send("testing the server")
})

app.get('/cartify', (req , res) => {
    res.send("cartify 2")
})

app.use('/cartify',require('./cartify.js'))



app.listen(3000 , () => {
    console.log("server is started")
})