const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    res.end(`
        <h1>OOPS!</h1>
        <a href="/">Back Home</a>
        `)
    // res.write('Welcome to our home page')
    // res.end()
})

server.listen(5000)