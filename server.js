const http = require('http');

let server;

function start() {
  server = http.createServer((req, res) => {
    res.writeHead(200, {
      'x-my-ajax-Header': 'x-my-ajax-test-res-header-value',
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Request-Method': '*',
    });
    res.end('Hello world');
  });

  server.listen(8080);
  console.log('Server running at http://127.0.0.1:8888/');
}

function shutdown() {
  console.log('Closing server at http://127.0.0.1:8888/');
  server && server.close();
}

module.exports = {
  start,
  shutdown
};
