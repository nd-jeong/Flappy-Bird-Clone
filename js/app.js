// Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const resetBtn = document.getElementById('reset-button');
const startBtn = document.getElementById('start-button');
const overlay = document.getElementById('overlay');
const insaneBtn = document.getElementById('insane-mode');
const insaneWarning = document.getElementById('insane-message');

let birdX = 50;
let birdY = 360;
let clicks = 0;
let pipeX = canvas.width;
let score = 0;
let gameOn = false;
let insaneMode = false;

// Normal-game variables
let pipeHeightDifference = 650;
let gravity = 2;
let flapLift = 50;
let pipeY = canvas.height - 300;
let pipeTopY = pipeY - pipeHeightDifference;
let gap = 115;
let scrollingSpeed = 2;
let velocity = .1;

const pipes = [
    {x: pipeX,
    y : pipeY}
];

// Insane-mode Variables
let insaneGravity = 3;
let insanePipeHeightDifference = 600;
let insaneScrollingSpeed = 3.5;

// https://www.codeexplained.org/2018/08/create-flappy-bird-game-using-javascript.html 

// https://github.com/sourabhv/FlapPyBird/tree/master/assets/sprites
// Normal-game images
const bird = new Image();
bird.src = 'images/bluebird-downflap.png';
let pipeTop = new Image();
pipeTop.src = 'images/pipe-green-top.png';
const pipeBottom = new Image();
pipeBottom.src = 'images/pipe-green-bottom.png';
const bg = new Image();
bg.src = 'images/background-day.png';
const ground = new Image();
ground.src = 'images/base.png';
const birdFlap = new Image();
birdFlap.src = 'images/bluebird-upflap.png';
const gameOverMessage = new Image();
gameOverMessage.src = 'images/gameover.png';

// --------------------------
// https://www.sounds-resource.com/mobile/flappybird/sound/5309/
const scoreSfx = new Audio();
scoreSfx.src = 'audio/sfx_point.wav';
const hitSfx = new Audio();
hitSfx.src = 'audio/sfx_hit.wav';
const flapSfx = new Audio();
flapSfx.src = 'audio/sfx_wing.wav';

let pipeWidth = pipeTop.width;
// https://www.youtube.com/watch?v=cXgA1d_E-jY

// Insane-game images
const insaneBird = new Image();
insaneBird.src = 'images/redbird-downflap.png';
const insanePipeTop = new Image();
insanePipeTop.src = 'images/pipe-red-top.png';
const insanePipeBottom = new Image();
insanePipeBottom.src = 'images/pipe-red-bottom.png';
const insaneBg = new Image();
insaneBg.src = 'images/background-night.png';
const insaneBirdFlap = new Image();
insaneBirdFlap.src = 'images/redbird-upflap.png';

startBtn.addEventListener('click', function() {
    console.log("start game");
    gameOn = true;
    if (gameOn === true) {
        window.setTimeout(startGame(), 3000);
        overlay.style.display = 'none';
    }
});

insaneBtn.addEventListener('click', function() {
    overlay.classList.toggle('inverted');
    if (insaneWarning.style.display === 'inline') {
        insaneWarning.style.display = 'none';
    } else {
        insaneWarning.style.display = 'inline';
    }
    insaneMode = true;
});

function startGame() {
    const drawMap = () => {
        if (insaneMode === false) {
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(bird, birdX, birdY);
            birdY += gravity;
    
            for (i = 0; i < pipes.length; i++) {
            ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y - pipeHeightDifference);
            ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y);
            pipes[i].x -= scrollingSpeed;
            if (pipes[i].x === 150) {
                newPipe();
            }
            if (pipes[i].x === -100) {
                pipes.shift();
            }
        }
            ctx.drawImage(ground, 0, 575, canvas.width, 100);
            ctx.font = "24px sans-serif";
            ctx.fillText(`Score: ${score}`, canvas.width - 280 , canvas.height - 600);
        }

        if (insaneMode === true) {
            ctx.drawImage(insaneBg, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(insaneBird, birdX, birdY);
            birdY += insaneGravity;
    
            for (i = 0; i < pipes.length; i++) {
            ctx.drawImage(insanePipeTop, pipes[i].x, pipes[i].y - insanePipeHeightDifference);
            ctx.drawImage(insanePipeBottom, pipes[i].x, pipes[i].y);
            pipes[i].x -= insaneScrollingSpeed;
            if (pipes[i].x === 200) {
                newPipe();
            }
            if (pipes[i].x <= -100) {
                pipes.shift();
            }
        }
            ctx.drawImage(ground, 0, 575, canvas.width, 100);
            ctx.font = "24px Comic Sans MS";
            ctx.fillText(`Score: ${score}`, canvas.width - 280 , canvas.height - 600);
        }
        increaseScore();
        gameOver();
        requestAnimationFrame(drawMap);
    }
    
    drawMap();
    
    document.addEventListener('keyup', function flapWings() {
        if (event.key === ' ') {
            birdY -= flapLift;
            flapSfx.play();
            if (clicks % 2 === 0) {
                bird.src = "images/bluebird-downflap.png";
            } else {
                bird.src = 'images/bluebird-upflap.png';
            }
            clicks++;  
        }
    });
    
    
    const newPipe = () => {
            pipeY = (Math.floor(Math.random() * (500 - 200) + 200));
            pipeTopY = pipeY - pipeHeightDifference;
            pipes.push({
                x: pipeX,
                y: pipeY
            });
            if (insaneMode === true) {
                ctx.drawImage(insanePipeTop, pipeX, pipes[i].y);
                ctx.drawImage(insanePipeBottom, pipeX, pipes[i].y);
            } else {
                ctx.drawImage(pipeTop, pipeX, pipes[i].y);
                ctx.drawImage(pipeBottom, pipeX, pipes[i].y);
            }
    }
    
    function gameOver() {
        if (birdY > canvas.height - ground.height) {
            gravity = 0;
            hitSfx.play();
            ctx.drawImage(gameOverMessage, canvas.width - 375, canvas.height - 550);
            document.removeEventListener('keyup', flapWings());
        }
        for (let k = 0; k < pipes.length; k++) {
            if (birdX + bird.width > pipes[k].x && birdX + bird.width < pipes[k].x + pipeTop.width) {
                if (birdY + bird.height > pipes[k].y || birdY + bird.height  < pipes[k].y - gap) {
                    hitSfx.play();
                    ctx.drawImage(gameOverMessage, canvas.width - 375, canvas.height - 550);
                    document.removeEventListener('keyup', flapWings());
                } 
            }
        }
        gameOn = false;
    }
    
    function increaseScore() {
        for (let j = 0; j < pipes.length; j++) {
            console.log(pipes[j].y);
            console.log(birdY);
            if (birdX === pipes[j].x) {
                console.log('score');
                score++;
                scoreSfx.play();
                increaseSpeed();
            }
        }
    }
    
    function increaseSpeed() {
        if (score % 5 === 0) {
            gravity += 0.25;
            insaneGravity += 0.5;
        }
    }
    
    resetBtn.addEventListener('click', function() {
        console.log('reset');
        window.location.reload();
    });
}

