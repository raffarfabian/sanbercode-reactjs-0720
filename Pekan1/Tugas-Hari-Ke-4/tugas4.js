//Soal 1

    //Looping 1
    console.log ("Soal 1")
    console.log("LOOPING PERTAMA")
    var deret = 2;
    var jumlah = 0;
    while(deret <= 20) { // Loop akan terus berjalan selama nilai deret masih di atas 0
      jumlah =+ deret;
      deret+= 2; // Menembah nilai deret dengan 2
      console.log(jumlah + ' - I love coding')
    }
    
        //Looping 2
    console.log("LOOPING KEDUA")
    var deret = 20;
    var jumlah = 0;
    while(deret >= 2) { // Loop akan terus berjalan selama nilai deret masih di atas 20
        jumlah =+ deret;
        deret+= -2; // Mengurangi nilai deret dengan 2
        console.log(jumlah + ' - I love coding')
    }
    
    
    //Soal 2
    console.log("Soal 2")
    
    for(var ganjil = 1, genap = 2 ; ganjil <= 20 ; ganjil+= 2, genap+=2) {
        if (ganjil %3 == 0 ) {     //Kalau kelipatan 3 
          console.log (ganjil + ' - I Love Coding');
          console.log (genap + ' - Berkualitas'); 
        }
        else  {console.log(ganjil + ' - Santai') //Kalau bukan kelipatan 3
                console.log( genap + ' - Berkualitas');} //Kalau bukan kelipatan 3
       } 
    
    
    //Soal 3
    console.log ("Soal 3")
    
    function makeLine (length) {
        var line = "";
        for (var j = 1; j <= length ; j++) {
            line += "#" ;
        }
        return line + "\n";
    }
    
    function buildTriangle(x) {
        var triangle = "";
    
        for (t = 1; t <= x; t ++) {
            triangle += makeLine(t)
    
        }
        return triangle ;
    }
    console.log(buildTriangle(7))
    
    
    //Soal 4
    console.log ("Soal 4")
    
    var kalimat="saya sangat senang belajar javascript"
    var kata= kalimat.split(" ")
    console.log(kata)
    
    //Soal 5
    console.log ("Soal 5")
    
    var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
    
    daftarBuah.sort()
    for (var i = 0 ; i <=4; i++){
      console.log(daftarBuah[i])
    }