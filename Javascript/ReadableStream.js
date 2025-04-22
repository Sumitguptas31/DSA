const fs=require("fs")
const http= require("http")
const server=http.createServer()


//first way to read file in node js
// server.on("request",(req,res)=>{
//    fs.readFile("streams.txt",(err,data)=>{
//     if(err) return console.error(err)
//     res.end(data.toString());
//    })
// })

server.listen(3000,"127.0.0.1",()=>{
  console.log("port is connected")
})
//  **********************************************************************************
//readable streams:

server.on("request",(req,res)=>{
  const rstream=fs.createReadStream("test.txt")
  rstream.on("data",(chunkdata)=>{
    res.write(chunkdata)
  })
  rstream.on("end",()=>{
    res.end();
  })
  rstream.on("error",(err)=>{
    console.log(err)
    res.end("file not found")
  })
})

//****************************************************************************** */
//efficient way to write readable Streams (Streams pipes)

server.on("request",(req,res)=>{
  const rstream= fs.createReadStream("test.txt")
  rstream.pipe(res)
})

