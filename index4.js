const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const arg =  (req, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello you I am Assetou\n');
};

const server = http.createServer(arg);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 