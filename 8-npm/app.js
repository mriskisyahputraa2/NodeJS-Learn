const validator = require("validator"); // mencari modules validator

console.log(validator.isEmail("riski@gmail.com"));
console.log(validator.isMobilePhone("523457475", "id-ID"));
