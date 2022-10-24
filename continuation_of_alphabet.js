// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


// Exemples d’utilisation :
// $> python exo.py n
// nopqrstuvwxyz
// $>


// Attention : votre programme devra utiliser une boucle.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const user_letter = process.argv.slice(2);

var index_user_letter = alphabet.indexOf(user_letter.toString())

console.log("\n");

while (index_user_letter != 26) {
    process.stdout.write(alphabet[index_user_letter]);
    index_user_letter++;
}

console.log("\n");




