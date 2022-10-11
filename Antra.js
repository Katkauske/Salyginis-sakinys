

let x = +prompt("Iveskite skaiciu ir suzinosite ar jis yra penketo kartotinis:")
alert(rezultatas(arPenketoKartotinis(x)))


function arPenketoKartotinis(x) {
    if (x % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function rezultatas(x) {
    if (x == true) {
        return ("Skaicius yra penketo kartotinis!")
    }
    else {
        return ("Skaicius nera penketo kartotinis!")
    }
}