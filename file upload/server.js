const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const morgan = require('morgan')

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('')
})


// multer middleware
const filestorageengine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./file")
    },
    filename:(req,file,cb)=>{
        cb(null , Date.now, + "--" + file.originalname)
    }
  })
  
  const upload = multer({storage:filestorageengine})

  app.post('/submit',upload.single('image'),(req,res,next)=>{
      console.log(req.file)
      res.send('ok')
  })

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`you are connected to port ${PORT}`)
})