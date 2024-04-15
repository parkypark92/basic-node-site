const http = require("node:http");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./public/index.html", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
