function loopingWhile(){
    var x = 2;
    console.log("LOOPING PERTAMA");
    while(x<21){
        console.log(x+" - I love coding");
        x+=2;
    }
    console.log("LOOPING KEDUA");
    x-=2;
    while(x>0){
        console.log(x+" - I will become a backend developer");
        x-=2;
    }
}
function loopingFor(){
    for(var y=1; y<21; y++){
        if(y%3==0 && y%2==1){
            console.log(y + " - I Love Coding");
        }else if(y%2==1){
            console.log(y + " - Santai");
        }else{
            console.log(y + " - Berkualitas");
        }
    }
}
function persegiPanjang(panjang, lebar){
    do{
        for(var z=0; z<panjang; z++){
            process.stdout.write("#");
        }
        process.stdout.write("\n");
        lebar--;
    }while(lebar>0);
}
function tangga(tinggi){
    var row, coll;
    for(row = 1; row <= tinggi; row++){
        for(coll = 0; coll < row; coll++){
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}
function papanCatur(baris){
    var temp = baris;
    var kolom;
    do{
        kolom = temp;
        do{
            if(baris % 2 == 0){
                if(kolom % 2 == 0){
                    process.stdout.write(" "); 
                }else{
                    process.stdout.write("#");
                }
            }else{
                if(kolom % 2 == 0){
                    process.stdout.write("#"); 
                }else{
                    process.stdout.write(" ");
                }   
            }
            kolom--;
        }while(kolom>0);
        baris--;
        process.stdout.write("\n");
    }while(baris>0);
}
module.exports = {
    loopingWhile: loopingWhile,
    loopingFor: loopingFor,
    persegiPanjang: persegiPanjang,
    tangga: tangga,
    papanCatur: papanCatur
}