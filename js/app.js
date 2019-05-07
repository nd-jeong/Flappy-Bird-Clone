// Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let gap = 650;
let birdX = 20;
let birdY = 360;
let gravity = 2;

let pipeX = canvas.width;
let pipeY = canvas.height - 300;
let pipeTopY = pipeY - gap;
let velocity = 2;

const pipes = [
    {x: pipeX - 100,
    y : pipeY}
];

// https://www.codeexplained.org/2018/08/create-flappy-bird-game-using-javascript.html
const bird = new Image();
bird.src = 'images/bluebird-upflap.png';
let pipeTop = new Image();
pipeTop.src = 'images/pipe-green-top.png';
const pipeBottom = new Image();
pipeBottom.src = 'images/pipe-green-bottom.png';
const bg = new Image();
bg.src = 'images/background-night.png';
const ground = new Image();
ground.src = 'images/base.png';
// --------------------------

let pipeWidth = pipeTop.width;
// https://www.youtube.com/watch?v=cXgA1d_E-jY

const drawMap = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bird, birdX, birdY);
    birdY += gravity;
    

    for (i = 0; i < pipes.length; i++) {
        ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y - gap);
        ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y);
        pipes[i].x -= velocity;
        if (pipes[i].x === 150) {
            console.log("new pipe")
            newPipe();
        }
        if (pipes[i].x + pipeWidth === 0) {
            pipes.shift();
            console.log(pipes);
        }
    }
    ctx.drawImage(ground, 0, 575, canvas.width, 100);
    gameOver();
    requestAnimationFrame(drawMap);
}

drawMap();

document.addEventListener('click', function() {
    console.log('click');
    birdY -= 50;
});


const newPipe = () => {
        newPipeY = (Math.floor(Math.random() * (500 - 200) + 200));
        newPipeTopY = newPipeY - gap;
        console.log(newPipeTopY);
        pipes.push({
            x: pipeX,
            y: newPipeY
        });
        ctx.drawImage(pipeTop, pipeX, pipes[i].y);
        ctx.drawImage(pipeBottom, pipeX, pipes[i].y);
        // debugger;
}

function gameOver() {
    if (birdY > canvas.height - ground.height) {
        console.log("ALTITUDE WARNING")
        gravity = 0;
    }
}