const http = require('http');
http.createServer((req, res) => {
  res.end('Hello version 4');
}).listen(3000);
