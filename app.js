const http = require('http');
const taskRoutes = require('./routes/taskRoutes').default;
const HOSTNAME ='Localhost'
const port=9000

const server = http.createServer((req , res )=>{
    if (req.url.startsWith('/tasks')) {
        taskRoutes(req,res)
        
    }else{
        res.writeHead(404,'not found',{'content-type':'application/json'})
        res.end(JSON.stringify({
            message: 'sorry ,you got lost'
        }))
    }
})

server.listen(port,HOSTNAME,()=>{
    console.console.log('server running on port ${port}');
    
})

console.log("welcom to code")