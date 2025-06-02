// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number

let isNumber: number = 13;

if (isNumber % 2 === 0) {
  console.log(`${isNumber} Adalah bilangan genap`);
} else {
  console.log(`${isNumber} Adalah bilangan ganjil`);
}

// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
let isPrime = true;

if (isNumber <= 1) {
  isPrime = false;
} else {
  for (let i = 0; i <= Math.sqrt(isNumber); i++) {
    if (isNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(`${isNumber} Adalah bilangan Prima`);
} else {
  console.log(`${isNumber} Bukan bilangan Prima`);
}

// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6
let angka1: number = 4;
let suma = 0;
for (let i = 0; i <= angka1; i++) {
  suma += i;
}
console.log(suma);

// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

let isFactorial: number = 6;
let x = 1;
for (let i = 1; i <= isFactorial; i++) {
  x *= i;
}
console.log(x);

// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

let n = 5;
let angkaAwal = 0,
  angkaKedua = 1,
  next: number;

for (let i = 2; i <= n; i++) {
  next = angkaAwal + angkaKedua;
  angkaAwal = angkaKedua;
  angkaKedua = next;
}

console.log(`F(${n}) = ${angkaKedua}`);
