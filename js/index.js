const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

let blueCar = new Image()
blueCar.src = 'images/car.png'
blueCar.onload = () => {
    ctx.drawImage(blueCar, 150, canvas.height - 260, 158, 250)
}

let car = {
    x: 150,
    y: canvas.height-260,
    w: 158,
    h: 250,
} 

window.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
        car.x -= 50;
            break;

        case 'ArrowRight':
        car.y += 50;
        break
    } 
}