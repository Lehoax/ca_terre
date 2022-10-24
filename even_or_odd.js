// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


// Exemples d’utilisation :
// $> ruby exo.rb 2
// pair

// $> ruby exo.rb 5
// impair


// $> ruby exo.rb Bonjour
// Tu ne me la mettras pas à l’envers.

// $> ruby exo.rb
// Tu ne me la mettras pas à l’envers.


// Attention : gérez aussi les entiers négatifs.

const user_number = process.argv.slice(2)[0];

if (isNaN(user_number) == true) {
    console.log("ceci n\'est pas un nombre");
}else {
    if (user_number%2 == 0) {
        console.log("nombre pair");
    }else {
        console.log("nombre impair");
    }
}
