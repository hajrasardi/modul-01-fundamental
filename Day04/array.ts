// Array : merupakan type data yang mampu menampung berbagai macam tipe data lain.
/**
 * Ciri-ciri data Array :
 *      - dibungkus oleh kurung siku : [1, 2, 3].
 *      - Setiap data dalam Array memeiliki alamat index yang dimulai dari index ke 0.
 *
 * Tujuan penggunaan tipe data array : Mempermudah pengelolaan data.
 */

// Example
// if we don't know about array we must input the data one by one:
let siswa1: string = "Edo";
let siswa2: string = "Edi";
let siswa3: string = "Eda";

// Jika disimpan ke dalam bentuk array
const daftarSiswa: string[] = ["Edo", "Edi", "Eda"];
const daftarKelas: string[] = new Array("IPA", "IPS", "BAHASA");
// pastikan pake variable const, agar variable dikunci dan selalu dikunci kedalam array.

// cara mengakses suatu data dari array : sebutkan namaVariable[index_data_yang_dipilih];
console.log(daftarSiswa[1]);
console.log(daftarKelas);

// Array destructure : Mengakses data pada array dengan menandai tiap data menggunakan variable.
const data: any[] = [
  ["Abdi", 20, "Sidoarjo"],
  ["hajra", 21, "Pekanbaru"],
];
let [namaOrang, usia, asal] = data;

console.log(namaOrang);
console.log(usia);
console.log(asal);
console.log(data);
data[0][1] = 10;
console.log(data);
data.push(namaOrang);

// ingin memperbarui suatu data array :
// Reassign :
daftarSiswa[2] = "Andre";
console.log(daftarSiswa[2]);

// Fungsi bawaan array untuk mengelola data :
// 1. array.push : menambahkan data baru di akhir array.
daftarSiswa.push("Olga");
console.log(daftarSiswa);

// 2. array.pop : menghapus data terakhir
daftarSiswa.pop();
console.log(daftarSiswa);

// 3. array.unshift : gunanya untuk menambahkan data baru diawal array
daftarSiswa.unshift("Rafi");
console.log(daftarSiswa);

// 4. array.shift : menghapus data terdepan
daftarSiswa.shift();
console.log(daftarSiswa);

// 5. array.length : mengetahui banyaknya data didalam array
console.log(daftarSiswa.length);
daftarSiswa.push("Ridho");
console.log(daftarSiswa);
console.log(daftarSiswa.length);

// 6. array.splice(pilihanIndex, jumlahDataYangDihapus, newData?); : menghapus, memperbarui dan menyisipkan data baru pada index yang dipilih.
// menghapus data berdasarkan index :
daftarSiswa.splice(1, 1);
console.log(daftarSiswa);

// Menyisipkan data :
daftarSiswa.splice(1, 0, "Edi", "Dimas", "El");
console.log(daftarSiswa);
console.log(daftarSiswa.length);

// 7. Memperbarui data :
daftarSiswa.splice(2, 1, "Eki");

// exercise
// Soal : Cetak daftar nama siswa dengan nomor urut

// Deskripsi:
// Dari data array berikut :
const daftarSiswa1: string[] = ["Edo", "Edi", "Eda"];
let nomor: string = "";
for (let i = 0; i < daftarSiswa1.length; i++) {
  nomor += ` ${i + 1}. ${daftarSiswa1[i]}`;
}
console.log(nomor);

// Process
// 1. Menyiapkan penampung output dalam bentuk string
let output: string = "";
// 2. MEngakses data didlam array satu per satu
for (let index = 0; index < daftarSiswa1.length; index++) {
  const namaSiswa: string = daftarSiswa1[index]; // menampung nilai dari tiap isi array
  // 3. Memasukkan datanya kedalam variable output
  output = output + `${index + 1}. ${namaSiswa} \n`;
}
console.log(output);
