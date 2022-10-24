// Créez un programme qui affiche le résultat d’une puissance.


// L’exposant ne pourra pas être négatif.


// Exemples d’utilisation :
// $> node exo.js 2 3
// 8

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

var nombre = process.argv.slice(2)[0];
var exposant = process.argv.slice(2)[1];
var increment = 0;
var resultat = 1;


if (!nombre || !exposant) {
    console.log("erreur");
} else {
    if (isNaN(nombre) || isNaN(exposant)){
        console.log("erreur");
    } else {
        if (exposant < 0) {
            console.log("erreur");
        }else{
            while (exposant != increment) {
                increment++;
                resultat *= nombre;
            }
            console.log(resultat);
        }    
    }
}



