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
        }
    ));
    }
    else if (req.url === '/dream' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('Dream: My Dream is to lead my self on my own route. And after finding my interest properly I want to become an expert in that field.');
    }
    else{
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

server.listen(port,() => {
    console.log(`The Server is running on http://localhost:${port}`)
})