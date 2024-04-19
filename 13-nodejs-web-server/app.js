const http = require("http");
const fs = require("fs");
const port = 3000;

const rederHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      rederHTML("./about.html", res);
    } else if (url === "/contact") {
      rederHTML("./contact.html", res);
    } else {
      rederHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
