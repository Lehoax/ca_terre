// Créez un programme qui détermine si une liste d’entiers est triée ou pas.


// Exemples d’utilisation :
// $> ruby exo.rb 9 8 3
// Pas triée !

// $> ruby exo.rb 3 8 9 12
// Triée !

// $> ruby exo.rb “Salut”
// erreur.

const user_numbers = process.argv.slice(2);

var old_number = user_numbers[0];
var round = 0;

for (let index = 0; index < user_numbers.length; index++) {
    if (!isNaN(user_numbers[index])) {
        if (old_number <= parseInt(user_numbers[index])) {
            old_number = user_numbers[index]
            round++;
        }else{
            console.log("Pas triée !");
            break;
        }
    }else{
        console.log("erreur");
        break;
    }
  
}
if (round == user_numbers.length) {
    console.log("Triée !");
}