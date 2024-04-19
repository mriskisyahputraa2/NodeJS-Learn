const fs = require("fs"); // core module
// console.log(fs);

// penulisan string ke file (synchronous)
// fs.writeFileSync("test.txt", "malam ini dimana?");
// fs.writeFileSync("test.html", "<h1>HAHAHAH</h1>");
// try {
//   fs.writeFileSync("data/test.txt", "nambahin folder doanggg");
// } catch (e) {
//   console.log(e);
// }

// penulisan string ke file (Asynchronous)
// 1. menentukan Asynchronous dulu disini menggunkana writeFile
// 2. menentukan nama file yang mau disimpan kemana disini disimpan ke folder data dengan nama file test.txt.
// 3. pesan yang mau dimasukkan.
// 4. menggunkan callback, disini callbacknya adalah (e).

fs.writeFile("data/test.txt", "Hello world, secara Asynchronous", (e) => {
  console.log(e);
});

// membaca isi file (synchronous)
// utf-8: menampilkan apa yang dibaca program diubah menjadi string karena default bawaan menggunkan readFileSync akan menampilkan ouput angka buffer
// const data = fs.readFileSync("catatan.txt", "utf-8");
// console.log(data);

// membaca isi file (Asynchronous)
// (e): adalah callback, untuk menampilkan error
// data: adalah isi dari text file catatan.txt yang awalnya adalah buffer dan sudah diubah menjadi string menggunakan 'utf-8'
// if: jika terjadi error
// fs.readFile("catatan.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda:", (nama) => {
  rl.question("Masukkan umur anda: ", (umur) => {
    // mendapatkan dan membuat object nama dan umur
    const contact = { nama, umur };

    // membaca isi file pada contact.json yang di encoding menjadi string menggunakan utf-8
    const file = fs.readFileSync("data/contact.json", "utf-8");

    // mengubah isi file yang tadinya JSON string menjadi object menggunakan parse
    const contacts = JSON.parse(file);

    // menambahkan objek contact yang baru dibuat ke dalam array contacts yang berasal dari parsing file JSON.
    contacts.push(contact);

    // menulis data contacts yang di perbaharui ke file json menjadi string representasi JSON
    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
    console.log("TerimaKasih sudah memasukkan data.");

    // untuk menutup jalannya program
    rl.close();
  });
});
