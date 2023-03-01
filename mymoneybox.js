"use strict";

function moneyBox(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoney=moneyBox();
myMoney(5);
myMoney(5);
myMoney(5);
const moneyCarl=moneyBox();
moneyCarl(10);
moneyCarl(20);
moneyCarl(5)