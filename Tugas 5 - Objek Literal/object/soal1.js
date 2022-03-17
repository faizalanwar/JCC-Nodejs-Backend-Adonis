function arrayToObject(arr=undefined) {
    var now = new Date()
    var thisYear = now.getFullYear()
    let i, j;
    var result  = {
        firstName: "",
        lastName: "",
        gender: "",
        age: "Invalid Birth Year"
    };
    if(arr === undefined || arr.length === 0){
        console.log(" ");
        return;
    }
    
    for(i=0; i<2; i++){
        for(j=0; j<4; j++){
            switch (j) {
                case 0:
                  result.firstName = arr[i][j];
                  break;
                case 1:
                  result.lastName = arr[i][j];
                  break;
                case 2:
                  result.gender = arr[i][j];
                  break;
                case 3:
                  if(arr[i].length===3 ||thisYear-arr[i][j]<=0){
                      result.age = "Invalid Birth Year";
                      break;
                  }
                  result.age = thisYear - arr[i][j];
                  break;
            };
        }
        console.log((i+1) + ". " + result.firstName + " " + result.lastName + ": " + `{"firstName": '${result.firstName}', "lastName": '${result.lastName}', "gender": '${result.gender}', "age": ${result.age}}`);
    }
    console.log("");
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 


// Error case 
arrayToObject([]) // ""