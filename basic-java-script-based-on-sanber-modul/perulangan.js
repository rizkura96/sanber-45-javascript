//LOOPING
//COUNTED LOOP DAN UNCUNTED LOOP
//COUNTED LOOP > FOR, FOREACH, REPEAT
//UNCOUNTED LOOP > WHILE, DO/WHILE

//perulangan for
// for(let i=0; i<10; i++){
//     console.log("perulangan ke-"+ i)
// }

//perulangan while
const prompt = require("prompt-sync")({sigint: true})
var ulangi = prompt("Are you ready?") //input 1
console.log("start")
var counter = 0

while(ulangi){
    var jawab = prompt("Apakah anda mau mengulang? (yes/no)") //input 1 atau yes atau 0 atau no
    counter++
    if(jawab == false || jawab == "no"){
        ulangi = false
    }
    console.log("perulangan ke-"+ counter)
}
