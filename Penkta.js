//Sukurkite funkciją, kuri gauna tris trikampio kraštines(a, b, c) ir patikrina ar trikampis yra statusis. 
//Trikampis yra statusis, jei jis tenkina šią sąlygą: c^2 = a^2 + b^2.
//Darykite prielaidą, kad funkcija visada gauna kraštines surikiuotas pagal jų dydį,
//t.y., a mažiausia, c didžiausia arba jos lygios. Funkcija grąžina true arba false. 
//Panaudokite funkciją su vartotojo įvedamais duomenimis. 
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau).
alert ("Patikrinkime ar trikampis yra statusis!");
let a = +prompt("Iveskite trikampio a krastines duomenis");
let b = +prompt("Iveskite trikampio b krastines duomenis");
let c = +prompt("Iveskite trikampio c krastines duomenis");
alert(isvedimas(arStatus(a,b,c)))



function arStatus(a,b,c) {
    if ((c * c) == (a * a) + (b * b)){
    return true;
    }
    else {
        return false;
    }
}
function isvedimas(a,b,c) {
    if (a,b,c == true) {
        return ("Trikampis yra statusis!")
    }
    else {
        return ("Trikampis NERA statusis!")
    }
}
    