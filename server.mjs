import { createServer } from 'http';
var fs = require('fs');

createServer((req, res) => {
  fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(process.env.PORT);
