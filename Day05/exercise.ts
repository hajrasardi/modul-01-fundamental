// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// Siapkan data yang akan di proses
const myArray: number[] = [12, 5, 23, 18, 4, 45, 32];

function semua() {
  let nilaiTerkecil = Math.min(...myArray);
  let nilaiTerbesar = Math.max(...myArray);
  let sum: number = 0;
  let average: number = 0;
  let print: string = "";

  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  average = sum / myArray.length;
  print += `Array = [${myArray}] → Lowest : ${nilaiTerbesar} → Highest : ${nilaiTerkecil} → Average : ${average} `;
  return print;
}
console.log(semua());

// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
const array: string[] = ["Apple", "Banana", "Cherry", "Date"];
function kata() {
  const kalimat =
    array.slice(0, -1).join(", ") + " dan " + array[array.length - 1];

  return kalimat;
}
console.log(kata());

// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// Siapkan data yang akan di proses
// const urArray: number[] = [5, 3, 1, 7, 2, 6];
// let cari: number = 0;
// function pencari() {
//   for (let index = 0; index < urArray.length; index++) {
//     cari += Math.min(...urArray);
//   }let hasil = cari + urArray + 1;
// }
// console.log(pencari());

const urArray: number[] = [5, 3, 1, 7, 2, 6];

function urutan() {
  const urut = urArray.sort();
  return urut[1];
}
console.log(urutan());

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// siapkan data
const array1: number[] = [1, 2, 3];
const array2: number[] = [3, 2, 1];
const hasilPenjumlahan: number[] = [];

// function penjumlahanArray() {
//   const menjumlah0: number = array1[0] + array2[0];
//   const menjumlah1: number = array1[1] + array2[1];
//   const menjumlah2: number = array1[2] + array2[2];

//   const hasil = `[${menjumlah0} , ${menjumlah1} , ${menjumlah2}]`;
//   return hasil;
// }
// console.log(penjumlahanArray());
function calculateArray() {
  for (let i = 0; i < array1.length; i++) {
    // hasilPenjumlahan[i] = array1[i] + array2[i];
    hasilPenjumlahan.push(array1[i] + array2[i]);
  }
  return hasilPenjumlahan;
}
console.log(calculateArray());

// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// siapkan data
const arr: number[] = [1, 2, 3, 4];

function cekArray(newnumber: number) {
  if (!arr.includes(newnumber)) {
    arr.push(newnumber);
  }
  return arr;
}
console.log(cekArray(0));
