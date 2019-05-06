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
const ground = new Image();
ground.src = 'images/base.png';

const drawMap = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(ground, 0, 575, canvas.width, 100);
    ctx.drawImage(bird, birdX, birdY);
    ctx.drawImage(pipeTop, pipeX-100, -250);
    ctx.drawImage(pipeBottom, pipeX-100, 350);
    
    requestAnimationFrame(drawMap);
}

drawMap();

const flapBird = () => {
    document.addEventListener('click', function() {
        birdY -= 25;
    });
}

// const newPipe = () => {
//     pipeTopY = Math.floor(Math.random * )
//     ctx.drawImage(pipeTop, pipeX, )
// }