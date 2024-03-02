function komprimace() {

    let text = document.getElementById('input').value;

    let textkomp = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    document.getElementById('vysledek').innerText = `Komprimovaný text: ${textkomp}`;
}