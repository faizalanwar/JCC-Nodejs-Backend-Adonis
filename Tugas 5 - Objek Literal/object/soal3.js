function naikAngkot(listPenumpang){
    
    if(listPenumpang.length === 0){
        return listPenumpang;
    }
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let user = [{
        penumpang: " ",
        naikDari: " ",
        tujuan: " ",
        bayar: 0
    }, 
    {
        penumpang: " ",
        naikDari: " ",
        tujuan: " ",
        bayar: 0
    }];
    let i, j, selisih, temp1, temp2;
    for(i=0; i<listPenumpang.length; i++){
        for(j=0; j<3; j++){
            if(j===0){
                user[i].penumpang = listPenumpang[i][j];
            }else if(j===1){
                user[i].naikDari = listPenumpang[i][j];
            }else{
                user[i].tujuan = listPenumpang[i][j];
            }
        }
        for(j=0; j<rute.length; j++){
            if(rute[j]===user[i].naikDari){
                temp1 = j + 1;
            }
            if(rute[j]===user[i].tujuan){
                temp2 = j + 1;
            }
        }
        selisih = temp1-temp2;
        if(selisih<0){
            selisih*=-1;
        }
        user[i].bayar = 2000*selisih;
    }
    return(user);
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]