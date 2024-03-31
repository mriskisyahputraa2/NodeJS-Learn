const yargs = require("yargs");

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
    noHp: {
      describe: "No HP",
      demondOption: true,
      type: "string",
    },
  },
});
