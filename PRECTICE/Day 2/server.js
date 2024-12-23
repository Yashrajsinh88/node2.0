const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {

  const log = `Request Recived : ${Date.now()} : ${req.url} \n`;

   fs. appendFile("log.txt" , log , (err , data) =>{
    res.end(`your server is live`);
   })
});

myServer.listen(8000, () => {
    console.log("server started");
})