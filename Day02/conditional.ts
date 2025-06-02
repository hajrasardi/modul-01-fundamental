// CONDITIONAL STATEMENT

/**
 * -IF STATEMENT : untuk memeriksa satu buah kondisi
 * -IF...ELSE STATEMENT : untuk memeriksa dua kondisi
 * -IF...ELSE IF...ELSE : untuk memeriksa tiga kondisi atau lebih.
 * -SWITCH CASE STATEMENT : untuk memeriksa data dalam pencocokan nilai
 */

// contoh data
let nama: string = "Edo";
let usia: number = 20;

// IF STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *      code yang ingin dijalankan
 * }
 *
 * note:
 * - condition yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 * - Code : baris program yang ingin dijalankan jika condition didlam if terpenuhi atau bernilai TRUE
 *
 */

// example : memvalidasi batas usia
if (usia > 16) {
  console.log(`${nama} sudah dewasa`);
}

// IF...ELSE
/**
 * Aturan Penulisan :
 * if(condition){
 *      code yang ingin dijalankan
 * }else {
 *      code yang akan dijalankan jika nilai yang diinginkan tidak terpenuhi
 * }
 *
 * note:
 * - condition yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 * - Code : baris program yang ingin dijalankan jika condition didlam if terpenuhi atau bernilai TRUE
 *
 */
usia = 10;
if (usia > 16) {
  const print: string = `${nama} Sudah Dewasa`;
  console.log(print);
} else {
  const print: string = `${nama} Belum Dewasa`;
  console.log(print);
}

// TRUTHLY OR FALSY
let isNgantuk: boolean = false;
if (isNgantuk) {
  console.log("Beli Kopi");
} else {
  console.log("Beli Cendol");
}

// IF...ELSE IF...ELSE
/**
 * Aturan Penulisan :
 * if(condition){
 *      code yang ingin dijalankan
 * }else if (condition) {
 *      code yang akan dijalankan jika nilai yang diinginkan tidak terpenuhi
 * }else {
 *      code
 * }
 *
 * note:
 * - condition yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 * - Code : baris program yang ingin dijalankan jika condition didlam if terpenuhi atau bernilai TRUE
 *
 */

// example : klasifikasi nilai ujian
// input
// const examGrade: number = 101;
// let result: string;

// // proses
// if (examGrade >= 90 && examGrade <= 100) {
//   result = "Grade A";
// } else if (examGrade >= 80 && examGrade < 90) {
//   result = "Grade B";
// } else if (examGrade >= 70 && examGrade < 80) {
//   result = "Grade C";
// } else {
//   result = "Grade F";
// }

// output
console.log(result);

// Switch...Case
/**
 * aturan penulisan
 * switch(data){
 *      case value:
 *          //code
 * }
 */

// const job: string = "Driver";
// switch (job) {
//   case "Coder":
//     console.log("Membuat Aplikasi");
//     break;
//   case "Driver":
//     console.log("Mengemudi Kendaraan");
//     break;
//   default:
//     console.log("Tidak Tahu");
// }
