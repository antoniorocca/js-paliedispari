var pariDispari = prompt("Scegli pari o dispari");
var sceltaNumero = Number(prompt("Scegli un numero da 1 a 5"));

function numeroPc(min, max) { 
    return Math.floor(Math.random() * (max - min) ) + min;
}
var numRandom = numeroPc(1, 5);
var sumNum = sceltaNumero + numRandom;

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
}

if(isEven(sumNum)){
    sumNum = "pari";
} else {
    sumNum = "dispari";
}

if (sumNum = "pari" && pariDispari === "pari") {
    console.log("You win!");
} else if (sumNum = "dispari" && pariDispari === "dispari"){
    console.log("You win!");
} else {
    console.log("Try again!");
}