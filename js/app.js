// Variables
let gap = 100;
let birdX = 10;
let birdY = 360;
let gravity = 2;

let 

const drawMap = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
}

drawMap();

const flapBird = () => {
    document.addEventListener('click', function() {
        birdY -= 25;
    });
}