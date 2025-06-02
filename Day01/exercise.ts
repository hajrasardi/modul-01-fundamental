/*
Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/
//1. menyiapkan data yang akan di eksekusi
let panjang: number = 5;
let lebar: number = 3;

//2. memproses data
const luaspersegi: number = panjang * lebar;

//3. menampilkan output dari data yang telah dieksekusi
console.log(luaspersegi);

/*
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/
// 1. menyiapkan data yang akan di eksekusi
let p: number = 5;
let l: number = 3;

// 2. memproses data
const keliling: number = 2 * (p + l);
// 3. menampilkan output data yang dieksekusi
console.log(keliling);

/*
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
//1. menyiapkan data
let r: number = 5;
const PI: number = Math.PI;

//2. memproses data yang telah disiapkan
const diameter: number = 2 * r;
const luasLingkaran: number = PI * r * r;
const kelilingLingkaran: number = 2 * PI * r;
//3. menampilkan output
console.log(diameter);
console.log(kelilingLingkaran);
console.log(luasLingkaran);

/*
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/
// 1. menyiapkan data
let a: number = 80;
let b: number = 65;
// 2. memproses data sudut segitiga keseluruhan = 180
const sudut: number = 180 - (a + b);
// 3. menampilkan output
console.log(sudut);

/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/

// let totalDays: number = 400;

// let year: number = Math.floor(totalDays / 365);
// let month: number = p(totalDays % 365)/30;
// let day: number = totalDays % 365 / 30 ;
// console.log(`${year} year dan ${month} month ${day} day`);

// let num = 700;

// let year = parseInt(num/365);
// let month = parseInt((num%365)/30);
// let day = parseInt((num%365)%30);

// console.log(year);
// console.log(month);
// console.log(day);

/*
write a code to convert temperature from celcius to fahrenheit
celcius = 25
output = 77
*/
//1. menyiapkan data
let celcius: number = 25;
//2. memproses data
const fahrenheit: number = (9 / 5) * celcius + 32;
// output
console.log(fahrenheit);

/*
write a code to swap two number
a= 4
b= 7
*/
//1. menyiapkan data
let aa: number = 4;
let bb: number = 7;

//2. eksekusi data

let c: number = aa;
aa = bb;
bb = c;
// 3. hasil
console.log("aa:", aa);
console.log("bb:", bb);

/*

*/
const str = "programming";
const firstChar = str[0]; // Membangkitkan karakter pertama (P)
const lastChar = str[str.length - 1]; // Membangkitkan karakter terakhir (u)
console.log(firstChar, lastChar);

/*
write a code to calculate square and cube of the number
*/
//1.
let nomor: number = 4;
let pangkat2: number = 2;
let pangkat3: number = 3;

let hasill = Math.pow(nomor, pangkat2);
let hasilll = Math.pow(nomor, pangkat3);
console.log(hasill);
console.log(hasilll);

/*

*/
let tolalMinutes: number = 135;

let jam: number = Math.floor(tolalMinutes / 60);
let menit: number = tolalMinutes % 60;

console.log(`${jam} hours dan ${menit} minutes`);
