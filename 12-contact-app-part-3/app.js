const yargs = require("yargs"); // import module yargs
const contacts = require("./contacts"); // import module contacts

// mendeklarasi command add
yargs
  .command({
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
  })
  // untuk menambahkan warning jika hanya melakukan command node app saja
  .demandCommand();

// menampilkan list nama dan noHP
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  // tidak menggunakan argument karena tidak menggunakan builder
  handler() {
    contacts.listContact();
  },
});

// menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demondOption: true,
      type: "string",
    },
  },
  // knp ada argument sedangkan command list tidak ada? karena disini kita menggunkan builder, sedangkan di list tidak menggunakan builder
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// untuk menjalankan command line
yargs.parse();
