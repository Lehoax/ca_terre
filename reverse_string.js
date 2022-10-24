// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


// Exemples d’utilisation :
// $> node exo.js “Hello world!”
// !dlrow olleH


// $> node exo.js “lehciM”
// Michel

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
 
const arr_params = process.argv.slice(2);

var string = "";

arr_params.map(word => {
    string = string + word + " ";
});

var arr_str = string.split('');

var lenght_string = string.length - 1;

var increment = -1;

while (increment != lenght_string) {
    process.stdout.write(arr_str[lenght_string]);
    lenght_string--;
};
console.log();
