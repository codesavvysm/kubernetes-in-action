const http = require('http');
const os = require('os');

console.log("Version 2 -Kubia server starting...");

var handler = function(request, response) {
  console.log("Version 2 - Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Response from v2 - You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

