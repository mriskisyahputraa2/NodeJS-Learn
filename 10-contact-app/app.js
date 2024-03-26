const fs = require("fs");

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