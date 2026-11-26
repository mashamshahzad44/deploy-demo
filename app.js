const http = require('http');
http.createServer((req, res) => {
  res.end('Hello version 3');
}).listen(3000);
