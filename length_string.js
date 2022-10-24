// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


// Exemples d’utilisation :
// $> python exo.py “Hello world!”
// 12


// $> python exo.py
// erreur.


// $> python exo.py “Bonjour” “Aurevoir”
// erreur.

// $> python exo.py 10
// erreur.



const myArgs = process.argv.slice(2);
var length = 0;

if (!myArgs[0]) {
    console.log("erreur");
} else {
    if (myArgs[1]) {
        console.log("erreur");
    } else {
        var args = myArgs[0].split("")
        args.map(arg => {
            length++
        })
        console.log(length);
    }

}