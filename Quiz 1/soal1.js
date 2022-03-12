function tandaiA(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            result += 'x'
        } else {
            result += str[i]
        }
    }
    return result
}

// Tes Cases
console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
console.log(tandaiA("garuda")) // gxrudx
console.log(tandaiA("kucing")) // kucing