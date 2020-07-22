// Soal 1

var kataPertama = "saya";

var kataKedua = "senang";
var upper2 = kataKedua.toUpperCase();
var slice2= kataKedua.slice(1, 6);
var slice= upper2.slice(0, 1);

var kataKetiga = "belajar";
var kataKeempat = "javascript"; kataKeempat.toUpperCase();
var upper = kataKeempat.toUpperCase();

console.log (kataPertama+" "+slice+slice2+" "+kataKetiga+" "+upper) // saya Senang belajar JAVASCRIPT


//Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
    var angkaPertama = parseInt(kataPertama); // 1
    var angkaKedua = parseInt(kataKedua); // 2
    var angkaKetiga = parseInt(kataKetiga); // 3
    var angkaKeempat = parseInt(kataKeempat); // 4


console.log (angkaPertama+angkaKedua+angkaKetiga+angkaKeempat) // 12

//Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14)
var kataKetiga = kalimat.substring(15, 19)
var kataKeempat = kalimat.substring(19, 24)
var kataKelima = kalimat.substring(25, 33)

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//Soal 4
var nilai = '58'
if (nilai >= 80){
    console.log("Indeksnya A")
} else if  (nilai >= 70 && nilai < 80){
    console.log("Indeksnya B")
} else if (nilai >= 60 && nilai < 70) {
  console.log ("Indeksnya C")
} else if (nilai >= 50 && nilai < 60) {
    console.log ("Indeksnya D")
} else if (nilai < 50) {
    console.log ("Indeksnya E")
}
  

//Soal 5
var tanggal = 1;
var bulan = 3;
var tahun = 2000

switch(bulan) {
  case 1: {console.log("1 Januari 2000"); break; }
  case 2: {console.log("1 Februari 2000"); break; }
  case 3: {console.log("1 Maret 2000"); break; }
  case 4: {console.log("1 April 2000"); break; }
  case 5: {console.log("1 Mei 2000"); break; }
  case 6: {console.log("1 Juni 2000"); break; }
  case 7: {console.log("1 Juli 2000"); break; }
  case 8: {console.log("1 Agustus 2000"); break; }
  case 9: {console.log("1 September 2000"); break; }
  case 10: {console.log("1 Oktober 2000"); break; }
  case 11: {console.log("1 November 2000"); break; }
  case 12: {console.log("1 Desember 2000"); break; }
  default: {console.log ("Null") ; }
}









