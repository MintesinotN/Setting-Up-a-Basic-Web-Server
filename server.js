const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
    if (req.url === '/' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('InterTecHub');
    }
    else if (req.url === '/name' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('FullName: Mintesniot Bekele Negash');
    }
});

server.listen(port,() => {
    console.log(`The Server is running on http://localhost:${port}`)
})