// Membuat sebuah routing yg sangat sederhana
const express = require("express");
const app = express();
const port = 3000;

// request menggunakan method get
app.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({
  //   nama: "Puteri",
  //   email: "husnulputeri@gmail.com",
  //   noHP: "088276557813",
  // });
  // sendFile ketika misal kita mau mengembalikan isi dari sebuah file, sendFile bisa digunakan untuk ambil isi dari file lain yg static contohnya isi file css, menampilkan file gambar/file pdf
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Ini Adalah halaman About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini Adalah halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

// // menangkap id
// app.get("/product/:id/category/:idCat", (req, res) => {
//   res.send(`Product ID :  ${req.params.id} <br> Category ID : ${req.params.idCat}`);
// });   //http://localhost:3000/product/20/category/10

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

// Menggunakan method use untuk menjalankan/memanggil sebuah middleware/function karna node js nanti semuanya bisa kita anggap sebagai middleware
app.use("/", (req, res) => {
  res.status(404);
  // respon status untuk memberi tahu bahwa halaman ini tidak ada, ceknya di inspect->Network
  res.send("Test <h1>404</h1>");
});
// Test ini akan muncul ketika http://localhost:3000/asd  (asd tidak ada di file) maksudnya Test ini akan selalu dijalankan untuk request apapun
// disarankan menggunakan use di baris paling bawah

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// // Web Server http://localhost:3000
// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// // Merapikan codingan
// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// // web server yg sederhana
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       // mengembalikan tipe konten dari text biasa ke text html
//       "Content-Type": "text/html",
//     });

//     const url = req.url;

//     switch (url) {
//       case "/about":
//         renderHTML("./about.html", res);
//         break;
//       case "/contact":
//         renderHTML("./contact.html", res);
//         break;
//       default:
//         renderHTML("./index.html", res);
//         break;
//     }

//     // if (url === "/about") {
//     //   renderHTML("./about.html", res);
//     // } else if (url === "/contact") {
//     //   renderHTML("./contact.html", res);
//     // } else {
//     //   // res.write('Hello World!');
//     //   renderHTML("./index.html", res);
//     // }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}..`);
//   });
