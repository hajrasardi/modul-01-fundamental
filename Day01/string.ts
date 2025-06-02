// Typescript = Javascript yang ditambahin aturan, ditujukan untuk mempermudah orang orang yang menggunakan middle level language.
// STRING : data yang berisi karakter huruf, angka atau symbol dan tidandai dengan symbol quotes.
let namaToko: string = "Toko OLGA";
namaToko = "TOKO DONAT";

// Template literal
let alamatToko: string = `Jl. Genteng Kali Surabaya`;

// Penggabungan data string
// Cara 1 : menggunakan penjumlahan +
let printInfo: string = namaToko + " " + alamatToko + " Telp. 082323232";
console.log(printInfo);

// Cara 2 : Template literal
printInfo = `${namaToko} ${alamatToko} Telp. 0823232323`;
console.log(printInfo);

// Fungsi bawaan tipe data string
// string.length : menghitung jumlah karakter / menghitung panjang data string
let message: string = "Hello";
console.log(message.length);

// string.tolowerCase() : merubah semua karakter menjadi semua ke huruf kecil
console.log(message.toLocaleLowerCase());

// string.toupperCase() : merubah semua karakter menjadi huruf besar
console.log(message.toUpperCase());

// string.include() : memastikan suatu karakter atau kata ada didalam string
console.log(message.includes("a"));
