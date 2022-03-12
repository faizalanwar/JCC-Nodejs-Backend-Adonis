function graduate(arr) {


    function newData(value, dataclass) {
        dataclass.push(value.name)
        dataclass.push(value.score)


        if (value.score > 85 ) {
            dataclass.push("mastered")
        } else if (value.score >= 60 && value.score <= 85) {
            dataclass.push("completed")
        } else if (value.score < 60) {
            dataclass.push("participated")
        }
        temp.name = dataclass[0]
        temp.score = dataclass[1]
        temp.grade = dataclass[2]
    }

    var result = {}
    var newLaravel = []
    var newVuejs = []
    var newReactjs = []

    for (var i = 0; i < arr.length; i++) {
        var dataclass = arr[i].class
        var temp = {}
        switch (arr[i].class.toLowerCase()) {
            case "laravel":
                var laravel = []
                newData(arr[i], laravel)
                newLaravel.push(temp)
                result[dataclass] = newLaravel
                break;
            case "vuejs":
                var vuejs = []
                newData(arr[i], vuejs)
                newVuejs.push(temp)
                result[dataclass] = newVuejs
                break;
            case "reactjs":
                var reactjs = []
                newData(arr[i], reactjs)
                newReactjs.push(temp)
                result[dataclass] = newReactjs
                break;
        }
    }
    return result
}
var arr = [
    { name: "Ahmad", score: 80, class: "Laravel" },
    { name: "Regi", score: 86, class: "Vuejs" },
    { name: "Robert", score: 59, class: "Laravel" },
    { name: "Bondra", score: 81, class: "Reactjs" }
]
console.log(graduate(arr))