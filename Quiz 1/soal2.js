function hitungVokal(str) {
    var vokal = ["a", "i", "u", "e", "o"];
    var result = 0
    for (var i = 0; i < str.length; i++) { 
        if (vokal.includes((str[i]).toLowerCase())) {
            result = result + 1 ;
        }
    }
    return result 
}

// Test Cases 
console.log(hitungVokal("Adonis")) // Output:3 
console.log(hitungVokal("Error")) //Output:2 
console.log(hitungVokal("Eureka")) //Output:4 
console.log(hitungVokal("Rsch")) // Output: 0