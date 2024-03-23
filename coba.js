const nama = (name) => {
  console.log(`nama adalah: ${name}`);
};

// ex: exports object
const mahasiswa = {
  name: "Muhammad Rizki Syahaputra",
  umur: 18,
  cetakMhs() {
    // penulisan function yang terbaru
    return `halo nama saya ${this.name} umur saya ${this.umur} tahun`;
  },
};

// export ke file index
module.exports.nama = nama;
module.exports.mahasiswa = mahasiswa;
