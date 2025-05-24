// server.js
const http = require("http");

const hostname = "localhost"; // listen on all interfaces
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from server running on port 8000!\n");
});

server.listen(port, hostname, () => {
  console.log(`Servers running at http://${hostname}:${port}/`);
});
