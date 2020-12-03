const CANVAS = document.getElementById("canvas")
const CONTEXT = canvas.getContext("2d")

window.onload = window.onresize = function() {
    CANVAS.width = document.body.clientWidth
    CANVAS.height = document.body.clientHeight;
    canvasW = CANVAS.width
    canvasH = CANVAS.height
}

let x = canvas.width/2
let y = canvas.height-30
let ballRadius = 30
let dx = 2
let dy = 2

function drawBall() {
    CONTEXT.beginPath()
    CONTEXT.arc(x, y, ballRadius, 0, Math.PI*2, false)
    CONTEXT.fillStyle = "#ddd"
    CONTEXT.fill()
    CONTEXT.closePath()
}

function draw() {
    CONTEXT.clearRect(0, 0, canvas.width, canvas.height)
    drawBall()
    
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy
    }

    x += dx
    y += dy
}
setInterval(draw, 20)