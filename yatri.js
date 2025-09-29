let express = require('express')
let app = express()

let router = express.Router()


router.use('/student', require('./student.js'))
router.use('/professor', require('./professor.js'))
router.use('/employee', require('./employee.js'))

module.exports = router

