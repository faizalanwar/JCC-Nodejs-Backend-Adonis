function range(a,b){
    a = parseInt(a);
    b = parseInt(b);
    let temp = [];
    let i;
    if(a === undefined || b === undefined){
        return temp;
    }
    if(a<b){
        for(i=a; i<=b; i++){
            temp.push(i);
        }
    }else{
        for(i=a; i>=b; i--){
            temp.push(i);
        }
    }
    return temp;
}

function rangeWithStep(a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let temp = [];
    let i;
    if(a === undefined || b === undefined || c === undefined){
        return temp;
    }
    if(a<b){
        for(i=a; i<=b; i += c){
            temp.push(i);
        }
    }else{
        for(i=a; i>=b; i -= c){
            temp.push(i);
        }
    }
    return temp;
}

function sum(a,b,c=1){
    let temp = [];
    let i, result = 0;
    if(a === undefined){
        return 0;
    }else if(b === undefined){
        return a;
    }
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if(a<b){
        for(i=a; i<=b; i += c){
            temp.push(i);
        }
    }else{
        for(i=a; i>=b; i -= c){
            temp.push(i);
        }
    }
    for(i=0; i<temp.length; i++){
        result += temp[i];
    }
    return result;
}


function dataHandling(input){
    let i, j;
    for(i=0; i<input.length; i++){
        for(j=0; j<5; j++){
            switch (j) {
                case 0:
                  console.log(`Nomor ID: ${input[i][j]}`);
                  break;
                case 1:
                  console.log(`Nama Lengkap: ${input[i][j]}`);
                  break;
                case 2:
                  console.log(`TTL: ${input[i][j]} ${input[i][j+1]}`);
                  j++;
                  break;
                case 4:
                  console.log(`Hobi: ${input[i][j]}`);
                  break;
            };
        }
        console.log(" ");
    }
}

function balikKata(kata){
    let i = 0;
    if(kata==undefined){
        return "Kata Kosong";
    }
    for(i=kata.length-1; i >= 0; i--){
        if(kata[i]===','){
            process.stdout.write("");
        }else{
            process.stdout.write(kata[i]);
        }
    }
}

module.exports = {
    range: range,
    rangeWithStep: rangeWithStep,
    sum: sum,
    dataHandling: dataHandling,
    balikKata: balikKata
}