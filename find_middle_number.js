// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.


// Exemples d’utilisation :
// $> ruby exo.rb 11 40 34
// 34

// $> ruby exo.rb 2 1 3
// 2

// $> ruby exo.rb 2 2 2
// erreur.
const user_numbers = process.argv.slice(2);

const nb_one = user_numbers[0];
const nb_two = user_numbers[1];
const nb_three = user_numbers[2];


var smaller = 0;
var middle = 0;
var higher = 0;

if (nb_one == nb_two && nb_two == nb_three && nb_one == nb_three) {
    console.log("erreur");
} else {
    if (nb_one > nb_two && nb_one > nb_three) {
        higher = nb_one;
        if (nb_two > nb_three) {
            middle = nb_two;
            smaller = nb_three;
        } else {
            middle = nb_three;
            smaller = nb_two;
        }
    }else if (nb_two > nb_one && nb_two > nb_three){
        higher = nb_two;
        if (nb_one > nb_three) {
            middle = nb_one;
            smaller = nb_three;
        } else {
            middle = nb_three;
            smaller = nb_one;
        }
    }else if (nb_three > nb_one && nb_three > nb_two){
        higher = nb_three;
        if (nb_one > nb_two) {
            middle = nb_one;
            smaller = nb_two;
        } else {
            middle = nb_two;
            smaller = nb_one;
        }
    }
    console.log(middle);
}