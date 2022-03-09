function teriak(){
    return ("Halo JCC!");
}
function kalikan(num1, num2){
    return num1*num2;
}
function introduce(name, age, address, hobby){
    return (`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address} dan saya punya hobby yaitu ${hobby}!`);
}
module.exports = {
    teriak: teriak,
    kalikan: kalikan,
    introduce: introduce
}