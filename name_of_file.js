// Créez un programme qui affiche son nom de fichier.


// Exemples d’utilisation :
// $> node exo.js
// exo.js

// $> node crevette.js
// crevette.js

var path = require('path');
var scriptName = path.basename(__filename);

console.log(scriptName);