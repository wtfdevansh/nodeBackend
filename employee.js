let express = require('express')

let router = express.Router()


router.post('/', (req , res) => {
    res.send("hey you are new here")
})

module.exports = router



