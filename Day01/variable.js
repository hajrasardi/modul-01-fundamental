// Variable merupakan penampung data

/* 
- RUMUS PENGGUNAAN VARIABLE ==> keywordVariable namaVariable = data;
- keywordVarible : var, let, const
- namaVariable : - Harus diawali dengan huruf atau _ atau $
                 - Jika terdiri dari 2 suku kata atau lebih, maka tidak boleh dipisah dengan spasi.
- data : tipe data yang ingin disimpan diantaranya string, number, boolean, undefinate, array, object.
*/

// Mendeklarasikan variable
var namaMurid;

// Menginisialisasi Variable
var usiaMurid = 17;

// Karakter tiap keyword variable
// Keyword var : redeclare, reassign

// Redeclare
var alamat = "Jl. Pemuda Serabaya";
var alamat = "Sekolilo Surabaya"; //membuat ulang variable yang sudah ada

// Reassign
alamat = "Rungkut Surabaya"; // mengganti isi varible yang sudah ada

// Keyword let : non redeclare, reasign
let program = "Web Development";
// let program = "Digital Marketing";
program = "Data Science";

//Keyword const : non redeclare, non reassign
const PI = 3.14;
const UrlDomain = "https://google.com";
