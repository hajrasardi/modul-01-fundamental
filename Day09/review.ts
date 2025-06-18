/**
 * Kisi-kisi exam modul 01 :
 * Introduction programming
 * Data type (Primitive, non-primitive)
 * var, let, const
 * Introduction TS
 * Looping statement
 * Interface and Object declaration
 * function hoisting
 * Encapsulation
 * Data structure
 * Big O Notation
 */

// --------------variable : penampung data--------------------

/**
 *  Rumus penulisan variable ==> keywordVariable namaVariable = value;
 * keywordVariable : var, let, const
 * namaVariable : - tidak boleh diawali dengan angka
 *                - Boleh daiawali simbol _ atau $
 *                - jika terdiri lebih dari 1 suku kata harus digabung dengan metode camelCase
 */

//----------Karakter keyword variable------------
// ++++++++++++Keyword var : redeclare & reassign, global variable/function scoped
//redeclare :
var nama: string = "Abdi";
var nama: string = "Hajra";

//reassign
nama = "Aldo";

// ++++++++++++keyword let : non-redeclare, reassign, block-scope variable
//non-redeclare:
let umur: number = 20;
// let umur: number = 20;

//reassign
umur = 40;

//contoh block-scope variable
function introduce() {
  let usia: number = 15;
  return `usiaku ${usia}`;
}

// ++++++++++++Keyword const : Non-redeclare, Non-reassign, constant variable
const PI = Math.PI;
const listAngka: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
interface IHuman {
  nama: string;
  tglLahir: string;
  gender: "Pria" | "Wanita";
}
const human: IHuman = {
  nama: "Hajra",
  tglLahir: "2000-01-11",
  gender: "Pria",
};

// ----------------------Looping statement : merupakan penulisan kode yang ditujukan untuk mengulang eksekusi program------------------------

/**
 * WHILE LOOP : merupakan perulangan program yang akan selalu dijalankan selama kondisi masih terpenuhi
 * Aturan penulisannya :
 * while(condition){
 *      // code
 * }
 */

let count: number = 1;

while (count < 10) {
  console.log(`Loop ke-${count}`);
  count++;
}
let ang: number = 1;
while (ang > 0) {
  console.log(`loop ke-${ang}`);
  ang--;
}

while (true) {
  let random: number = Math.random();
  console.log(random);

  if (random < 0.25) {
    break;
  }
}

/**
 * DO... WHILE
 * Aturan penulisan : jika diinginkan program minimal dijalankan 1x
 * do{
 *      //code
 * } while(condition)
 */

let counter: number = 10;
do {
  console.log(counter);
  counter++;
} while (counter < 10);

//-----------FOR LOOP : digunakan ketika batas looping sudah diketahui sejak awal--------------
/**
 * Aturan penulisan :
 * for(counterDeclaration; counter_condition; counter){
 *      //code
 * }
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// +++++++++++++for....in : looping yang berkaitan dengan tipe data object
for (const property in human) {
  //properti akan menampung nama variable didalam human
  console.log(property);
  console.log(human[property]);
}

console.log(human.nama);
console.log(human["nama"]);

// ++++++++++++ for...of : looping yang berhubungan dengan akses data array
const produk: string[] = ["Kopi", "Teh", "Es Jeruk"];
for (const value of produk) {
  console.log(value);
}

// Array : tipe data yang mampu menampung berbagai macam tipe data lain
/**
 * Ciri-ciri : - Data yang disimpan ke dalam array akan dibungkus kurung siku, contoh : [1, 2, 3, 4, 5]
 *             - Setiap data yang disimpan didalam array akan memiliki alamat index yang dimulai dari index 0
 *
 */

const listNamaSiswa: string[] = ["Aldo", "Aldi"];

interface ISiswa {
  nis: string;
  nama: string;
  kelas: "IPA" | "IPS";
}

const listSiswa: ISiswa[] = [
  {
    nis: "1213123",
    nama: "Aldo",
    kelas: "IPS",
  },
  {
    nis: "12312412",
    nama: "Ucok",
    kelas: "IPA",
  },
];

console.log(`${listSiswa[0]}`);

// ------------- JSON --------------
// format JSON, standart umum untuk mengambil data dari database untuk diutampilkan ke tampilan front end
const stringObject = `${JSON.stringify(listSiswa[0])}`;
console.log(typeof stringObject);
console.log(stringObject);
console.log(JSON.parse(stringObject));

// ----------------Function----------------
/**
 * Function : merupakan cara untuk menyatukan sekumpulan program yang ditujukan untuk menyelesaikan tugas khusus
 * Kategori : built-in function dan User-defined function
 * Aturan penerapan function :
 * - Function harus tersedia lebih dulu
 * - panamaan function mengikuti aturan penamaan variable
 * - secara optional bisa menerima parameter/argumen : penampung data dari function untuk menerima data dari luar function
 * - function secara optional bisa menghasilkan output melalui keyword return didalamnya
 * - opsi penulisan function :  - Declarative Function
 *                              - Function Expression
 *                              - Arrow Function
 *
 */

/**
 * Declarative function :
 * function namaFunction(param1?, param2?,....){
 *      //code
 * }
 */

//tampa parameter
function jumlah(): number {
  // fungsi ini menghasilkan output number, jika void maka fungsi tidak menghasilkan output apapun
  let angkaA: number = 2;
  let angkaB: number = 5;
  const result: number = angkaA + angkaB;
  return result;
}
console.log(jumlah());

//dengan parameter digunakan ketika fungsi reusable dengan data yang variatif
function penjumlahan(a: number, b: number) {
  const hasil = a + b;
  return hasil;
}

console.log(penjumlahan(2, 4));
console.log(penjumlahan(10, 4));
console.log(penjumlahan(4, 4));

/**
 * Function Expression :
 * const namaFunc = function(param1?, param2?,....){
 *      //code
 * }
 */

// tanpa parameter
const pengurangan1 = function (): number {
  let a: number = 2;
  let b: number = 3;
  const result = a - b;
  return result;
};

console.log(pengurangan1());

// dengan parameter
const pengurangan2 = function (a: number, b: number): number {
  const result = a - b;
  return result;
};

console.log(pengurangan2(8, 5));

/**
 * Arrow Function :
 * const namaFunc = (param1?, param2?,....) => {
 *      //code
 * }
 */
//tanpa parameter
const perkalian = () => {
  let a: number = 10;
  let b: number = 20;
  const result: number = a * b;
  return result;
};
console.log(perkalian());

//dengan parameter
const perkalian1 = (a: number, b: number) => {
  const result: number = a * b;
  return result;
};
console.log(perkalian1(10, 5));

// atau gunakan ini
const perkalian2 = (a: number, b: number) => a * b;
console.log(perkalian2(11, 5));

//---------------Callback Function----------------
/**
 * Adalah sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter
 *
 * function mainFunction(callbackFn){
 *      //code
 *      callbackFn();
 * }
 * - callbackFn : parameter yang harus diisi dengan function
 */

function mainFunction(callbackFn) {
  console.log(callbackFn());
}

mainFunction(() => {
  return "Hello";
});

function printCalculation1(cb) {
  let angkaA: number = 20;
  let angkaB: number = 10;

  return `Hasil perhitungan adalah ${cb(angkaA, angkaB)}`;
}
const calculate: string = printCalculation1(function (
  angkaA: number,
  angkaB: number
) {
  return angkaA - angkaB;
});

console.log(calculate);

// -------------------Array Function Foreach------------
// array.foreach(cbFn) : untuk mengakses isi dari index dari tiap data array
const dataArr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
dataArr.forEach((value: number, index: number) => {
  console.log(value);
});

//array.map(cbFn) : untuk merubah seluruh data array dan dijadikan data array baru
const newDataArr: number[] = dataArr.map((value: number) => {
  return value * 2;
});
console.log(newDataArr);

// array.filter(cbFn) : untuk mencari data sesuai acuan filter dan menampungnya kedalam array baru
const fiterArr: number[] = dataArr.filter((value: number) => {
  return value % 2 !== 0;
});
console.log(fiterArr);

// -------------OBJECT-----------------
/**
 * Tipe data yang dapat menampung tipe data lain dan tiap data ditampung kedalam property
 * Aturan Penulisan :
 * cara 1:
 * const object = {
 *      namaProperty : value,
 *      name:"Edi",
 *      usia: 18,
 *      isActive: true,
 *      grade : ["A", "B", "C"]
 *      getInfo: function(){
 *                //code
 *      }
 * }
 *
 * Cara 2 :
 * const object = new Object();
 * object.name = "Edi";
 * object.usia = 15;
 *
 * Cara 3 :
 * class MyObj{
 *        constuktor(name, usia){
 *            this.name = name;
 *            this.usia = usia;
 *        }
 * }
 */

interface IHumanB {
  name: string;
  usia: number;
  JK: "Male" | "Female";
  isLive: boolean;
}

// Cara 1
const dataHuman: IHumanB = {
  name: "Edi",
  usia: 17,
  JK: "Male",
  isLive: true,
};

// Cara 2
const dataHumanB: any = new Object();
dataHumanB.name = "Eda";
dataHumanB.usia = 90;
dataHumanB.JK = "Male";
dataHumanB.isLive = true;

// Cara 3
class Human implements IHumanB {
  name: string;
  usia: number;
  JK: "Male" | "Female";
  isLive: boolean = true;
  private religion: string = "Islam"; // Encapsulation : Menyembunyikan Properti
  constructor(_name: string, _usia: number, _JK: "Male" | "Female") {
    this.name = _name;
    this.usia = _usia;
    this.JK = _JK;
  }
}

const data: IHumanB = new Human("Aldi", 20, "Male"); // instance
console.log(data);
console.log(data.name);
console.log(data["usia"]);
console.log(data.JK);

//------------Inheritance-----------------
/**
 * Adalah Pewarisan data dari class utama, supaya class turunan memiliki property dari kelas utama
 */

class Employee1 extends Human {
  position: string;
  salary: number;

  constructor(
    _name: string,
    _usia: number,
    _JK: "Male" | "Female",
    position: string,
    salary: number
  ) {
    super(_name, _usia, _JK);
    this.position = position;
    this.salary = salary;
  }
}

const employee1: Employee1 = new Employee1(
  "Irfan",
  15,
  "Male",
  "Front-end",
  5000000
);
console.log(employee1);

//----------Destructure : mengeluarkan nilai dari properti object menjadi variable yang berdiri sendiri
const { usia, isLive, JK } = employee1;
console.log(usia);
console.log(JK);
