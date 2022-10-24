// Créez un programme qui affiche la racine carrée d’un entier positif.


// Exemples d’utilisation :
// $> node exo.js 9
// 3

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


var nombre = process.argv.slice(2)[0];


if (!nombre) {
    console.log("erreur");
} else {
    if (isNaN(nombre)){
        console.log("erreur");
    } else {
        if (nombre < 0) {
            console.log("erreur");
        }else{
            var a = nombre; 
            var x,
            x1 = a / 2;

            do {
            x = x1;
            x1 = (x + (a / x)) / 2;
            } while (x !== x1);
            console.log(x);
        }    
    }
}
