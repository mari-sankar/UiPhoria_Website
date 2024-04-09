const mainCard = document.getElementById('mainCard');
const leftCard = document.getElementById('leftCard');
const rightCard = document.getElementById('rightCard');

function moveClockwise() {
    const temp = rightCard.innerHTML;
    rightCard.innerHTML = mainCard.innerHTML;
    mainCard.innerHTML = leftCard.innerHTML;
    leftCard.innerHTML = temp;
}

function moveAntiClockwise() {
    const temp = leftCard.innerHTML;
    leftCard.innerHTML = mainCard.innerHTML;
    mainCard.innerHTML = rightCard.innerHTML;
    rightCard.innerHTML = temp;
}
