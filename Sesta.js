//Sukurkite funkciją, kuri gauna tris skaičius ir suranda, kuris iš jų yra didesnis.
//Funkcija grąžina 0 jeigu jie visi vienodi, 1 jeigu pirmas didžiausias, 
//2 jeigu antras didžiausias, 3 jeigu trečias didžiausias. Panaudokite funkciją su vartotojo įvedamais duomenimis. 
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau)
alert("Suraskime didziausia skaiciu!")
let a = +prompt("Pirmas skaicius:")
let b = +prompt("Antrasis skaicius:")
let c = +prompt("Treciasis skaicius:")
alert("Ieskomas didziausias skaicius...")
alert(isvedimas(kurisDidesnis(a,b,c)))

function kurisDidesnis(a,b,c){
    if (a>b && a>c){
        return 1;
    }
    else if (b>a && b>c){
        return 2;
    }
    else if ( c>a && c>b){
        return 3;
    }
    else (a == b == c) 
        return 0;
    
}
function isvedimas(){
    if (a>b && a>c){
        return("Skaicius " + a + " yra didziausias!")
    }
    else if (b>a && b>c){
        return("Skaicius " + b + " yra didziausias!")
    }
    else if (c>a && c>b){
        return("Skaicius " + c + " yra didziausias!")
    }
    else  (a == b == c)
        return ("Visi skaiciai yra lygus!")
    
}