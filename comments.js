// Create web server
// Create a web server that listens on port 3000 and serves the following HTML page. The page contains a form with a single textarea input and a submit button. When the form is submitted, the server should respond with the value of the textarea. For example, if the user types hello into the textarea and submits the form, the server should send back the response hello.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('comments.html').pipe(res);
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(body);
        });
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});