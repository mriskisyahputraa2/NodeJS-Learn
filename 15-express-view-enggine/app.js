const express = require("express");
const app = express();
const port = 3000;

// menggunakan view engine ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Muhammad Rizki Syahputra",
      email: "riskideveloper2@gmail.com",
    },
    {
      nama: "Muhammad Fazil",
      email: "fazildeveloper2@gmail.com",
    },
    {
      nama: "Ahmad Dhani",
      email: "ahmad@gmail.com",
    },
  ];
  res.render("index", {
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", {
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  // res.sendFile("./contact.html", { root: __dirname });
  res.render("contact", {
    title: "Halaman Contact",
  });
});

// penggunaan route request
app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(`Product ID: ${req.params.id} <br>
    Category ID: ${req.params.idCat} <br>
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
