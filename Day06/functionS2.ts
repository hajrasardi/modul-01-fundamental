// Callback function adalah : - Sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter
//                            - sebuah fungsi yang langsung dibuat didalam parameter fungsi lain

/**
 * aturan penulisan :
 * function mainFunction(callbackFn){
 *      callbackFn();
 * }
 *
 *  * - callbackFn : parameter yang harus diisi dengan fungsi
 */

// mainFunction declaration adalah fungsi yang menampilkan perhitungan
function printCalculation(callbackFn) {
  let angkaA: number = 10;
  let angkaB: number = 30;
  // menjalankan fungsi dari parameter callbackFn dan ditampung outputnya kedalam variable result
  const result = callbackFn(angkaA, angkaB);

  return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(
  printCalculation(function (angkaA: number, angkaB: number) {
    return angkaA + angkaB;
  })
);

console.log(
  printCalculation(function () {
    let angkaA: number = 10;
    let angkaB: number = 30;

    return angkaA - angkaB;
  })
);

// ARROW FUNCTION
console.log(
  printCalculation((angkaA: number, angkaB: number) => /**ARROW FUNCTION */ {
    // let angkaA: number = 10;
    // let angkaB: number = 30;

    return angkaA - angkaB;
  })
);

// function pembagian() {
//   let angkaA: number = 10;
//   let angkaB: number = 30;

//   return angkaA / angkaB;
// }

// console.log(printCalculation(pembagian));

// Araay function : foreach, map, filter

// Foreach
// array.forEach(callbackFn) : sebagai pilihan selain for loop untuk mengakses isi dari tiap data array
const students: string[] = ["abdi", "adi", "edo"];

// for loop
for (let index = 0; index < students.length; index++) {
  const value = students[index];
  const hasil = `${index + 1}. ${value} /n`;
}

students.forEach((value, index) => {
  console.log(`${index + 1}, ${value}`);
});

// duplikasi cara kerja foreach

function duplicateForeach(arrayData: any[], callbackFn) {
  for (let index = 0; index < arrayData.length; index++) {
    const value = arrayData[index];
    callbackFn(value, index);
  }
}

duplicateForeach(students, (value: any, index: number) => {
  console.log(`${index + 1}. ${value}`);
});

// array.map(callbackFn) : ditujukan untuk merubah seluruh data array menjadi data array yang baru
// [1, 2, 3] -> [2, 4, 6] //dikalikan 2
// ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya "Edo", "Nama saya Aldo"]
// ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. "Edo", "3. Aldo"]
// [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
// [1, 2, 3] -> ["1", "2", "3"]
// [1000, 2000, 3000] -> ["Rp. 1000", "Rp. 2000", "Rp. 3000"]

// contoh dikali 2 dan ditambung kedalam variable baru / array baru
const dataArray: any[] = [1, 2, 3, 4, 5];

const newArray: any[] = dataArray.map((value, index) => {
  return value * 2;
});
console.log(newArray);

const uang: number[] = [2000, 3000, 5000, 10000];

const newUang = uang.map((value, index) => {
  return value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
});
console.log(newUang);

// Exercise Duplicate map
function duplicateMap(arrayData: any[], callbackFn) {
  const arr: any[] = [];
  for (let index = 0; index < arrayData.length; index++) {
    const value = arrayData[index];
    console.log(callbackFn(value, index));

    arr.push(callbackFn(value, index));
  }

  return arr;
}

const numberToCurrency = duplicateMap(uang, function (value) {
  return value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
});
console.log(numberToCurrency);

// array.filter(callbackFn) : untuk menghasilkan array baru sesuai acuan filter yang diberikan
// [1, 2, 3, 7, 20, 12] -> [2, 20, 12] //filter genap

const angka: number[] = [1, 2, 3, 7, 20, 12];

const angkaGenap: number[] = angka.filter((value, index) => {
  return value % 2 === 0;
});
console.log(angkaGenap);

const angkaGanjil: number[] = angka.filter((value, index) => {
  return value % 2 !== 0;
});
console.log(angkaGanjil);
