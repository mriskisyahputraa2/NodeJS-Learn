const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demondOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demondOption: false,
      type: "string",
    },
    noHP: {
      describe: "No HP",
      demondOption: true,
      type: "string",
    },
  },
  handler(argv) {
    simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();
