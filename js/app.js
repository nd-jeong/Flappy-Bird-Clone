// Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let gap = 650;
let birdX = 10;
let birdY = 360;
let gravity = 2;
let pipeX = canvas.width;
let pipeBottomY = 300;
let pipeTopY = pipeBottomY - gap;
let velocity = 2;

const pipes = [];

const bird = new Image();
bird.src = 'images/bluebird-upflap.png';
const pipeTop = new Image();
pipeTop.src = 'images/pipe-green-top.png';
const pipeBottom = new Image();
pipeBottom.src = 'images/pipe-green-bottom.png';
const bg = new Image();
bg.src = 'images/background-night.png';
const ground = new Image();
ground.src = 'images/base.png';

const drawMap = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(ground, 0, 575, canvas.width, 100);
    ctx.drawImage(bird, birdX, birdY);
    ctx.drawImage(pipeTop, pipeX-100, pipeTopY);
    ctx.drawImage(pipeBottom, pipeX-100, pipeBottomY);
    
    requestAnimationFrame(drawMap);
}

drawMap();

document.addEventListener('click', flapBird());

const flapBird = () => {
        birdY -= 25;
}

const newPipe = () => {
    pipeBottomY = (Math.floor(Math.random() * (500 - 200) + 200));
    ctx.drawImage(pipeBottom, pipeX, pipeBottomY);
    ctx.drawImage(pipeTop, pipeX, pipeTopY);
}