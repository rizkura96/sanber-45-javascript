// OBJEK PADA JAVASCRIPT
// Objek adalah sebuah variabel yang menyimpan nilai (properti) dan fungsi (method).

var mobil = {merk : "Alvez", type : "sport", harga : "300000", warna : "hitam"}

//Kode di atas bisa juga ditulis seperti ini:
var mobil = {
    merk : "Alvez", 
    type : "sport", 
    harga : "300000", 
    warna : "hitam"
}


// Apa Perbedaan Properti dan Method?
// Pada contoh di atas, kita baru hanya membuat properti saja.

// Properti adalah ciri khas dari objek (variabel). Sedangkan method adalah perilaku dari objek (fungsi).

// Lalu bagaimana cara membuat method di dalam objek?

// Method dapat dibuat dengan cara mengisi nilai (value) dengan sebuah fungsi.

// Contoh:

 var mobil = {
    // properti
    merk : "Alvez", 
    type : "sport", 
    harga : "300000", 
    warna : "hitam",

    // method 
    //pembuatan fungsi atau method harus dibuat dengan format seperti di bawah ini
    start: function(){
        console.log("ini method start");
    },

    drive: function(){
        console.log("ini method drive");
    },

    brake: function(){
        console.log("ini method brake");
    },

    stop: function(){
        console.log("ini method stop");
    },
};


//Cara Mengakses Properti dan Method Objek
console.log("merk mobil ini yaitu : "+ mobil.merk)
console.log("harga mobil "+ mobil.merk +" ini yaitu : "+ mobil.harga)
console.log("warna mobil "+ mobil.merk +" ini yaitu : "+ mobil.warna)
console.log("type mobil "+ mobil.merk +" ini yaitu : "+ mobil.type)

mobil.start()
mobil.drive()
mobil.brake()
mobil.stop()


//Menggunakan Keyword this
//Kata kunci this digunakan untuk mengakses properti dan method dari dalam method (objek).
//Pada pemrograman berorientasikan objek, kita biasanya membuat objek dengan membuat instance dari class. 
//Akan tetapi pada contoh-contoh di atas, kita membuat objeknya secara langsung.  
//Lalu bagaimana kalau kita ingin membuat objek yang lain dengan properti yang sama.

function Person(firstName, lastName){
    // properti
    this.firstName = firstName;
    this.lastName = lastName;

    // method
    //tanpa membuat method objek fullname (langsung)
    this.showName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }


    //menambahkan method objek baru (this fullName)
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }   
    this.showName = function(){
        console.log(this.fullName());
    }
}

var person1 = new Person("Rizki", "Kurniawan");
var person2 = new Person("Farah", "Akadji");
var person3 = new Person("Muhar", "Dian");
var person4 = new Person("Petani", "Kode");

person1.showName();
person2.showName();
person3.showName();
person4.showName();