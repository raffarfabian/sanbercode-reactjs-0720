//Soal 1

var arrayDaftarPerserta = ["Asep", "laki-laki", "baca buku", 1992]
var daftarNama = {
  nama : "Asep",
  "jenis kelamin" : "laki laki" ,
  hobi : "baca buku",
  "tahun lahir" : 1992
}
  console.log(daftarNama)


  //Soal 2
  
  var buah = [
    {
      nama: "strawberry",
      warna: "merah",
      ["ada bijinya"]: "tidak",
      harga: 9000
    },
    { nama: "jeruk",
      warna: "oranye",
      ["ada bijinya"]: "ada",
      harga: 8000
      
    },
    {
     nama: "semangka",
     warna: "merah & hjau ",
     ["ada bijinya"]: "ada",
     harga: 10000
    },
    {
      nama: "pisang",
      warna: "kuning",
      ["ada bijinya"]: "tidak",
      harga: 5000
    }
  ]
 console.debug(buah[0])




 //Soal 3

 var dataFilm = []

var TambahData = {
    Nama : "Superman", 
    Durasi : "2 jam",
    Genre : "Action",
    Tahun : "2016"
}
function tambahkanData(TambahData){
    dataFilm.push(TambahData);
}
tambahkanData(TambahData); 
console.log(dataFilm)


//Soal 4

    //Release 0

    class Animal {
        // Code class di sini
        constructor (){
          this.name = "shaun"
          this.legs = 4
          this.cold_blooded = false
        }
    }
     
    var sheep = new Animal("shaun");
     
    console.log(sheep.name) // "shaun"
    console.log(sheep.legs) // 4
    console.log(sheep.cold_blooded) // false
   
    //Release 1
    
   class Ape extends Animal {
     constructor (){
       super ();
       this.legs =2
     }
     yell () {
       this.yell =  "Auooo"
     }
   }
  
    class Frog extends Animal {
      constructor() {
        super()
      }
      jump(){
        this.jump = "hop hop"
      }
    }

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.yell)
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.jump)

//Soal 6

class Clock {
    constructor ({ template }) {
      {
    
                var timer;
  
                function render() {
                var date = new Date();
  
                var hours = date.getHours();
                if (hours < 10) hours = '0' + hours;
  
                var mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;
  
                var secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;
  
                var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
  
                 console.log(output);
                  }
  
                this.stop = function() {
                  clearInterval(timer);
                  };
  
                this.start = function() {
                render();
                timer = setInterval(render, 1000);
                };
  
               }
              }
    
             }
  
    var clock = new Clock ({template: 'h:m:s'});

    
  var clock = new Clock({template: 'h:m:s'});
  clock.start();






    