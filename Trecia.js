

let x = +prompt("Iveskite pirmaji skaiciu:")
let y= +prompt("Iveskite antraji skaiciu:")
alert(kurisDidesnis(x,y))

function kurisDidesnis(x,y) {
    if (x > y) {
    return ("-1");
}
    else if (x < y) {
        return ("1");
    }
    else (x == y) 
        return ("0");
    
}