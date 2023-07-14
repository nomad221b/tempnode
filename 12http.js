const http = require('http')
const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our homepage boy')
    }
    else if(req.url === '/about'){
        res.end('A seeker, poet,inquisitor')
    }
    else 
    {res.end(`
    <h1> Oops!<h1>
     <p> We cant find the requested page</p>
     <a href = "/" > Back home <a>
     `)
}
})
server.listen(3000)