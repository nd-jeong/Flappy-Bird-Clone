// Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let pipeHeightDifference = 650;
let birdX = 50;
let birdY = 360;
let gravity = 2;

let pipeX = canvas.width;
let pipeY = canvas.height - 300;
let pipeTopY = pipeY - pipeHeightDifference;
let gap = 115;
let velocity = 2;

let score = 0;

const pipes = [
    {x: pipeX,
    y : pipeY}
];

let gameOn = false;

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

const scoreSfx = new Audio();
scoreSfx.src = 'audio/sfx_point.wav';
const hitSfx = new Audio();
hitSfx.src = 'audio/sfx_hit.wav';
const flapSfx = new Audio();
flapSfx.src = 'audio/sfx_wing.wav';

let pipeWidth = pipeTop.width;
// https://www.youtube.com/watch?v=cXgA1d_E-jY

const drawMap = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bird, birdX, birdY);
    birdY += gravity;
    

    for (i = 0; i < pipes.length; i++) {
        ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y - pipeHeightDifference);
        ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y);
        pipes[i].x -= velocity;
        if (pipes[i].x === 150) {
            newPipe();
        }
        if (pipes[i].x - pipeWidth === 0) {
            pipes.shift();
        }
    }
    ctx.drawImage(ground, 0, 575, canvas.width, 100);
    ctx.font = "24px sans-serif";
    ctx.fillText(`Score: ${score}`, canvas.width - 125, canvas.height - 25);
    increaseScore();
    gameOver();
    requestAnimationFrame(drawMap);
}

drawMap();

document.addEventListener('click', function flapWings() {
    birdY -= 50;
    flapSfx.play();
});


const newPipe = () => {
        pipeY = (Math.floor(Math.random() * (500 - 200) + 200));
        pipeTopY = pipeY - pipeHeightDifference;
        pipes.push({
            x: pipeX,
            y: pipeY
        });
        ctx.drawImage(pipeTop, pipeX, pipes[i].y);
        ctx.drawImage(pipeBottom, pipeX, pipes[i].y);
        console.log(pipes[i].y)
}

function gameOver() {
    if (birdY > canvas.height - ground.height) {
        gravity = 0;
        hitSfx.play();
        document.removeEventListener('click', flapWings());
    }
    for (let k = 0; k < pipes.length; k++) {
        if (birdX + bird.width > pipes[k].x && birdX + bird.width < pipes[k].x + pipeTop.width) {
            if (birdY + bird.height > pipes[k].y || birdY + bird.height  < pipes[k].y - gap) {
                hitSfx.play();
                document.removeEventListener('click', flapWings());
            } 
        }
    }
}

function increaseScore() {
    for (let j = 0; j < pipes.length; j++) {
        if (birdX === pipes[j].x) {
            score++;
            scoreSfx.play();
            increaseSpeed();
        }
    }
}

function increaseSpeed() {
    if (score % 5 === 0) {
        // velocity += 0.5;
        gravity += 0.5;
        console.log(velocity);
    }
}

function gameReset() {
    document.getElementById();
    window.reload();
}