// ada 3 cara memanggil node modules
// const fs = require("fs"); // core module
// const nama = require("./coba"); // local module. default nya.
// const moment = require("moment"); // third party module / npm module / node modules

const coba = require("./coba");

console.log(coba.nama("rizki"), coba.mahasiswa);
