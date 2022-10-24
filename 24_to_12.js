// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


// Exemples d’utilisation :
// $> ruby exo.rb 23:40
// 11:40PM

// Attention : midi et minuit.

const user_hour = process.argv.slice(2).join();

function morningOrAfternoon(hour) {
if (hour == "00") {
    return "PM";

} else {
    if (hour <= 12) {
        return "AM";
    }else{
        return "PM";
    }
}
  
}

var arr_hour = user_hour.split("");
var obj_hour = {"13": 01, "14": 02, "15": 03, "16": 04, "17": 05, "18": 06, "19": 07, "20": 08, "21": 09, "22": 10, "23": 11, "00":12}

var hour = arr_hour[0]+arr_hour[1];
var minutes = arr_hour[3]+arr_hour[4];

var end = morningOrAfternoon(hour);

if (hour >= 13) {
    console.log(obj_hour[hour] + ":" + minutes + end);
} else {
    console.log(hour + ":" + minutes + end);
}


