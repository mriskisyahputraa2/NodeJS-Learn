const fs = require("fs"); // membuat modul untuk manipulasi fileSystem

// membuat folder data jika tidak ada
const dirPath = "./data";
// cek jika folder data tidak ada maka,
if (!fs.existsSync(dirPath)) {
  // buatkan folder data nya menggunkan mkdir
  fs.mkdirSync(dirPath);
}

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

  // membaca isi file pada contact.json yang di encoding menjadi string menggunakan utf-8 untuk memastikan format JSON.
  const file = fs.readFileSync("data/contact.json", "utf-8");

  // mengubah isi file yang tadinya JSON string menjadi object menggunakan parse
  const contacts = JSON.parse(file);

  // cek duplikat data
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log("Contact sudah terdaftar, gunakan nama lain!");
    return false;
  }

  // menambahkan objek contact yang baru dibuat ke dalam array contacts yang berasal dari parsing file JSON.
  contacts.push(contact);

  // menulis data contacts yang di perbarui ke file json menjadi string representasi JSON
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log("TerimaKasih sudah memasukkan data.");
};

module.exports = { simpanContact };
