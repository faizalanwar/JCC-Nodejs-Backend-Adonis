function shoppingTime(memberId, money){
    
    if(memberId === undefined || memberId.length === 0 || memberId=== " "){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }else if(money < 50000){
        return "Mohon maaf, uang tidak cukup";
    }
    var user = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0,
    }
    if(money-user.changeMoney >= 1500000){
        user.listPurchased.push("Sepatu Stacattu");
        user.changeMoney += 1500000;
    }
    if(money-user.changeMoney >= 500000){
        user.listPurchased.push("Baju Zoro");
        user.changeMoney += 500000;
    }
    if(money-user.changeMoney >= 250000){
        user.listPurchased.push("Baju H&N");
        user.changeMoney += 250000;
    }
    if(money-user.changeMoney >= 175000){
        user.listPurchased.push("Sweater Uniklooh");
        user.changeMoney += 175000;
    }
    if(money-user.changeMoney >= 50000){
        user.listPurchased.push("Casing Handphone");
        user.changeMoney += 50000;
    }
    user.changeMoney = money-user.changeMoney;
    return user;
}

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja