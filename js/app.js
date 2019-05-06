// Variables
let gap = 100;
let birdX = 10;
let birdY = 360;
let gravity = 2;

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
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bird, birdX, birdY);
    ctx.drawImage(pipeTop, 100, 0, 100, 350);
    ctx.drawImage(pipeBottom, 100, 500, 100, 350);
    
    requestAnimationFrame(drawMap);
}

drawMap();

const flapBird = () => {
    document.addEventListener('click', function() {
        birdY -= 25;
    });
}