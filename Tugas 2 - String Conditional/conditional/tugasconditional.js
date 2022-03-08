/* -------------------- 
|         Soal 1	     |
 ---------------------*/

    var nama = "Faizal Anwar";
    var peran = "Penyihir";

    console.log('\n\n------------    Soal 1   ------------');
    if(nama === '' && peran === ''){
        console.log("Nama harus diisi!");
    }else if(nama !== '' && peran === ''){
        console.log("Hello " + nama + ", Pilih peranmu untuk memulai game!");
    }else if(nama !== '' && peran === 'Penyihir'){
        console.log("Selamat datang di Dunia Werewolf, " + nama);
        console.log("Halo " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
    }else if(nama !== '' && peran === 'Guard'){
        console.log("Selamat datang di Dunia Werewolf, " + nama);
        console.log("Halo " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
    }else if(nama !== '' && peran === 'Werewolf'){
        console.log("Selamat datang di Dunia Werewolf, " + nama);
        console.log("Halo " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!");
    }


/* -------------------- 
|         Soal 2	     |
 ---------------------*/

    var tanggal = 8;
    var bulan = 3; 
    var tahun = 2022; 
    var Month;
    switch (bulan) {
        case 1:
          Month = "Januari";
          break;
        case 2:
          Month = "Februari";
          break;
        case 3:
          Month = "Maret";
          break;
        case 4:
          Month = "April";
          break;
        case 5:
          Month = "Mei";
          break;
        case 6:
          Month = "Juni";
          break;
        case 7:
          Month = "July";
          break;
        case 8:
          Month = "Agustus";
          break;
        case 9:
          Month = "September";
          break;
        case 10:
          Month = "Oktober";
          break;
        case 11:
          Month = "November";
          break;
        case 12:
          Month = "Desember";
          break;    
        default:
          Month = "Inputan Bulan Salah";
          break;
    };
    
    
    console.log('\n\n------------    Soal 2   ------------');
    if(Month === "Inputan Bulan Salah"){
        console.log(Month);
    }else{
        console.log(tanggal + " " + Month + " " + tahun);
    }
