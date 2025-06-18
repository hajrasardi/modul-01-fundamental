// Synchronous : kode dieksekusi berdasarkan urutan perintah

// console.log("Memulai proses ...");
// let res: number = 5 + 5;
// console.log("Hasil penjumlahan : ", res);
// console.log("Proses Selesai");

// // Asynchronous : kode dieksekusi berdasarkan running time/waktu proses
// console.log("Memulai Proses...");
// setTimeout(() => {
//   console.log("Ini akan dijalankan setelah 2 detik");
// }, 2000); // 2000 ms = 2 detik
// console.log("Proses Selesai");

// callback : pemanggilan fungsi yang diteruskan ke argumen untuk diproses ke dalam parameter fungsi lainnya
// contoh 1 --> atur alarm
function setAlarm(time: number, callback: () => void) {
  console.log(`Alarm disetel untuk ${time} detik ke depan`);
  setTimeout(() => {
    callback();
  }, time * 100);
}

function ringAlarm() {
  console.log(`Alarm berbunyi! Waktunya bangun`);
}

setAlarm(5, ringAlarm);

// contoh 2 -> PEkerjaan rumah
function doHomework(task: string, callback) {
  console.log(`MEngerjakan tugas : ${task}`);
  setTimeout(() => {
    console.log(`Tugas ${task} telah Selesai`);
    callback();
  }, 4000);
}

function nextTask() {
  console.log("Sekarang lanjut mengepel lantai");
}

doHomework(`Menyapu lantai`, nextTask);

// contoh 3 -> cek khodam
function checkKhodam(participantName: string) {
  console.log(`Cek Khodam dari : ${participantName}`);
  let probability: number = Math.floor(Math.random() * 6);

  setTimeout(() => {
    switch (probability) {
      case 1:
        console.log(`Rawa Rontek`);

        break;
      case 2:
        console.log(`Macan Putih`);
        break;
      case 3:
        console.log(`Genderuwo`);
        break;
      case 4:
        console.log(`Pocong`);
        break;
      case 5:
        console.log(`Gundul Pacul`);
        break;

      default:
        console.log(`Tidak ada khodam`);
    }
    console.log(`Cek khodam selesai ....`);
  }, 4000);
}

checkKhodam(`Damar`);

// Promise : untuk menangkap hasil success/failed dari suatu kejadian

// contoh 1 -> order online driver
interface Driver {
  name: string;
  arrivingIn: string;
}

function checkDriverAvailability(): Promise<Driver> {
  return new Promise((resolve, reject) => {
    console.log("Mengecek ketersediaan driver ...");

    setTimeout(() => {
      const driverAvailability: number = Math.floor(Math.random() * 10);
      if (driverAvailability >= 4) {
        resolve({
          name: "Budi",
          arrivingIn: "5 menit",
        });
      } else {
        reject(`Tidak ada driver yang tersedia`);
      }
    }, 4000);
  });
}

checkDriverAvailability()
  .then((response) => {
    console.log(`Ketika berhasil : `, response);
  })
  .catch((error) => {
    console.log(`Ketika gagal : `, error);
  });

//   then pasangannya : resolve
//  catch pasangannta : reject

//  contoh 2 => pelemparan koin
//  tujuannya adalah untuk mendapatkan gambar burung garuda pada koin 500 perak

function checkCoin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let coins = Math.floor(Math.random() * 2);
      console.log(coins);
      if (coins === 1) {
        resolve(`Berhasil menemukan burung garuda`);
      } else {
        reject(`Gagal mendapatkan burung garuda`);
      }
    }, 3000);
  });
}

checkCoin()
  .then((response) => {
    console.log(`Hasil pelemparan koin ketika sukses : `, response);
  })
  .catch((error) => {
    console.log(`Hasil pelemparan koin ketika gagal : `, error);
  });

// Async await

// contoh 1 -> memanggang kue
interface CakeResult {
  status: `success` | `failed`;
  result: string;
}

function bakeCake(): Promise<CakeResult> {
  return new Promise((resolve, reject) => {
    console.log(`Sedang memanggang kue ...`);
    setTimeout(() => {
      const isPerfect = Math.round(Math.random() * 10);
      if (isPerfect >= 5) {
        resolve({
          status: `success`,
          result: `Kue sudah matang dengan sempurna`,
        });
      } else {
        reject({
          status: `error`,
          result: `Kue gosong, coba lain kali`,
        });
      }
    }, 4000);
  });
}

async function serveCake(): Promise<void> {
  try {
    setTimeout(() => {
      console.log(`Proses pemanggangan dimulai...`);
    }, 2000);
    const result: CakeResult = await bakeCake();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

serveCake();
