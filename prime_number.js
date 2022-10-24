// Créez un programme qui affiche si un nombre est premier ou pas.


// Exemples d’utilisation :
// $> node exo.js 5
// Oui, 5 est un nombre premier.

// $> node exo.js 6
// Non, 6 n’est pas un nombre premier.

// Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.


const number = process.argv.slice(2);
var diviseur = number;
var zero_during_bounce = 0

if (number == 0) {
    console.log("erreur");
} else {
    if (number == 1) {
        console.log("erreur");
    }else{
        while (diviseur != 0 ) {
            if (number%diviseur == 0) {
                zero_during_bounce++
            }
            diviseur--;
        };
        if (zero_during_bounce == 2) {
            console.log(number + " est un nombre premier");
        } else {
            console.log(number + " n\'est pas un nombre premier");
        }
    }
}




