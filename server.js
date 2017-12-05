
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if (filename == './')
    filename = './index.html';

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': {'.html': 'text/html'}});
      return res.end("404 Not Found");
    };
    res.writeHead(200, {'Content-Type':  {'.html': 'text/html', '.js': 'text/javascript', '.css':'text/css'}});
    res.write(data);
    return res.end();
  });
}).listen(5000);
