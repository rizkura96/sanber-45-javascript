var dataKendaraan = ["rizki",27,"Alvez","DM 1123 DM",600000,false]

var STNK = {
    "nama" : "rizki",
    "usia" : 24,
    "merk" : "Alvez",
    "plat" : "DM 1234 DM",
    "biaya" : 600000, 
    "isBayar" : false
}

console.log(STNK)
console.log(JSON.stringify(STNK.biaya))

var STNKbaru = [
    {
        "nama" : "rizki",
        "usia" : 24,
        "merk" : "Alvez",
        "plat" : "DM 1234 DM",
        "biaya" : 600000, 
        "isBayar" : false
    },
    {
        "nama" : "andi",
        "usia" : 44,
        "merk" : "Alya",
        "plat" : "DM 5678 DM",
        "biaya" : 600000, 
        "isBayar" : true
    },
    {
        "nama" : "budi",
        "usia" : 23,
        "merk" : "kongkor",
        "plat" : "DM 123423143241324 DM",
        "biaya" : 600000, 
        "isBayar" : false
    }
]

console.log(JSON.stringify(STNKbaru[2].plat))