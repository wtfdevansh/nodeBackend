let express = require('express')
let router = express.Router()


router.get('/:username', (req , res) => {

    const name = req.params.username

    if(name == 'daniel'){

        res.send("we got you daniel")

    }else{
        res.sendStatus(400)
    }
   
})


module.exports = router