function showDayName () {

    var dayNum = document.getElementById("dayNum").value;
    var jazyk = document.getElementById("jazyk").value;

    let dayName ="";

    switch(jazyk){

        case "CJ":
            switch(dayNum) {
                case "1": dayName = "Pondělí"; break;
                case "2": dayName = "Úterý"; break;
                case "3": dayName = "Středa"; break;
                case "4": dayName = "Čtvrtek"; break;
                case "5": dayName = "Pátek"; break;
                case "6": dayName = "Sobota"; break;
                case "7": dayName = "Neděle"; break;
                default: dayName = "Neplatné číslo";
            }
break;
            case "AJ":
                switch(dayNum){
                    case "1": dayName = "Monday"; break;
                    case "2": dayName = "Tuesday"; break;
                    case "3": dayName = "Wednesday"; break;
                    case "4": dayName = "Thursday"; break;
                    case "5": dayName = "Friday"; break;
                    case "6": dayName = "Saturday"; break;
                    case "7": dayName = "Sunday"; break;
                    default: dayName = "Invalid number";
                }
break;
            case "NJ":
                switch(dayNum) {
                    case "1": dayName = "Montag"; break;
                    case "2": dayName = "Dienstag"; break;
                    case "3": dayName = "Mittwoch"; break;
                    case "4": dayName = "Donnerstag"; break;
                    case "5": dayName = "Freitag"; break;
                    case "6": dayName = "Samtag"; break;
                    case "7": dayName = "Sonntag"; break;
                    default: dayName = "Ungültige Nummer";
                }    
break;
            case "FJ":
                switch(dayNum) {
                    case "1": dayName = "Lundi"; break;
                    case "2": dayName = "Mardi"; break;
                    case "3": dayName = "Mercredi"; break;
                    case "4": dayName = "Jeudi"; break;
                    case "5": dayName = "Vendredi"; break;
                    case "6": dayName = "Samedi"; break;
                    case "7": dayName = "Semaine"; break;
                    default: dayName = "Numéro invalide";                    
                }
break;
            case "ES":
            switch(dayNumber) {
                case "1": dayName = "Lunes"; break;
                case "2": dayName = "Martes"; break;
                case "3": dayName = "Miércoles"; break;
                case "4": dayName = "Jueves"; break;
                case "5": dayName = "Viernes"; break;
                case "6": dayName = "Sábado"; break;
                case "7": dayName = "Domingo"; break;
                default: dayName = "Número de día inválido";
    }
break;
            default: dayName = "Invalid languange"

    }

    document.getElementById("dayName").innerText = dayName;

}