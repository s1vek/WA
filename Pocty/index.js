function calculateTrip() {

    var delkaTrasy = document.getElementById("delkaTrasy").value;
    var spotreba = document.getElementById("spotreba").value;
    var cenaPHM = document.getElementById("cenaPHM").value;
    var pocetOsob = document.getElementById("pocetOsob").value;

    var celkovaSpotreba = (delkaTrasy / 100) * spotreba;
    var celkovaCena = celkovaSpotreba * cenaPHM;
    var cenaNaOsobu = celkovaCena / pocetOsob;

    document.getElementById("result").innerHTML = "Celková cena trasy: " + celkovaCena.toFixed(2) + " Kč<br>" + "Celková spotřeba PHM: " + celkovaSpotreba.toFixed(2) + " l<br>" + "Cena na osobu: " + cenaNaOsobu.toFixed(2) + " Kč";
        

}