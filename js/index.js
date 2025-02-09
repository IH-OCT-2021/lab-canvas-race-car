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
    w: 325,
    h: 250,
} 

window.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
        car.x -= 50;
            break;

        case 'ArrowRight':
        car.x += 50;
        break
    } 
}
class Roadblock{
    constructor(x,y,w,h){
    this.x = Math.random()*canvas.width,
    this.y = -55,
    this.w = Math.random()*(canvas.width/2)+100,
    this.h = 50
    this.speedModifier = Math.random()*2
    }
}

let pointcounter = 0
const roadblocks = []

setInterval(() => {
    pointcounter+=100
roadblocks.push(new Roadblock())
}, 2500)

let int

function animate(){
int=window.requestAnimationFrame(animate)
ctx.clearRect(0,0,canvas.width,canvas.height)
ctx.fillStyle = 'purple'
for (let roadblock of roadblocks){
    ctx.fillRect(roadblock.x, roadblock.y +=(2*roadblock.speedModifier), roadblock.w, roadblock.h)
    detectCollision(car, roadblock)
}
console.log(roadblocks)
ctx.drawImage(blueCar, car.x, car.y, car.w, car.h)
document.querySelector('body p').innerHTML = pointcounter
}

animate()



function detectCollision(theCar, theObstacle) {
    if (theCar.x < theObstacle.x + theObstacle.w &&
        theCar.x + theCar.w > theObstacle.x &&
        theCar.y < theObstacle.y + theObstacle.h &&
        theCar.h + theCar.y > theObstacle.y) {
        console.log('collision')
        window.cancelAnimationFrame(int)
        // window.location.reload()
    }
    // collision detected!
  }