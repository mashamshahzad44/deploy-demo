const http = require('http');
http.createServer((req, res) => {
  res.end('Hello version 1');
}).listen(3000);
