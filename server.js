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
    else if (req.url === '/hobby' && req.method === 'GET'){
        res.statusCode = 200;
        res.end(JSON.stringify({
            favorite_hobby: 'Listening Poems, Listening Songs, Watching Movies',
            fun_activity: 'Playing Pool'
        }));
    }
});

server.listen(port,() => {
    console.log(`The Server is running on http://localhost:${port}`)
})