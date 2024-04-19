const fs = require("fs"); // membuat modul untuk manipulasi fileSystem
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data jika tidak ada
const dirPath = "./data";
// cek jika folder data tidak ada maka,
if (!fs.existsSync(dirPath)) {
  // buatkan folder data nya menggunkan mkdir
  fs.mkdirSync(dirPath);
}

// function isi dari data json
const loadContact = () => {
  // membaca isi file pada contact.json yang di encoding menjadi string menggunakan utf-8 untuk memastikan format JSON.
  const file = fs.readFileSync("data/contact.json", "utf-8");

  // mengubah isi file yang tadinya JSON string menjadi object menggunakan parse
  const contacts = JSON.parse(file);
  return contacts;
};

// membuat file contact.json jika belum ada
const dataPath = "./data/contact.json";
// cek jika file contact.json tida ada
if (!fs.existsSync(dataPath)) {
  // maka buatkan file nya dengan array dan jadikan sebuah string
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// membuat function simpanContat dengan params nama, email dan noHP. kemudian menyimpan data tsb ke file contact.json
const simpanContact = (nama, email, noHP) => {
  // membuat datanya menjadi object ketika dimasukkan ke dalam json
  const contact = { nama, email, noHP };

  // mengambil data json
  const contacts = loadContact();

  // validasi data nama
  // mengecek apakah nama yang diinputkan sudah ada di database.
  const duplikat = contacts.find((contact) => contact.nama === nama);

  // cek jika nama yang di inputkan sudah ada di database maka
  if (duplikat) {
    // tampilkan pesan error berikut
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    // kembalikan false
    return false;
  }

  // cek format email apakah benar atau tidak
  // jika argument email diinputkan maka cek validasi email
  if (email) {
    // jika validasi email tidak sesuai dengan format email maka
    if (!validator.isEmail(email)) {
      // tampilkan pesan error berikut
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
    }
  }

  // cek no HP yang dimasukkan tidak sesuai dengan noHP indonesia
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    // tampilkan pesan error berikut
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
  }

  // menambahkan objek contact yang baru dibuat ke dalam array contacts yang berasal dari parsing file JSON.
  contacts.push(contact);

  // menulis data contacts yang di perbarui ke file json menjadi string representasi JSON
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log(chalk.green.inverse("TerimaKasih sudah memasukkan data."));
};

// function untuk menampilkan listContact
const listContact = () => {
  // mengambil data json
  const contacts = loadContact();

  console.log(chalk.cyan.inverse("Daftar Kontak: ."));

  // melukakan looping data dalam json
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. Nama: ${contact.nama} - NoHP: ${contact.noHP}`);
  });
};

// function detailContact
const detailContact = (nama) => {
  // mengambil data json
  const contacts = loadContact();

  // mencari data json nama, sesuai dengan nama dalam json
  const contact = contacts.find(
    // cari nama yang diinputkan sesuai dengan nama dalam json dan diubah menjadi huruf kecil menggunakan toLowerCase
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  // jika contact nya tidak ada maka
  if (!contact) {
    // tampilkan pesan error tersebut
    console.log(chalk.red.inverse.bold(` ${nama} tidak ditemukan!`));
    // berhentikan program
    return false;
  }

  // menit 15.45
};

module.exports = { simpanContact, listContact, detailContact };
