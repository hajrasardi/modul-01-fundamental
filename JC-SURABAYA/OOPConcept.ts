// Membuat objek secara langsung

//  contph 1 : membuat objek hewan peliharaan

const pet = {
  name: "Buddy",
  species: "Dog",
  age: 4,
  vaccinated: true,
  favoriteToy: "Ball",
};

// cara mengakses properti dari objek pet
console.log("Ambil properti name dari pet : " + pet.name);
console.log("Ambil properti favorite dari pet : " + pet.favoriteToy);

// membuat objek dengan method new objek
const idCard: any = new Object();
idCard.name = "Budi";
idCard.age = 30;
idCard.gender = "Male";

console.log("isi dari id card : ", idCard);

// membuat object dalam bentuk function
function creatStudent(name: string, grade: number) {
  return {
    name: name,
    grade: grade,
  };
}

const student = creatStudent("Budi", 10);
console.log("Hasil dari student : ", student);

// membuat object dengan method Object.assign
const employee = Object.assign({}, { name: "Bob", role: "Supervisor" });
console.log("Informasi dari employee : ", employee);

// ------- Interface ------------
// interface itu seperti cetak biru atau blueprint
interface IPerson {
  id: number;
  name: string;
  age: number;
  hobby?: string[]; // optional chaining (artinya tidak wajib diikut sertakan)
}

interface IAddress {
  street: string;
  zip_code: number;
}

interface IDetailInformation {
  detail: IPerson;
  address: IAddress;
}

const paket1: IDetailInformation = {
  detail: {
    id: 123,
    name: "bambang",
    age: 40,
  },
  address: {
    street: "Jl. Merdeka, Jakarta Pusat",
    zip_code: 465,
  },
};

// untuk mengambil detail informasi
console.log("ambil info dari paket 1 : ", paket1);

const person1: IPerson = {
  id: 1,
  name: "bob",
  age: 17,
  hobby: ["Study", "Game"],
};

const person2: IPerson = {
  id: 2,
  name: "John",
  age: 22,
  //   hobby: ["Sport", "Singing"],
};

console.log("info dari person 1 : ", person1);
console.log("info dari person 2 : ", person2);

type Color = "red" | "green" | "blue";
const favoriteColor: Color = "green";

type Coordinate = {
  x: number;
  y: number;
};

const point: Coordinate = { x: 5, y: 10 };

console.log("hasil dari favorite color : ", favoriteColor);
console.log("hasil dari point : ", point);
