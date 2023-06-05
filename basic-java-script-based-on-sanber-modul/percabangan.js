//PERCABANGAN
//IF ELSE
//percabangan satu kondisi
const prompt = require('prompt-sync')({sigint: true});
const password = prompt('Enter password: ');
const validPassword = 'password'

if(password===validPassword){
    console.log("Selamat datang bos!")
}
else {
    console.log("Password Salah, coba lagi!")
}
console.log("Terimakasih sudah menggunakan aplikasi kami")

//percabangan lebih dari satu kondisi atau kasus
const prompt2 = require('prompt-sync')({sigint: true});
const nilai = prompt2('Masukan nilai: ');
var grade;
 
if(nilai>90){
    grade = "A"
} else if(nilai>80) {
    grade = "B+"
} else if (nilai>70){
    grade = "B"
} else {
    grade = "F"
}
console.log('grade adalah = '+ grade)


//CASE
const prompt3 = require('prompt-sync')({sigint: true});
const nilai2 = prompt3('Masukan nilai: ');
var grade;

switch(true){
    case nilai2 > 90:
        grade = "A";
        break;
    case nilai2 > 80:
        grade = "B+";
        break;
    case nilai2 > 70:
        grade = "B";
        break;
    default:
        grade = "F";
}
console.log("Grade adalah = " + grade)