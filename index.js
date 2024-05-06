//USING PLAIN JAVASCRIPT

// const http = require("node:http");
// const fs = require("fs");
// const path = require("path");

// const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") {
//     res.writeHead(200, { "Content-Type": "image/x-icon" });
//     console.log("fackin favicon innit");
//     res.end();
//     return;
//   }

//   let filePath = path.join(
//     __dirname,
//     "public",
//     req.url === "/"
//       ? "index.html"
//       : path.extname(req.url) === ""
//       ? req.url + ".html"
//       : req.url
//   );

//   let contentType = "text/html";
//   if (path.extname(filePath) === ".css") {
//     contentType = "text/css";
//   }

//   fs.readFile(filePath, (err, data) => {
//     if (err && err.code == "ENOENT") {
//       fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//     } else if (err) {
//       res.writeHead(500);
//       res.end(`Server error. Error code: ${err.code}`);
//     } else {
//       res.writeHead(200, { "Content-Type": contentType });
//       res.end(data);
//     }
//   });
// });

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//USING EXPRESS

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//SERVES ANY FILE IN PUBLIC FOLDER
app.use(express.static("public"));

//SERVING FILES USING GET METHOD AND URL PARAMS
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// );
// app.get("/:path", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", req.params.path));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
