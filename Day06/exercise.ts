// Write a function from a given array of mixed data types and return the sum of all the number
// // a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// // siapkan variable data
const mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2];

function hanyaAngka() {
  let jumlah: number = 0;

  for (let index = 0; index < mixedArray.length; index++) {
    if (typeof mixedArray[index] === "number") {
      jumlah += parseInt(mixedArray[index]);
    }
  }
  return jumlah;
}
console.log(hanyaAngka());

// cara 2

let jumlah: number = 0;
const arrayData = mixedArray.filter((item) => typeof item === "number");
console.log(arrayData);

let hasil: number = 0;
for (let index = 0; index < arrayData.length; index++) {
  hasil += arrayData[index];
}
console.log(hasil);

// const hasil += arrayData

// const angkaHanya2 = mixedArray.filter((item) => typeof item === "number");

// console.log(angkaHanya2);

// // ingin mengambil tipe number array saja :
// const hanyaAngka: any[] = mixedArray.filter(function(item) => typeof === 'number') {
// return value = .filter((item => typeof === 'number'));
// });
// console.log(hanyaAngka);

// const data2 = ["a1", 2, "3", 4.5, "b2"];
// const angkaHanya2 = data2.filter(
//   (item) =>
//     typeof item === "number" ||
//     (typeof item === "string" && !isNaN(parseFloat(item)))
// );
// console.log(angkaHanya2);

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

// siapkan data
const iniArray: any[] = [5, 10, 24, 3, 6, 7, 8];

function arrayTerbatas(arrayData: any[], max: number) {
  return arrayData.slice(0, max);
}
console.log(arrayTerbatas(iniArray, 5));

// Write a function that will combine 2 given array into one array
// b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// siapkan data
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
let hasilGabung: any[] = [];
function penggabunganArray(arr1: number[], arr2: number[]) {
  hasilGabung = arr1.concat(arr2); //fungsi untuk gabungkan array
  return hasilGabung;
}
console.log(penggabunganArray(arr1, arr2));

// Write a function to find duplicate values in an array
// b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

let arrayNih: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// siapkan array penampung data duplikat

function removeDuplicate(arrayNih) {
  let arrDuplikat: number[] = [];
  arrayNih.forEach((element) => {
    if (!arrDuplikat.includes(element)) {
      arrDuplikat.push(element);
    }
  });
  return arrDuplikat;
}
console.log(removeDuplicate(arrayNih));

// Write a function to find the difference in 2 given array
// b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// siapkan data
let arrr1: number[] = [];
