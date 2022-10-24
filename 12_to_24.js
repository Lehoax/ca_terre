// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


// Exemples d’utilisation :
// $> ruby exo.rb 11:40PM
// 23:40

// Attention : midi et minuit.

var user_hour = process.argv.slice(2);
user_hour = user_hour[0].slice("")


var hours = user_hour[0]+user_hour[1];
var minutes =user_hour[3]+user_hour[4];
var morning_afternoon = user_hour[5]+user_hour[6];

var obj_hour = {"01": 13, "02": 14, "03": 15, "04": 16, "05": 17, "06": 18, "07": 19, "08": 20, "09": 21, "10": 22, "11": 23, "12":00}

if (morning_afternoon == 'PM') {
    console.log(obj_hour[hours]+":"+minutes);
} else {
    console.log(hours+":"+minutes);
}

