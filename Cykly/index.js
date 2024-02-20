function generujRady() {

    let vysledek1 ="";
    for (let i = 1; i <= 10; i++) {
        vysledek1 += `${i} `;
    }

    let vysledek2 = "";
    for (let i = 2; i <= 25; i += 3) {
        vysledek2 += `${i} `;
    }

    let vysledek3 = "";
    for (let i = -15; i <=7; i += 4){
        vysledek3 += `${i} `;
    }

    let vysledek4 = "";
    for (let i = 20; i >= 10; i--) {
        vysledek4 += `${i} `;
    }

    let vysledek5= "";
    for(let i = 50; i >= 10; i -= 5){
        vysledek5 += `${i} `;
    }

    let vysledek6="";
    for(let i = 10; i >= -10; i -= 2){
        vysledek6 += `${i} `;
    }


    document.getElementById('radek1').innerText = 'Od 1 do 10 po 1: ' + vysledek1;
    document.getElementById('radek2').innerText = 'Od 2 do 25 po 3: ' + vysledek2;
    document.getElementById('radek3').innerText = 'Od -15 do +7 po 4: '+ vysledek3;
    document.getElementById('radek4').innerText = 'Od 20 do 10 po 1: '+ vysledek4;
    document.getElementById('radek5').innerText = 'Od 50 do 10 po 5: '+ vysledek5;
    document.getElementById('radek6').innerText = 'Od +10 do -10 po 2: '+ vysledek6;

}

function minMaxJedna() {

    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;

    let vysledek7="";
    for(let i = min; i <= max; i++) {
        vysledek7 += `${i} `;
    }

    document.getElementById('vysledek').innerText = vysledek7;

}

function minMaxKrok () {

    var min = document.getElementById("min2").value;
    var max = document.getElementById("max2").value;
    var krok = document.getElementById("krok").value;

    let vysledek8="";
    for(let i = parseInt(min); i <= parseInt(max); i += parseInt(krok)) {
        vysledek8 += `${i} `;
    }

    document.getElementById('vysledek2').innerText = vysledek8;

}

function zamenaMinMaxFunkce() {
    let min = parseInt(document.getElementById('min3').value);
    let max = parseInt(document.getElementById('max3').value);
    let krok = parseInt(document.getElementById('krok3').value);

    
    if (min > max) {
        [min, max] = [max, min]; //Prohozeni maxima a minima 
        krok = Math.abs(krok); 
    }

    let vysledek = "";
    if (krok > 0) {
        for (let i = min; i <= max; i += krok) {
            vysledek += `${i} `;
        }
    } else {
        for (let i = max; i >= min; i += krok) { 
            vysledek += `${i} `;
        }
    }

    document.getElementById('vysledek3').innerText = vysledek;
}


window.onload = generujRady;