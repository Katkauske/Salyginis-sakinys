//Sukurkite funkciją, kuri patikrina ar skaičius yra lyginis. 
//Jeigu lyginis, ta funkcija grąžina true, jeigu nelyginis ta funkcija grąžina false.
//Panaudokite funkciją su vartotojo įvedamais duomenimis.
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau)

let x = +prompt("Iveskite skaiciu ir suzinosite ar jis lyginis");
alert (isvedimas(x));

function arLyginis(x) {
    if (x % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}
function isvedimas(x) {
    if (x == true) {
        return("Skaicius yra lyginis!");
    }
    else {
        return("Skaicius nera lyginis!");
    }
}