//STRUKTUR DATA ARRAY
//contoh array dari sebuah mobil
var mobil = ["Avanza", "Yaris","Alya"]
//aray bisa membuah 3 data atau lebih dengan tipe data yang berbeda seperti string boolean integer
//contoh
var mobil = ["Avanza", true, 123]
//jika ingin mengambil element cukup menggunakan perintah varName(i)
var mobil = ["Avanza", "Yaris","Alya"]
console.log(mobil[2]) //mobil[2]="Alya"

//cara mengisi atau menambahkan element array dengan metode push()
var mobil = ["Avanza", "Yaris","Alya"]
mobil.push("Alvez")
console.log(mobil)

//element array yang kosong
var arrayKosong = []
console.log(arrayKosong)

//Mencetak semua elemen pada array dengan console log dan pengulangan for
var mobil = ["Avanza", "Yaris","Alya", "Alvez"]
for(let i=0; i<mobil.length; i++){
    console.log("cetak mobil ke-" + i + ":" + mobil[i])
}

//mencetak element array dengan metode delete
var mobil = ["Avanza", "Yaris","Alya", "Alvez"]
delete mobil[1]
// delete(mobil[1])
console.log(mobil)

//menghapus element paling belakang
var mobil = ["Avanza", "Yaris","Alya", "Alvez"]
mobil.pop()
console.log(mobil)

//menghapus element paling depan
var mobil = ["Avanza", "Yaris","Alya", "Alvez"]
mobil.shift()
console.log(mobil)

function test(){

    console.log("Hello World!");
 
 }