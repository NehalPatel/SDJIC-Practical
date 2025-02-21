const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const queryString = parsedUrl.query; // Get raw query string
    const queryParams = queryString ? queryString.split('&') : []; // Split into key-value pairs

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Query Parameters:\n');
    queryParams.forEach(param => res.write(param + '\n'));
    // Print each param
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
