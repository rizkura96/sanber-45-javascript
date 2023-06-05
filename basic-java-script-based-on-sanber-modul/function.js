//FUNGSI
// 4 Cara Membuat Fungsi di Javascript
// Ada 4 cara yang bisa kita lakukan untuk membuat fungsi di Javascript:

// Menggunakan cara biasa;
// Menggunakan ekspresi;
// Menggunakan tanda panah (=>);
// dan menggunakan Constructor.

//FUNGSI TANPA PARAMETER
//membuat fungsi dengan cara biasa
function namaFungsi(){
    console.log("Hello World")
}
//memanggil fungsi
namaFungsi()


//membuat fungsi dengan  ekspresi
var namaFungsi = function(){
    console.log("Hello World")
}
//memanggil fungsi
namaFungsi()

//membuat fungsi dengan tanda panah
var namaFungsi = ()=>{
    console.log("Hello World")
}
//memanggil fungsi
namaFungsi()

// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFungsi = () => console.log("Hello World!");
//memanggil fungsi
namaFungsi()

//membuat fungsi dengan konstruktor
var namaFungsi = new Function(console.log("Hello World"))
//memanggil fungsi
namaFungsi()



//FUNGSI MENGGUNAKAN PARAMETER
//fungsi perkalian
function kali(a,b){
    var hasilKali = a*b
    console.log("Hasil perkalian antara a dan b = " + hasilKali)
}
//memanggil fungsi
kali(3,8)

//fungsi pembagian
function bagi(a,b){
    var hasilBagi = a/b
    console.log("Hasil pembagian antara a dan b = " + hasilBagi)
}
//memanggil fungsi
bagi(60,10)

//FUNGSI MENGEMBALIKAN NILAI
//pembagian
function bagi2(a,b){
    hasilBagi = a/b
    return hasilBagi
}
//memanggil fungsi
var nilai1 = 30
var nilai2 = 6
var hasilPembagian = bagi2(nilai1,nilai2)
console.log("hasil baginya adalah = "+ hasilPembagian)

//cara lain
function bagi3(a,b){
    hasilBagi = a / b;
    return hasilBagi;
 }
 //memanggil fungsi
 var nilai1 = 20;
 var nilai2 = 5;
 console.log("hasilnya adalah = "+ bagi3(nilai1,nilai2));