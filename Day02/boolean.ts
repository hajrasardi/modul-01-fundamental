// Boolean: Data yang bernilai benar diwakili oleh true atau salah diwakili oleh false.
let isActive: boolean = true;
let isDelete: boolean = false;

// Menghasilkan nilai boolean :
// 1. Berdasarkan tipe data lain
// TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(12));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// 2. Comparison Operator : >, <, >=, <=, ==, ===, !=
let valueA: number = 12;
let valueB: number = 15;

console.log(valueA < valueB);
console.log(valueA > valueB);
console.log(valueB >= 12);
console.log(valueB != 15);
// console.log(valueB == "15");

// 3. Logical operator : AND (&&), OR(||), NOT (!)
//  AND : akan menghasilkan nilai true jika antar nilai juga bernilai true
console.log(Boolean("ABC") && Boolean(2));
console.log(Boolean(valueA < 12 && valueB === 15));
console.log(Boolean(valueA === 10 && valueB === 1));

//  OR : akan menghasilkan nilai TRUE jika salah satu atau keduanya bernilai TRUE, dan FALSE jika keduanya FALSE
console.log(Boolean("ABC") || Boolean(2));
console.log(Boolean(valueA < 12 || valueB === 15));
console.log(Boolean(valueA === 10 || valueB === 1));

//  NOT : untuk membalikkan nilai
console.log(!Boolean(valueA));
console.log(Boolean(!(valueA < 12) && valueB === 15));
