var parolaUtente = prompt("Inserisci una parola");

function palindrome(word) {    
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
 if (palindrome(parolaUtente)){
     console.log("palindroma"); 
 } else {
    console.log("non palindroma");
 }