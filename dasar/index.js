// ada 3 cara memanggil node modules
// const fs = require("fs"); // core module
// const nama = require("./coba"); // local module. default nya.
// const moment = require("moment"); // third party module / npm module / node modules

const coba = require("./coba");

console.log(coba.nama("rizki"), coba.mahasiswa);
console.log(`hasil penambahan ${coba.a} + ${coba.b} ${coba.hasil}`);

/*

    # Modul inti (core module) dalam Node.js adalah blok bangunan bawaan yang menyediakan fungsionalitas penting untuk pengembangan aplikasi Node.js. Modul-modul ini membantu Anda melakukan tugas-tugas umum dengan lebih mudah dan menghemat waktu dan tenaga
    
    1. fs (File System): Berinteraksi dengan sistem file komputer Anda. Anda dapat membuat, membaca, memperbarui, menghapus, dan memanipulasi file dan direktori. Penggunaan umum dari modul ini termasuk membaca file konfigurasi, menulis log, dan menyajikan konten statis dari server web.
    
    2. http (HTTP Communication): Membangun server web dan membuat permintaan HTTP. Modul ini memungkinkan Anda membuat server untuk merespons permintaan klien, menangani data yang masuk, dan mengirim tanggapan. Modul ini sangat penting untuk membangun aplikasi web dan API.
    
    3.events (Pengelolaan Event): Mengelola operasi asynchronous. Node.js menggunakan event-driven architecture, di mana eksekusi kode dapat dipicu oleh event (seperti interaksi pengguna atau respons jaringan). Modul events memungkinkan Anda untuk membuat emiter event, mendengarkan event, dan menanganinya sesuai keinginan.
    
    4. path (Manipulasi Path): Bekerja dengan path file dan direktori dengan cara yang kompatibel dengan lintas platform. Modul ini membantu Anda membangun path, mengubah path relatif menjadi path absolut, dan mengekstrak komponen seperti nama file dan ekstensi.


*/
