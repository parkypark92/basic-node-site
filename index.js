const http = require("node:http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    console.log("fackin favicon innit");
    res.end();
    return;
  }

  let filePath = path.join(
    __dirname,
    "public",
    req.url == "/" ? "index" : req.url
  );
  if (path.extname(req.url) === "") {
    filePath += ".html";
  }

  let contentType = "text/html";
  if (path.extname(filePath) === ".css") {
    contentType = "text/css";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    console.log("request made");
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
