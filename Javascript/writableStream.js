const fs=require("fs")
const http= require("http")
const server=http.createServer()
server.listen(3000,"127.0.0.1",()=>{
  console.log("port is connected")
})

server.on("request",(req,res)=>{
  const rstream= fs.createReadStream("streamfile.txt")
  rstream.pipe(res)
})

server.on("request",(req,res)=>{
  const rstream= fs.createWriteStream("streamfile.txt")
  rstream.write("hello from writable stream")
})

// Node.js program to demonstrate the
// fs.createWriteStream() method

// let writer = fs.createWriteStream('test.txt', {
// 		flags: 'w'
// 	});
// writer.write("dfdkjhjkdhkjhllhljh")
// // Use fs.createReadStream() method
// // to read the file
// let reader = fs.createReadStream('test.txt')
// 		.pipe(writer);
