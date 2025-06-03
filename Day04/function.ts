// Function :
/**
 * Definisi : Merupakan sekumpulan program yang disatukan untuk mengerjakan proses khusus yang biasanya bersifat re-usable.
 * Kategori : Built-in function dan user-defined function
 * Aturan penulisan :
 *  - Penamaan function mengikuti aturan nama variable
 *  - Bisa menerima parameter atau argumen : Penampung dari function untuk menerima nilai dari luar function
 *  - Function biasanya menghasilkan nilai output melalui keyword return didlamnya
 *  - Opsi Penulisan : bisa menggunakan Declarative func, Function Expression atau Arrow Function
 */

// Contoh tanpa function :
// Input : memerlukan 2 variable yang menampung data untuk dijumlahkan
let angkaSatu: number = 10;
let angkaDua: number = 13;
// Proses : memproses penjumlahan kedua variable
const hasil: number = angkaSatu + angkaDua;
// Output : menampilkan hasil penjumlahan
console.log(hasil);

// Kita akan merubahnya menjadi function dengan metode declarative function
/**
 * Declarative func :
 * function namaFunc(para1, para2, ....){
 *          //code
 * }
 */

function penjumlahan() {
  let angkaSatu: number = 2;
  let angkaDua: number = 5;

  const hasil: number = angkaSatu + angkaDua;

  return hasil; //mengeluarkan nilai
}

let printPenjumlahan = penjumlahan();
console.log(printPenjumlahan);

console.log(penjumlahan());
// mengaktifkan function

// Function with parameter to reusable
function pengurangan(angkaSatu: number, angkaDua: number) {
  const hasil: number = angkaSatu - angkaDua;
  return hasil;
}
// panggil function
console.log(pengurangan(10, 20));
console.log(pengurangan(28, 8));
console.log(pengurangan(88, 8));
