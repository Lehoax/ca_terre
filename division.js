// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


// Exemples d’utilisation :
// $> python exo.py 5 2
// résultat: 2
// reste: 1


// $> python exo.py 10 0
// erreur.


// $> python exo.py 3 5
// erreur.

const user_number_to_divided = parseInt(process.argv.slice(2)[0]);
const user_number_divider = parseInt(process.argv.slice(2)[1]);

//l'operateur ~~ convertit le nombre à virgule flottante en un entier.

if (user_number_divider > user_number_to_divided) {
    console.log("erreur");
} else {
    console.log("resulat: " + ~~(user_number_to_divided/user_number_divider));
    console.log("reste: " + user_number_to_divided%user_number_divider);
}


