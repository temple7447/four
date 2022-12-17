const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'})
const handlebars = require('express-handlebars').engine

app.set('view engine', 'handlebars')
app.engine('handlebars',handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname:'handlebars'
}))

app.use(express.static('./public' ))

app.get('/',(req,res)=>{
    res.render('main', {layout:'index'})
})


const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`your server is working and is running on port ${PORT}`)
})







