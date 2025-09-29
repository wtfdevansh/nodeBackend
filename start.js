let express = require('express')
let app = express()

app.use('/yatri', require('./yatri.js'));


// app.use('/student', (req, res) => {
//   res.redirect(`/yatri/student${req.path}`);
// });

// app.use('/professor', (req, res) => {
//   res.redirect(`/yatri/professor${req.path}`);
// });

// app.use('/employee', (req, res) => {
//   res.redirect(`/yatri/employee${req.path}`);
// });


  app.listen(3001, ()=>{
    console.log("server started")
})