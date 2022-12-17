const express = require('express')

const app = express()



app.get('/',(req,res)=>{
    res.send('you are in the right page')
})



app.listen(4000,()=> console.log('server is working on port 4000' ))