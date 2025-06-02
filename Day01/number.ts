// Number : data yang berkaitan dengan angka
let jarak: number = 1500; // Nilai Integer/INT angka bulat
let berat: number = 90.25; // Nilai FLOAT angka desimal

// Aritmethic : +, -, /, *, %

// Algorithm kode perhitungan penjumlahan
// 1. menyiapkan data yang harus dijumlahkan
let angka1: number = 50;
let angka2: number = 87;
// 2. memproses penjumlahan dari data yang diberikan
const result: number = angka1 + angka2;
// 3. menampilkan hasil akhir penjumlahan di terminal
console.log(result);

// Fungsi Math Object
const PiMath: number = Math.PI;
console.log(PiMath);

// Pembulatan nilai
console.log(Math.round(25.6));
console.log(Math.round(25.2));
console.log(Math.ceil(25.4));
console.log(Math.floor(25.9));

console.log(Math.pow(4, 2));
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));

//  MIN and MAX
console.log(Math.min(1, 2, 4, 6, 88));
console.log(Math.max(1, 4, 6, 7, 88));
// Random
console.log(Math.random());

// Parsing data
let price: number = 25000;
console.log(
  price.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  })
);
