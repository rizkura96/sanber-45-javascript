const password = 1234561234
const validPassword = 123456
var retry = 0

if(password==validPassword){
    console.log("Selamat Datang di Duniaku")
}
else {
    console.log("Password salah, coba lagi")    
}



retry = 1
if(password==validPassword){
    console.log("Selamat Datang di Duniaku")
    
}
else if (retry<3){
    console.log("ulangi")    
    retry++
}
else {
    console.log("Batas pengisian ")
}