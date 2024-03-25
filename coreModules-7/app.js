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
const data = fs.readFileSync("catatan.txt", "utf-8");
console.log(data);
