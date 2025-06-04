// tentukan bilangan itu ganjil atau GeolocationPosition.
// we have number to check = 255.
// we must find the formula to check the number is even or odd.
// let see

// 1. tentukan data yang akan di check
let numberToCheck: number = 999;

// 2. tentukan formula yang akan kita eksekusi pada if else dan 3. tampilkan output
if (numberToCheck % 2 === 0) {
  console.log("Angka yang anda masukkan adalah genap");
} else {
  console.log("Angka yang anda masukkan adalah ganjil");
}

let nilai: number = 69;

if (nilai >= 90) {
  console.log("Kamu Mendapatkan nilai A");
} else if (nilai >= 80) {
  console.log("kamu mendapatkan nilai B");
} else if (nilai >= 70) {
  console.log("Kamu mendapatkan nilai C");
} else if (nilai >= 50) {
  console.log("Kamu mendapatkan nilai D");
} else {
  console.log("Kamu mendapatkan nilai E");
}

let i: number = 0;

while (i < 11) {
  console.log("*");
  i++;
}

const numberOfFactorial = 10;
let result = 1;
for (let i = 1; i < 5; i++) {
  console.log(result * i);
}

const N: number = 6;

if (N < 1) {
  throw new Error("N must be a positive integer greater than or equal to 1");
}

let sum: number = 1;
for (let i = 1; i <= N; i++) {
  sum *= i;
}

console.log(`The sum from 1 to ${N} is ${sum}`);

<script>
  const angka = prompt("Masukkan Angka");
  let angka2 = parseInt(angka);
  if (angka2 < 365) {
    console.log();
    
  }
  const year = parseInt(angka / 365);
  const month = parseInt((angka % 365) / 30);
  const day = parseInt((angka % 365) % 30);
  alert(`${angka} = ${year} year ${month} month ${day} day`);
</script>

