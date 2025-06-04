// LOOPING STATEMENT : PEnulisan kode yang ditujukan untuk mengulang eksekusi suatu program hingga kondisi tertentu.

console.log("1. Edo");
console.log("2. Abdi");
console.log("3. Andre");

/**
 * WHILE LOOP : perulangan program yang akan selalu berjalan selama kondisi masih terpenuhi.
 * Aturan Penulisan :
 * while (condition){
 *      // code
 * }
 * note:
 * - condition yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 *
 */

let count: number = 1;

while (count <= 10) {
  console.log(count);
  count++; //count = count+1
}

let isBoolean: boolean = true;
while (isBoolean) {
  count++;

  if (count === 15) {
    console.log(count);
    isBoolean = false;
  }
}

while (true) {
  count++;
  if (count === 25) {
    console.log(count);
    break;
  }
}

/***
 * DO...WHILE
 * Aturan penulisan :
 * do{
 *      //
 * }while(condition);
 */

let counter: number = 1;
do {
  console.log(counter);
  counter++;
} while (counter <= 5);

/**
 * FOR LOOP : Digunakan ketika batas looping sudah ditentukan sejak awal.
 * for(counter_declaration; counter_condition; counter){
 *      // code
 * }
 *
 * -counter_declaration : variable yang mendeskripsikan nilai awal dari hitungan batas looping.
 * -counter_condition : kondisi untuk menentukan batas looping.
 * -counter : proses perhitungan increment atau decrement.
 */
for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

// kurang tepat karna log dilooping terus menerus saat proses berlangsungq
const limit1 = 2;
let cetak1: string = "";
for (let u: number = 0; u < limit1; u++) {
  if (u % 2 === 0) {
    cetak1 = "genap";
  } else {
    cetak1 = "ganjil";
  }
  console.log(`${u} : ${cetak1}`);
}

// LEbih baik karna log tidak di looping berulang
const limit = 2;
let cetak: string = "";
for (let i: number = 0; i < limit; i++) {
  if (i % 2 === 0) {
    cetak += `${i} : genap | `;
  } else {
    cetak += `${i} : ganjil | `;
  }
}
console.log(cetak);

const myArray = ["apel", "pisang", "jeruk", "mangga"];
let isi = 0;

do {
  console.log(myArray[isi]);
  isi++;
} while (isi < myArray.length);
// Kondisi perulangan: selama i kurang dari panjang array
