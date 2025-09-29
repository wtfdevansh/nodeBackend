let express = require('express')
let router = express.Router()


router.post('/', (req , res) => {

    const userName = req.body.userName

    if(userName){

        res.send(`wellcome to this page $(userName)`)

    }else{

        res.sendStatus(400)
        
    }
    
})



module.exports = router
