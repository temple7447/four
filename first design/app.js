const http = require('http');
const fs = require('fs');
const server = http.createServer( (req,res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.write("hello world");
    fs.readFile('index.html', (error, data)=>{
        if(error){
            res.writeHead(404);
            res.write("errors");
        }else
        {
            res.write(data);
        }
    })
    res.end();
    
});
const post =4320;

server.listen(post,()=>{
    console.log(`the server is running ${post}`);
});