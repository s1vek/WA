

function zkontrolujRovnost() {

    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const C = parseFloat(document.getElementById('C').value);

    if (jeSlozitelny(A, B, C)) {

        document.getElementById('vysledek').innerText = "1";

    } else {

        document.getElementById('vysledek').innerText = "0";

    }
}

function jeSlozitelny(A, B, C) {
    
    return (A + B > C) && (A + C > B) && (B + C > A);
}