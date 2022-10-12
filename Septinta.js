//Sukurkite programą, kuri nuskaito tris duomenis iš vartotojo. 
//Pirmasis bus veiksmo pasirinkimas, sekantys du bus skaičiais su kuriais atlikti tą veiksmą. 
//Jei vartotojas į pirmą duomenį įrašo "sudėtis", tai reikės sekančius du skaičius sudėti,
//jeigu "atimtis" - atimti, jeigu "daugyba" - sudauginti, jeigu "dalyba" - padalinti.
//Sukurkite funkciją, kurui gauna tris kintamuosius - pirmas žodis (sudėtis, daugyba, dalyba, atimtis) ir du skaičius. 
//Pagal žodį atliktų atitinkamą veiksmą ir grąžintų rezultatą. Panaudokite funkciją su vartotojo įvedamais duomenimis.
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau)
alert("Pasirinkite veiksma, kuri norite atlikti:");
let veiksmas = prompt ( "Laukelyje irasykite veiksma: 1.Sudetis 2.Atimtis 3.Daugyba 4.Dalyba");
let sk1 = +prompt ("Irasykite pirmaji skaiciu, su kuriuo norite atlikti veiksma:");
let sk2 = +prompt ("Irasykite antraji skaiciu, su kuriuo norite atlikti veiksma:");
alert(skaiciavimas(veiksmas))


function skaiciavimas(veiksmas){
    if (veiksmas == ("sudetis")){
        return (("Veiksmo atsakymas yra: ") + (sk1 + sk2));
    }
    else if (veiksmas == ("atimtis")){
        return (("Veiksmo atsakymas yra: ") + (sk1 - sk2));
    }
    else if (veiksmas == ("daugyba")){
        return (("Veiksmo atsakymas yra: ") + (sk1 * sk2));
    }
    else  {
        return (("Veiksmo atsakymas yra: ") + (sk1 / sk2));
    }
    
}

