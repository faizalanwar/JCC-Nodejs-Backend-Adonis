export const sapa = (nama) => {
    console.log(`halo selamat pagi, ${nama}`);
}

export const toObject = (nama, domisili, umur) => {
    const result = {nama, domisili, umur};
    return result;
}

export const checkScore = (data) => {
    let values = data.split(",");
    let i, value = [];
    for(i=0; i<values.length; i++){
        value.push(values[i].split(":"));
    }
    const result = {};
    for(i=0; i<value.length; i++){
        result[value[i][0]] = value[i][1];
    }
    return result;
}

export const filterData = (data, kelas) => data.filter(nama => nama.class == kelas);
