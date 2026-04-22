const boxContainer = document.querySelector('.box-container')
const circle = document.querySelector('.circle')

let y = 15;
let dir = 1;
let move = null;

boxContainer.onmouseenter = () => {
    if (move) return; 

    move = setInterval(() => {
        y += 5 * dir;

        if (y >= 215 || y <= 15) dir *= -1;

        circle.style.marginTop = y + 'px';
    }, 20);
};

boxContainer.onmouseleave = () => {
    clearInterval(move);
    move = null;
};