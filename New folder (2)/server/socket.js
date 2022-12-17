const express = require("express")
const app = express()
app.use(require("cors")())
const http = require("http").Server(app)
const path = require("path")
const io = require("socket.io")(http)

app.use(express.static(path.join(__dirname,"../Clint")))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get("/",(req,res)=>{
  res.render("index")
})


io.on("connection",socket=>{
    console.log(socket)
})
http.listen(3000,()=>{
    console.log("server connected......")

})