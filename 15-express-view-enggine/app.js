const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

// penggunaan route request
app.get("/product/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id} <br>
    Category ID: ${req.query.category} <br>
  `);
});

app.get("/books/:id", (req, res) => {
  res.send(`Book ID: ${req.params.id} <br> 
  Genre Book: ${req.query.genre} 
  `);
});

// route untuk url yang tidak terdaftar akan muncul 404
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(port + " listening on");
});

app.use("/", () => {});
