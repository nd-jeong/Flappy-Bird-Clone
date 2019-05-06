// Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let gap = 50;
let birdX = 10;
let birdY = 360;
let gravity = 2;
let pipeX = canvas.width;
let pipeTopY = 0;
let pipeBottomY = pipeX - gap;

const pipes = [];

const bird = new Image();
bird.src = 'images/bluebird-upflap.png';
const pipeTop = new Image();
pipeTop.src = 'images/pipe-green-top.png';
const pipeBottom = new Image();
pipeBottom.src = 'images/pipe-green-bottom.png';
const bg = new Image();
bg.src = 'images/background-night.png';

const drawMap = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bird, birdX, birdY);
    ctx.drawImage(pipeTop, pipeX-100, pipeTopY);
    ctx.drawImage(pipeBottom, pipeX-100, pipeBottomY);
    
    requestAnimationFrame(drawMap);
}

drawMap();

const flapBird = () => {
    document.addEventListener('click', function() {
        birdY -= 25;
    });
}