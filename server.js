const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
    
});

server.listen(port,() => {
    console.log(`The Server is running on http://localhost:${port}`)
})