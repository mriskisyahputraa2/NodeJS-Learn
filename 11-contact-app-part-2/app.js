const yargs = require("yargs"); // import module yargs
const contacts = require("./contacts"); // import module contacts

// mendeklarasi command add
yargs.command({
  command: "add", // nama command yang digunakan di terminal
  describe: "Menambahkan contact baru", // deskripsi singkat pada command

  // mendefinisikan argument yang diterima command add, berupa hasil object
  builder: {
    // argument nama
    nama: {
      describe: "Nama lengkap", // deskripsi argument nama
      demondOption: true, // wajib isi atau tidak, kalo wajib true, kalo tidak false
      type: "string", // type data argument
    },
    // argument email
    email: {
      describe: "Email",
      demondOption: false,
      type: "string",
    },
    // argument noHP
    noHP: {
      describe: "No HP",
      demondOption: true,
      type: "string",
    },
  },

  // handler function, fungsi yang dijalankan ketika command add dipanggil
  handler(argv) {
    // yang dijalankan yaitu argument nama, email dan noHP, yang disimpan dalam function simpanContact
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

// untuk menjalankan command line
yargs.parse();
